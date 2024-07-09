import React from 'react'
import { Route,Routes } from 'react-router-dom'
import   Home   from './pages/Home'
import ShowBooks from './pages/ShowBooks'
import DeleteBooks from './pages/DeleteBooks'
import EditBook from './pages/EditBook'
import CreateBooks from './pages/CreateBooks'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/books/create' element={ <CreateBooks />}/>
      <Route path='/books/show/:id' element={<ShowBooks />}/>
      <Route path='/books/delete/:id' element={<DeleteBooks />}/>
      <Route path='/books/edit/:id' element={<EditBook />}/>
    </Routes>
  )
}

export default App