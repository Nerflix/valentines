import '../Css/FinalPage.css'

function FinalPage({ onFinish }) {
  return (
    <div className="final-page active">
      <div className="final-container">
        <h1 className="final-title">Get Ready for the Best Night Ever! ✨</h1>
        <div className="final-content-box">
          <p className="final-message-text">
            I can't wait to see your beautiful smile and spend this magical
            evening with you. You deserve all the love and happiness in the
            world, Stacy.
          </p>
          <p className="final-signature">
            With all my love,
            <br />
            <strong className="final-signature-name">Ron</strong> 💕
          </p>
          <button className="final-ready-btn" onClick={onFinish}>
            I'm Ready! 💘
          </button>
        </div>
      </div>
    </div>
  )
}

export default FinalPage
