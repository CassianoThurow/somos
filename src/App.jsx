import './App.css'
import Card from './components/Card'
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
    </>
  )
}

export default App
