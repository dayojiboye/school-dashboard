import React from 'react';

import SkooleeoLogo from '../../../assets/images/skooleeo-logo.png';
import KidImg from '../../../assets/images/kid1.jpg';

import {
  DashboardSvg,
  StudentSvg,
  ParentSvg,
  BlackboardSvg,
  CoursesSvg,
  EnvelopeSvg,
} from '../../../assets/icons';

import './styles.scss';

const nav = ({ open }) => {
  return (
    <nav className={`nav ${open ? '_show' : ''}`}>
      <div className="nav__logo">
        <a href="/#">
          <img src={SkooleeoLogo} alt="Skooleeo Logo" />
        </a>
      </div>

      <div className="nav__profile">
        <div className="profile_image">
          <img src={KidImg} alt="kid profile" />
        </div>
        <div className="profile_info">
          <address>
            <h4>Greensprings School</h4>
            <span>
              12a Reeve Rd, Ikoyi, <br />
              Lagos, Nigeria
            </span>
            <span>
              Last Accessed <strong>45 Minutes Ago</strong>
            </span>
          </address>
        </div>
      </div>

      <div className="nav__main_links">
        <ul>
          <li>
            <a href="/#">
              <DashboardSvg /> <span>Dashboard</span>
            </a>
          </li>

          <li>
            <a href="/#" className="_active_link">
              <StudentSvg /> <span>Students</span>
            </a>
          </li>

          <li>
            <a href="/#">
              <ParentSvg /> <span>Parents</span>
            </a>
          </li>

          <li>
            <a href="/#">
              <BlackboardSvg /> <span>Classes</span>
            </a>
          </li>

          <li>
            <a href="/#">
              <CoursesSvg /> <span>Courses</span>
            </a>
          </li>

          <li>
            <a href="/#">
              <EnvelopeSvg /> <span>Messages</span>
            </a>
          </li>

          <li>
            <a href="/#">
              <BlackboardSvg /> <span>Examinations</span>
            </a>
          </li>

          <li>
            <a href="/#">
              <BlackboardSvg /> <span>Activities & Services</span>
            </a>
          </li>

          <li>
            <a href="/#">
              <BlackboardSvg /> <span>Calendars & Events</span>
            </a>
          </li>

          <li>
            <a href="/#">
              <BlackboardSvg /> <span>Income & Expenses</span>
            </a>
          </li>

          <li>
            <a href="/#">
              <BlackboardSvg /> <span>Analytics & Reporting</span>
            </a>
          </li>

          <li>
            <a href="/#">
              <BlackboardSvg /> <span>Staff & Alumni</span>
            </a>
          </li>

          <li>
            <a href="/#">
              <BlackboardSvg /> <span>Complaint Board</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="nav__action_links">
        <ul>
          <li>
            <a href="/#">
              <BlackboardSvg /> <span>Configuration</span>
            </a>
          </li>

          <li>
            <a href="/#">
              <BlackboardSvg /> <span>Support Desk</span>
            </a>
          </li>

          <li>
            <button>
              <BlackboardSvg /> <span>Log Out</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default nav;
