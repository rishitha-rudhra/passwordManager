import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordListItem from '../PasswordListItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    isChecked: false,
    website: '',
    username: '',
    password: '',
    itemsList: [],
    searchInput: '',
  }

  onChangeWebsite = event => {
    this.setState({
      website: event.target.value,
    })
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onClickCheckbox = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked,
    }))
  }

  onClickAdd = event => {
    event.preventDefault()
    const {username, password, website} = this.state
    const newItem = {
      id: uuidv4(),
      username,
      password,
      website,
    }
    this.setState(prevState => ({
      itemsList: [...prevState.itemsList, newItem],
      username: '',
      password: '',
      website: '',
    }))
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onDelete = id => {
    const {itemsList} = this.state

    const updatedList = itemsList.filter(eachItem => eachItem.id !== id)
    this.setState({
      itemsList: updatedList,
    })
  }

  render() {
    const {
      username,
      password,
      website,
      isChecked,
      itemsList,
      searchInput,
    } = this.state

    const updatedList = itemsList.filter(eachItem => {
      const name = eachItem.website.toLowerCase()
      return name.includes(searchInput)
    })

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />

        <div className="form-img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="password-mngr-img"
          />
          <form className="form-container">
            <h1 className="text">Add New Password</h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="form-input-logos"
              />
              <input
                type="text"
                className="form-input"
                placeholder="Enter Website"
                onChange={this.onChangeWebsite}
                value={website}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="form-input-logos"
              />
              <input
                type="text"
                className="form-input"
                placeholder="Enter Username"
                onChange={this.onChangeUsername}
                value={username}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="form-input-logos"
              />
              <input
                type="password"
                className="form-input"
                placeholder="Enter Password"
                onChange={this.onChangePassword}
                value={password}
              />
            </div>
            <button type="submit" className="add-btn" onClick={this.onClickAdd}>
              Add
            </button>
          </form>
        </div>
        <div className="list-cards-container">
          <div className="header">
            <h1 className="text">Your Passwords</h1>
            <p className="passwd-count">{updatedList.length}</p>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="form-input-logos"
              />
              <input
                type="search"
                className="form-input"
                placeholder="Search"
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="showPasswords"
              onClick={this.onClickCheckbox}
            />
            <label htmlFor="showPasswords" className="text">
              Show passwords
            </label>
          </div>
          {updatedList.length === 0 && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              alt="no passwords"
              className="no-password-img"
            />
          )}
          {updatedList.length === 0 && <p className="text">No Passwords</p>}
          <ul className="list-items-container">
            {updatedList.map(eachItem => (
              <PasswordListItem
                details={eachItem}
                key={eachItem.id}
                isChecked={isChecked}
                onDelete={this.onDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default PasswordManager
