import styled from 'styled-components';

export const FormContainer = styled.div`
 height:300px;
  max-width: 300px;
  margin: 0 auto;
  
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: #222;
`;

export const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #222;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color:#4190d5;;
  }
`;

export const Form = styled.form`
display: flex;
    flex-direction: column;
    
`