import Component from 'inferno-component';

class DebugRoute extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      consoleData: []
    };

    this.handleConsole = this.handleConsole.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCodeRun = this.handleCodeRun.bind(this);

    console.log = this.handleConsole;
    console.info = this.handleConsole;
    console.error = this.handleConsole;
    console.debug = this.handleConsole;
    window.onerror = this.handleError;
  }

  // player.taskPlayAnim(animDictionary, animationName, speed, speedMultiplier, duration, flag, playbackRate, lockX, lockY, lockZ);

  componentDidMount() {
    console.log('Debug Console Initalized');
  }

  handleError(e, url, lineNumber, column) {
    console.log(`Error: ${e}`);
    console.log(`At: ${url} ${lineNumber}:${column}`);
    return true;
  }

  handleConsole(e) {
    const { consoleData } = this.state;
    const newData = consoleData;
    newData.unshift(e.toString());

    // Perge old logs that we don't need
    if (newData.length > 10) {
      newData.length = 10;
    }

    this.setState({ consoleData: newData });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleCodeRun() {
    mp.trigger('runCode', this.state.input);
  }

  render() {
    const { consoleData } = this.state;

    const style = {
      width: '600px',
      height: '200px',
      background: 'rgba(0,0,0,0.8)',
      color: 'white',
      position: 'absolute',
      bottom: '0',
      right: '0'
    };

    const inputStyle = {
      width: '600px',
      height: '50px',
      background: 'rgba(0,0,0,0.8)',
      position: 'absolute',
      bottom: '200px',
      right: '0'
    };

    const listStyle = {
      'list-style': 'none'
    }

    return (
      <div>
        <div style={inputStyle}>
          <input style={{ width: '80%', height: '50px', float: 'left' }} value={this.state.input} name="input" onChange={this.handleChange} />
          <button style={{ width: '20%', height: '50px', float: 'left' }} onClick={this.handleCodeRun}>Run</button>
        </div>
        <div style={style}>
          <h4 style={{ 'padding-left': '15px' }}>Debug Console</h4>
          <ul style={listStyle}>
            {consoleData.map((value) => (<li>{value}</li>))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DebugRoute;