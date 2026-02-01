import '../Css/PlanningPage.css'

function PlanningPage({
  budget,
  onBudgetChange,
  onBudgetConfirm,
  outfit,
  onOutfitSelect,
  outfitEnabled,
}) {
  return (
    <div className="planning-page active">
      <div className="planning-container">
        <h1 className="planning-title">You said YES! 💫</h1>
        <p className="planning-subtitle">
          Stacy, you are the most beautiful girl I've ever met. I can't wait to
          spend this special night with you!
        </p>

        <div className="planning-section">
          <h2 className="planning-section-title">How much do you need for the date night? 💰</h2>
          <div className="planning-input-group">
            <input
              type="number"
              placeholder="Enter amount"
              min="0"
              step="any"
              value={budget}
              onChange={(event) => onBudgetChange(event.target.value)}
            />
            <button className="planning-input-btn" onClick={onBudgetConfirm}>
              Confirm Amount
            </button>
          </div>
        </div>

        <div className={`planning-section ${outfitEnabled ? '' : 'hidden'}`}>
          <h2 className="planning-section-title">Would you like to buy a new outfit for our date? 👗</h2>
          <div className="planning-outfit-buttons">
            <button
              className={`planning-outfit-btn ${outfit === true ? 'selected' : ''}`}
              onClick={(event) => onOutfitSelect(true, event)}
            >
              Yes! 🛍️
            </button>
            <button
              className={`planning-outfit-btn ${outfit === false ? 'selected' : ''}`}
              onClick={(event) => onOutfitSelect(false, event)}
            >
              I'm good 😊
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlanningPage
