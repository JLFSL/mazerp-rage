import Component from 'inferno-component';
import { Router } from 'inferno-router';

class LoginRoute extends Component {
  constructor(props) {
    super(props);

    this.handleExit = this.handleExit.bind(this);
    this.checkWallet = this.checkWallet.bind(this);
  }

  checkWallet() {
    console.log('mp.trigger checkWallet here ~~ disabled for demo');
    // mp.trigger('checkWallet');
  }

  handleExit() {
    window.app.history.push("/");
  }

  render() {
    return (
      <form id="action_menu">
        <div class="col-md-2 menu-slim" style={{ right: '-35px' }}>
          <div class="menu-header">
            <div class="menu-heading">Action Menu</div>
          </div>
          <div class="menu-main col-xs-12">
            <div class="sub-header">Inventory</div>
            <div class="selection-row selection-row-slim">
              <div class="selection-simple" onClick={this.checkWallet}>Check Wallet</div>
              <div class="selection-simple selection-selected">Simple Item 2 Slim</div>
              <div class="selection-simple">Simple Item 3 Slim</div>
            </div>
            <div class="selection-row">
              {/* <div class="selection-button-full" type="submit">Select</div> */}
              <div class="selection-button-full button-red" id="exit" onClick={this.handleExit}>Exit</div>
            </div>
          </div>
        </div>
        <div class="col-md-8"> </div>
        <div class="col-md-2 menu"> </div>
      </form>
    )
  }
}

export default LoginRoute;