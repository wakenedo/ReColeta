import React, { useState, useEffect } from 'react';
import { Row, Pagination } from 'react-bootstrap';
import { getAllUserData } from '../../api/apiClient';
import { ReportScreenComponentProps } from '../../Types/SystemComponentsTypes/ReportScreenInterface';
import { Item } from '../../Types/SystemComponentsTypes/ReportScreenInterface/Item';
import { DefaultContainer } from '../System/Containers/DefaultContainer';
import { ContainerContent } from '../System/Containers/ContainerContent';
import { columnsData } from './data/columnsData'



const ReportScreenComponent: React.FC<ReportScreenComponentProps> = () => {
  const [data, setData] = useState<Item[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllUserData();
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  let columns: string[] = ['id', 'firstName', 'lastName', 'email', 'userType', 'roles']; // Adjust based on your data structure



  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);
  console.log('paginatedData:', paginatedData);

  const totalPages = Math.ceil(data.length / itemsPerPage);

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
                </tr>
              ))}
            </tbody>
          </table>
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
        </div>
      </ContainerContent>
    </DefaultContainer>
  );
};

export default ReportScreenComponent;
