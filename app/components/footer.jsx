import React from 'react'
import {Container, Row, Col} from 'reactstrap';

var footer = {
  backgroundColor: '#f5f5f5'
}

var longP = {
  wordWrap: 'break-word'
}

export default class ZFooter extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (      
      <div style={footer}>
        <br/>
        <Container>      
        <Row>
          <Col md="8">
            <p>MAKE SURE YOU ARE ON <b>WALLET.ASOFE.ORG</b></p>

            <p>Keys are validated client-side and do not leave your browser or network. You are responsible for keeping your own keys safe!!!</p>

            <p>Suggestions? Join our <a href="https://t.me/AsofeTalk">telegram</a> channel!</p>

            <p style={longP}>Donations are always welcome!<br/>
              ETH: 0x74FbAc5B704A406B9ab4cB9c6A6b790590136C3f BTC: 16zg55XqNoQPMcY1MbrNTqCp584MS7Ggen<br/>
            </p>
          </Col>
          <Col md="4">
            <a href="https://asofe.org/">website</a><br/>
            <a href="https://github.com/TheLightSide/myasofewallet">github</a><br/>
            <a href="https://t.me/AsofeTalk">telegram</a><br/>
          </Col>
        </Row>
        </Container>
      </div>
    )
  }
}