import React, { Component } from 'react';
import { Container, Content, Header, Left, Right, Body, Title, Text, Button, Spinner, List, ListItem, Icon , Footer , FooterTab  } from 'native-base';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Actions } from 'react-native-router-flux';
import {getRepos, getRepoThunk, repoSelected  , fetchList} from '../actions/index';

class RepoList extends Component{
  componentWillMount(){
    this.props.getRepoThunk();
  }
  render(){
    if(this.props.repos.length === 0){
    return(
      <Container>
          <Header>
          <Body>
                        <Title>The big restaurant list</Title>
                    </Body>
          </Header>
          <Content contentContainerStyle= {{justifyContent: 'center', alignItems: 'center', paddingTop: 40, paddingHorizontal: 10}}>
          <Text style= {{fontSize: 20, fontWeight: 'bold', marginTop: 30, marginBottom: 30}}>Loading your  List, Please wait</Text>
          <Spinner />
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
  else if(this.props.repos.length !== 0){
    return(
    <Container>
    <Header>
    <Body>
                        <Title>The big restaurant list</Title>
                    </Body>
    </Header>
    <Content>
    <Button dark full onPress= {() =>{ Actions.RepoList();}} style= {{marginTop: 0}}>
                      <Text> Find restaurants nearby</Text>
                    </Button>
        <List dataArray={this.props.repos}
            renderRow={(item) =>
                <ListItem  style={{ marginLeft: 0,
        paddingLeft: 17}} onPress={() => { Actions.RepoInfo();
                  this.props.repoSelected(item)}} >
                  
                    <Text> {item.name} ({ Math.round((item.distance / 1000) * 100) / 100 } km)</Text> 
                    
                </ListItem>
                      }>
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
}

function mapStateToProps(state){
  return{
    repos : state.repos
  };
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({getRepos: getRepos, getRepoThunk: getRepoThunk, repoSelected: repoSelected}, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(RepoList);
