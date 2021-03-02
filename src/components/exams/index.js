import React from 'react';

import Dropdown from '../ui/dropdown';
import Input from '../ui/input';
import { PlusSvg } from '../../assets/icons';
import SettingsSvg from '../../assets/images/gear.png';
import Table from './table';
import Modal from './modal';

import './styles.scss';

const exams = () => {
  return (
    <div className="exams">
      <div className="exams__heading">
        <h1>Examinations</h1>
      </div>

      <div className="exams__tab">
        <div className="_left">
          <h2 className="results_tab">
            <button>Results</button>
          </h2>

          <h2 className="schedules_tab">
            <button>Schedules</button>
          </h2>

          <h2 className="promotions_tab _active">
            <button>Promotions</button>
          </h2>
        </div>

        <div className="_right">
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

      <div className="exams__data">
        <div className="exams_data_actions">
          <div className="_left">
            <Dropdown btnText="Class Type" id="_class_type" />

            <Dropdown btnText="Year Group" id="_year_group" />

            <Dropdown btnText="Class Name" id="_class_name" />
          </div>

          <div className="_right">
            <div className="data_search">
              <Input
                type="search"
                placeholder="Enter Keywords, Name or ID"
                aria-label="search data"
              />
            </div>
          </div>
        </div>

        <div className="exams_data_content">
          <Table />

          <div className="exams_active_line"></div>

          <Modal />
        </div>
      </div>
    </div>
  );
};

export default exams;
