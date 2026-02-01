import { useEffect, useMemo, useState } from 'react'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState(1)
  const [budget, setBudget] = useState('')
  const [selectedBudget, setSelectedBudget] = useState(null)
  const [selectedOutfit, setSelectedOutfit] = useState(null)
  const [showBudget, setShowBudget] = useState(true)
  const [showOutfit, setShowOutfit] = useState(false)
  const [showFinal, setShowFinal] = useState(false)

  const flowers = useMemo(
    () => ['🌹', '🌸', '🌺', '🌻', '🌷', '💐', '🏵️'],
    []
  )

  useEffect(() => {
    const hearts = []
    for (let i = 0; i < 6; i += 1) {
      const heart = document.createElement('div')
      heart.className = 'floating-heart'
      heart.textContent = '❤️'
      heart.style.left = `${Math.random() * 100}%`
      heart.style.top = `${Math.random() * 100}%`
      heart.style.animationDelay = `${Math.random() * 5}s`
      heart.style.animation = `float-heart ${5 + Math.random() * 3}s ease-in-out infinite`
      document.body.appendChild(heart)
      hearts.push(heart)
    }

    return () => {
      hearts.forEach((heart) => heart.remove())
    }
  }, [])

  const createFlowerBurst = (x, y, count = 20) => {
    for (let i = 0; i < count; i += 1) {
      const flower = document.createElement('div')
      flower.className = 'flower-burst'
      flower.textContent = flowers[Math.floor(Math.random() * flowers.length)]

      const angle = (i / count) * Math.PI * 2
      const distance = 150 + Math.random() * 100
      const tx = Math.cos(angle) * distance
      const ty = Math.sin(angle) * distance

      flower.style.left = `${x}px`
      flower.style.top = `${y}px`
      flower.style.setProperty('--tx', `${tx}px`)
      flower.style.setProperty('--ty', `${ty}px`)

      document.body.appendChild(flower)

      setTimeout(() => {
        flower.classList.add('animate')
      }, 10)

      setTimeout(() => flower.remove(), 1600)
    }
  }

  const handleYes = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    createFlowerBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 30)

    setTimeout(() => {
      setActivePage(2)
    }, 400)
  }

  const handleNo = () => {
    alert("I know you'll come around! 😉 Click Yes to continue!")
  }

  const submitBudget = (event) => {
    const amount = budget.trim()

    if (!amount || Number.parseFloat(amount) < 0) {
      alert('Please enter a valid amount! 💕')
      return
    }

    setSelectedBudget(amount)

    const rect = event.currentTarget.getBoundingClientRect()
    createFlowerBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 15)

    setTimeout(() => {
      setShowBudget(false)
      setShowOutfit(true)
    }, 300)
  }

  const selectOutfit = (choice, event) => {
    setSelectedOutfit(choice)

    const rect = event.currentTarget.getBoundingClientRect()
    createFlowerBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 15)

    setTimeout(() => {
      setShowOutfit(false)
      setShowFinal(true)
    }, 300)
  }

  const finishPage = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    createFlowerBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 40)

    setTimeout(() => {
      let message = `Perfect Stacy! I've set aside $${selectedBudget} for our amazing date night!\n\n`
      message += selectedOutfit
        ? "I'm so excited you're getting a new outfit! You're going to look absolutely stunning!\n\n"
        : "That's wonderful! You're beautiful just the way you are!\n\n"
      message += "I can't wait to make this the most special night ever with you!\n\nWith all my love,\nRon 💕"

      alert(message)
    }, 300)
  }

  return (
    <>
      <div className="background-animation">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div id="page1" className={`page ${activePage === 1 ? 'active' : ''}`}>
        <div className="container">
          <h1 className="question-text">Stacy</h1>
          <p className="subtitle">Will you be my Valentine?</p>
          <div className="button-group">
            <button className="yes-btn" onClick={handleYes}>Yes! 💕</button>
            <button className="no-btn" onClick={handleNo}>Maybe Later</button>
          </div>
        </div>
      </div>

      <div id="page2" className={`page ${activePage === 2 ? 'active' : ''}`}>
        <div className="container">
          <h1 className="celebration-title">You said YES! 💫</h1>
          <p className="celebration-subtitle">
            Stacy, you are the most beautiful girl I've ever met. I can't wait to spend this special night with you!
          </p>

          <div id="budgetSection" className={`question-section ${showBudget ? '' : 'hidden'}`}>
            <h2 className="section-title">How much do you need for the date night? 💰</h2>
            <div className="input-group">
              <input
                type="number"
                id="budgetInput"
                placeholder="Enter amount"
                min="0"
                step="any"
                value={budget}
                onChange={(event) => setBudget(event.target.value)}
              />
              <button className="input-btn" onClick={submitBudget}>Confirm Amount</button>
            </div>
          </div>

          <div id="outfitSection" className={`question-section ${showOutfit ? '' : 'hidden'}`}>
            <h2 className="section-title">Would you like to buy a new outfit for our date? 👗</h2>
            <div className="outfit-buttons">
              <button
                className={`outfit-btn yes-outfit ${selectedOutfit === true ? 'selected' : ''}`}
                onClick={(event) => selectOutfit(true, event)}
              >
                Yes! 🛍️
              </button>
              <button
                className={`outfit-btn no-outfit ${selectedOutfit === false ? 'selected' : ''}`}
                onClick={(event) => selectOutfit(false, event)}
              >
                I'm good 😊
              </button>
            </div>
          </div>

          <div id="finalSection" className={`question-section ${showFinal ? '' : 'hidden'}`}>
            <h2 className="section-title">Get Ready for the Best Night Ever! ✨</h2>
            <p className="final-message">
              I can't wait to see your beautiful smile and spend this magical evening with you. You deserve all the love and happiness in the world, Stacy.
            </p>
            <p className="signature">
              With all my love,
              <br />
              <strong>Ron</strong> 💕
            </p>
            <button className="confirm-btn" onClick={finishPage}>I'm Ready! 💘</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
