export const appData = {
  services: [
    {
      icon: 'bx bxs-wrench',
      titleKey: 'service1-title',
      textKey: 'service1-text'
    },
    {
      icon: 'bx bxs-car-mechanic',
      titleKey: 'service2-title',
      textKey: 'service2-text'
    },
    {
      icon: 'bx bxs-paint',
      titleKey: 'service3-title',
      textKey: 'service3-text'
    },
    {
      icon: 'bx bxs-car-battery',
      titleKey: 'service4-title',
      textKey: 'service4-text'
    },
    {
      icon: 'bx bxs-cog',
      titleKey: 'service5-title',
      textKey: 'service5-text'
    },
    {
      icon: 'bx bxs-tachometer',
      titleKey: 'service6-title',
      textKey: 'service6-text'
    }
  ],
  features: [
    'feature1', 'feature2', 'feature3', 'feature4', 'feature5', 'feature6'
  ],
  cars: [
    {
      image: '/images/pic3.jpg',
      badgeKey: 'car-badge1',
      title: 'Hyundai i30 1.6 CRDi Automatik',
      textKey: 'car1-text',
      year: '2020',
      price: '€18.500',
      fuel: 'Diesel',
      transmission: 'Automatik',
      seats: '5 Sitze'
    },
    {
      image: '/images/pic4.jpg',
      badgeKey: 'car-badge2',
      title: 'BMW 330i Limousine (G20)',
      textKey: 'car2-text',
      year: '2019',
      price: '€35.900',
      fuel: 'Benzin',
      transmission: 'Automatik',
      seats: '5 Sitze'
    },
    {
      image: '/images/pic5.jpg',
      badgeKey: 'car-badge3',
      title: 'Ford B-Max 1.0 EcoBoost',
      textKey: 'car3-text',
      year: '2013',
      price: '€8.900',
      fuel: 'Benzin',
      transmission: 'Manuell',
      seats: '5 Sitze'
    }
  ],
  testimonials: [
    {
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      textKey: 'testimonial1-text',
      name: 'Катя Авраменко',
      reviews: '4 отзыва',
      rating: 5,
      dateKey: 'month-ago'
    },
    {
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      textKey: 'testimonial2-text',
      name: 'Юлия Герман',
      reviews: '2 отзыва',
      rating: 5,
      dateKey: 'month-ago'
    },
    {
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      textKey: 'testimonial3-text',
      name: 'Luise',
      reviews: '14 отзывов',
      rating: 5,
      dateKey: 'month-ago'
    }
  ],
  contactDetails: [
    {
      icon: 'bx bx-map',
      titleKey: 'address-title',
      textKey: 'address-text'
    },
    {
      icon: 'bx bx-phone',
      titleKey: 'phone-title',
      text: '+49 151 46327 317'
    },
    {
      icon: 'bx bx-envelope',
      titleKey: 'email-title',
      text: 'info@toropauto.de'
    },
    {
      icon: 'bx bx-time',
      titleKey: 'hours-title',
      textKey: 'hours-text'
    }
  ],
  footerLinks: [
    {
      titleKey: 'footer-services-title',
      links: [
        { textKey: 'footer-service1' },
        { textKey: 'footer-service2' },
        { textKey: 'footer-service3' },
        { textKey: 'footer-service4' },
        { textKey: 'footer-service5' }
      ]
    },
    {
      titleKey: 'footer-contact-title',
      links: [
        { icon: 'bx bx-map', textKey: 'footer-address' },
        { icon: 'bx bx-phone', text: '+49 151 46327 317' },
        { icon: 'bx bx-envelope', text: 'info@toropauto.de' },
        { icon: 'bx bx-time', textKey: 'footer-hours' }
      ]
    }
  ]
};