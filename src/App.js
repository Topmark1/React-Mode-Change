
import './App.css';
import React from 'react'
import {Linktree} from './linktree/linktree.js'
import {Contact} from './linktree/contact.js'
import {Route, Routes} from 'react-router-dom'
//import ModeChange from './modeChange/modeChange.js'// <ModeChange/>

export default function App() {
    return (
    <>
    <Routes>
    <Route  path='/'>    
    <Route path="/Contact" element={<Linktree/>} />
    <Route index element={<Contact/>} />
    </Route>
    </Routes>
    </>)
}