import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import Heroteste from './components/Herotest'
import Navbar from './components/Navbar'


function App() {

  return (
    <>
      <Navbar />
      <Heroteste />
      <Card 
        title={"teste"}
        description={"teste"}
        showExtraButton
      />
      <Footer />
    </>
  )
}

export default App
