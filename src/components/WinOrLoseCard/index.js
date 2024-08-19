import './index.css'

const WinOrLossCard = props => {
  const {winOrLossDetails, totalGainedScore, playGameAgain} = props
  let imageUrl = ''
  let scoreText = ''

  const onTryAgainBtnClicked = () => {
    playGameAgain(totalGainedScore)
  }

  if (winOrLossDetails === 'Won') {
    imageUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    scoreText = 'Best Score'
  } else {
    imageUrl = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
    scoreText = 'Score'
  }
  return (
    <div className="bottom-container">
      <div className="box-container">
        <img src={imageUrl} alt="win or lose" className="image" />
        <h1 className="result-text">You {winOrLossDetails}</h1>
        <p className="scoreText">{scoreText}</p>
        <p className="score">{totalGainedScore}/12</p>
        <button
          type="button"
          className="try-again-btn"
          onClick={onTryAgainBtnClicked}
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLossCard
