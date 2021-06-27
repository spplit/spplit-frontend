import React, { useState } from 'react'
import styled from 'styled-components';
import logoimg from '../styles/images/spplit_logo.png';

const OuterContainer = styled.div`
    display: flex;
    flex-direction : row;
    justify-content: center;
`;

const InnerContainer = styled.div`
    /* background-color: skyblue; */
    width: 450px;
    height : 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    &:hover {
        cursor: pointer;
    }
`;

const LogoImage = styled.img`
    width: 3rem;
    height: auto;
`;

const LogoName = styled.div`
    font-family: 'PTSerif-bold';
    color: #29548e;
    font-size: 40px;
    margin-left: 1rem;
`;
const SignupContainer = styled.div`
    
`;
const RowContainer = styled.div`
    /* background-color: yellow; */
    width : 100%;
    display : flex;
    flex-direction: column;
    margin-bottom: 12px;
`;

const TextContainer = styled.div`
    font-family:"assistant-regular";
    font-size: 13px;
    margin-right: 1rem;
`;

const InputContainer = styled.input`
    width: 300px;
    height: 26px;
    border-radius: 5px;
    border: 1px solid #989898;
`;

const SignupButton = styled.button`
    font-family: "assistant-semibold";
    font-size: 13px;
    width: 150px;
    color: #29548E;
    background-color : white;
    padding : 3px 20px;
    margin-bottom: 1rem;
    border-radius: 15px;
    border:1px solid #707070;
    &:hover{
        box-shadow: 0 0 11px rgba(33,33,33,.2); 
}
   
`;

function SignUp() {
    const [inputs, setInputs] = useState({
        id: "",
        password1: "",
        password2: "",
        name: "",
        email: "",
        phone: ""
    })

    const { id, password1, password2, name, email, phone } = inputs;

    const logoClick = () => {
        console.log("warping to main page...")
    }

    const buttonClick = (e) => {
        console.log("go to spplit button clicked");
        const noInput = Object.values(inputs).filter(idx => idx === "")
        if (noInput.length > 0) {
            alert("모든 값을 입력해주세요");
        }
    }
    const handleInput = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    return (
        <OuterContainer>
            <InnerContainer>
                <LogoContainer onClick={logoClick}>
                    <LogoImage src={logoimg} />
                    <LogoName>Spplit!</LogoName>
                </LogoContainer>
                <SignupContainer>
                    <RowContainer>
                        <TextContainer>ID</TextContainer>
                        <InputContainer
                            name="id"
                            value={id}
                            onChange={handleInput} />
                    </RowContainer>
                    <RowContainer>
                        <TextContainer>Password</TextContainer>
                        <InputContainer
                            name="password1"
                            value={password1}
                            onChange={handleInput} />
                    </RowContainer>
                    <RowContainer>
                        <TextContainer>Password Confirm</TextContainer>
                        <InputContainer
                            name="password2"
                            value={password2}
                            onChange={handleInput} />
                    </RowContainer>
                    <RowContainer>
                        <TextContainer>Name</TextContainer>
                        <InputContainer
                            name="name"
                            value={name}
                            onChange={handleInput} />
                    </RowContainer>
                    <RowContainer>
                        <TextContainer>E-mail</TextContainer>
                        <InputContainer
                            name="email"
                            value={email}
                            onChange={handleInput} />
                    </RowContainer>
                    <RowContainer>
                        <TextContainer>Phone Number</TextContainer>
                        <InputContainer
                            name="phone"
                            value={phone}
                            onChange={handleInput} />
                    </RowContainer>
                </SignupContainer>
                <SignupButton onClick={buttonClick}>
                    Go to Spplit!
                </SignupButton>
            </InnerContainer>

        </OuterContainer>
    )
}

export default SignUp;