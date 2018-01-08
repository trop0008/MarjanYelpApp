import React, { Component } from 'react';
import { Container, Content, Header, Left, Right, Body, Title, Text, Button, Card, CardItem, Footer , FooterTab } from 'native-base';
import { Actions } from 'react-native-router-flux';

 class Welcome extends Component {
    render() {
        return (
            <Container>
                <Header>
                    
                    <Body>
                        <Title>The big restaurant list</Title>
                    </Body>
                    
                </Header>
                <Content contentContainerStyle= {{justifyContent: 'center', alignItems: 'center', paddingTop: 40, paddingHorizontal: 10}}>
                
                <Button dark block onPress= {() =>{ Actions.RepoList();}} style= {{marginTop: 40}}>
                      <Text> Find restaurants nearby</Text>
                    </Button>
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

export default Welcome;
