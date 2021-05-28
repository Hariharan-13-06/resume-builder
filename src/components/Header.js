import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import hari from '../images/hari.jpg';

const Header = ({ exportPDF }) => {

   
    return (
        <Container>
            <Link to="/"><Logo>
                <h4>Resume Builder</h4>
            </Logo></Link>
            <Menu>
                <p>File</p>
                <p>Edit</p>
                <p>View</p>
                <p>Insert</p>
                <p>Format</p>
                <p>Tools</p>
                <p onClick={exportPDF}>Download Resume</p>
            </Menu>
            <RightOptions>
                <Desc>
                    <p>Hari</p>
                    <Avatar src={hari}/>
                </Desc>
            </RightOptions>
        </Container>
    )
}

export default Header;

const Container = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: white !important;
    width: 100%;
`;

const Logo = styled.div`
    font-size: 25px;
    flex: 0.3;
    cursor: pointer;
    text-decoration: none;
    list-style: none;
`

const Menu = styled.div`
    flex: 0.4;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: gray;
    font-size: 17px;
    p {
        cursor: pointer;
    }

    p:hover {
        color: black;
        text-decoration: underline;
        transition: transform 0.4s ease-in-out;
        transform: scale(1.2);
    }
`
const RightOptions = styled.div`
    flex: 0.3;
`

const Desc = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    p {
        font-weight: 500;
        font-size: 20px;
        margin-right: 10px;
    }
`