import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
 

class EmojiGame extends Component {
  state = {
    idList: [],
    totalScore: 0,
    topScore: 0,
    status: 'go',
  }

  againPlay = () => {
    const {topScore, totalScore} = this.state
    if (totalScore > topScore) {
      this.setState({
        topScore: totalScore,
        status: 'go',
        idList: [],
        totalScore: 0,
      })
    } else {
      this.setState({
        topScore,
        status: 'go',
        idList: [],
        totalScore: 0,
      })
    }
  }

  emojiClicked = id => {
    const {idList} = this.state

    if (idList.includes(id)) {
      this.setState({status: 'end'})
    } else {
      this.setState(prevState => ({
        status: 'go',
        totalScore: prevState.totalScore + 1,
        idList: [...prevState.idList, id],
      }))
    }
  }

  render() {
    const {emojisList} = this.props
    const {topScore, totalScore, status} = this.state
    const shuffledEmojisList = emojisList.sort(() => Math.random() - 0.5)
    console.log(status)

    return (
      <div className="main-cont">
        {status !== 'go' || totalScore === 12 ? (
          <>
            <NavBar
              status={status}
              topScore={topScore}
              totalScore={totalScore}
            />
            <WinOrLoseCard totalScore={totalScore} againPlay={this.againPlay} />
          </>
        ) : (
          <div className="main-cont">
            <NavBar
              status={status}
              topScore={topScore}
              totalScore={totalScore}
            />
            <ul className="emoji-cont">
              {shuffledEmojisList.map(eachItem => (
                <EmojiCard
                  emojiItem={eachItem}
                  key={eachItem.id}
                  emojiClicked={this.emojiClicked}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default EmojiGame
