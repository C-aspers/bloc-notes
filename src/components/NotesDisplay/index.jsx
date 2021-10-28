import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NotesDisplay = (props) => {
  console.log(props.data)

      return(
        <Row>
          <Col xs={6} md={2}>
            <div className='sidebar'>
            <button type="submit">Ajouter un post-it</button>
            </div>
          </Col>
          <Col xs={12} md={10}>
            <div className='notes-display'> <br></br>
              <div dangerouslySetInnerHTML={{__html: props.data.title}} /> <br></br>
              <br></br>
              <div dangerouslySetInnerHTML={{__html: props.data.content}} /> <br></br>
            </div>
          </Col>
        </Row>
      )
};

export default NotesDisplay;