import React, {useState} from 'react';

 function Test (props) {
     console.log(props)
    const [clicksNumber, setClicksNumber] = useState(0)
    const incrementClicks = () => {
        setClicksNumber(clicksNumber+1)
    }
    const sendNumber= ( e) => {
        e.stopPropagation()
        props.onGetNumber(clicksNumber)
    }
    return <div 
    onClick={() => incrementClicks()}
    style={{backgroundColor: props.backgroundColor}}>
        I clicked {clicksNumber} time(s)

        <span 
        style={{color: "blue", marginLeft: "20px"}}
        onClick={sendNumber}> get numbers </span>
    </div>
}

export default Test;