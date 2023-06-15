import './index.css'

const PasswordListItem = props => {
  const {details, isChecked, onDelete} = props
  const {username, website, password, id} = details

  const dp = website.slice(0, 1)

  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <li className="list-card">
      <p className="dp">{dp}</p>
      <div className="sub-card">
        <p className="text">{website}</p>
        <p className="text">{username}</p>
        {!isChecked ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="star-img"
          />
        ) : (
          <p>{password}</p>
        )}
      </div>
      <button
        onClick={onClickDelete}
        className="del-btn"
        type="button"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="del-icon"
        />
      </button>
    </li>
  )
}

export default PasswordListItem
