import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  let misEstudios={backgroundColor:"lightgray"};
  let titulo ="Hola"

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}



export default App;