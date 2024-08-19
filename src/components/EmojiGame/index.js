/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import EmojiCard from '../EmojiCard/index'
import NavBar from '../NavBar/index'
import WinOrLoseCard from '../WinOrLoseCard/index'
import './index.css'

class EmojiGame extends Component {
  state = {score: 0, totalScore: 0, clickedEmojisList: [], wonOrLoss: ''}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    const sortedEmojisList = emojisList.sort(() => Math.random() - 0.5)
    return sortedEmojisList
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const clickedEmojisLength = clickedEmojisList.length
    const isemojiPresent = clickedEmojisList.includes(id)
    let incrementdScore = 1
    let newWonOrLoss = ''
    if (isemojiPresent) {
      incrementdScore -= 1
      newWonOrLoss = 'Lose'
    } else if (emojisList.length - 1 === clickedEmojisLength) {
      newWonOrLoss = 'Won'
    }
    this.setState(prevState => ({
      clickedEmojisList: [...prevState.clickedEmojisList, id],
      score: prevState.score + incrementdScore,
      wonOrLoss: newWonOrLoss,
    }))
  }

  playGameAgain = totalGainedScore => {
    const {totalScore} = this.state
    let newTopScore = totalScore
    if (totalGainedScore > totalScore) {
      newTopScore = totalGainedScore
    }
    this.setState({
      wonOrLoss: '',
      score: 0,
      totalScore: newTopScore,
      clickedEmojisList: [],
    })
  }

  renderHomePage = () => {
    const shuffledEmojisList = this.shuffledEmojisList()
    let canDisplayScore = true
    const {score, totalScore, wonOrLoss} = this.state
    if (wonOrLoss === 'Won' || wonOrLoss === 'Lose') {
      canDisplayScore = false
      return (
        <>
          <NavBar score={0} totalScore={0} canDisplayScore={canDisplayScore} />
          <WinOrLoseCard
            winOrLossDetails={wonOrLoss}
            totalGainedScore={score}
            playGameAgain={this.playGameAgain}
          />
        </>
      )
    }
    return (
      <>
        <NavBar
          score={score}
          totalScore={totalScore}
          canDisplayScore={canDisplayScore}
        />
        <ul className="emojis-list-container">
          {shuffledEmojisList.map(eachEmoji => (
            <EmojiCard
              emojiDetails={eachEmoji}
              key={eachEmoji.id}
              clickEmoji={this.clickEmoji}
            />
          ))}
        </ul>
      </>
    )
  }

  render() {
    return <div className="app-container">{this.renderHomePage()}</div>
  }
}

export default EmojiGame
