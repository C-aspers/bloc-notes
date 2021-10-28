import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Showdown from 'showdown';
const converter = new Showdown.Converter();


class MarkdownInput extends React.Component {

  state = {
    title: '',
    content: '',
  }
  
  handleChange = e => {
    let contentToHtml = converter.makeHtml(e.target.value)

    this.setState({ [e.target.name]: contentToHtml});
  }

  componentDidUpdate() {
    if (this.props.onChange) {
      this.props.onChange(this.state);
    }
  }

  handleFormSubmit = () => {
    const { title } = this.state;
    localStorage.setItem('title', JSON.stringify(title));
    console.log(localStorage.setItem('title', JSON.stringify(title)))
  }


  render() {
    return (
      <>
        <Row>
          <Col xs={6} md={2}>
          </Col>
          <Col xs={12} md={10}>
            <div className='areainput'>
              <div>
                <div>Title:</div>
                <input className="input" name="title" onChange={this.handleChange} />
              </div>
              <br />
              <div>
                <div>Content:</div>
                <textarea className="input" name="content" onChange={this.handleChange} />
                <br />
                <br />
                <button type="submit">Sauvegarder</button>
              </div>
              <br />
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

//Affiche le composant
export default MarkdownInput;