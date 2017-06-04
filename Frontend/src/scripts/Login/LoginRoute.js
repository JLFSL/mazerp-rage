import Component from 'inferno-component';
import classnames from 'classnames';

const logo = require('../../images/MazeRP.png');


class LoginRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: '',
      email: '',
      password: ''
    };

    this.login = this.login.bind(this);
    this.disconnect = this.disconnect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
  }

  componentWillMount() {
    mp.trigger('toggleChat', false);
    mp.trigger('loginCamera', true);

    // Hook our response function so we can access it from Backend
    window.app.loginResponse = this.handleResponse;
  }

  componentWillUnmount() {
    mp.trigger('toggleChat', true);
    mp.trigger('loginCamera', false);

    window.app.loginResponse = null;
  }

  handleResponse(success, error) {
    this.setState({ loading: false, error });
  }

  login() {
    this.setState({
      loading: true
    });

    mp.trigger('authenticationLogin', JSON.stringify(this.state));
  }

  disconnect() {
    window.app.history.push("/");
    mp.trigger('cefLoginDisconnect');
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { email, password, error, loading } = this.state;
    return (
      <form id="login" onChange={this.handleChange} class="col-md-8 col-md-offset-2">
          <div class="announce-box">
            <div class="announce">
              <div class="announce-header">
                Login
              </div>
              <div class="announce-main">

                <div class="col-sm-12">
                    <img class="login-logo col-xs-8 col-xs-offset-2" src={logo}  />
                </div>

                {loading ?

                  <div class="col-sm-12 attempt-login">
                    <h1>Attempting Login...</h1>
                    <i class="fa fa-cog fa-spin fa-3x fa-fw"></i>
                  </div>

                :

                  <div>

                    {error ?
                      <div class="col-sm-12">
                        <div class="alert alert-danger login-error">
                           <span>{error}</span>
                        </div>
                      </div>
                    : null}

                    <div class="col-md-12 login-input email-input">
                      <div class="selection-button-full unhoverable col-md-4">E-mail</div>
                      <input type="email" name="email" value={email} class="announce-input col-md-8" style={{ height: '40px', 'line-height': '40px', opacity: '0.8' }} required />
                    </div>

                    <div class="col-md-12 login-input password-input">
                      <div class="selection-button-full unhoverable col-md-4">Password</div>
                      <input type="password" name="password" value={password} class="announce-input col-md-8" style={{ height: '40px', 'line-height': '40px', opacity: '0.8' }} required />
                    </div>
                  </div>
                }

                <div class="login-buttons">

                  {!loading ?
                    <div class="col-sm-4 col-sm-offset-2">
                      <div class="selection-button-full button-green" type="submit" onClick={this.login}>Login</div>
                    </div>
                  : null}

                  <div class={classnames({ 'col-md-12': loading, 'col-sm-4': !loading })}>
                    <div class="selection-button-full button-red" onClick={this.disconnect} id="disconnect">Disconnect</div>
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