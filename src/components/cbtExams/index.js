import React from 'react';

import Dropdown from '../ui/dropdown';
import Input from '../ui/input';
import { PlusSvg } from '../../assets/icons';
import SettingsSvg from '../../assets/images/gear.png';
import Results from './results';

import './styles.scss';

const cbtExams = () => {
  return (
    <div className="cbt_exams">
      <div className="cbt_exams__heading">
        <h1>CBT Examinations</h1>
      </div>

      <div className="cbt_exams__tab">
        <h2 className="cbt_courses">
          <button>CBT Courses</button>
        </h2>

        <h2 className="cbt_results _active">
          <button>CBT Results</button>
        </h2>
      </div>

      <div className="cbt_exams__data">
        <div className="cbt_data_actions">
          <div className="_left">
            <Dropdown btnText="Class Type" id="_class_type" />

            <Dropdown btnText="Year Group" id="_year_group" />

            <Dropdown btnText="Course" id="_course" />
          </div>

          <div className="_right">
            <div className="data_search">
              <Input
                type="search"
                placeholder="Enter Keywords, Name or ID"
                aria-label="search data"
              />
            </div>

            <div className="_settings_btn">
              <button aria-label="settings">
                <img src={SettingsSvg} alt="" />
              </button>
            </div>

            <div className="_plus_btn">
              <button aria-label="add new data">
                <PlusSvg />
              </button>
            </div>
          </div>
        </div>

        <Results isApproved={true} value="100" />

        <Results isApproved={false} value="60" />

        <Results isApproved={false} value="60" />
      </div>
    </div>
  );
};

export default cbtExams;
