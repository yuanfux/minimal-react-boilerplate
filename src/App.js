import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Image from '@assets/test.png';

const GlobalStyle = createGlobalStyle`
    html,
    body,
    #app {
        width: 100%;
        height: 100%;
        margin: auto;
        overflow: hidden;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

const Title = styled.div`
    font-size: 15px;
    color: grey;
`;

const TestImage = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${Image});
    background-size: 100% 100%;
`;

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Wrapper>
                <GlobalStyle />
                <Title>This is a minimal react boilerplate</Title>
                <TestImage />
            </Wrapper>
        )
    }
}
