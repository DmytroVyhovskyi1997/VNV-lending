import { useState } from "react";
import { FormContainer, Input, Label, SubmitButton,Form } from "./FormOrder.styled";

const FormOrder = ()=>{

    const [name, setName] = useState('');
    const [fullname, setFullname] = useState('');
    const [post, setEmail] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        setName('')
        setFullname('')
        setEmail('')
    };

    console.log('Name:', name);
    console.log('Fullname:', fullname);
    console.log('Post:', post);

    return(
        <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
  
          <Label htmlFor="fullname">Surname</Label>
          <Input type="text" id="surname" placeholder="Surname" value={fullname} onChange={(e) => setFullname(e.target.value)}/>
  
          <Label htmlFor="post">Email</Label>
          <Input type="text" id="email" placeholder="Email" value={post} onChange={(e) => setEmail(e.target.value)}/>
  
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </FormContainer>
    )
}

export default FormOrder;