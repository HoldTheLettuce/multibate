import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

import { Container, Grid, Header, Message, Form, Button, Embed, Icon } from 'semantic-ui-react';

import CamCard from './components/CamCard';

const AdblockerMessage = () => (
  <Message warning style={{ textAlign: 'center', width: '100%' }}>
    <Message.Header>WARNING</Message.Header>

    <p>Adblockers may cause website to not work properly!</p>
  </Message>
)

class App extends React.Component {
  state = {
    models: [],
    modelToAdd: '',
    fullScreenModel: null,
    isFullScreen: false
  };

  onCamClose = model => {
    let currentModels = [...this.state.models];

    currentModels.splice(currentModels.indexOf(model), 1);

    this.setState({
      models: currentModels
    });
  }

  onCamExpand = model => {
    this.setState({
      fullScreenModel: model,
      isFullScreen: true
    });
  }

  onCamCompress = () => {
    this.setState({
      fullScreenModel: '',
      isFullScreen: false
    });
  }

  handleAddFormChange = e => {
    this.setState({
      modelToAdd: e.target.value
    });
  }

  handleAddFormSubmit = e => {
    e.preventDefault();

    this.setState({
      models: [...this.state.models, this.state.modelToAdd],
      modelToAdd: ''
    });
  }

  render() {
    if(this.state.isFullScreen) {
      return (
        <div>
          <Embed active={true} url={ `https://chaturbate.com/in/?track=embed&tour=dU9X&campaign=zVn1b&signup_notice=0&b=${ this.state.fullScreenModel }&disable_sound=1&mobileRedirect=never` } />
          <Icon name='close' size='big' className='closeBtn' onClick={ this.onCamCompress } />
        </div>
      );
    }

    return (
      <div id="app">
        <Container fluid>
          <AdblockerMessage />

          <Header size='huge'>Multibate</Header>

          <Button icon labelPosition='right' href='https://chaturbate.com/in/?track=multibate&tour=NwNd&campaign=zVn1b' target='_blank' style={{ marginBottom: '2em' }}>
            <Icon name='video' />
            Broadcast
          </Button>

          <Button icon labelPosition='right' href='https://chaturbate.com/in/?track=multibate&tour=3Mc9&campaign=zVn1b&redirect_to_room=-welcomepage-' target='_blank' style={{ marginBottom: '2em' }}>
            <Icon name='user' />
            CB Sign Up
          </Button>

          <Form id='addForm' onSubmit={ this.handleAddFormSubmit }>
            <Form.Group>
              <Form.Input placeholder='Chaturbate Username' name='username' value={ this.state.modelToAdd } onChange={ this.handleAddFormChange } required />
              <Form.Button icon='add' />
            </Form.Group>
          </Form>

          <Grid centered>
            {
                this.state.models.map(model => (
                  <Grid.Column key={ model } mobile={16} computer={8}>
                    <CamCard model={ model } onClose={ this.onCamClose } onExpand={ this.onCamExpand } />
                  </Grid.Column>
                ))
            }
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
