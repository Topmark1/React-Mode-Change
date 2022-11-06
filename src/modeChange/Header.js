import React from 'react'
import logo from '../images/logo.PNG'

export default function Header(props){

    return (
    <>
<div className='header' style={props.style.whitebg}>
    <img src={logo} alt='logo' className='logomode'/>
<h2 className='title'>CODE WAY OF LIFE</h2>
<p className='lightText' style={props.style.light}>Light</p>
<div className='buttonBorder' style={props.style.darkbg}><div className='buttonCircle' style={props.style.buttonm} onClick={props.Change}></div></div>
<p className='darkText' style={props.style.boldmode}>Dark</p>
</div>
   </>)
}