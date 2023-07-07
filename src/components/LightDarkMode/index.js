import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {
    text: 'Light Mode',
    textColor: 'white',
    modeClass: 'elements-container',
  }

  changeColor = () => {
    const {text} = this.state

    if (text === 'Dark Mode') {
      this.setState(() => ({
        text: 'Light Mode',
        textColor: 'White',
        modeClass: 'elements-container',
      }))
    } else {
      this.setState(() => ({
        text: 'Dark Mode',
        textColor: 'Black',
        modeClass: 'elements-container-light-mode',
      }))
    }
  }

  render() {
    const {text, textColor, modeClass} = this.state
    const textColorStyle = {color: `${textColor}`}

    return (
      <div className="main-container">
        <div className={modeClass}>
          <h1 style={textColorStyle}>Click To Change Mode</h1>
          <button
            className="button-style"
            onClick={this.changeColor}
            type="button"
          >
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
