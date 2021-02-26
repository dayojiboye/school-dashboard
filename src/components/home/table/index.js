import React from 'react';

import { data } from '../../../utils/home/data';
import './styles.scss';

const table = () => {
  return (
    <div className="table_wrapper">
      <table className="student_table">
        <thead>
          <tr>
            <th>Student No.</th>
            <th>Student Name</th>
            <th>Grade</th>
            <th>Parent/Guardian</th>
            <th>Student Email</th>
            <th>Parent/Guardian Email</th>
            <th>Phone Number</th>
            <th>Payment Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <span>{item.studentNumber}</span>
                </td>

                <td>
                  <span>{item.studentName}</span>
                </td>

                <td>
                  <span>{item.grade}</span>
                </td>

                <td>
                  <span>{item.parent}</span>
                </td>

                <td>
                  <span>{item.studentEmail}</span>
                </td>

                <td>
                  <span>{item.parentEmail}</span>
                </td>

                <td>
                  <span>{item.phone}</span>
                </td>

                <td>
                  <span>{item.status}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default table;
