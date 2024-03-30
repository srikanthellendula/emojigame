 

const NavBar = props => {
  const {topScore, totalScore, status} = props

  return (
    <div className="nav-cont">
      <div className="img-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1> Emoji Game </h1>
      </div>
      {status === 'go' ? (
        <div className="img-cont">
          <p className="score-margin"> Score: {totalScore}</p>
          <p> Top Score: {topScore} </p>
        </div>
      ) : null}
    </div>
  )
}

export default NavBar
