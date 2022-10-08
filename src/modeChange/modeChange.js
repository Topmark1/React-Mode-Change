import React from 'react'
import './ModeChange.css'
import Header from './Header.js'
import Body from './Body.js'

export default function ModeChange(){
   
const [sty,changesty] = React.useState(false)
function Change(){
return changesty(aa=> !aa)
}
let style
sty?style=({whitebg:{backgroundColor:'rgb(117, 240, 240)'},
bodycolor:{backgroundColor:'transparent',border:'4px solid rgb(117, 240, 240)'},
    darkcolor:{color:'rgb(0, 32, 32)'},
darkbg:{backgroundColor:'rgb(0, 32, 32)'},
buttonm:{backgroundColor:'white',margin:'1px 1px 1px 19px'},
boldmode:{color:'rgb(0, 32, 32)',fontWeight:700},
light:{color:'rgb(0, 32, 32)',fontWeight:100}}):style={};

    return (
        <>
        <Header style={style} Change={Change}/>
        <Body style={style}/>
        </>)
}

