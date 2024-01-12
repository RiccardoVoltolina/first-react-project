import './App.css'
import { useState } from 'react';

import axios from 'axios'


function App() {
  function Square() {
    return <button className="square">X</button>;
  }
  return (
    <>
      <div><Square /></div>
    </>
  )
}
export default App