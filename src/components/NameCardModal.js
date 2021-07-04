import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

const PopupConatiner = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(200, 200, 200, 0.4);
    backdrop-filter: blur(5px);
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
    margin: 30px;
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
    height: 40%;
    margin: 30px;
`;

const ProfileName = styled.div`
    font-family: 'assistant-semibold';
    font-size: 40px;
`;

const ProfileJob = styled.div`
    font-family: 'assistant-regular';
    font-size: 30px;
    margin-bottom: 20px;
`;

const hover = css`
    &:hover {
        background-color: #d9d9d9;
        border-radius: 10px;
        cursor: pointer;
    }
`;

const ProfilePhone = styled.div`
    font-family: 'assistant-medium';
    font-size: 30px;
    margin-bottom: 10px;
    padding: 0px 10px;
    ${hover}
`;

const ProfileEmail = styled.div`
    font-family: 'assistant-medium';
    padding: 0px 10px;
    font-size: 30px;
    ${hover}
`;

const TagsContainer = styled.div`
    width: 100%;
    height: 20%;
    margin-left: 30px;
`;

const TagsName = styled.div`
    font-family: 'assistant-semibold';
    font-size: 34px;
`;

const TagsContents = styled.div`
    font-family: 'assistant-medium';
    font-size: 30px;
`;

const NotesContainer = styled.div`
    width: 100%;
    height: 40%;
    margin-left: 30px;
`;

const NotesName = styled.div`
    font-family: 'assistant-semibold';
    font-size: 34px;
`;

const NotesContents = styled.div`
    font-family: 'assistant-medium';
    font-size: 30px;
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
                            <ProfilePhone>Phone: {card.phone}</ProfilePhone>
                            <ProfileEmail>Email: {card.email}</ProfileEmail>
                        </ProfileContainer>
                        <TagsContainer>
                            <TagsName>Tags</TagsName>
                            <TagsContents>
                                {card.tags.map((tag) => (
                                    <span>{tag} </span>
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
