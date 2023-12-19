import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const onClickEmo = () => {
    onClickEmoji(id)
  }
  return (
    <li className="emoji-card">
      <button onClick={onClickEmo} type="button" className="button1">
        <img className="emoji-image" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
