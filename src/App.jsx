import './app.css';
import CardList from './components/CardList'; 
import Hero from './components/Hero';
import Header from './components/Header';
import {Author} from './components/Author';

const App = () => {
  return (
    <div>
      <div className="container">
        <Header />
        <Hero />
        <CardList />
        <Author />
      </div>
    </div>
  );
}
export default App;
