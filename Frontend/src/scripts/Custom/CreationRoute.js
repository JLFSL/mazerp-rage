import Component from 'inferno-component';

const categoryList = [
  { id: 0, name: 'Hats' },
  { id: 1, name: 'Masks' },
  { id: 2, name: 'Hair' },
  { id: 3, name: 'Torso' },
  { id: 4, name: 'Legs' },
  { id: 5, name: 'Hands' },
  { id: 6, name: 'Feet' }
];

class CreationRoute extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: '',
      last: '',
      gender: 0,
      rotation: 0,
      categories: {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleCatUp = this.handleCatUp.bind(this);
    this.handleCatDown = this.handleCatDown.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentWillMount() {
    document.onkeydown = this.handleKeyPress;
    mp.trigger('toggleChat', false);
    mp.trigger('charCreation', true);
  }

  componentWillUnmount() {
    document.onkeydown = null;
    mp.trigger('toggleChat', true);
    mp.trigger('charCreation', false);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleGender(value) {
    this.setState({ gender: value });
  }

  handleCatUp(cat) {
    const { categories } = this.state;
    this.setState({ categories: { ...categories, [cat]: categories[cat] + 1 } });

    mp.trigger('updateChar', cat, (categories[cat]+1));
  }

  handleCatDown(cat) {
    const { categories } = this.state;
    this.setState({ categories: { ...categories, [cat]: categories[cat] - 1 } });

    mp.trigger('updateChar', cat, (categories[cat]-1));
  }

  handleKeyPress(e) {
    const { rotation } = this.state;
    var newRot = rotation;

    if (e.key === 'ArrowLeft') {
      newRot -= 5;
    }

    if (e.key === 'ArrowRight') {
      newRot += 5;
    }

    if (newRot > 360) {
      newRot = 0;
    } else if (newRot < 0) {
      newRot = 360;
    }

    this.setState({ rotation: newRot });
    mp.trigger('setRot', newRot);

    return e;
  }

  render() {
    const { first, last } = this.state;

    return (
      <div style={{ width: '100%', height: '100%;' }} onKeyDown={this.handleKeyPress}>
        <form id="character_creation">
          <div class="col-xs-2 menu-slim" style={{ right: '-35px', 'padding-left': '0px' }}>
            <div class="menu-header">
              <div class="menu-heading">Create Character</div>
            </div>
            <div class="menu-main col-xs-12">
              <div class="col-xs-12"  style={{ 'margin-top': '5px' }}></div>
              <div class="sub-header">Enter a name</div>
              <div class="selection-row row">
                <input name="first" class="announce-input col-xs-5 first-name" placeholder="First Name" value={first} onChange={this.handleChange} />
                <input name="last" class="announce-input col-xs-5 last-name" placeholder="Last Name" value={last} onChange={this.handleChange} />
              </div>
              <div class="col-xs-12"  style={{ 'margin-top': '15px' }}></div>
              <div class="sub-header">Overall</div>
              <div class="selection-row cc-row row">
                <div class="selection-button-left" onClick={() => { this.handleGender(0); }}><i class="fa fa-male" aria-hidden="true"></i></div>
                <div class="selection-caption">Gender</div>
                <div class="selection-button-right" onClick={() => { this.handleGender(1); }}><i class="fa fa-female" aria-hidden="true"></i></div>
              </div>

              {categoryList.map((cat) => (
                <div class="selection-row cc-row row">
                  <div class="selection-button-left" onClick={() => { this.handleCatDown(cat.id); }}><i class="fa fa-arrow-left" aria-hidden="true"></i></div>
                  <div class="selection-caption">{cat.name}</div>
                  <div class="selection-button-right" onClick={() => { this.handleCatUp(cat.id); }}><i class="fa fa-arrow-right" aria-hidden="true"></i></div>
                </div>
              ))}

              <div class="col-xs-12"  style={{ 'margin-top': '10px' }}></div>
              <div class="selection-row row" style={{ 'margin-left': '-5px' }}>
                <div class="selection-button-full button-green" type="submit" data-trigger="">Confirm</div>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default CreationRoute;