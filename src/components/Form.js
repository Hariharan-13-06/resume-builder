import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import FileBase from 'react-file-base64';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

const Form = () => {
    const { addResume } = useContext(GlobalContext);

    const [img, setImg] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [github, setGithub] = useState('');
    const [objective, setObjective] = useState('');
    const [role, setRole] = useState('');
    const [company, setCompany] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [workDetail, setWorkDetail] = useState('');
    const [workExp, setWorkExp] = useState([]);
    const [skill, setSkill] = useState('');
    const [skills, setSkills] = useState([]);
    const [school, setSchool] = useState('');
    const [grade, setGrade] = useState('');
    const [year, setYear] = useState('');
    const [mark, setMark] = useState('');
    const [education, setEducation] = useState([]);
    const [hobby, setHobby] = useState('');
    const [hobbies, setHobbies] = useState([]);

    const addWorkExp = (e) => {
        e.preventDefault();

        const newExp = {
            role: role,
            company: company,
            date: date,
            location: location,
            workDetail: workDetail
        }
        setWorkExp([...workExp, newExp]);
        setRole('');
        setCompany('');
        setDate('');
        setLocation('');
        setWorkDetail('');
    }

    const addSkills = (e) => {
        e.preventDefault();

        setSkills([...skills, skill]);
        setSkill('');
    }

    const addEdu = (e) => {
        e.preventDefault();

        const newEdu = {
            school: school,
            grade: grade,
            year: year,
            mark: mark
        }

        setEducation([...education, newEdu]);

        setSchool('');
        setGrade('');
        setYear('');
        setMark('');
    }

    const addHobby = (e) => {
        e.preventDefault();

        setHobbies([...hobbies, hobby]);
        setHobby('');
    }

    const createResume = (e) => {
        const newResume = {
            id: Math.floor((Math.random() * 10000) + 1),
            about: {
                img: img,
                name: name,
                objective: objective
            },
            contact: {
                phoneNo: phoneNo,
                email: email,
                linkedin: linkedin,
                github: github
            },
            skills: skills,
            workExp: workExp,
            education: education,
            hobbies: hobbies
        }
        addResume(newResume);
        window.confirm('Your Resume is now created. Now preview your resume and download.');
    }

    return (
        <Container>
            <h3>Details to build your Resume</h3>
            <Details>
                <p>Upload Profile Photo and Social Media ID</p>
                <FileBase type="file" multiple={false} onDone={({ base64 }) => setImg(base64)} />
                <input placeholder="Name" type="text" value={name} onChange={e => setName(e.target.value)}/>
                <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                <input placeholder="Phone No" type="text" value={phoneNo} onChange={e => setPhoneNo(e.target.value)} />
                <input placeholder="LinkedIn" type="text" value={linkedin} onChange={e => setLinkedin(e.target.value)} />
                <input placeholder="Github" type="text" value={github} onChange={e => setGithub(e.target.value)} />
                <hr />
            </Details>
            <Objective>
                <p>Objective</p>
                <textarea rows="7" cols="50" value={objective} onChange={e => setObjective(e.target.value)} />
            </Objective>
            <WorkExp>
                <AddExp onClick={addWorkExp}>
                    <AddIcon />
                    <p>Add Work Experience</p>
                </AddExp>
                <Exp>
                    <input type="text" placeholder="Role" value={role} onChange={e => setRole(e.target.value)} />
                    <input type="text" placeholder="Company Name" value={company} onChange={e => setCompany(e.target.value)} />
                    <input type="text" placeholder="Start Date - End Date (DD/MM/YYYY)" value={date} onChange={e => setDate(e.target.value)} />
                    <input type="text" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} />
                    <input type="text" placeholder="Work Detail ( Enter comma separated sentences) " value={workDetail} onChange={e => setWorkDetail(e.target.value)} /> 
                </Exp>
            </WorkExp>
            <Skills>
                <AddSkill onClick={addSkills}>
                    <AddIcon />
                    <p>Add Your Skills</p>
                </AddSkill>
                <Skill>
                    <input type="text" placeholder="Your Skill" value={skill} onChange={e => setSkill(e.target.value)} />
                </Skill>
            </Skills>
            <Education>
                <AddEdu onClick={addEdu}>
                    <AddIcon />
                    <p>Add Your Education</p>
                </AddEdu>
                <Edu>
                    <input type="text" placeholder="School/College" value={school} onChange={e => setSchool(e.target.value)} />
                    <input type="text" placeholder="Standard/Degree" value={grade} onChange={e => setGrade(e.target.value)} />
                    <input type="text" placeholder="Year" value={year} onChange={e => setYear(e.target.value)} />
                    <input type="text" placeholder="Mark/CGPA" value={mark} onChange={e => setMark(e.target.value)} />
                </Edu>
            </Education>
            <Hobbies>
                <AddHobby onClick={addHobby}>
                    <AddIcon />
                    <p>Add Hobbies</p>
                </AddHobby>
                <Hobby>
                    <input type="text" placeholder="Hobby" value={hobby} onChange={e => setHobby(e.target.value)} />
                </Hobby>
            </Hobbies>
            
                <Build>
                    <h4 onClick={createResume}>Build Resume</h4>
                    <Link to="/resume"><p>View Your Resume</p></Link>
                </Build>
        </Container>
    )
}

export default Form;

const Container = styled.div`
    height: 100vh;
    overflow-y: overlay;
    width: 595px;
    margin-top: 10px;
    margin: 0 auto;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        font-size: x-large;
        font-weight: 600;
        color: turquoise;
        font-family: monospace;
    }

`

const Details = styled.div`
    margin-top: 20px;
    padding: 10px 0;
    width: 595px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: 3px solid #9400D3;
    p {
        margin-bottom: 15px;
        font-size: large;
        font-weight: 500;
    }

    input {
        margin-top: 15px;
        height: 30px;
        border: 2px solid blue;
        padding: 3px;
        width: 262.8px;
    }
`

const Objective = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
    width: 595px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 3px solid #4B0082;
    p {
        font-size: large;
        font-weight: 500;
        margin-bottom: 5px;
    }

    textarea {
        border: 2px solid blue;
    }
`

const WorkExp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 595px;
    border-bottom: 3px solid #0000FF;
    padding-bottom: 10px;
`

const AddExp = styled.div`
    cursor: pointer;
    border: 2px solid #ce97b0;
    border-radius: 5px;
    padding: 5px;
    display: flex;
    p {
        margin-left: 20px;
    }
`
const Exp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
        margin-top: 15px;
        height: 30px;
        border: 2px solid blue;
        padding: 3px;
        width: 262.8px;
    }
`

const Skills = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    width: 595px;
    padding-bottom: 10px;
    border-bottom: 3px solid #00FF00;
`

const AddSkill = styled.div`
    cursor: pointer;
    display: flex;
    border: 2px solid #ce97b0;
    border-radius: 5px;
    padding: 5px;
    p {
        margin-left: 20px;
    }
`

const Skill = styled.div`
    input {
        margin-top: 15px;
        height: 30px;
        border: 2px solid blue;
        padding: 3px;
        width: 262.8px;
    }
`

const Education = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    width: 595px;
    padding-bottom: 10px;
    border-bottom: 3px solid #FFFF00;
`

const AddEdu = styled.div`
    cursor: pointer;
    display: flex;
    border: 2px solid #ce97b0;
    border-radius: 5px;
    padding: 5px;
    p {
        margin-left: 20px;
    }
`

const Edu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
        margin-top: 15px;
        height: 30px;
        border: 2px solid blue;
        padding: 3px;
        width: 262.8px;
    }
`

const Hobbies = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    width: 595px;
    padding-bottom: 10px;
    border-bottom: 3px solid #FF7F00;
`

const AddHobby = styled.div`
    cursor: pointer;
    display: flex;
    border: 2px solid #ce97b0;
    border-radius: 5px;
    padding: 5px;
    p {
        margin-left: 20px;
    }
`

const Hobby = styled.div`
    input {
        margin-top: 15px;
        height: 30px;
        border: 2px solid blue;
        padding: 3px;
        width: 262.8px;
    }
`

const Build = styled.div`
    width: 595px;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    p {
        width: 200px;
        height: 50px;
        background: linear-gradient(to right, palegreen, #f7fd04);
        color: black;
        font-weight: 500;
        font-size: larger;
        border-radius: 10px;
        text-align: center;
        padding-top: 12px;
        cursor: pointer;
        text-decoration: none;
        text-decoration-line: none;
    }

    h4 {
        width: 200px;
        height: 50px;
        font-weight: 500;
        font-size: larger;
        border-radius: 10px;
        text-align: center;
        padding-top: 10px;
        cursor: pointer;
        border: 3px solid #FF0000;
        background: linear-gradient(to right, red, orange);
    }
`
