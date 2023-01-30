import './index.css'

const PasswordItem = props => {
  const {
    userDetails,
    backgroundColorsList,
    onDeletePassword,
    showPassword,
  } = props
  const {id, username, website, password} = userDetails
  const index = Math.ceil(Math.random() * backgroundColorsList.length)

  const isChecked = showPassword ? (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="password-stars"
    />
  ) : (
    <p className="password">{password}</p>
  )

  const onDelete = () => {
    onDeletePassword(id)
  }

  return (
    <li className="password-item">
      <div className="user-details">
        <h1 className={`profile-pic `}>{website[0].toUpperCase()}</h1>
        <div className="details-container">
          <p className="website">{website}</p>
          <p className="username">{username}</p>
          {isChecked}
        </div>
      </div>
      <button className="delete-button" type="button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default PasswordItem
