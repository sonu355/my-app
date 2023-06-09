import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import Alert  from './components/Alert';


function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="write here" mode={mode} />
      </div>
    </>
  )
}
export default App;
