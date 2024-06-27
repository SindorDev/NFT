import './App.css'
import Collection from './components/collection/Collection'
import Hero from './components/hero/Hero'
import Leader from './components/leader/Leader'
import Nav from './components/nav/Nav'
import Trending from './components/trending/Trending'

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Trending />
      <Collection />
      <Leader /> 
    </>
  )
}

export default App
