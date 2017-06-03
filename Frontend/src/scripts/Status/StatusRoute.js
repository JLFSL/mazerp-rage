import Component from 'inferno-component';
import { Router } from 'inferno-router';

class StatusRoute extends Component {
  constructor(props) {
    super(props);

    this.handleExit = this.handleExit.bind(this);
    this.updateValues = this.updateValues.bind(this);
  }

  updateValues() {
    console.log('mp.trigger updateValues here ~~ disabled for demo');
    // mp.trigger('checkWallet');
  }

  handleExit() {
    window.app.history.push("/");
  }

  render() {
    return (
      <p onClick={this.updateValues}>test</p>
    )
  }
}

export default StatusRoute;