import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{ 
        padding: '50px', 
        textAlign: 'center', 
        background: '#000', 
        color: '#fff',
        minHeight: '100vh'
      }}>
        <h1>Torop Auto работает! 🚗</h1>
        <p>Если вы видите этот текст, значит React работает корректно.</p>
        <button 
          style={{
            background: '#4cc0e7',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            marginTop: '20px'
          }}
          onClick={() => alert('React работает!')}
        >
          Тестовая кнопка
        </button>
      </div>
    </div>
  );
}

export default App;