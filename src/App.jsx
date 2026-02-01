/**
 * Valentine's Invitation Script
 * Name: Hi Stacy! 💕
 */

import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    // Inject styles
    const styleSheet = document.createElement("style")
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet)

    // Initialize app
    const app = new ValentineInvitation()
    
    // Expose handlers to window
    window.handleYes = () => app.handleYes()
    window.handleNo = () => alert("Are you sure? Think about it! 😊")

    return () => {
      // Cleanup
      document.head.removeChild(styleSheet)
    }
  }, [])

  return (
    <div className="container">
      <h1>Hi Stacy! 💕</h1>
      <p className="message">Will you be my Valentine?</p>
      <div className="button-group">
        <button className="yes-btn" onClick={() => window.handleYes()}>YES! ❤️</button>
        <button className="no-btn" onClick={() => window.handleNo()}>Not Sure</button>
      </div>
      <div id="successMessage" className="success-message">
        <h2>You're Amazing! <span className="heart">❤️</span></h2>
        <p>I'm so happy you said yes!</p>
        <p>Can't wait to celebrate with you! 🌹</p>
      </div>
    </div>
  )
}

// --- Styles ---
const styles = `
    body {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(135deg, #ff1493 0%, #c71585 50%, #8b008b 100%);
        font-family: 'Arial', sans-serif;
        overflow: hidden;
        margin: 0;
    }
    
    body::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at 20% 50%, rgba(255, 105, 180, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 80% 80%, rgba(199, 21, 133, 0.1) 0%, transparent 50%);
        pointer-events: none;
        z-index: 1;
    }
    
    .container { 
        text-align: center; 
        z-index: 20; 
        position: relative; 
    }
    
    h1 { 
        color: white; 
        font-size: 2.5em; 
        margin-bottom: 20px; 
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3); 
        animation: fadeIn 1s ease-in;
    }
    
    .message { 
        color: white; 
        font-size: 1.3em; 
        margin-bottom: 40px; 
        text-shadow: 1px 1px 3px rgba(0,0,0,0.3); 
        animation: fadeIn 1.5s ease-in;
    }
    
    .button-group { 
        display: flex; 
        gap: 20px; 
        justify-content: center; 
        animation: slideUp 0.8s ease-out 2s both;
    }
    
    button { 
        padding: 15px 40px; 
        font-size: 1.1em; 
        border: none; 
        border-radius: 50px; 
        cursor: pointer; 
        transition: all 0.3s ease; 
        font-weight: bold; 
        text-transform: uppercase; 
        letter-spacing: 1px;
    }
    
    .yes-btn { 
        background: #ff6b6b; 
        color: white; 
        box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4); 
    }
    
    .yes-btn:hover { 
        background: #ff5252; 
        transform: scale(1.1); 
        box-shadow: 0 6px 20px rgba(255, 107, 107, 0.6);
    }
    
    .no-btn { 
        background: rgba(255, 255, 255, 0.3); 
        color: white; 
        box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
    }
    
    .no-btn:hover { 
        background: rgba(255, 255, 255, 0.5); 
        transform: scale(0.95);
    }
    
    .flower { 
        position: fixed; 
        width: 60px; 
        height: 60px; 
        pointer-events: none; 
        z-index: 5;
    }
    
    .petal { 
        position: absolute; 
        border-radius: 50%; 
        filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2)); 
    }
    
    .petal-pink { background: radial-gradient(circle, #ff69b4, #ff1493); }
    .petal-red { background: radial-gradient(circle, #ff0000, #cc0000); }
    .petal-purple { background: radial-gradient(circle, #da70d6, #ba55d3); }
    .petal-darkred { background: radial-gradient(circle, #dc143c, #8b0000); }
    
    .flower-rose { animation: bloom 2s ease-out forwards; }
    .flower-tulip { animation: bloom 2.5s ease-out forwards; }
    .flower-daisy { animation: bloom 2s ease-out 0.3s forwards; }
    
    .celebration-text { 
        position: fixed; 
        font-size: 1.5em; 
        font-weight: bold; 
        pointer-events: none; 
        animation: float-up 3s ease-out forwards; 
    }
    
    .success-message {
        display: none;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 40px 60px;
        border-radius: 20px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        z-index: 100;
        text-align: center;
        animation: scaleIn 0.6s ease-out;
    }
    
    .success-message h2 {
        color: #ff6b6b;
        font-size: 2em;
        margin-bottom: 15px;
    }
    
    .success-message p {
        color: #333;
        font-size: 1.2em;
        margin-bottom: 10px;
    }
    
    .heart {
        display: inline-block;
        animation: heartBeat 0.6s ease-in-out infinite;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes slideUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes float-up { 
        from { opacity: 1; transform: translateY(0) scale(1); } 
        to { opacity: 0; transform: translateY(-100px) scale(0); } 
    }
    
    @keyframes bloom { 
        0% { transform: scale(0) rotate(0deg); opacity: 0; } 
        50% { opacity: 1; } 
        100% { transform: scale(1) rotate(360deg); opacity: 0; } 
    }
    
    @keyframes scaleIn {
        from { transform: translate(-50%, -50%) scale(0); }
        to { transform: translate(-50%, -50%) scale(1); }
    }
    
    @keyframes heartBeat {
        0%, 100% { transform: scale(1); }
        25% { transform: scale(1.3); }
    }
`

// --- Logic Class ---
class ValentineInvitation {
  constructor() {
    this.flowerTypes = ['rose', 'tulip', 'daisy']
    this.petalColors = ['petal-pink', 'petal-red', 'petal-purple', 'petal-darkred', 'petal-pink']
    this.init()
  }

  init() {
    // Simple ambient flowers on load
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        this.createFlower(
          Math.random() * window.innerWidth,
          Math.random() * window.innerHeight * 0.3
        )
      }, i * 1200)
    }
  }

  createFlower(x, y) {
    const type = this.flowerTypes[Math.floor(Math.random() * this.flowerTypes.length)]
    const flower = document.createElement('div')
    flower.className = `flower flower-${type}`
    flower.style.left = `${x}px`
    flower.style.top = `${y}px`

    const config = this.getFlowerConfig(type)

    for (let i = 0; i < config.petals; i++) {
      const petal = document.createElement('div')
      petal.className = `petal ${this.petalColors[i % this.petalColors.length]}`
      const angle = (i / config.petals) * Math.PI * 2
      
      petal.style.width = `${config.size}px`
      petal.style.height = `${config.size}px`
      petal.style.left = `${Math.cos(angle) * config.distance}px`
      petal.style.top = `${Math.sin(angle) * config.distance}px`
      flower.appendChild(petal)
    }

    // Center Gold Circle
    const center = document.createElement('div')
    center.style.cssText = `position:absolute; width:10px; height:10px; background:#ffd700; border-radius:50%; left:50%; top:50%; transform:translate(-50%, -50%); z-index:11; box-shadow: inset 0 -1px 3px rgba(0,0,0,0.3);`
    flower.appendChild(center)

    document.body.appendChild(flower)
    setTimeout(() => flower.remove(), 3000)
  }

  getFlowerConfig(type) {
    switch (type) {
      case 'rose': return { petals: 8, size: 18, distance: 15 }
      case 'tulip': return { petals: 5, size: 22, distance: 15 }
      case 'daisy': return { petals: 12, size: 15, distance: 18 }
    }
  }

  handleYes() {
    const btnGroup = document.querySelector('.button-group')
    const mainMsg = document.querySelector('.message')
    const successMsg = document.getElementById('successMessage')

    if (btnGroup) btnGroup.style.display = 'none'
    if (mainMsg) mainMsg.style.display = 'none'
    if (successMsg) successMsg.style.display = 'block'

    const emojis = ['💕', '🌹', '✨', '💐', '🎉', '😍', '🌺', '🌸']
    
    for (let i = 0; i < 40; i++) {
      setTimeout(() => {
        const x = Math.random() * window.innerWidth
        const y = Math.random() * window.innerHeight
        this.createFlower(x, y)
        
        if (i % 4 === 0) {
          this.createCelebrationText(x, y, emojis[Math.floor(Math.random() * emojis.length)])
        }
      }, i * 80)
    }

    setInterval(() => this.createFlower(Math.random() * window.innerWidth, Math.random() * window.innerHeight), 400)
  }

  createCelebrationText(x, y, text) {
    const el = document.createElement('div')
    el.className = 'celebration-text'
    el.textContent = text
    el.style.left = `${x}px`
    el.style.top = `${y}px`
    const colors = ['#ff69b4', '#ff1493', '#dc143c', '#da70d6', '#8b0000']
    el.style.color = colors[Math.floor(Math.random() * colors.length)]
    document.body.appendChild(el)
    setTimeout(() => el.remove(), 3000)
  }
}

export default App
