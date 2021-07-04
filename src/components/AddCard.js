import React, { useRef } from 'react'
import styled from "styled-components"

const PopupConatiner = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 4;
    box-shadow: rgba(0, 0, 0, 0.7) 0 0 0 9999px;
`
const AddContainer = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : row;
    align-items : center;
    justify-content : center;
    text-align : center;
`

const AddForm = styled.form`
    position : absolute;
    width : 500px;
    height : 750px;
    display : inline-block;
    background-color : #ffffff;
    padding : 20px;
`;

const AddTitle = styled.div`
    font-family: "assistant-semibold";
    font-size: 35px;
    margin-bottom : 40px;
    text-align : center;
`;

const InputContainer = styled.div`
    width : 100%;
    margin-bottom : 15px;
    text-align : center;
`;

const InputTitle = styled.div`
    font-family: "assistant-semibold";
    font-size: 23px;
    text-align : left;
    margin-left : 15px;
    margin-bottom : 15px;
`;

const InputInput = styled.input`
    font-family: "assistant-regular";
    font-size: 20px;
    width : 90%;
`;

const AddButton = styled.button`
    font-family: "assistant-semibold";
    font-size: 25px;
    text-align : center;
    margin-top : 50px;
`;


const AddCard = ({addModalOn, setAddModalOn, myCard, setMyCard, addRef}) => {

    const formRef = useRef();
    const nameRef = useRef();
    const jobRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const imageRef = useRef();    
    
    const onSubmit = (e) => {
        e.preventDefault();

        // 새로운 명함 객체 생성
        const newCard = {
            id : myCard.length,
            name : nameRef.current.value,
            job : jobRef.current.value,
            phone : phoneRef.current.value,
            email : emailRef.current.value,
            imgUrl : imageRef.current.value||'',
        };

        // 빈값 체크
        const isEmpty = (info) => {
            if (info.name == "" || info.job == "" || info.phone == "" || info.email == "") {
                console.log("please fill the contents below")
            }
            else {
                setMyCard([...myCard, newCard])
                formRef.current.reset()
                setAddModalOn(false)
            }
        }

        isEmpty(newCard);

    }

    return (
        <div>
            {addModalOn && (       
                <PopupConatiner> 
                <AddContainer ref={addRef}>
                <AddForm ref={formRef}>
                    <AddTitle>Add my own NameCard</AddTitle>
                    <InputContainer>
                        <InputTitle>Name</InputTitle>
                        <InputInput ref={nameRef} type="text" placeholder="Write down your Name" />
                    </InputContainer>
                    <InputContainer>
                        <InputTitle>Job</InputTitle>
                        <InputInput ref={jobRef} type="text" placeholder="Write down your Job" />
                    </InputContainer>
                    <InputContainer>
                        <InputTitle>Phone</InputTitle>
                        <InputInput ref={phoneRef} type="text" placeholder="Write down your Phone" />
                    </InputContainer>
                    <InputContainer>
                        <InputTitle>Email</InputTitle>
                        <InputInput ref={emailRef} type="text" placeholder="Write down your Email" />
                    </InputContainer>
                    <InputContainer>
                        <InputTitle>Image</InputTitle>
                        <InputInput ref={imageRef} type="text" placeholder="Upload your card Image" />
                    </InputContainer>
                    <AddButton onClick={onSubmit}>Submit</AddButton>
                </AddForm>
                </AddContainer>
                </PopupConatiner>
                )}
        </div>
    )
}

export default AddCard;