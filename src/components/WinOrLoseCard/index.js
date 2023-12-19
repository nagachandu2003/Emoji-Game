import './index.css'

const WinOrLoseCard = props => {
  const {score, onPlayAgain} = props
  const title = score === 12 ? 'You Won' : 'You Lose'
  const parText = score === 12 ? 'Best Score' : 'Score'
  const imageUrl =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const onPlay = () => {
    onPlayAgain()
  }
  return (
    <div className="win-container">
      <div className="win-flex-container">
        <h1 className="main-title">{title}</h1>
        <p className="parText">{parText}</p>
        <p className="main-score">{score}/12</p>
        <button onClick={onPlay} className="button2" type="button">
          Play Again
        </button>
      </div>
      <img className="win-image" src={imageUrl} alt="win or lose" />
    </div>
  )
}
export default WinOrLoseCard
