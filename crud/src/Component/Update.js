import axios from "axios";
import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {Form, Button, Checkbox} from 'semantic-ui-react'
import { API_URL } from "../Constants/URL";


function Update()
{
    
        const [displayName,setDisplayName]= useState('');
        const [shortName,setShortName]= useState('');
        const [checked,setChecked]= useState(false);
        const [id,setId]= useState('');
        const Navigate=useNavigate();

        const updateOrgn =async()=>
        {
            await axios.put(API_URL + id, {
                displayName,
                shortName,
                id,
                checked

            });
            Navigate('/read')
        }

        useEffect(()=>{
            setId(localStorage.getItem('id'));
            setDisplayName(localStorage.getItem('displayName'));
            setShortName(localStorage.getItem('shortName'));
            setChecked(localStorage.getItem('checked'));
    } ,[])

    
    
    
    return(
        <Form>
        
        Update Operation
        <Form.Field>
            <label> Organization Display Name</label> <br/>
            <input value={displayName}  onChange={ (event)=> setDisplayName (event.target.value)}
             placeholder="Enter Organization Display Name" />
        </Form.Field> <br/>
        <Form.Field>
            <label> Organization Short Name</label> <br/>
            <input value={shortName} onChange={ (event)=> setShortName (event.target.value)}
             placeholder="Enter Organization Short Name" />
        </Form.Field>
        <Form.Field>
            <Checkbox onChange={ ()=> setChecked (!checked)} checked={checked} label="Agree the mentioned are above are correct" />
        </Form.Field> <br/>
        <Button onClick={updateOrgn} >
            Update
        </Button>
        
        
    </Form>
    )
}
export default Update;