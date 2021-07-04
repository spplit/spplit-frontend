import React, { useRef } from 'react'
import styled from "styled-components"

const PopupConatiner = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(200, 200, 200, 0.4);
    backdrop-filter: blur(6px);
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
    border-radius: 15px;
    position : absolute;
    width : 500px;
    height : 750px;
    display : inline-block;
    background-color : #ffffff;
    padding : 20px;
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.2), 0 10px 10px 0 rgba(0, 0, 0, 0.15);
`;

const AddTitle = styled.div`
    background-color: #4672af;
    border-radius: 10px;
    color: white;
    font-family: "assistant-semibold";
    font-size: 35px;
    margin-bottom : 40px;
    text-align : center;
    padding: 1rem;
`;

const InputItemsContainer = styled.div`
    width: 100%;
    height: 90%;
`;

const InputContainer = styled.div`
    width : 100%;
    margin-bottom : 15px;
    text-align : center;
`;

const InputTitle = styled.div`
    font-family: "assistant-regular";
    font-size: 23px;
    text-align : left;
    margin-left : 15px;
    margin-bottom : 15px;
`;

const InputInput = styled.input`
    font-family: "assistant-regular";
    border-radius: 5px;
    border: none;
    font-size: 1.2rem;
    padding: 0.2rem 0.6rem;
    width: 90%;
    height: 2.5rem;
    background-color: #eaeaea;
    &:focus {
        outline: none;
    }
`;

const AddButton = styled.button`
    font-family: "assistant-semibold";
    background-color: #d9d9d9;
    width: 10rem;
    height: 2.8rem;
    border: none;
    border-radius: 14px;
    font-size: 25px;
    text-align : center;
    transition: 0.2s;
    transition: box-shadow 3px 4px 3px 0 rgba(0, 0, 0, 0.2) 0ms;
    &:hover {
        box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);
        cursor: pointer;
        background-color: #29548e;
        color: white;
    }
`;


const AddNameCardModal = ({addModalOn, setAddModalOn, myCard, setMyCard, addRef}) => {

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
                    <InputItemsContainer>
                        <AddTitle>Create Your NameCard!</AddTitle>
                        <InputContainer>
                            <InputTitle>Name</InputTitle>
                            <InputInput ref={nameRef} type="text" placeholder="What is Your Name?" />
                        </InputContainer>
                        <InputContainer>
                            <InputTitle>Job</InputTitle>
                            <InputInput ref={jobRef} type="text" placeholder="Student, Chef, Dancer..." />
                        </InputContainer>
                        <InputContainer>
                            <InputTitle>Phone</InputTitle>
                            <InputInput ref={phoneRef} type="text" placeholder="Write your Phonenumber" />
                        </InputContainer>
                        <InputContainer>
                            <InputTitle>Email</InputTitle>
                            <InputInput ref={emailRef} type="text" placeholder="EmailAdrress" />
                        </InputContainer>
                        <InputContainer>
                            <InputTitle>Image</InputTitle>
                            <InputInput ref={imageRef} type="text" placeholder="Upload your NameCard Image" />
                        </InputContainer>
                    </InputItemsContainer>
                    
                    <AddButton onClick={onSubmit}>Submit</AddButton>

                </AddForm>
                </AddContainer>
                </PopupConatiner>
                )}
        </div>
    )
}

export default AddNameCardModal;