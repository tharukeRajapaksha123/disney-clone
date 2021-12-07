import React from 'react'
import styled from 'styled-components'


function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" alt="logo" />
            <NavMenu>
                <a href="/#">
                    <img src="/images/home-icon.svg" alt="home" /> <span>HOME</span>
                </a>
                <a href="/#">
                    <img src="/images/search-icon.svg" alt="home" /> <span>SEARCH</span>
                </a>
                <a href="/#">
                    <img src="/images/watchlist-icon.svg" alt="home" /> <span>WATCH LIST</span>
                </a>
                <a href="/#">
                    <img src="/images/original-icon.svg" alt="home" /> <span>ORIGINALS</span>
                </a>
                <a href="/#">
                    <img src="/images/movie-icon.svg" alt="home" /> <span>MOVIES</span>
                </a>
                <a href="/#">
                    <img src="/images/series-icon.svg" alt="home" /> <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImage src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt= "userImage"></UserImage>
        </Nav>
    )
}

export default Header


const Nav = styled.nav`
    height: 70px;
    width: 100%;
    background-color: #090b13;
    align-items: center;
    display: flex;
    padding: 0 36px;
    overflow-x: hidden;
`

const Logo = styled.img`
    width : 80px;
`

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    flex:1;
    margin-left : 20px;
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img{
            height: 20px;
        }
        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            &:after{
                content: "";
                height: 2px;
                background-color: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover{
            span:after{
                opacity: 1;
                transform: scaleX(1);
            }
        }
    } 
`

const UserImage =styled.img` 
    width : 48px;
    height:48px;
    border-radius: 50%;
    cursor: pointer;
`