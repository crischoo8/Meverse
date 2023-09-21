import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import JournalPage from './pages/JournalPage'
import EditJournalPage from './pages/EditJournalPage'
import EditPage from './components/Edit Page (WIP)/EditPage'
function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Journal" element={<JournalPage />}></Route>
        <Route path="/EditJournal" element={<EditJournalPage />}></Route>
        <Route path="/EditPage" element={<EditPage />}></Route>
      </Routes>
    </>
  )
}

export default App
