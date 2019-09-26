import React from 'react';
import logo from './logo.svg';
import './App.css';
import socketIO from 'socket.io-client'
const socket = socketIO('http://localhost:4000', {      
    transports: ['websocket'], jsonp: false }); 
class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
      connection:''
    }
  }

  componentDidMount(){  
    socket.connect(); 
    socket.on('connect', (socket) => { 
      console.log("connected")
  });
  socket.on('msg', (msg)=>{
    console.log(msg)
    this.setState({connection: msg})
  }) 
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" onClick={()=>socket.emit('click','')}/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.connection}
          </a>
        </header>
      </div>
    );
  }
  
}

export default App;
