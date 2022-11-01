import React from 'react'
import './linktree.css'

export default function Linktree(){
//<img className='logo' src={require(`./images/arrow.PNG`)} alt='' />

    return (
        <>
    <div className='main'>
        <a className='three' href='https://github.com/Topmark1'><img className='arrow' src={require(`./images/arrow.PNG`)} alt='' /></a>
        <div className='body'>
            <div className='profile'><img className='logo' src={require(`./images/profile.PNG`)} alt='' /></div>
            <h1 className='at'>@topmarktech</h1>
            <div className='link'><a className='links' href='https://twitter.com/TechTopmark?t=ox1kEo0Eqkcss6FWtPZcRQ&s=09'>Twitter Link</a></div>
            <div className='link'><a className='links' href='https://training.zuri.team/'>Zuri Team</a></div>
            <div className='link'><a className='links' href='https://books.zuri.team/'>Zuri Books</a></div>
            <div className='link'><a className='links' href='https://books.zuri.team/phython-for-beginners?ref_id=Topmark'>Phython Books</a></div>
            <div className='link' id='long'><a className='links' href='https://background.zuri.team/'>Background Check for Codes</a></div>
            <div className='link'><a className='links' href='https://training.zuri.team/design-rules'>Design Books</a></div>
            <div className='brand1'>
                <img className='logo1' src={require(`./images/slack.PNG`)} alt='' />
                <a className='links' href='https://github.com/Topmark1'><img className='logo1' src={require(`./images/github.PNG`)} alt='' /></a>
            </div>
            <div className='brand2'>
                <img className='logo2' src={require(`./images/zuri.PNG`)} alt='' />
                <img className='logo2' src={require(`./images/hng.PNG`)} alt='' />
                <img className='logo2' src={require(`./images/ingressive.PNG`)} alt='' />
            </div>
        </div>
    </div>
        </>)
}

