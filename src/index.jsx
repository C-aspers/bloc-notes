import React from 'react'
import ReactDOM from 'react-dom';


// import biblio et des composants
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import MarkdownInput from './components/MarkdownInput';
import NotesDisplay from './components/NotesDisplay';
import halloween from './halloween.jpeg';
import './index.css';

const App = () => {  
  const [contentObj, setContentObj] = React.useState({});
  const eventhandler = data => {
    console.log(data)
    setContentObj(data)
  }
  console.log(contentObj)


  return (
    <Container fluid>
      <div><br></br>
        <h1><strong>Bloc-notes cauchemardesques</strong></h1><br></br>
        <img src={halloween} alt="halloween" /><br></br>
        <br></br>
        <NotesDisplay data={contentObj}/>
        <br></br>
        <MarkdownInput onChange={eventhandler}/>
      </div>
    </Container>
    )
};

//Affiche le composant
ReactDOM.render(<App />, document.getElementById('root'));