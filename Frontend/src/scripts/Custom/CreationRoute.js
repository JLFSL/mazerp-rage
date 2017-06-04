import Component from 'inferno-component';
import classnames from 'classnames';

// This variable should really be apart of the state...
const categoryList = [
  { id: 2, name: 'Hair' },
  { id: 3, name: 'Torso' },
  { id: 8, name: 'Undershirt' },
  { id: 11, name: 'Shirt' },
  { id: 4, name: 'Legs' },
  { id: 6, name: 'Feet' }
];

const faceList = [
  { id: 0, name: 'FF' },
  { id: 1, name: 'FF' },
  { id: 2, name: 'FF' },
  { id: 3, name: 'FF' },
  { id: 4, name: 'FF' },
  { id: 5, name: 'FF' },
  { id: 6, name: 'FF' },
  { id: 7, name: 'FF' },
  { id: 8, name: 'FF' },
  { id: 9, name: 'FF' },
  { id: 10, name: 'FF' },
  { id: 11, name: 'FF' },
  { id: 12, name: 'FF' },
  { id: 13, name: 'FF' },
  { id: 14, name: 'FF' },
  { id: 15, name: 'FF' },
  { id: 16, name: 'FF' },
  { id: 17, name: 'FF' },
  { id: 18, name: 'FF' },
  { id: 19, name: 'FF' }
];

const headBlendList = [
  { id: 0, name: 'Shape 1' },
  { id: 1, name: 'Shape 2' },
  { id: 2, name: 'Shape 3' },
  { id: 3, name: 'Skin 1' },
  { id: 4, name: 'Skin 2' },
  { id: 5, name: 'Skin 3' },
  { id: 6, name: 'Shape Mix' },
  { id: 7, name: 'Skin Mix' },
  { id: 8, name: 'Mix 3' }
];

const playerModels = {
  male: 'mp_m_freemode_01',
  female: 'mp_f_freemode_01'
};

class CreationRoute extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stage: 0,
      page: 0,
      first: '',
      last: '',
      gender: 0,
      rotation: 0,
      face: {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        11: 0,
        12: 0,
        13: 0,
        14: 0,
        15: 0,
        16: 0,
        17: 0,
        18: 0,
        19: 0
      },
      categories: {
        2: 0,
        3: 0,
        4: 0,
        6: 0,
        8: 0,
        11: 0
      },
      headBlend: {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleCatUp = this.handleCatUp.bind(this);
    this.handleCatDown = this.handleCatDown.bind(this);
    this.handleStage = this.handleStage.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleFaceChange = this.handleFaceChange.bind(this);
    this.togglePage = this.togglePage.bind(this);
    this.handleBlendCatUp = this.handleBlendCatUp.bind(this);
    this.handleBlendCatDown = this.handleBlendCatDown.bind(this);
    this.updateHeadBlend = this.updateHeadBlend.bind(this);
  }

  componentWillMount() {
    mp.trigger('toggleChat', false);
    mp.trigger('charCreation', true);
  }

  componentWillUnmount() {
    mp.trigger('toggleChat', true);
    mp.trigger('charCreation', false);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  updateHeadBlend(vars) {
    mp.trigger('updateHeadBlend', vars[0], vars[1], vars[2], vars[3], vars[4], vars[5], vars[6], vars[7], vars[8], false);
  }

  handleBlendCatUp(num) {
    const { headBlend } = this.state;
    this.setState({ headBlend: { ...headBlend, [num]: headBlend[num] + 1 } });

    this.updateHeadBlend({ ...headBlend, [num]: headBlend[num] - 1 });
  }

  handleBlendCatDown(num) {
    const { headBlend } = this.state;
    this.setState({ headBlend: { ...headBlend, [num]: headBlend[num] - 1 } });

    this.updateHeadBlend({ ...headBlend, [num]: headBlend[num] - 1 });
  }

  handleGender(gender) {
    this.setState({
      gender: playerModels[gender],
      categories: {
        2: 0,
        3: 0,
        4: 0,
        6: 0,
        8: 0,
        11: 0
      }
    });

    mp.trigger('updatePlayerModel', playerModels[gender]);
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

  handleStage(value) {
    const { stage } = this.state;

    if ((stage + value) == 3) {
      mp.trigger('moveCamera', 402.8, -997, -98.35);
    }

    if(stage == 3 && (stage + value) !== 3) {
      mp.trigger('moveCamera', 403, -999, -99);
    }

    this.setState({
      stage: (stage + value)
    });
  }

  handleConfirm() {
    console.log('CONFIRMED');
  }

  handleFaceChange(e) {
    const { face } = this.state;

    this.setState({
      face: { ...face, [e.target.name]: (e.target.value / 100) }
    });

    mp.trigger('updateFace', e.target.name, (e.target.value / 100));
  }

  togglePage() {
    const { page } = this.state;

    this.setState({ page: (page === 0 ? 1 : 0) });
  }

  render() {
    const { first, last, face, stage, page } = this.state;

    return (
      <div style={{ width: '100%', height: '100%;' }}>
        <form id="character_creation">
          <div class="col-xs-2 menu-slim" style={{ right: '-35px', 'padding-left': '0px' }}>
            <div class="menu-header">
              <div class="menu-heading">Create Character</div>
            </div>
            <div class="menu-main col-xs-12">

              {stage === 0 ?
                <div>
                  <div class="sub-header" style={{ 'margin-top': '5px' }}>Enter a name</div>
                  <div class="selection-row row">
                    <input name="first" class="announce-input col-xs-5 first-name" placeholder="First Name" value={first} onChange={this.handleChange} />
                    <input name="last" class="announce-input col-xs-5 last-name" placeholder="Last Name" value={last} onChange={this.handleChange} />
                  </div>

                  <div class="sub-header" style={{ 'margin-top': '15px' }}>Body</div>

                  <div class="selection-row cc-row row">
                    <div class="selection-button-left" onClick={() => { this.handleGender('male'); }}><i class="fa fa-male" aria-hidden="true"></i></div>
                    <div class="selection-caption">Gender</div>
                    <div class="selection-button-right" onClick={() => { this.handleGender('female'); }}><i class="fa fa-female" aria-hidden="true"></i></div>
                  </div>
                </div>
              : null}


              {stage === 1 ?
                <div>

                  {headBlendList.map((head) => (
                    <div class="selection-row cc-row row">
                      <div class="selection-button-left" onClick={() => { this.handleBlendCatDown(head.id); }}><i class="fa fa-arrow-left" aria-hidden="true"></i></div>
                      <div class="selection-caption">{head.name}</div>
                      <div class="selection-button-right" onClick={() => { this.handleBlendCatUp(head.id); }}><i class="fa fa-arrow-right" aria-hidden="true"></i></div>
                    </div>
                  ))}

                </div>
              : null }

              {stage === 2 ?
                <div>
                  <div class="sub-header" style={{ 'margin-top': '15px' }}>Overall</div>

                  {categoryList.map((cat) => (
                    <div class="selection-row cc-row row">
                      <div class="selection-button-left" onClick={() => { this.handleCatDown(cat.id); }}><i class="fa fa-arrow-left" aria-hidden="true"></i></div>
                      <div class="selection-caption">{cat.name}</div>
                      <div class="selection-button-right" onClick={() => { this.handleCatUp(cat.id); }}><i class="fa fa-arrow-right" aria-hidden="true"></i></div>
                    </div>
                  ))}

                </div>
              : null}

              {stage === 3 ?
                <div>
                  <div class="sub-header" style={{ 'margin-top': '15px' }}>Face Features</div>

                  <div>
                    <div class={classnames('selection-button-full', { 'button-red': (page === 1), 'button-green': (page === 0) })} onClick={() => { this.togglePage(); }}>{page === 0 ? 'More Options' : 'Previous Options'}</div>
                  </div>

                  {faceList.map((cat, i) => {
                    if ((page * 10) > i || i > (page * 10 + 10)) return null;

                    return (
                      <div class="selection-row cc-row row">
                        <div class="selection-caption small">{cat.name}</div>
                        <input class="range" style={{ width: '60%', padding: '0 2.5%', float: 'left', background: 'rgba(0,0,0,0)' }} name={cat.id} type="range" min={0} max={100} step={1} defaultValue={0} value={face[cat.id] * 100} onChange={this.handleFaceChange} />
                      </div>
                    );
                  })}

                </div>
              : null}

              {stage === 4 ?
                <div style={{ 'color': '#FFFFFF', 'text-align': 'center' }}>
                  <h1>Are you sure?</h1>
                  <p>Once you click confirm, you will no longer be able to make changes to your characters physical appearance!</p>
                </div>
              : null}

              <div class="selection-row row" style={{ 'margin-top': '10px', 'margin-left': '-5px' }}>
                {stage > 0 ? <div class="selection-button-full button-red" onClick={() => { this.handleStage(-1); }}>Go Back</div> : null}
                {stage < 4 ? <div class="selection-button-full button-green" onClick={() => { this.handleStage(1); }}>Next Step</div> : null}
                {stage === 4 ? <div class="selection-button-full button-green" onClick={() => { this.handleConfirm(); }}>Confirm</div> : null}
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default CreationRoute;