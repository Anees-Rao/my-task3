 const ButtonGroup = () => {
    const sayHello=()=>{
        alert('Your Click Handler!');
       
    }

    
    const display=()=>{
        console.log("Hello this is handler function")
        alert("Message")
    }
        return (
          <div>
            <button onClick={sayHello}>ClickHandler</button>;
            <button onClick={display}>ClickAgain</button>;
            
            
            
          </div>
        );
      };
      
      export default ButtonGroup;

 
  