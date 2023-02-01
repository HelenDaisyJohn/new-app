import {Table,Button} from 'semantic-ui-react';
import React, {useState, useEffect } from "react";
import { API_URL } from '../Constants/URL';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Read(){
    const[apiData, setAPIData]= useState([]);
    const Navigate=useNavigate();
    const updateOrg =({displayName,shortName,checked,id}) =>
    {
        localStorage.setItem('displayName', displayName);
        localStorage.setItem('shortName',shortName);
        localStorage.setItem('checked',checked);
        localStorage.setItem('id',id);      
        Navigate('/update')
    }


    const deleteUser = async(id) =>{
        await axios.delete(API_URL + id)
        callGetAPI()
    }

    const callGetAPI= async() =>
    {
        const resp= await axios.get(API_URL); 
        setAPIData(resp.data);
    }


    useEffect(()=>{
        callGetAPI();
    },[]);



    return(
        <Table singleLine>
            <Table.Header>
                <Table.Row >
                    <Table.HeaderCell>
                        Display Name
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                        Short Name
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                        Status
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                        Action
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Header><br/>
            <Table.Body>
                {
                    apiData.map(data =>(
                    <Table.Row key={data.id}>
                        <Table.Cell>{data.shortName}</Table.Cell>
                        <Table.Cell>{data.displayName}</Table.Cell>
                        <Table.Cell>{data.checked ? 'Checked' : 'Not Checked'}</Table.Cell>
                        <Table.Cell><Button onClick={()=> deleteUser(data.id)}>Delete </Button>
                        <Button onClick={()=> updateOrg(data)}>Edit</Button></Table.Cell>
                         </Table.Row>

                        ))
                }
                </Table.Body>


        </Table>
    

    )
}
export default Read;