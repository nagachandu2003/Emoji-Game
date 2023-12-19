import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const {score, emojiArr, topScore, isLose} = this.props
    return (
      <div className="nav-bg">
        <div className="nav-logo">
          <img
            className="nav-image"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="nav-logo-heading">Emoji Game</h1>
        </div>
        {isLose === false && emojiArr.length !== 12 && (
          <div className="score-container">
            <p className="score">Score: {score}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    )
  }
}
export default NavBar
