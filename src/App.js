import './App.css';
import { ItemListContainer } from './Components/ItemListContainer';
import { NavBar } from './Components/NavBar';


function App() {
  return (
    <>
    <div className='body'>
    <NavBar/>
    <ItemListContainer greetings='Buenas Tardes a todos!'/>  
    </div>
    </>
  );
}

export default App;
