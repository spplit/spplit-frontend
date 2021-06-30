import React, { useState } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div `
   height: 80%;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: 8%;
`;

const LoginItemContainer = styled.div `
    width: 50%;
    text-align: center;
`;

const LoginTitle = styled.div `

`;

const LoginTitleLogin = styled.div `
    font-size: large;
    font-family: Assistant-Bold;
`;

const LoginTitleAnd = styled.div `
    font-size: medium;
    font-family: Assistant-SemiBold;
`;

const LoginTitleSpplit = styled.div `
    font-size: xx-large;
    font-family: PTSerif-Bold;
    color: #29548E;
`;

const LoginInput = styled.div `
    font-family: Assistant-Medium;
    margin-top: 5%;
    margin-bottom: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const RowContainer = styled.div `
    font-family: Assistant-Regular;
    display: flex;
    flex-direction: row;
`;

const InputText = styled.div `
    font-family: Assistant-Regular;
`;

const LoginInputID = styled.input `
    background: white;
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    width: 120px;
    height: 20px;
    ::placeholder {
    color: blue;
    }
`;

const LoginInputPW = styled.input`
    background: white;
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    width: 120px;
    height: 20px;
    margin-top: 1%;
    ::placeholder {
    color: blue;
    }
`;

const LoginButton = styled.button `
    background-color: white;
    border: solid 1px #707070;
    color: #29548E;
    width: 120px;
    height: 30px;
    border-radius: 20px;
    font-family: Assistant-SemiBold;
`;

const Footer = styled.div `
    background-color: #d9d9d9;
    width: 100%;
    height: 12%;
    bottom: 0;
    position: fixed;
`;

function Login() {

    return (
        <div>
            <LoginContainer>
                <LoginItemContainer>
                    <LoginTitle>
                        <LoginTitleLogin>Log in</LoginTitleLogin>
                        <LoginTitleAnd>and</LoginTitleAnd>
                        <LoginTitleSpplit>Spplit!</LoginTitleSpplit>
                    </LoginTitle>
                    <LoginInput>
                        <RowContainer>
                            <InputText>
                                ID 
                            </InputText>
                            <LoginInputID type="text"/>
                        </RowContainer>
                        <RowContainer>
                            <InputText>
                                PW 
                            </InputText>
                            <LoginInputPW type="password"/>
                        </RowContainer>
                    </LoginInput>
                    <LoginButton>
                        Go to Spplit!
                    </LoginButton>
                </LoginItemContainer>
            </LoginContainer>
            <Footer>
                
            </Footer>
        </div>
    )
}

export default Login;