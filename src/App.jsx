
import Navigation from './assets/Navigation'
import Intro from './assets/Intro'
import Content from './assets/Content'
import Footer from './assets/Footer'
import './App.css'
import data from './data'

function App() {
  
  const cards = data.map( item => {
    return (
      <Content 
          key={item.id}
          {...item}
         
      />

    )
  })
  console.log(cards)
  return (
    <div className="App">
      <Navigation />
      <Intro />
      <section className='card-list' >{cards}</section>
      <Footer />        
    </div>
  )
}



export default App
