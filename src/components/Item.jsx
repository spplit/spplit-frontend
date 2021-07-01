import React from "react"
import styled from "styled-components"

const PopupConatiner = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    box-shadow: rgba(0, 0, 0, 0.7) 0 0 0 9999px;
    background: rgba(0, 0, 0, 0.1);
    z-index: 4;
`

const ItemContainer = styled.div`
    position: fixed;
    display: flex;
    flex-wrap: wrap;
    width: 900px;
    height: 600px;
    background-color: #ffffff;
    border: 2px solid #707070;
    border-radius: 50px;
    z-index: 4;
    top: ${(props) => `${props.top}px`};
    left: ${(props) => `${props.left}px`};
    &:active {
        box-shadow: 1px 1px 2px #999;
    }
`

const PhotoContainer = styled.div`
    width: 40%;
    height: 40%;
    margin: 30px;
    border: 1px solid #707070;
    border-radius: 15px;
    background-color: #d9d9d9;
    object-fit: fill;
`

const PhotoImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 15px;
    object-fit: fill;
`

const ProfileContainer = styled.div`
    width: 40%;
    height: 40%;
    margin: 30px;
`

const ProfileName = styled.div`
    font-family: "assistant-semibold";
    font-size: 40px;
`

const ProfileJob = styled.div`
    font-family: "assistant-regular";
    font-size: 30px;
    margin-bottom: 20px;
`

const ProfilePhone = styled.div`
    font-family: "assistant-medium";
    font-size: 30px;
    margin-bottom: 10px;
`

const ProfileEmail = styled.div`
    font-family: "assistant-medium";
    font-size: 30px;
`

const TagsContainer = styled.div`
    width: 100%;
    height: 20%;
    margin-left: 30px;
`

const TagsName = styled.div`
    font-family: "assistant-semibold";
    font-size: 34px;
`

const TagsContents = styled.div`
    font-family: "assistant-medium";
    font-size: 30px;
`

const NotesContainer = styled.div`
    width: 100%;
    height: 40%;
    margin-left: 30px;
`

const NotesName = styled.div`
    font-family: "assistant-semibold";
    font-size: 34px;
`

const NotesContents = styled.div`
    font-family: "assistant-medium";
    font-size: 30px;
`

const Item = ({ modalOn, card, top, left, itemRef }) => {
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
    )
}

export default Item
