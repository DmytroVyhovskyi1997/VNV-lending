import styled from 'styled-components'

export const Form = styled.form`
  position: relative;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 60px;
  margin: 12px auto;
  border: 2px solid #ccc;
  border-radius: 20px;
  z-index: 1;
`;

export const Input = styled.input`
padding: 12px;
margin: 25px auto;
border: 1px solid #ccc;
color: #ddd;
background-color: #222;
border-radius: 4px;
display: block;
width: 40vw;
font-size: 17px;
`
export const Button = styled.button`
  padding: 12px;
  margin: 25px auto;
  border: 1px solid #ccc;
  color: #ddd;
  background-color: #222;
  border-radius: 4px;
  display: block;
  width: 150px;
  font-size: 17px;
  &:hover, &:focus {
    color: black;
    background-color: #4190d5;
    animation: fsjOeB 3s infinite;
  }
`;

export const BoxIcon = styled.div`
position: absolute;
    top: 0;
    left: 50%;
    padding: 0 20px;
    transform: translate(-50%, -50%);
border: 2px solid #ccc;
    border-radius: 20px;
    padding: 0 20px;
    z-index:999;
    background-color: black;
`