import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './assets/Card'
import './index.css'
import "tachyons"
import { robots } from './assets/robots'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Card id = {robots[1].id} name = {robots[1].name} email = {robots[1].email}/>
  </React.StrictMode>,
)
