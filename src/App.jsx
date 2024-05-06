import { useEffect } from 'react'
import Navbar from './components/Navbar'
import { calulateTotal } from './features/products/productSlice'
import { useDispatch } from 'react-redux'
import ProductsList from './components/ProductsList'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calulateTotal())

  },[])
  return (
    <div className='max-w-4xl mx-auto mb-10 '>
      <Navbar/>
      <ProductsList/>
     
    </div>
  )
}

export default App