import React from 'react'
import Home from './pages/Home'
import Header from './component/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Search from './pages/Search'
import Detailes from './pages/Detailes'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'


function App() {

  const queryClient = new QueryClient()
  return (
   <>
   <QueryClientProvider client={queryClient}>
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route path='/product/:id' element={<Detailes/>}></Route>
      </Routes>
    

     </BrowserRouter>
     </QueryClientProvider>
   </>
   
  )
}

export default App
