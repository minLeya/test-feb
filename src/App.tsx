import './App.module.scss'
import Header from './components/Header/Header'
import SearchSection from './components/SearchSection/SearchSection'
import SlideSection from './components/SlideSection/SlideSection'
import EventsSection from './components/EventsSection/EventsSection'

function App() {


  return (
    <div>
      <Header/>
      <SlideSection/>
      <SearchSection/>
      <EventsSection/>
    </div>
  )
}

export default App