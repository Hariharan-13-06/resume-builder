import React, { useContext } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EmailIcon from '@material-ui/icons/Email';
import styled from 'styled-components';
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { GlobalContext } from '../context/GlobalState';

const Body = ({ pdfExport }) => {
    const { resume } = useContext(GlobalContext);

    const pdfExportComponent = React.useRef(null);

    return (
        <Container>
            <PDFExport ref={pdfExport} paperSize="A4">
                <About>
                    <Profile src={resume.about.img} />
                    <Details>
                        <h4>{resume.about.name}</h4>
                        <p>{resume.about.objective}</p>
                    </Details>
                </About>
                <Contact>
                    <Item>
                        <h6><PhoneAndroidIcon /></h6>
                        <p>{resume.contact.phoneNo}</p>
                    </Item>
                    <Item>
                        <h6><EmailIcon /></h6>
                        <p>{resume.contact.email}</p>
                    </Item>
                    <Item>
                        <h6><LinkedInIcon /></h6>
                        <p>{resume.contact.linkedin}</p>
                    </Item>
                    <Item>
                        <h6><GitHubIcon /></h6>
                        <p>{resume.contact.github}</p>
                    </Item>
                </Contact>
                <Skills>
                    <p>Skills</p>
                    <Skill>
                        {
                            resume.skills.map(skill => <h6>{skill}</h6>)
                        }
                    </Skill>
                </Skills>
                <WorkExp>
                    <h6>Work Experience</h6>
                    <Exp>
                        {
                            resume.workExp.map(({role, company, date, location, workDetail}) => (
                                <>
                                    <Role>{role}</Role>
                                    <Company>{company}</Company>
                                    <Duration>
                                        <Date>{date}</Date>
                                        <Location>{location}</Location>
                                    </Duration>
                                    {
                                        workDetail.split(',').map(work => <Work>{`-> ${work}`}</Work>)
                                    }

                                </>
                            ))
                        }
                    </Exp>
                </WorkExp>
                <Education>
                    <h6>Education</h6>
                    <Edu>
                        {
                            resume.education.map(({school, grade, year, mark}) => (
                                <>
                                    <Grade>{grade}</Grade>
                                    <School>{school}</School>
                                    <Data>
                                        <p>{year}</p>
                                        <p>Mark : <span>{mark}</span></p>
                                    </Data>
                                </>
                            ))
                        }
                    </Edu>
                </Education>
                <Hobbies>
                    <h6>Hobbies</h6>
                    <Hobby>
                        {
                            resume.hobbies.map(h => <p>{h}</p>)
                        }
                    </Hobby>
                </Hobbies>
            </PDFExport>
            
        </Container>
    )
}

export default Body;

const Container = styled.div`
    height: 100vh;
    overflow-y: overlay;
    width: 595px;
    border-top: 2px solid black;
    margin: 0 auto;
    background-color: white;
    &::-webkit-scrollbar {
        display: none;
    }
`

const About = styled.div`
    margin-top: 5px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Profile = styled.img`
    height: 120px;
    width: 120px;
    object-fit: contain;
`
const Details = styled.div`
    margin-left: 5px;
    h4 {
        font-size: medium;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }
`
const Contact = styled.div`
    width: 595px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 5px;
    background-color: #ccffbd;
`

const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: small;
    p {
        margin-left: 2px;
        font-weight: 500;
        font-size: small;
    }

    h6 {
        color: #0061a8;
        font-size: small;
    }
`
const Skills = styled.div`
    margin: 5x 0;
    padding: 5px 10px;
    width: 595px;
    border-bottom: 3px solid #0061a8;
    p {
        font-size: small;
        font-weight: 500;
        color: #0061a8;
    }
`
const Skill = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    h6 {
        padding: 5px;
        background-color: #ccffbd;
        border-radius: 5px;
        margin: 3px 7px;
        font-size: small;
    }
`
const WorkExp = styled.div`
    margin: 5px 0;
    padding: 5px 10px;
    border-bottom: 3px solid #0061a8;
    width: 595px;
    h6 {
        font-size: small;
        font-weight: 500;
        color: #4a47a3;
    }
`
const Exp = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;

`  
const Role = styled.p`
    font-size: small;
    font-weight: 600;
`
const Company = styled.p`
    color: black;
    font-size: small;
    font-weight: 400;
`
const Duration = styled.div`
    color: gray;
    font-weight: 200;
    font-size: small;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 10px;
`
const Date = styled.p``
const Location = styled.p``

const Work = styled.p`
    margin-bottom: 5px;
    font-size: small;
`
const Education = styled.div`
    width: 595px;
    margin: 5px 0;
    padding: 5px 10px;
    border-bottom: 3px solid #0061a8;
    h6 {
        font-size: small;
        font-weight: 500;
        color: #4a47a3;
    }
`
const Edu = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
`
const Grade = styled.p`
    font-size: small;
`
const School = styled.p`
    
    font-size: small;
`
const Data = styled.div`
    color: gray;
    font-weight: 200;
    font-size: small;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    margin-right: 10px;
    span {
        font-weight: 500;
    }
`
const Hobbies = styled.div`
    margin: 5px 0;
    padding: 2px 10px;
    width: 595px;
    h6 {
        font-size: small;
        font-weight: 500;
        color: #0061a8;
    }
`

const Hobby = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    p {
        padding: 5px;
        background-color: #ccffbd;
        border-radius: 5px;
        margin: 3px 10px;
        font-size: 14px;
    }
`