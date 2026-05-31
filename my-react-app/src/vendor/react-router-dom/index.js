import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const RouterContext = createContext(null);
const ParamsContext = createContext({});

const normalizePath = (path) => {
  if (!path) return '/';
  const clean = path.split('?')[0].split('#')[0];
  return clean.length > 1 ? clean.replace(/\/$/, '') : '/';
};

const compilePath = (path) => {
  if (path === '*') return { regex: /^.*$/, keys: [] };
  const keys = [];
  const pattern = normalizePath(path)
    .split('/')
    .map((part) => {
      if (part.startsWith(':')) {
        keys.push(part.slice(1));
        return '([^/]+)';
      }
      return part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    })
    .join('/');
  return { regex: new RegExp(`^${pattern}$`), keys };
};

const matchPath = (routePath, pathname) => {
  const { regex, keys } = compilePath(routePath);
  const match = normalizePath(pathname).match(regex);
  if (!match) return null;
  return keys.reduce((params, key, index) => ({ ...params, [key]: decodeURIComponent(match[index + 1]) }), {});
};

function navigateTo(to, replace = false) {
  if (replace) {
    window.history.replaceState({}, '', to);
  } else {
    window.history.pushState({}, '', to);
  }
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export function BrowserRouter({ children }) {
  const [location, setLocation] = useState(() => ({ ...window.location }));

  useEffect(() => {
    const handlePopState = () => setLocation({ ...window.location });
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const value = useMemo(() => ({ location, navigate: navigateTo }), [location]);
  return React.createElement(RouterContext.Provider, { value }, children);
}

export function Routes({ children }) {
  const router = useContext(RouterContext);
  const routes = React.Children.toArray(children);

  for (const route of routes) {
    if (!React.isValidElement(route)) continue;
    const params = matchPath(route.props.path, router.location.pathname);
    if (params) {
      return React.createElement(ParamsContext.Provider, { value: params }, route.props.element);
    }
  }

  return null;
}

export function Route() {
  return null;
}

export function Link({ to, replace = false, onClick, children, ...props }) {
  const href = typeof to === 'string' ? to : '/';

  const handleClick = (event) => {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.altKey || event.ctrlKey || event.shiftKey || props.target) {
      return;
    }
    event.preventDefault();
    navigateTo(href, replace);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return React.createElement('a', { href, onClick: handleClick, ...props }, children);
}

export function NavLink({ className = '', to, children, ...props }) {
  const { location } = useContext(RouterContext);
  const isActive = normalizePath(location.pathname) === normalizePath(to);
  const resolvedClassName = typeof className === 'function' ? className({ isActive }) : `${className} ${isActive ? 'active' : ''}`.trim();

  return React.createElement(Link, { to, className: resolvedClassName, ...props }, children);
}

export function useParams() {
  return useContext(ParamsContext);
}

export function useNavigate() {
  return navigateTo;
}

export function useLocation() {
  const router = useContext(RouterContext);
  return router.location;
}
