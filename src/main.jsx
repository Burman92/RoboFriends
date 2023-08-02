import React from 'react'
import ReactDOM from 'react-dom/client'
import CardList from './assets/CardList'
import './index.css'
import "tachyons"
import { robots } from './assets/robots'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CardList robots = {robots} />
  </React.StrictMode>,
)
