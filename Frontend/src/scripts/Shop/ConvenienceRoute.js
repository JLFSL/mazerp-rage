import Component from 'inferno-component';

class ConvenienceRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {
    return (
      <form id="shop">
        <div class="col-xs-8 col-xs-offset-2 announce-box">
          <div class="window-menu">
            <div class="window-header">San Fransisco 24/7</div>
            <div class="window-main" style={{ height: '330px' }}>

              <div class="window-row row">
                <div class="col-xs-5 window-item">
                  <div class="window-item-header">Pizza Bite</div>
                  Right out of the oven! Well, at least the package says so...
                  </div>
                <div class="col-xs-2 window-amount">
                  <div class="window-amount-header">Amount</div>
                  <div class="window-amount-button window-amount-button-active" data-val="1">1</div>
                  <div class="window-amount-button" data-val="5">5</div>
                  <div class="window-amount-button" data-val="10">10</div>
                </div>
                <div class="col-xs-2 window-value">$3</div>
                <div class="col-xs-2 window-purchase" data-propername="Pizza Bites" data-price="3" data-item="pizzaBite" data-amount="1">Purchase</div>
                <div class="col-xs-1 window-add-to-cart"> <i class="fa fa-cart-plus" aria-hidden="true"></i> </div>
              </div>

            <div class="window-row row">
              <div class="col-xs-5 window-item">
                  <div class="window-item-header">Salad</div>
                  The dressing looks a bit dilute, but at least you stay healthy!</div>
                <div class="col-xs-2 window-amount">
                  <div class="window-amount-header">Amount</div>
                  <div class="window-amount-button window-amount-button-active" data-val="1">1</div>
                  <div class="window-amount-button" data-val="5">5</div>
                  <div class="window-amount-button" data-val="10">10</div>
                </div>
                <div class="col-xs-2 window-value">$3</div>
                <div class="col-xs-2 window-purchase" data-propername="Salad" data-price="3" data-item="salad" data-amount="1">Purchase</div>
                <div class="col-xs-1 window-add-to-cart"> <i class="fa fa-cart-plus" aria-hidden="true"></i> </div>
              </div>

            <div class="window-row row">
              <div class="col-xs-5 window-item">
                  <div class="window-item-header">Water</div>
                  Refreshing!</div>
                <div class="col-xs-2 window-amount">
                  <div class="window-amount-header">Amount</div>
                  <div class="window-amount-button window-amount-button-active" data-val="1">1</div>
                  <div class="window-amount-button" data-val="5">5</div>
                  <div class="window-amount-button" data-val="10">10</div>
                </div>
                <div class="col-xs-2 window-value">$1</div>
                <div class="col-xs-2 window-purchase" data-propername="Water" data-price="1" data-item="water" data-amount="1">Purchase</div>
                <div class="col-xs-1 window-add-to-cart"> <i class="fa fa-cart-plus" aria-hidden="true"></i> </div>
              </div>

             <div class="window-row row">
              <div class="col-xs-5 window-item">
                  <div class="window-item-header">Soda</div>
                  Tired of drinking water? How about some soda...</div>
                <div class="col-xs-2 window-amount">
                  <div class="window-amount-header">Amount</div>
                  <div class="window-amount-button window-amount-button-active" data-val="1">1</div>
                  <div class="window-amount-button" data-val="5">5</div>
                  <div class="window-amount-button" data-val="10">10</div>
                </div>
                <div class="col-xs-2 window-value">$1</div>
                <div class="col-xs-2 window-purchase" data-propername="Soda" data-price="1" data-item="soda" data-amount="1">Purchase</div>
                <div class="col-xs-1 window-add-to-cart"> <i class="fa fa-cart-plus" aria-hidden="true"></i> </div>
              </div>

             <div class="window-row row">
              <div class="col-xs-5 window-item">
                  <div class="window-item-header">Repair Kit</div>
                  Because you never know what happens!</div>
                <div class="col-xs-2 window-amount">
                  <div class="window-amount-header">Amount</div>
                  <div class="window-amount-button window-amount-button-active" data-val="1">1</div>
                  <div class="window-amount-button" data-val="5">5</div>
                  <div class="window-amount-button" data-val="10">10</div>
                </div>
                <div class="col-xs-2 window-value">$35</div>
                <div class="col-xs-2 window-purchase" data-propername="Repair Kit" data-price="35" data-item="repairKit" data-amount="1">Purchase</div>
                <div class="col-xs-1 window-add-to-cart"> <i class="fa fa-cart-plus" aria-hidden="true"></i> </div>
              </div>

            </div>
            <div class="window-cart">
              <div class="col-xs-4 window-cart-header"><i class="fa fa-shopping-cart" aria-hidden="true"></i></div>
              <div class="col-xs-2 window-cart-total">Total</div>
              <div class="col-xs-1 window-cart-sum">$0</div>
              <div class="col-xs-3 window-cart-checkout" type="submit" id="shop_checkout">Checkout</div>
            </div>
            <div class="window-cart-detail" id="window-cart-detail">
              <div class="window-cart-detail-row row" id="window-cart-row-copy" style={{ display: 'none' }}>
                <div class="col-xs-5 window-cart-detail-name">Scissors</div>
                <div class="col-xs-2 window-cart-amount">10x</div>
                <div class="col-xs-2 window-cart-price">$30000</div>
                <div class="window-cart-detail-button">Remove</div>
              </div>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default ConvenienceRoute;