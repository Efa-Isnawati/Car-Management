import './App.css';
import Jumbotron from './components/Landing Page/Jumbotron/Jumbotron'
import Main from './components/Landing Page/Main/Main'
import Card from './components/Landing Page/Card/Card'
import Carousel from './components/Landing Page/Carousel/Carousel'
import Banner from './components/Landing Page/Banner/Banner'
import Accordion from './components/Landing Page/Accordion/Accordion'

function App() {
  return (
    <div className="App">
        <div>
          <Jumbotron />
          <Main />
          <Card />
          <Carousel />
          <Banner />
          <Accordion />
        </div>
    </div>
  );
}

export default App;
