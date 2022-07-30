import {useContext, useState, useEffect} from 'react';
import { EmployeeContext } from "../contexts/EmployeeContext";
import EditForm from './EditForm';
import {Modal, Button, OverlayTrigger, Tooltip} from 'react-bootstrap';

const Employee = ({employee}) => {

    const {deleteEmployee} = useContext(EmployeeContext);

    const [show, setShow] = useState(false)
    const handleShow =()=>{setShow(true)};
    const handleClose=()=>{setShow(false)};

    useEffect(()=>{
        handleClose();
    },[employee])

    return (
        <>
            <tr>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.address}</td>
                <td>{employee.phone}</td>
                <td>
                    <OverlayTrigger placement='left'
                            overlay={
                                <Tooltip id='tooltip-left'>
                                    Edit
                                </Tooltip>
                            }>
                            <button onClick={handleShow} className="btn text-warning btn-act" data-toggle="modal">
                                <i className="material-icons">&#xE254;</i>
                            </button>
                    </OverlayTrigger>

                    <button  onClick={()=>deleteEmployee(employee.id)} className="btn text-danger btn-act" data-toggle="modal">
                        <i className="material-icons">&#xE872;</i>
                    </button>
                </td>
            </tr>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="modal-header" closeButton>
                    <Modal.Title>
                        Update Employee
                    </Modal.Title> 
                </Modal.Header>
                <Modal.Body>
                    <EditForm  employee={employee}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close Modal
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
  )
}

export default Employee;