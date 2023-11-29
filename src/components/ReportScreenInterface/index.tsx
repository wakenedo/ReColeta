import React, { useState, useEffect } from 'react';
import { Row, Pagination, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { deleteUser, getAllUserData, getUserById, updateUserProfile } from '../../api/apiClient';
import { ReportScreenComponentProps } from '../../Types/SystemComponentsTypes/ReportScreenInterface';
import { Item } from '../../Types/SystemComponentsTypes/ReportScreenInterface/Item';
import { DefaultContainer } from '../System/Containers/DefaultContainer';
import { ContainerContent } from '../System/Containers/ContainerContent';
import { columnsData } from './data/columnsData'
import trashCan from '../../assets/img/ReportsArea/Trash.png'
import editGear from '../../assets/img/ReportsArea/Gear.png'
import { ServerUserData } from '../../Types/SystemComponentsTypes/UserRegistrationData';
import EditUserModal from './EditUserModal';





const ReportScreenComponent: React.FC<ReportScreenComponentProps> = () => {
  const [data, setData] = useState<Item[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [selectedUserData, setSelectedUserData] = useState<ServerUserData | null>(null);

  const itemsPerPage = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const isAdminUser = (userId: number): boolean => {
    // Check if the user ID is equal to 1 (assuming 1 is the admin user ID)
    return userId === 1;
  };

  const fetchData = async () => {
    try {
      const response = await getAllUserData();
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error (show a message, log, etc.)
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

  const handleEditUserFetch = async (id: number) => {
    try {
      // Fetch the user data based on the provided id
      const response = await getUserById(id);
      const user = response.data;

      // Open the modal with the fetched user data
      setShowEditModal(true);
      setSelectedUserId(id);
      setSelectedUserData(user);
    } catch (error) {
      console.error('Error fetching user data for editing:', error);
      // Handle error (show a message, log, etc.)
    }
  };
  const handleEditUserUpdate = async (id: number, updatedUserData: ServerUserData) => {
    try {
      // Call the API to update the user profile
      const response = await updateUserProfile(id, updatedUserData);
      console.log('Update user response:', response.data);

      // Update the data after successful update
      fetchData();
      setShowEditModal(false);
      setSelectedUserId(null);
      setSelectedUserData(null);
    } catch (error) {
      console.error('Error updating user:', error);
      // Handle error (show a message, log, etc.)
    }
  };
  const handleDeleteUser = async (id: number) => {
    try {
      // Call the API to delete the user
      await deleteUser(id);
      // Update the data after deletion
      const response = await getAllUserData();
      setData(response.data);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  let columns: string[] = ['id', 'firstName', 'lastName', 'email', 'userType', 'roles']; // Adjust based on your data structure



  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);
  console.log('paginatedData:', paginatedData);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  console.log('Selected User ID:', selectedUserId)
  return (
    <DefaultContainer>
      <ContainerContent>
        <Row>
          <p className='table-header-text'>Admin Dashboard</p>
        </Row>
        <div className='table-container'>
          {/* Add the 'table-container' class here */}
          <table className="table">
            <thead>
              <tr className='table-header-items-container'>
                {columnsData.map((col) => (
                  <th key={col.key}>
                    <p className='table-header-items-text'>
                      {col.displayText}
                    </p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item) => (
                <tr className='table-items-container' key={item.id}>
                  {columns.map((col) => (
                    <td className='table-items-data-cell' key={col}>
                      {col === 'userType' || col === 'roles'
                        ? (Array.isArray(item[col]) ? (item[col] as any) : [])?.[0]?.name || ''
                        : item[col]}
                    </td>
                  ))}
                  <td className='table-items-button-cell'>
                    {!isAdminUser(item.id) && (
                      <OverlayTrigger
                        key={`tooltip-delete-${item.id}`}
                        placement="top"
                        overlay={<Tooltip id={`tooltip-edit-${item.id}`}>Edit User</Tooltip>}
                      >
                        <Button
                          variant='primary'
                          onClick={() => handleEditUserFetch(item.id)}
                        >
                          <img className="reports-btn-edit" src={editGear} alt='editGear' />

                        </Button>
                      </OverlayTrigger>

                    )}
                  </td>
                  <td className='table-items-button-cell'>
                    {!isAdminUser(item.id) && (
                      <OverlayTrigger
                        key={`tooltip-delete-${item.id}`}
                        placement="top"
                        overlay={<Tooltip id={`tooltip-delete-${item.id}`}>Delete User</Tooltip>}
                      >
                        <Button
                          variant='danger'
                          onClick={() => handleDeleteUser(item.id)}

                        >
                          <img className="reports-btn-delete" src={trashCan} alt='trashCan' />
                        </Button>
                      </OverlayTrigger>
                    )}
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
        <div className="container-pagination-component">
          <Pagination>
            <Pagination.Prev
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            />
            {Array.from({ length: totalPages }).map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
          </Pagination>
        </div>

      </ContainerContent>
      {selectedUserData && (
        <EditUserModal
          show={showEditModal}
          handleClose={() => {
            setShowEditModal(false);
            setSelectedUserId(null);
            setSelectedUserData(null);
          }}
          userData={selectedUserData}
          handleEditUser={handleEditUserUpdate}
        />
      )}
    </DefaultContainer>
  );
};

export default ReportScreenComponent;
