import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <header className="header">
        <NavBar />
      </header>
      <main>
        <ItemListContainer greeting={'FutStar- Tu tienda de estrellas'} />
      </main>
    </>

  );
}

export default App;
