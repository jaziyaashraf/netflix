
import './App.css';
import Row from './Row';
import request from './requests';
function App() {
  return (
    <div className="App">
     <h1>Netflix</h1> 
     <Row title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals}/> 
     <Row title="Trending" fetchUrl={request.fetchTrending}/> 
     <Row title="Action Movies" fetchUrl={request.fetchActionMovie}/> 
     <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovie}/> 
     <Row title="Romantic Movies" fetchUrl={request.fetchRomanceMovie}/> 
     <Row title="Documentry" fetchUrl={request.fetchDocumentaryMovie}/> 
    </div>
  );
}

export default App;
