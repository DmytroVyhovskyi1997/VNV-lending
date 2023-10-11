import styled from "styled-components";

export const Box = styled.div`
  width: auto;
  height: auto;
  background-color: white;
  margin-top: 100px;
  border-radius: 10px;
  padding: 20px 20px;
`;

export const Answers = styled.h2`
  color: white;
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
`;

export const Fa = styled.h4`
  color: white;
  display: flex;
  font-weight: bold;
    font-size: 38px;
    line-height: 44px;
  justify-content: space-around;
`;

export const BoxQuestions = styled.ul`
display:flex;
flex-wrap: wrap;
justify-content: space-around;
gap: 20px;
padding-left:0;
`

export const BoxAnswers = styled.li`
width: 500px;
display: flex;
height: 50px;
color: white;
background-color: black;
padding: 5px 10px;
border-radius: 10px;
font-weight: bold;
font-size: 19px;
line-height: 24px;
justify-content: space-between;
`

export const BoxIcon = styled.button`
display: flex;
    align-items: center;
    justify-content: center;
    transition: .5s;
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
    border: 1px solid #9b0e0c;
    border-radius: 50%;
`
