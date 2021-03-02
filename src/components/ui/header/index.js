import React from 'react';

import Input from '../input';
import Dropdown from '../dropdown';
import { BellSvg } from '../../../assets/icons';
import EnvelopeSvg from '../../../assets/images/envelope.png';
import ParentImg from '../../../assets/images/Image Place Holder.png';

import './styles.scss';

const header = () => {
  return (
    <header className="header">
      <div className="header__search">
        <Input
          type="search"
          placeholder="Search the System"
          aria-label="search the system"
        />
      </div>

      <div className="header__actions">
        <div className="mail_notification">
          <button aria-label="mail notifications">
            <img src={EnvelopeSvg} alt="" />
            <span></span>
          </button>
        </div>

        <div className="system_notification">
          <button aria-label="system notifications">
            <BellSvg />
            <span></span>
          </button>
        </div>

        <div className="profile_img">
          <img src={ParentImg} alt="parent" />
        </div>

        <Dropdown btnText="Viraj Adhihetty" />
      </div>
    </header>
  );
};

export default header;
