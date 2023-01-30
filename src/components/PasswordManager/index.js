import {Component} from 'react'

import {v4} from 'uuid'

import LogoutButton from '../LogoutButton'
import './index.css'

import PasswordItem from '../PasswordItem'

const backgroundColorsList = [
  'warning',
  'green',
  'orange',
  'lightgreen',
  'red',
  'white',
  'blue',
  'grey',
]

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    searchInput: '',
    showPassword: true,
  }

  onAddButton = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state

    const newUser = {
      id: v4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
    }

    if (websiteInput !== '' && usernameInput !== '' && passwordInput !== '') {
      this.setState(preState => ({
        passwordsList: [...preState.passwordsList, newUser],
        websiteInput: '',
        usernameInput: '',
        passwordInput: '',
      }))
    }
  }

  onChangeWebsite = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onDeletePassword = id => {
    const {passwordsList} = this.state
    const updatedPasswordsList = passwordsList.filter(
      eachUser => eachUser.id !== id,
    )

    this.setState({passwordsList: updatedPasswordsList})
  }

  handleChange = () => {
    this.setState(preState => ({showPassword: !preState.showPassword}))
  }

  onSearchUser = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {
      passwordsList,
      showPassword,
      websiteInput,
      usernameInput,
      passwordInput,
      searchInput,
    } = this.state

    const searchedPasswordsList = passwordsList.filter(eachUser =>
      eachUser.username.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const count = passwordsList.length

    const listClassName = count === 0 ? 'no-passwords' : 'passwords-list'

    const passwords =
      count !== 0 ? (
        searchedPasswordsList.map(eachUser => (
          <PasswordItem
            userDetails={eachUser}
            key={eachUser.id}
            backgroundColorsList={backgroundColorsList}
            onDeletePassword={this.onDeletePassword}
            showPassword={showPassword}
          />
        ))
      ) : (
        <div className="no-passwords">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="no-password-image"
          />
          <p className="no-passwords-text">No Passwords</p>
        </div>
      )

    return (
      <div className="password-manager-container">
        <nav className="nav-header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="password-manager-logo"
          />
          <LogoutButton />
        </nav>
        <div className="password-manager-card-container">
          <form className="password-manager-form-card">
            <h1 className="password-manager-form-heading">Add New Password</h1>
            <div className="password-manager-inputs-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-icon"
              />
              <input
                type="text"
                className="input"
                placeholder="Enter Website"
                value={websiteInput}
                onChange={this.onChangeWebsite}
              />
            </div>
            <div className="password-manager-inputs-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-icon"
              />
              <input
                type="text"
                className="input"
                placeholder="Enter Username"
                value={usernameInput}
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="password-manager-inputs-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-icon"
              />
              <input
                type="password"
                className="input"
                placeholder="Enter Password"
                value={passwordInput}
                onChange={this.onChangePassword}
              />
            </div>
            <div className="password-manager-add-button-container">
              <button
                type="submit"
                className="add-password-button"
                onClick={this.onAddButton}
              >
                Add
              </button>
            </div>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-image"
          />
        </div>
        <div className="password-manager-bottom-card-container">
          <div className="passwords-count-and-search-bar-container">
            <div className="passwords-count-container">
              <h1 className="passwords-heading">Your Passwords</h1>
              <p className="passwords-count">{count}</p>
            </div>
            <div className="search-bar-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-icon"
              />
              <input
                type="search"
                className="search-input"
                placeholder="Search"
                onChange={this.onSearchUser}
              />
            </div>
          </div>
          <div className="show-password-checkbox-container">
            <input
              type="checkbox"
              className="show-checkbox"
              onChange={this.handleChange}
              id="show"
            />
            <label htmlFor="show" className="show-password-text">
              Show Passwords
            </label>
          </div>
          <ul className={listClassName}>{passwords}</ul>
        </div>
      </div>
    )
  }
}

export default PasswordManager
