 

const WinOrLoseCard = props => {
  const {totalScore, againPlay} = props

  const playAgain = () => {
    againPlay()
  }
  return (
    <div>
      <div className="win-lose-cont">
        {totalScore === 12 ? (
          <div className="scorecard-cont">
            <div className="score-container">
              <h1> You Won </h1>
              <p> Best Score </p>
              <p> 12/12 </p>
            </div>
            <div>
              {' '}
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
                alt="win or lose"
              />
            </div>
          </div>
        ) : (
          <div className="scorecard-cont">
            <div className="score-container">
              <h1> You Lose </h1>
              <p className="p-style"> Score </p>
              <p className="p-style"> {totalScore}/ 12 </p>
            </div>
            <div>
              {' '}
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
                alt="win or lose"
              />
            </div>
          </div>
        )}
        <button className="button" type="button" onClick={playAgain}>
          {' '}
          Play Again{' '}
        </button>
      </div>{' '}
    </div>
  )
}

export default WinOrLoseCard
