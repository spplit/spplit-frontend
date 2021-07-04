import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

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
`;

const ItemContainer = styled.div`
    position: fixed;
    display: flex;
    flex-wrap: wrap;
    width: 900px;
    height: 600px;
    background-color: #ffffff;
    border: none;
    border-radius: 50px;
    box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.2), 0 10px 10px 0 rgba(0, 0, 0, 0.15);
    z-index: 1;
    top: ${(props) => `${props.top}px`};
    left: ${(props) => `${props.left}px`};
`;

const PhotoContainer = styled.div`
    width: 40%;
    height: 40%;
    margin-left: 3rem;
    margin-top: 2rem;
    border: none;
    border-radius: 15px;
    background-color: #d9d9d9;
    object-fit: fill;
`;

const PhotoImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 15px;
    object-fit: fill;
`;

const ProfileContainer = styled.div`
    width: 40%;
    height: 35%;
    padding: 3rem;
    display: flex;
    flex-direction: column;

`;

const ProfileName = styled.div`
    font-family: 'assistant-semibold';
    font-size: 30px;
`;

const ProfileJob = styled.div`
    font-family: 'assistant-regular';
    font-size: 20px;
    margin-bottom: 20px;
`;

const hover = css`
    &:hover {
        background-color: #d9d9d9;
        border-radius: 10px;
        cursor: pointer;
    }
`;
const ColorTab = styled.div`
    padding: 0.1rem;
    transition: width 0.2s linear;
    background-color: #d9d9d9;
    width: 4.3rem;
    border-radius: 8px;
    &:hover {
        width: 18rem;
        cursor: pointer;
    }

`;

const InfoTab = styled.div`
    margin: 0.3rem;
    display: flex;
    flex-direction: row;
    z-index: 5;
`;


const InfoName = styled.div`
    text-align: center;
    background-color: transparent;
    font-family: 'assistant-medium';
    font-size: 22px;
    width: 22%;
    margin: 0.2rem;

`;

const PersonalInfo = styled.div`
    font-family: 'assistant-regular';
    background-color: transparent;
    font-size: 20px;
    margin: 0.2rem;
    margin-left: 5rem;
    z-index: 6;
    position: fixed;
`;



const TagsContainer = styled.div`
    width: 100%;
    height: 20%;
    margin-left: 30px;
`;

const TagsName = styled.div`
    font-family: 'assistant-semibold';
    font-size: 25px;
    padding: 0.2rem;
    margin-bottom: 0.5rem;
`;

const TagsContents = styled.div`
    font-family: 'assistant-regular';
    font-size: 20px;
    padding: 0.3rem;
    display: flex;
    flex-direction: row;
`;

const Tag = styled.div`
    width: auto;
    height: 1.5rem;
    padding: 0.3rem 0.6rem;
    margin-right: 0.75rem;
    border-radius: 8px;
    background-color: #d9d9d9;
`;

const NotesContainer = styled.div`
    width: 100%;
    height: 40%;
    margin-left: 30px;
`;

const NotesName = styled.div`
    font-family: 'assistant-semibold';
    font-size: 25px;
    padding: 0.2rem;
    margin-bottom: 0.5rem;
`;

const NotesContents = styled.div`
    font-family: 'assistant-regular';
    font-size: 20px;
    padding: 0.3rem;
`;

const NameCardModal = ({ modalOn, card, top, left, itemRef }) => {

    // useEffect(() => {
    //     document.body.style.overflow = "hidden";
    //     return () => {
    //         document.body.style.overflow = "unset";
    //     }
    // }, [])
    
    // const scrollPrevention = () => {
    //     if (modalOn) {
    //         document.body.style.overflow = "hidden";
    //     } else {
    //         document.body.style.overflow = "unset";
    //     }
    // }

    // 모달이 켜지면 뒤에 스크롤 방지하는 기능
    // useEffect(() => {
    //     document.body.style.cssText = `
    //       position: fixed; 
    //       top: -${window.scrollY}px;
    //       overflow-y: scroll;
    //       width: 100%;`;
    //     return () => {
    //         const scrollY = document.body.style.top;
    //         document.body.style.cssText = '';
    //         window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    //     };
    // }, []);

    return (
        <div>
            {modalOn && (
                <PopupConatiner>
                    <ItemContainer id={card.id} top={top} left={left} ref={itemRef}>
                        <PhotoContainer>
                            <PhotoImage src={card.imgUrl} />
                        </PhotoContainer>
                        <ProfileContainer>
                            <ProfileName>{card.name}</ProfileName>
                            <ProfileJob>{card.job}</ProfileJob>

                            <InfoTab>
                                <ColorTab>
                                <InfoName>Phone</InfoName>
                                </ColorTab>
                                <PersonalInfo>{card.phone}</PersonalInfo>
                            </InfoTab>

                            <InfoTab>
                                <ColorTab>
                                <InfoName>Email</InfoName>
                                </ColorTab>
                                <PersonalInfo>{card.email}</PersonalInfo>
                            </InfoTab>

                        </ProfileContainer>

                        <TagsContainer>
                            <TagsName>Tags</TagsName>
                            <TagsContents>
                                {card.tags.map((tag) => (
                                    <Tag>{tag}</Tag>
                                ))}
                            </TagsContents>
                        </TagsContainer>
                        <NotesContainer>
                            <NotesName>Notes</NotesName>
                            <NotesContents>{card.notes}</NotesContents>
                        </NotesContainer>
                    </ItemContainer>
                </PopupConatiner>
            )}
        </div>
    );
};

export default NameCardModal;
