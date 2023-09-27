import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onMango = () => {
    console.log('mango clicked')
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onBanana = () => {
    console.log('banana clicked')
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {banana} = this.state
    const {mango} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1>
            Bob ate <span className="elements">{mango}</span> mangoes
            <span className="elements">{banana}</span> bananas
          </h1>
          <div className="inner-container">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <div className="button">
                <button
                  className="button1"
                  type="button"
                  onClick={this.onMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <div className="button">
                <button
                  className="button1"
                  type="button"
                  onClick={this.onBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
