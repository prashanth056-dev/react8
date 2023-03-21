import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  btnClick = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    const update = count % 2 === 0 ? 'Count is Even' : 'Count is Odd'
    return (
      <div className="mainBg">
        <div className="card">
          <h1 className="head1">Count {count}</h1>
          <p className="head2">{update}</p>
          <div className="btnCont">
            <button className="btn" type="submit" onClick={this.btnClick}>
              Increment
            </button>
          </div>
          <p className="info">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
