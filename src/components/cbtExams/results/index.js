import React from 'react';

import TeacherImg from '../../../assets/images/teacher1.jpg';
import './styles.scss';

const results = ({ isApproved, value }) => {
  return (
    <div className="cbt_exams_results">
      <div className="result_card">
        <div className="_left">
          <div className="result_heading">
            <h3>Advanced Chemistry</h3>
          </div>

          <div className="sub_heading">
            <div className="sub_heading__group">
              <span>Class Type -</span>
              <span>Senior Secondary</span>
            </div>

            <div className="sub_heading__group">
              <span>Year Group -</span>
              <span>1</span>
            </div>

            <div className="sub_heading__group">
              <span>Time -</span>
              <span>1hr 30min</span>
            </div>

            <div className="sub_heading__group">
              <span>Questions -</span>
              <span>25</span>
            </div>

            <div className="sub_heading__group">
              <span>Students -</span>
              <span>220</span>
            </div>
          </div>

          <div className="result_paragraph">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              quis arcu at sem finibus congue. Vestibulum nec hendrerit nisi.
              Mauris a maximus nibh. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas
            </p>
          </div>

          <div className="button_group">
            <button>Organic Chemistry</button>

            <button>Elements</button>
          </div>
        </div>

        <div className="_right">
          <div className="teacher_profile">
            <div className="teacher_image">
              <img src={TeacherImg} alt="teacher" />
            </div>

            <div className="teacher_info">
              <span>Abraham Pigeon</span>
              <span>Teacher in Charge</span>
            </div>
          </div>

          <div className="progress_bar">
            <label htmlFor="result_progress">Progress</label>

            <progress id="result_progress" max="100" value={value || '0'}>
              {value || '0'}
            </progress>

            <span>{value || '0'}%</span>
          </div>

          <div className="status_btn">
            <button disabled={!isApproved}>
              {isApproved ? 'Approved' : 'Approve'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default results;
