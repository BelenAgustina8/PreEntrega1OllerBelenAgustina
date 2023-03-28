
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContaier from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
    <NavBar />
    <ItemListContaier greeting={'Bienvenidos'}/>
    </div>
  );
}

export default App;
