import {API_URL} from '../Constants/URL'
import {Form, Button, Checkbox} from 'semantic-ui-react'
import { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';


function Create()
{
    const[displayName, setDisplayName]=useState('');
    const[shortName, setShortName]=useState('');
    const[checked, setChecked]=useState(false);
    const Navigate=useNavigate();

    const postData =async () =>
    {
        await axios.post(API_URL,{
            displayName, 
            shortName,
            checked
        })
        Navigate('/read')
    }

    return(
    <Form>
        
        Create Operation
        <Form.Field>
            <label> Organization Display Name</label> <br/>
            <input value={displayName}  onChange={ (event)=> setDisplayName (event.target.value)}
             placeholder="Enter Display Name" />
        </Form.Field> <br/>
        <Form.Field>
            <label> Organization Short Name</label> <br/>
            <input value={shortName} onChange={ (event)=> setShortName (event.target.value)}
             placeholder="Enter Short Name" />
        </Form.Field>
        <Form.Field>
            <Checkbox onChange={ ()=> setChecked (!checked)} checked={checked} label="Agree the mentioned are above are correct" />
        </Form.Field> <br/>
        <Button onClick={postData}>
            Submit
        </Button>
        
        
    </Form>
    )
}
export default Create;