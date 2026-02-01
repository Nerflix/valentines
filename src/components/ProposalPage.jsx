import '../Css/ProposalPage.css'

function ProposalPage({ onYes, onNo }) {
  return (
    <div className="proposal-page active">
      <div className="proposal-container">
        <h1 className="proposal-name">Stacy ✨</h1>
        <p className="proposal-subtitle">Will you be my Valentine? 🌹</p>
        <div className="proposal-buttons">
          <button className="proposal-yes-btn" onClick={onYes}>
            Yes, I will! 💝
          </button>
          <button className="proposal-no-btn" onClick={onNo}>
            Not Yet 💭
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProposalPage
