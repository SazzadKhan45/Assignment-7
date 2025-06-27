import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Herobanner from './Components/Herobanner/Herobanner'
import Players from './Components/Players/Players'
import { ToastContainer, toast } from 'react-toastify';

function App() {

  const [freeCredit, setFreeCridit] = useState(0);



  // Free Cridit add handler
  const handleFreeCridt = cridit => {
    toast('Free cridit added')
    const addCridit = freeCredit + 150000;
    const newCriditAdded = addCridit + cridit;
    setFreeCridit(newCriditAdded);

  }

  return (
    <>
      <div className='max-w-7xl mx-auto bg-gray-200 px-2'>
        <Header freeCredit ={freeCredit} ></Header>
        <Herobanner handleFreeCridt = {handleFreeCridt}
        ToastContainer = {ToastContainer}
        ></Herobanner>
      </div>

      <div className='max-w-7xl mx-auto'>
        <Players></Players>
      </div>




      <div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
