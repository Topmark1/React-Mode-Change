import React from 'react'
export default function Intro(props){
    const [id, setit]= React.useState(true)
    
    let aaa
    id === true?aaa = "Hell is real":aaa = 'crazy'
    function change(){
        //setit('Hi')
        setit(id=> !id )
    }
    
    return (<>
        <h1 onClick={change}>I am working fine {props.data[2]}</h1>

        <div>{aaa}</div>
    </>
        )
}