import React from 'react';

import { examsData } from '../../../utils/exams';
import './styles.scss';

const table = () => {
  return (
    <div className="exams_table_wrapper">
      <table className="exams_table">
        <thead>
          <tr>
            <th>Year Group</th>
            <th>Class Type</th>
            <th>Class Name</th>
          </tr>
        </thead>

        <tbody>
          {examsData.map((item, index) => {
            return (
              <tr key={index} className="exams_tr">
                <td>
                  <span>{item.yearGroup}</span>
                </td>

                <td>
                  <span>{item.classType}</span>
                </td>

                <td>
                  <span>{item.name}</span>
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
