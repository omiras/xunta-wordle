import './App.css'
import Keyboard from './Keyboard';
import Letter from './Letter.jsx';


/** Pascal Case - Tienen que empezar por mayúsculas */
function Navbar() {
  return (<div className='navbar'>
    <p>La palabra del día</p>
  </div>);
}

function Footer() {

  const styles = {
    backgroundColor: '#cccccc',
    padding: '0.8rem'
  };

  return (<footer style={styles}>
    <p>Soy un Footer, creeme.</p>
  </footer>)
}


/**
 * Componente funcional. Retornando JSX
 * 
 * 1. Me gustaría mostrar la fecha actual en la que nos encontramos
 * 
 */
function App() {

  const currentDate = new Date();
  const srcImage = "https://cdn2.thecatapi.com/images/9c8.jpg";

  const showKeyboard = true; // ocultar el teclado virtual
  const isOkApp = true; // nos indica si la app está funcionando bien. Queremos que si no funciona bien, no mostrar la App y mostrar algún mensaje de "vuelve más tarde"
  const fancyDate = false; // indica si queremos formatear la fecha actual
  let messageDate;

  if (fancyDate) {
    messageDate = <h2>{currentDate.toLocaleString()}</h2>;

  } else {
    messageDate = <h2>{currentDate.toJSON()}</h2>
  }

  if (!isOkApp) {
    return <h1>Algo va mal...vuelve más tarde...</h1>
  }

  return (
    <div>
      <Navbar />
      <h1>Wordle</h1>
      {messageDate}
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        width: '50%',
        margin: '0.2rem auto'
      }}>
        <Letter char="j" color="#757575" />
        <Letter char="u" color="#757575" />
        <Letter char="e" color="#757575" />
        <Letter char="g" color={"#" + "e4a81d"} />
        <Letter char="o" color="green" />
      </div>
      {/* <img src={srcImage}></img> */}
      {/* {showKeyboard && <Keyboard />} */}
      {showKeyboard ? <Keyboard /> : null}
      <Footer />
    </div>
  )
}

export default App
