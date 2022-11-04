
import './App.css';
import React from 'react'
import {Linktree} from './linktree/linktree.js'
import {Contact} from './linktree/contact.js'
import {Route, Routes} from 'react-router-dom'
//import ModeChange from './modeChange/modeChange.js'// <ModeChange/> <Link to='/contact'>contact</Link>
//<Linktree />
export default function App() {
    return (
    <Routes>
    <Route path="/" element={<Linktree />} />
    <Route path="/contact" element={<Contact/>} />
    </Routes>
    )
}