import Component from 'inferno-component';
import { Link } from 'inferno-router';

import DebugRoute from '../Debug/DebugRoute';
import StatusRoute from '../Status/StatusRoute';

class RootRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HUD: true, // Show Hud?
      debug: false
    }

    this.toggleDebug = this.toggleDebug.bind(this);
  }

  toggleDebug() {
    const { debug } = this.state;

    this.setState({ debug: !debug });
  }

  render() {
    const { children } = this.props;
    const { HUD, debug } = this.state;

    const sidebar = {
      width: '150px',
      background: 'rgba(0,0,0,0.75)',
      position: 'absolute',
      right: '0',
      top: '50px',
      padding: '15px',
      color: 'white',
      'text-align': 'right'
    };

    const linkStyle = { color: 'white' };

    return (
      <div>
        <div style={sidebar}>
          <h4>Dev Demo</h4>
          <ul style={{ 'list-style': 'none', padding: '0', margin: '0' }}>
            <li>
              <a style={linkStyle} onClick={this.toggleDebug}>
                {debug ?
                  <span>Hide Debug <i class="fa fa-toggle-up"></i></span>
                :
                  <span>Show Debug <i class="fa fa-toggle-down"></i></span>
                }
              </a>
            </li>

            {debug ?

              <div>
                <li><Link style={linkStyle} to={'/'}>Exit Menu</Link></li>
                <li><Link style={linkStyle} to={'/login'}>Login</Link></li>
                <li><Link style={linkStyle} to={'/actions'}>Action Menu</Link></li>
                <li><Link style={linkStyle} to={'/custom/create'}>Creation Menu</Link></li>
              </div>

            : null}
          </ul>
        </div>


        {debug ? <DebugRoute /> : null}

        {HUD ?
          <StatusRoute />
        : null}

        { children }
      </div>
    )
  }
}

export default RootRoute;