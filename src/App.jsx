import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComponent from './components/navbar/';
import ItemListContainer from './containers/ItemListContainer';


const App = () => {
  return (
    <>
    <NavbarComponent />
    
    <ItemListContainer greeting={"Listado de articulos"}/>

    </>
  );
}

export default App;
