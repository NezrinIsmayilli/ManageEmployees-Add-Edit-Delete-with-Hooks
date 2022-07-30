import {useContext, useState} from 'react';
import { EmployeeContext } from "../contexts/EmployeeContext";
import { Form, Button } from 'react-bootstrap';

const AddForm = () => {

    const {addEmployee} = useContext(EmployeeContext);
    const [name,setName] =useState(" ")
    const [email,setEmail] =useState(" ")
    const [address,setAddress] =useState(" ")
    const [phone,setPhone] =useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        addEmployee(name,email,address,phone);
    }

    return (
        <Form onSubmit={handleSubmit} >

            <Form.Group>
                <Form.Label>Name:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={e=>setName(e.target.value)}
                    required 
                />
            </Form.Group>

            <br/>

            <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="...@gmail.com"
                    name="email"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    required 
                />
            </Form.Group>

            <br/>

            <Form.Group>
                <Form.Label>Address:</Form.Label>
                <Form.Control
                    as="textarea"
                    placeholder="Address"
                    name="address"
                    value={address}
                    onChange={e=>setAddress(e.target.value)}
                    rows={3} 

                />
            </Form.Group>
            
            <br/>

            <Form.Group>
                <Form.Label>Phone:</Form.Label>
                <Form.Control
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={e=>setPhone(e.target.value)}
                />
            </Form.Group>
            
            <br/>

            <Button variant="success" type="submit">
                Add New Employee
            </Button>
        </Form>
    )
}

export default AddForm;