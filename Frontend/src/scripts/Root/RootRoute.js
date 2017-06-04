import Component from 'inferno-component';
import { Link } from 'inferno-router';

import DebugRoute from '../Debug/DebugRoute';
import StatusRoute from '../Status/StatusRoute';

class RootRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HUD: true // Show Hud?
    }
  }

  render() {
    const { children } = this.props;
    const { HUD } = this.state;

    const sidebar = {
      width: '200px',
      background: 'rgba(0,0,0,0.75)',
      position: 'absolute',
      right: '0',
      top: '200px',
      padding: '15px',
      color: 'white'
    };

    const linkStyle = { color: 'white' };

    return (
      <div>
        <div style={sidebar}>
          <h4>Dev Demo</h4>
          <ul>
            <li><Link style={linkStyle} to={'/'}>Close All</Link></li>
            <li><Link style={linkStyle} to={'/login'}>Login</Link></li>
            <li><Link style={linkStyle} to={'/actions'}>Action Menu</Link></li>
            <li><Link style={linkStyle} to={'/custom/create'}>Creation Menu</Link></li>
          </ul>
        </div>

        <DebugRoute />

        {HUD ?
          <StatusRoute />
        : null}

        { children }
      </div>
    )
  }
}

export default RootRoute;