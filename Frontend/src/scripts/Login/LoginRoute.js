import Inferno from 'inferno';
import Component from 'inferno-component';

const logo = require('../../images/MazeRP.png');


class LoginRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.login = this.login.bind(this);
    this.disconnect = this.disconnect.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    mp.trigger('toggleChat', false);
    mp.trigger('loginCamera', true);
  }

  componentWillUnmount() {
    mp.trigger('toggleChat', true);
    mp.trigger('loginCamera', false);
  }

  login() {
    mp.trigger('authenticationLogin', JSON.stringify(this.state));
  }

  disconnect() {
    window.app.history.push("/");
    // mp.trigger('cefLoginDisconnect');
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <form id="login">
        <div class="col-md-8 col-md-offset-2">
          <div class="announce-box">
            <div class="announce">
              <div class="announce-header">
                <div class="announce-heading">Login</div>
              </div>
              <div class="announce-main">
                <div class="col-md-12">
                  <div class="announce-row">
                    <img class="login-logo col-xs-8 col-xs-offset-2" src={logo}  />
                  </div>
                </div>
                <div class="col-md-12" style={{ 'margin-top': '5px' }}>
                  <div class="announce-row">
                    <div class="selection-button-full unhoverable col-md-4" style={{ cursor: 'default' }}>E-mail</div>
                    <input type="email" name="email" onChange={this.handleChange} value={email} class="announce-input col-md-8" style={{ height: '40px', 'line-height': '40px', opacity: '0.8' }} required />
                  </div>
                </div>
                <div class="col-md-12" style={{ 'margin-bottom': '10px' }}>
                  <div class="announce-row">
                    <div class="selection-button-full unhoverable col-md-4"  style={{ cursor: 'default' }}>Password</div>
                    <input type="password" name="password" onChange={this.handleChange} value={password} class="announce-input col-md-8" style={{ height: '40px', 'line-height': '40px', opacity: '0.8' }} required />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="selection-row">
                    <div class="selection-button-full button-yellow" onClick={this.login}>Login</div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="selection-row">
                    <div class="selection-button-full button-red" onClick={this.disconnect} id="disconnect">Disconnect</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default LoginRoute;