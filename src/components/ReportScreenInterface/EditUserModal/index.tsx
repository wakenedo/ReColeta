import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { ServerUserData } from '../../../Types/SystemComponentsTypes/UserRegistrationData';


interface EditUserModalProps {
  show: boolean;
  handleClose: () => void;
  userData: ServerUserData | null;
  handleEditUser: (id: number, updatedUserData: ServerUserData) => void;

}



const EditUserModal: React.FC<EditUserModalProps> = ({
  show,
  handleClose,
  userData,
  handleEditUser,

}) => {
  const [editedUserData, setEditedUserData] = useState<ServerUserData | null>(userData);

  useEffect(() => {
    // Update the editedUserData when the userData prop changes
    setEditedUserData((prevData: any) => ({
      ...(prevData || {}),
      ...(userData || {}),
    }));
  }, [userData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedUserData((prevData: any) => ({
      ...(prevData || {}),
      [name]: value,
    }));
  };

  const handleEdit = () => {
    if (editedUserData) {
      console.log('Saving changes for user:', editedUserData);
      // Validate the editedUserData if needed
      handleEditUser(editedUserData.id, editedUserData);
      handleClose();
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              name="firstName"
              value={editedUserData?.firstName || ''}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              name="lastName"
              value={editedUserData?.lastName || ''}
              onChange={handleInputChange}
            />
          </Form.Group>
          {/* <Form.Group controlId="formUserType">
            <Form.Label>User Type</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter user type"
              name="userType"
              value={editedUserData?.userType[0]?.name}
              onChange={handleInputChange}
            />
  </Form.Group>*/}
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditUserModal;