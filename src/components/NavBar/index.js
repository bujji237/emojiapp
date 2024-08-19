import './index.css'

const NavBar = props => {
  const {score, totalScore, canDisplayScore, wonOrLoss} = props

  // Determine whether to display the score elements
  const shouldDisplayScore = canDisplayScore && wonOrLoss !== 'Won'

  return (
    <div className="div-container">
      <div className="logo-container">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="logo-name">Emoji Game</h1>
      </div>
      {shouldDisplayScore && ( // Conditionally render the score container
        <div className="score-container">
          <p className="current-score">Score: {score}</p>
          <p className="top-score">Top Score: {totalScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
