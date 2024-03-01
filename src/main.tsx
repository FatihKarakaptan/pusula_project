import React from 'react'
import ReactDOM from 'react-dom/client'
import Playground from './Playground.tsx'
import './global.d.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Playground />
  </React.StrictMode>,
)
