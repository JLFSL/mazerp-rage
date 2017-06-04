import Component from 'inferno-component';
import { Router } from 'inferno-router';

class StatusRoute extends Component {
  constructor(props) {
    super(props);

    this.state = {
      food: '100',
      thirst: '100'
    }

    this.updateHUD = this.updateHUD.bind(this);
  }

  componentWillMount() {
    window.app.updateHUD = this.updateHUD;
  }

  componentWillUnmount() {
    window.app.updateHUD = null;
  }

  updateHUD(food, thirst) {
    this.setState({ food: (100 - Math.floor(food)), thirst: (100 - Math.floor(thirst)) });
  }

  render() {

    const { food, thirst } = this.state;

    const hungerStyle = {
      position: 'absolute',
      width: '125px',
      height: '50px',
      bottom: '1.6%',
      left: '16%',
    };

    const barStyle = {
      margin: '3px',
      border: '1px solid black',
    };

    return (
      <div style={hungerStyle}>
        <div class="progress" style={barStyle}>
          <div class="progress-bar progress-bar-success" role="progressbar" style={{ width: `${food}%`, color: 'black' }}>
            <i class="fa fa-cutlery fa-fw"></i>&nbsp;
          </div>
        </div>
        <div class="progress" style={barStyle}>
          <div class="progress-bar progress-bar-info" role="progressbar" style={{ width: `${thirst}%`, color: 'black' }}>
            <i class="fa fa-glass fa-fw"></i>&nbsp;
          </div>
        </div>
      </div>
    )
  }
}

export default StatusRoute;