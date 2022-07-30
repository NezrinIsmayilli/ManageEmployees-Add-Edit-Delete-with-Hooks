
import {useContext, useState} from 'react';
import { EmployeeContext } from "../contexts/EmployeeContext";
import { Form, Button } from 'react-bootstrap';

const EditForm = ({employee}) => {

    const {updateEmployee} = useContext(EmployeeContext)

    const [name, setName] = useState(employee.name);
    const [email, setEmail] = useState(employee.email);
    const [address, setAddress] = useState(employee.address);
    const [phone, setPhone] = useState(employee.phone);

    const id = employee.id;
    const updatedEmployee = {id,name,email,address,phone};

    const handleSubmit = (e)=>{
        e.preventDefault();
        updateEmployee(id, updatedEmployee);
    }

    return (
    <>
        <Form onSubmit={handleSubmit}>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={e=> setName(e.target.value)}
                />
            </Form.Group>

            <br/>

            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={e=> setEmail(e.target.value)}
                />
            </Form.Group>

            <br/>

            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Address"
                    name="address"
                    rows={3} 
                    value={address}
                    onChange={e=> setAddress(e.target.value)}

                />
            </Form.Group>
            
            <br/>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={phone}
                    onChange={e=> setPhone(e.target.value)}
                />
            </Form.Group>
            
            <br/>

            <Button variant="success" type="submit">
                Update Employee
            </Button>
        </Form>

        
    </>
    )
}

export default EditForm;