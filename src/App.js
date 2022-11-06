
import './App.css';
import React from 'react'
import {Linktree} from './linktree/linktree.js'
import ModeChange from './modeChange/modeChange.js'
import {Contact} from './linktree/contact.js'
import {Route, Routes} from 'react-router-dom'


export default function App() {
    return (
    <Routes>
    <Route path="/" element={<Linktree />} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/mode" element={<ModeChange/>} />
    </Routes>
    )
}