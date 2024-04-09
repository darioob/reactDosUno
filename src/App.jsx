import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Contacto, Home, NotFound } from './layouts'
import Menu from './components/Menu'

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
