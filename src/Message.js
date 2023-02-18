function Message(props){
    const Issuccess=props.Issuccess
    // const IsError=props.IsError
    if(Issuccess){
        return (
            <div>
                <h1>Success Message</h1>
             <h1>The Message is Successful: true</h1>;
             </div>
        )
    }
    else{
        return (
            <div>
                <h1>Error Message</h1>
             <h1>Your Message has an Error: false </h1>;
             </div>
        )
    }

}

export default Message