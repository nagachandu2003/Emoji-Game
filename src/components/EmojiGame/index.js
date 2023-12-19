import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {score: 0, emojiArr: [], isLose: false, topScore: 0}

  onChangeTopScore = () => {
    const {score, topScore} = this.state
    if (score > topScore) this.setState({topScore: score})
  }

  onPlayAgain = () => {
    this.setState({score: 0, emojiArr: [], isLose: false})
  }

  onClickEmoji = value => {
    const {emojiArr, score} = this.state
    const filteredRes = emojiArr.filter(ele => ele === value)
    if (filteredRes.length === 0) {
      this.setState(prevState => ({
        score: score + 1,
        emojiArr: [...prevState.emojiArr, value],
      }))
    } else {
      this.setState({isLose: true})
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {score, emojiArr, isLose, topScore} = this.state
    const getList = this.shuffledEmojisList()
    let authComp
    if (emojiArr.length === 12) {
      this.onChangeTopScore()
      authComp = <WinOrLoseCard score={score} onPlayAgain={this.onPlayAgain} />
    }

    if (isLose) {
      this.onChangeTopScore()
      authComp = <WinOrLoseCard score={score} onPlayAgain={this.onPlayAgain} />
    }
    return (
      <div className="home-bg">
        <div className="nav-container">
          <NavBar
            isLose={isLose}
            emojiArr={emojiArr}
            score={score}
            topScore={topScore}
          />
        </div>
        <div className="main-container">
          {emojiArr.length !== 12 && isLose === false && (
            <ul className="card-container">
              {getList.map(ele => (
                <EmojiCard
                  key={ele.id}
                  emojiDetails={ele}
                  onClickEmoji={this.onClickEmoji}
                />
              ))}
            </ul>
          )}
          {isLose === true && authComp}
          {emojiArr.length === 12 && authComp}
        </div>
      </div>
    )
  }
}
export default EmojiGame
