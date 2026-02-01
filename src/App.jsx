import React, { useState, useEffect } from 'react';

export default function ValentineProposal() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [budgetInput, setBudgetInput] = useState('');
  const [selectedOutfit, setSelectedOutfit] = useState(null);

  useEffect(() => {
    addFloatingHearts();
  }, []);

  const createFlowerBurst = (x, y, count = 20) => {
    const flowers = ['🌹', '🌸', '🌺', '🌻', '🌷', '💐', '🏵️'];
    
    for (let i = 0; i < count; i++) {
      const flower = document.createElement('div');
      flower.className = 'flower-burst';
      flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
      
      const angle = (i / count) * Math.PI * 2;
      const distance = 150 + Math.random() * 100;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;
      
      flower.style.left = x + 'px';
      flower.style.top = y + 'px';
      flower.style.setProperty('--tx', tx + 'px');
      flower.style.setProperty('--ty', ty + 'px');
      
      document.body.appendChild(flower);
      
      setTimeout(() => {
        flower.classList.add('animate');
      }, 10);
      
      setTimeout(() => flower.remove(), 1600);
    }
  };

  const handleYes = (event) => {
    const rect = event.target.getBoundingClientRect();
    createFlowerBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 30);
    
    setTimeout(() => {
      setCurrentPage(2);
    }, 400);
  };

  const handleNo = () => {
    alert('I know you\'ll come around! 😉 Click Yes to continue!');
  };

  const submitBudget = (event) => {
    const amount = budgetInput.trim();
    
    if (!amount || parseFloat(amount) < 0) {
      alert('Please enter a valid amount! 💕');
      return;
    }
    
    setSelectedBudget(amount);
    
    const rect = event.target.getBoundingClientRect();
    createFlowerBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 15);
  };

  const selectOutfit = (choice, event) => {
    setSelectedOutfit(choice);
    
    const rect = event.target.getBoundingClientRect();
    createFlowerBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 15);
  };

  const finishPage = (event) => {
    const rect = event.target.getBoundingClientRect();
    createFlowerBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 40);
    
    setTimeout(() => {
      let message = `Perfect Stacy! I've set aside $${selectedBudget} for our amazing date night!\n\n`;
      message += selectedOutfit 
        ? `I'm so excited you're getting a new outfit! You're going to look absolutely stunning!\n\n`
        : `That's wonderful! You're beautiful just the way you are!\n\n`;
      message += `I can't wait to make this the most special night ever with you!\n\nWith all my love,\nRon 💕`;
      
      alert(message);
    }, 300);
  };

  const addFloatingHearts = () => {
    for (let i = 0; i < 6; i++) {
      const heart = document.createElement('div');
      heart.className = 'floating-heart';
      heart.textContent = '❤️';
      heart.style.left = Math.random() * 100 + '%';
      heart.style.top = Math.random() * 100 + '%';
      heart.style.animationDelay = Math.random() * 5 + 's';
      heart.style.animation = `float-heart ${5 + Math.random() * 3}s ease-in-out infinite`;
      document.body.appendChild(heart);
    }
  };

  return (
    <div className="valentine-app">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Lora:wght@400;500;600&display=swap');

        :root {
          --red: #E91E63;
          --dark-red: #C2185B;
          --purple: #9C27B0;
          --dark-purple: #6A1B9A;
          --light-purple: #E1BEE7;
          --cream: #FEF7F4;
          --text-dark: #3E2723;
        }

        html, body {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        body {
          font-family: 'Lora', serif;
          background: linear-gradient(135deg, var(--cream) 0%, #F5E6EB 100%);
          color: var(--text-dark);
        }

        .valentine-app {
          width: 100vw;
          height: 100vh;
          position: relative;
        }

        .background-animation {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
          mix-blend-mode: screen;
        }

        .orb-1 {
          width: 300px;
          height: 300px;
          background: var(--red);
          top: -100px;
          right: -100px;
          animation: float1 8s ease-in-out infinite;
        }

        .orb-2 {
          width: 250px;
          height: 250px;
          background: var(--purple);
          bottom: -80px;
          left: -80px;
          animation: float2 10s ease-in-out infinite;
        }

        .orb-3 {
          width: 200px;
          height: 200px;
          background: var(--red);
          bottom: 200px;
          right: 50px;
          animation: float3 12s ease-in-out infinite;
        }

        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, 30px); }
        }

        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(40px, -40px); }
        }

        @keyframes float3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, 30px); }
        }

        .page {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .page.active {
          opacity: 1;
          pointer-events: auto;
        }

        .container {
          text-align: center;
          max-width: 600px;
          animation: slideIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .question-text {
          font-family: 'Cinzel', serif;
          font-size: 3.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--dark-red) 0%, var(--purple) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          letter-spacing: 2px;
        }

        .subtitle {
          font-size: 1.4rem;
          color: var(--dark-purple);
          font-weight: 500;
          margin-bottom: 3rem;
          opacity: 0.9;
        }

        .button-group {
          display: flex;
          gap: 2rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 2rem;
        }

        button {
          font-family: 'Lora', serif;
          padding: 1.1rem 2.8rem;
          font-size: 1.1rem;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          letter-spacing: 1px;
          text-transform: uppercase;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .yes-btn {
          background: linear-gradient(135deg, var(--red) 0%, var(--dark-red) 100%);
          color: white;
        }

        .yes-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(233, 30, 99, 0.4);
        }

        .yes-btn:active {
          transform: translateY(-2px);
        }

        .no-btn {
          background: rgba(255, 255, 255, 0.7);
          color: var(--dark-purple);
          border: 2px solid var(--purple);
          backdrop-filter: blur(10px);
        }

        .no-btn:hover {
          background: rgba(255, 255, 255, 0.95);
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(156, 39, 176, 0.2);
        }

        .flower-burst {
          position: fixed;
          pointer-events: none;
          z-index: 100;
          font-size: 2.5rem;
          will-change: transform, opacity;
        }

        @keyframes burst {
          0% {
            opacity: 1;
            transform: translate(0, 0) scale(1) rotate(0deg);
          }
          100% {
            opacity: 0;
            transform: translate(var(--tx), var(--ty)) scale(0.3) rotate(360deg);
          }
        }

        .flower-burst.animate {
          animation: burst 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .celebration-title {
          font-family: 'Cinzel', serif;
          font-size: 2.8rem;
          background: linear-gradient(135deg, var(--dark-red) 0%, var(--purple) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .celebration-subtitle {
          font-size: 1.2rem;
          color: var(--dark-purple);
          margin-bottom: 3rem;
          font-weight: 500;
        }

        .question-section {
          margin: 2rem 0;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(15px);
          border-radius: 20px;
          border: 2px solid rgba(233, 30, 99, 0.1);
          animation: slideIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .section-title {
          font-family: 'Cinzel', serif;
          font-size: 1.5rem;
          color: var(--dark-purple);
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .input-group {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        input[type="number"] {
          padding: 1rem 1.5rem;
          font-size: 1.1rem;
          border: 2px solid var(--purple);
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.8);
          color: var(--text-dark);
          font-family: 'Lora', serif;
          min-width: 200px;
          transition: all 0.3s ease;
        }

        input[type="number"]:focus {
          outline: none;
          border-color: var(--red);
          box-shadow: 0 0 15px rgba(233, 30, 99, 0.3);
          background: white;
        }

        input[type="number"]::placeholder {
          color: rgba(156, 39, 176, 0.5);
        }

        .input-btn {
          background: linear-gradient(135deg, var(--purple) 0%, var(--dark-purple) 100%);
          color: white;
          padding: 1rem 2rem;
          font-size: 1rem;
        }

        .input-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(156, 39, 176, 0.4);
        }

        .outfit-buttons {
          display: flex;
          gap: 2rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .outfit-btn {
          background: rgba(255, 255, 255, 0.7);
          color: var(--dark-purple);
          border: 2px solid var(--purple);
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          backdrop-filter: blur(10px);
        }

        .outfit-btn:hover {
          border-color: var(--red);
          background: rgba(255, 255, 255, 0.95);
          transform: translateY(-3px);
        }

        .outfit-btn.selected {
          background: linear-gradient(135deg, var(--red) 0%, var(--dark-red) 100%);
          color: white;
          border-color: transparent;
        }

        .final-message {
          font-size: 1.1rem;
          color: var(--dark-purple);
          line-height: 1.8;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        .signature {
          font-size: 1.2rem;
          color: var(--dark-red);
          margin-bottom: 2rem;
          font-style: italic;
          font-weight: 500;
        }

        .signature strong {
          font-size: 1.5rem;
          font-style: normal;
        }

        .confirm-btn {
          background: linear-gradient(135deg, var(--red) 0%, var(--dark-red) 100%);
          color: white;
        }

        .confirm-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(233, 30, 99, 0.4);
        }

        .floating-heart {
          position: fixed;
          font-size: 1.5rem;
          pointer-events: none;
          opacity: 0.3;
          will-change: transform;
        }

        @keyframes float-heart {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-40px) translateX(0); }
          75% { transform: translateY(-20px) translateX(-10px); }
        }

        @media (max-width: 768px) {
          .question-text {
            font-size: 2.5rem;
          }

          .button-group {
            flex-direction: column;
            gap: 1rem;
          }

          button {
            width: 100%;
          }

          .celebration-title {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .question-text {
            font-size: 2rem;
          }

          .subtitle {
            font-size: 1.1rem;
          }

          .container {
            max-width: 90vw;
          }
        }
      `}</style>

      {/* Background Animation */}
      <div className="background-animation">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Page 1: Valentine Question */}
      <div className={`page ${currentPage === 1 ? 'active' : ''}`}>
        <div className="container">
          <h1 className="question-text">Stacy</h1>
          <p className="subtitle">Will you be my Valentine?</p>
          <div className="button-group">
            <button className="yes-btn" onClick={handleYes}>Yes! 💕</button>
            <button className="no-btn" onClick={handleNo}>Maybe Later</button>
          </div>
        </div>
      </div>

      {/* Page 2: Date Preparation */}
      <div className={`page ${currentPage === 2 ? 'active' : ''}`}>
        <div className="container">
          <h1 className="celebration-title">You said YES! 💫</h1>
          <p className="celebration-subtitle">Stacy, you are the most beautiful girl I've ever met. I can't wait to spend this special night with you!</p>
          
          {/* Budget Question */}
          {selectedBudget === null && (
            <div className="question-section">
              <h2 className="section-title">How much do you need for the date night? 💰</h2>
              <div className="input-group">
                <input 
                  type="number" 
                  placeholder="Enter amount" 
                  min="0" 
                  step="any"
                  value={budgetInput}
                  onChange={(e) => setBudgetInput(e.target.value)}
                />
                <button className="input-btn" onClick={submitBudget}>Confirm Amount</button>
              </div>
            </div>
          )}

          {/* Outfit Question */}
          {selectedBudget !== null && selectedOutfit === null && (
            <div className="question-section">
              <h2 className="section-title">Would you like to buy a new outfit for our date? 👗</h2>
              <div className="outfit-buttons">
                <button 
                  className={`outfit-btn ${selectedOutfit === true ? 'selected' : ''}`}
                  onClick={(e) => selectOutfit(true, e)}
                >
                  Yes! 🛍️
                </button>
                <button 
                  className={`outfit-btn ${selectedOutfit === false ? 'selected' : ''}`}
                  onClick={(e) => selectOutfit(false, e)}
                >
                  I'm good 😊
                </button>
              </div>
            </div>
          )}

          {/* Final Message */}
          {selectedBudget !== null && selectedOutfit !== null && (
            <div className="question-section">
              <h2 className="section-title">Get Ready for the Best Night Ever! ✨</h2>
              <p className="final-message">I can't wait to see your beautiful smile and spend this magical evening with you. You deserve all the love and happiness in the world, Stacy.</p>
              <p className="signature">With all my love,<br /><strong>Ron</strong> 💕</p>
              <button className="confirm-btn" onClick={finishPage}>I'm Ready! 💘</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}