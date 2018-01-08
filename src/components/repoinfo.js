import React, { Component } from 'react';
import { Container, Content, Header, Left, Right, Body, Title, Text, Button, List, ListItem, Icon , Footer , FooterTab} from 'native-base';
import {connect} from 'react-redux';

import { Actions } from 'react-native-router-flux';

class RepoInfo extends Component{
  render(){
    return(
      <Container>
          <Header>
              <Left>
              
              <Button iconLeft transparent onPress= {()=>Actions.pop()}>
            <Icon name='arrow-back' />
            <Text>Back</Text>
          </Button>
              </Left>
              <Body>
                  <Title>Details</Title>
              </Body>
              <Right />
              </Header>
              
          
              <Content>
              <List>
              <ListItem style={{ marginLeft: 0,
        paddingLeft: 17}} ><Text>{this.props.activeRepo.name}</Text></ListItem>
              <ListItem style={{ marginLeft: 0,
        paddingLeft: 17}}><Text>Phone: {this.props.activeRepo.phone}</Text></ListItem>
              <ListItem style={{ marginLeft: 0,
        paddingLeft: 17}}><Text>Address: {this.props.activeRepo.location.address1} , {this.props.activeRepo.location.address2}</Text></ListItem>
              <ListItem style={{ marginLeft: 0,
        paddingLeft: 17}}><Text>Rating: {this.props.activeRepo.rating}</Text></ListItem>
              <ListItem style={{ marginLeft: 0,
        paddingLeft: 17}}><Text>Distance: {Math.round((this.props.activeRepo.distance / 1000) * 100) / 100} km</Text></ListItem>
              <ListItem style={{ marginLeft: 0,
        paddingLeft: 17}}><Text>Price: {this.props.activeRepo.price}</Text></ListItem>
              </List>
              </Content>

              <Footer>
                    <FooterTab>
                        <Button >
                            <Text>&copy;2018 Marjan Tropper </Text>
                        </Button>
                    </FooterTab>
                    </Footer> 
      
      </Container>
    );
  }
}
function mapStateToProps(state){
  return{
    activeRepo : state.activeRepo
  };
}
export default connect(mapStateToProps)(RepoInfo);
