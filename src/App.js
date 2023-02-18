import './App.css';
import Message from './Message';

import ButtonGroup from './Button';


function App() {
  return (
    <div className="App">
    
    <Message Issuccess = {true}/> 
     <Message IsError = {false}/>
    <ButtonGroup/>
    </div>
  );
}

export default App;
