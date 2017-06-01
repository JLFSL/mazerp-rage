import Component from 'inferno-component';

class DebugRoute extends Component {
  constructor(props) {
    super(props);

    this.state = {
      consoleData: []
    };

    this.handleConsole = this.handleConsole.bind(this);
    this.handleError = this.handleError.bind(this);

    console.log = this.handleConsole;
    console.info = this.handleConsole;
    console.error = this.handleConsole;
    console.debug = this.handleConsole;
    window.onerror = this.handleError;
  }

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

    const listStyle = {
      'list-style': 'none'
    }

    return (
      <div style={style}>
        <h4 style={{ 'padding-left': '15px' }}>Debug Console</h4>
        <ul style={listStyle}>
          {consoleData.map((value) => (<li>{value}</li>))}
        </ul>
      </div>
    )
  }
}

export default DebugRoute;