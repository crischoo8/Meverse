import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import JournalPage from './pages/JournalPage'
function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Journal" element={<JournalPage />}></Route>
      </Routes>
    </>
  )
}

export default App
