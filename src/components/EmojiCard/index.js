 

const EmojiCard = props => {
  const {emojiItem, emojiClicked} = props
  const {id} = emojiItem

  const onEmojiClick = () => {
    emojiClicked(id)
  }

  return (
    <li>
      {' '}
      <button className="emoji-item" onClick={onEmojiClick} type="button">
        {' '}
        <img src={emojiItem.emojiUrl} alt={emojiItem.emojiName} />
      </button>{' '}
    </li>
  )
}

export default EmojiCard
