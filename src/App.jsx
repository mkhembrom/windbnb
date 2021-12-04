import './app.css';
import CardList from './components/CardList'; 
import Hero from './components/Hero';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <div className="container">
        <Header />
        <Hero />
        <CardList />
      </div>
    </div>
  );
}
export default App;
