
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContaier from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element= {<ItemListContaier />}/>
          <Route path='/category/:categoryId' element= {<ItemListContaier />}/>
          <Route path='/item/:itemId' element= {<ItemListContaier />}/>
          <Route path='*' element= {<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
