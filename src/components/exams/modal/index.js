import React from 'react';

import { DeleteSvg } from '../../../assets/icons';
import { modalData } from '../../../utils/exams';
import Input from '../../ui/input';
import Select from '../../ui/select';

import './styles.scss';

const modal = () => {
  return (
    <div className="exams_modal">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="top_wrapper">
          <div className="top_wrapper__heading">
            <h3>Basic 3 - C</h3>
          </div>

          <div className="cancel_btn">
            <button type="button" aria-label="close modal">
              <DeleteSvg />
            </button>
          </div>

          <div className="top_wrapper__table">
            <div className="_headings">
              <span>Student No.</span>
              <span>Student Name</span>
            </div>

            {modalData.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`form_group ${item.isChecked ? '_checked' : ''}`}
                >
                  <span>{item.number}</span>
                  <span>{item.name}</span>
                  <div className="input_wrapper">
                    <Input
                      type="checkbox"
                      aria-label="select item"
                      checked={item.isChecked}
                      readOnly
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bottom_wrapper">
          <Select name="promote" id="promote" defaultValue="">
            <option disabled value="">
              Promote to
            </option>
          </Select>

          <div className="form_submit_btn">
            <button type="submit">Promote</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default modal;
