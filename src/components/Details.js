import React from 'react'
import styled from 'styled-components'

function Details() {
    return (
        <Container>
            <Background>
                <img src="https://www.newfreemoviesonline.com/wp-content/uploads/2021/01/watch-Onward-movie-free.jpg" alt="movie" />
            </Background>
            <ImageTitle>
                <img scr="" alt="title" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="play-button" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailarButton>
                    <img src="/images/play-icon-white.png" alt="play-button" />
                    <span>Trailer</span>
                </TrailarButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" alt="grp watch"/>
                </GroupWatchButton>
            </Controls>
            <Subtitle>
                2018 . 7m . Family, Fantasy,Kids,Animation
            </Subtitle>
            <Description>
                A chinese mom whos sad wehne hwer oasdkj pasd padas []aadsp qwe,m as[d p[lad [asdpl apsdk]]]
            </Description>
        </Container>
    )
}

export default Details


const Container = styled.div`
    min-height: calc(100vh-70px);
    padding: 0 calc(3.5vw+5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0; 
    right: 0;
    z-index:-1;
    opacity: 0.8;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    img{
        width: 100%;
        height:100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    margin-left: 30px;
    align-items:center;
`;

const AddButton = styled.button`
    height: 44px;
    width:44px;
    border-radius : 50%;
    display: flex; 
    align-items: center;
    justify-content: center;
    cursor:pointer;
    border:2px solid white;
    background-color:rgba(0,0,0,0.6);
    margin-right:16px;
    span{
        font-size:30px;
        color:white;
    }
`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background-color: rgb(248,248,247);
    border:none;
    padding: 0px 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;
    font-weight:600;
    &:hover{
        background-color: rgb(198,198,198);
    }
`





const TrailarButton = styled(PlayButton)`
    background-color: rgba(0,0,0,0.3);
    border : 1px solid rgb(249,249,249);
    text-transform: uppercase;
    color:rgb(249,249,249); 
    
`

const GroupWatchButton = styled(AddButton)`
    background-color:rgba(0,0,0,0.9);
`

const Subtitle = styled.div`
    margin:30px;
    font-size:15px;
    position:relative;
`

const Description = styled.div`
    max-width:760px;
    margin:30px;
    line-height:1.4;
    font-size: 20px; 
    color: rgb(249,249,249);
`