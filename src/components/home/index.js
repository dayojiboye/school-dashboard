import React from 'react';

import Dropdown from '../ui/dropdown';
import Input from '../ui/input';
import Table from './table';
import { PlusSvg } from '../../assets/icons';
import SettingsSvg from '../../assets/images/gear.png';
import FilterSvg from '../../assets/images/adjust.png';

import './styles.scss';

const homePage = () => {
  return (
    <div className="home">
      <div className="home__heading">
        <h1>Students</h1>
      </div>

      <div className="home__data">
        <div className="_data_actions">
          <div className="_left">
            <Dropdown btnText="Select Grade" id="_grade" />

            <Dropdown btnText="Select Subject" id="_subject" />

            <div className="data_search">
              <Input
                type="search"
                placeholder="Enter Keywords, Name or ID"
                aria-label="search data"
              />
            </div>
          </div>

          <div className="_right">
            <Dropdown btnText="Filter" id="_filter">
              <img src={FilterSvg} alt="" />
            </Dropdown>

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

        <Table />
      </div>
    </div>
  );
};

export default homePage;
