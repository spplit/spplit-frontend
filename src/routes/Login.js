import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const LoginContainer = styled.div `
    /* background-color: aliceblue; */
    height: 85vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoginItemContainer = styled.div `
    background-color: #eaeaea;
    box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.25);
    opacity: 0.8;
    border-radius: 95px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 63%;
    text-align: center;
`;

const LoginTitle = styled.div `
    margin-bottom: 2rem;
`;

const LoginTitleLogin = styled.div `
    font-size: 2rem;
    font-family: Assistant-Bold;
`;

const LoginTitleAnd = styled.div `
    font-size: 1.5rem;
    font-family: Assistant-SemiBold;
`;

const LoginTitleSpplit = styled.div `
    font-size: 3rem;
    font-family: PTSerif-Bold;
    color: #29548E;
`;


const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
`;

const RowContainer = styled.div `
    font-family: Assistant-Regular;
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0.4rem;
`;

const InputText = styled.div `
    font-family: Assistant-Regular;
    font-size: 1.3rem;
    margin-right: 0.5rem;
    width: 2rem;
    text-align: center;
`;

const Input = styled.input `
    border-radius: 5px;
    width: 75%;
    height: 25px;
    border: none;
    box-shadow: 0 5px 3px 0 rgba(0, 0, 0, 0.2);
    &:hover {
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
        background-color: #bebebe;
    }
    &:focus {
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
        outline: none;
        background-color: #bebebe;
    }
`;

const LoginButton = styled.button `
    background-color: #29548e;
    border: none;
    color: white;
    width: 10rem;
    height: 2.8rem;
    border-radius: 14px;
    margin-top: 3rem;
    font-family: Assistant-SemiBold;
    font-size: 1.3rem;
    box-shadow: 3px 4px 3px 0 rgba(0, 0, 0, 0.2);
    &:hover {
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
        cursor: pointer;
        background-color: #376AB1;
    }
`;

const Footer = styled.div `
    background-color: #d9d9d9;
    width: 100%;
    height: 15vh;
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

                    <InputContainer>
                            <RowContainer>
                                <InputText>
                                    ID 
                                </InputText>
                                <Input type="text"/>
                            </RowContainer>


                            <RowContainer>
                                <InputText>
                                    PW 
                                </InputText>
                                <Input type="password"/>
                            </RowContainer>
                    </InputContainer>

                    <Link to="/main">
                        <LoginButton>
                        Go to Spplit!
                        </LoginButton>
                    </Link>
                    
                </LoginItemContainer>
                <Footer />
            </LoginContainer>


        </div>
    )
}

export default Login;