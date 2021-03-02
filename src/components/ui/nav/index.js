import React from 'react';

import { NavLink, useLocation } from 'react-router-dom';

import SkooleeoLogo from '../../../assets/images/Header Logo.png';
import KidImg from '../../../assets/images/kid1.jpg';
import DashboardSvg from '../../../assets/images/dashboard.png';
import StudentSvg from '../../../assets/images/student.png';
import ParentSvg from '../../../assets/images/family.png';
import BlackboardSvg from '../../../assets/images/blackboard.png';
import CoursesSvg from '../../../assets/images/video.png';
import EnvelopeSvg from '../../../assets/images/envelope.png';
import ExamSvg from '../../../assets/images/Page-1.png';
import TestSvg from '../../../assets/images/test.png';
import DramaSvg from '../../../assets/images/Drama.png';
import CalendarSvg from '../../../assets/images/calendar.png';
import CreditSvg from '../../../assets/images/credit-card.png';
import GraphSvg from '../../../assets/images/graph.png';
import ManSvg from '../../../assets/images/businessman.png';
import ComplainSvg from '../../../assets/images/Page-2.png';
import ConfigSvg from '../../../assets/images/settings-interface-symbol-of-two-gears-of-different-sizes.png';
import SupportSvg from '../../../assets/images/support.png';
import LogooutSvg from '../../../assets/images/logout (3).png';

import StudentSvgGreen from '../../../assets/images/green/student.png';
import ExamsSvgGreen from '../../../assets/images/green/Page-1.png';
import TestSvgGreen from '../../../assets/images/green/test.png';

import './styles.scss';

const Nav = ({ open }) => {
  const location = useLocation();

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
              <img src={DashboardSvg} alt="" /> <span>Dashboard</span>
            </a>
          </li>

          <li>
            <NavLink exact to="/" activeClassName="_active_link">
              <img
                src={location.pathname === '/' ? StudentSvgGreen : StudentSvg}
                alt=""
              />{' '}
              <span>Students</span>
            </NavLink>
          </li>

          <li>
            <a href="/#">
              <img src={ParentSvg} alt="" /> <span>Parents</span>
            </a>
          </li>

          <li>
            <a href="/#">
              <img src={BlackboardSvg} alt="" /> <span>Classes</span>
            </a>
          </li>

          <li>
            <a href="/#">
              <img src={CoursesSvg} alt="" /> <span>Courses</span>
            </a>
          </li>

          <li>
            <a href="/#">
              <img src={EnvelopeSvg} alt="" /> <span>Messages</span>
            </a>
          </li>

          <li>
            <NavLink to="/examinations" activeClassName="_active_link">
              <img
                src={
                  location.pathname === '/examinations'
                    ? ExamsSvgGreen
                    : ExamSvg
                }
                alt=""
              />{' '}
              <span>Examinations</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/cbt-examinations" activeClassName="_active_link">
              <img
                src={
                  location.pathname === '/cbt-examinations'
                    ? TestSvgGreen
                    : TestSvg
                }
                alt=""
              />{' '}
              <span>CBT Examinations</span>
            </NavLink>
          </li>

          <li>
            <a href="/#">
              <img src={DramaSvg} alt="" /> <span>Activities & Services</span>
            </a>
          </li>

          <li>
            <a href="/#">
              <img src={CalendarSvg} alt="" /> <span>Calendars & Events</span>
            </a>
          </li>

          <li>
            <a href="/#">
              <img src={CreditSvg} alt="" /> <span>Income & Expenses</span>
            </a>
          </li>

          <li>
            <a href="/#">
              <img src={GraphSvg} alt="" /> <span>Analytics & Reporting</span>
            </a>
          </li>

          <li>
            <a href="/#">
              <img src={ManSvg} alt="" /> <span>Staff & Alumni</span>
            </a>
          </li>

          <li>
            <a href="/#">
              <img src={ComplainSvg} alt="" /> <span>Complaint Board</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="nav__action_links">
        <ul>
          <li>
            <a href="/#">
              <img src={ConfigSvg} alt="" /> <span>Configuration</span>
            </a>
          </li>

          <li>
            <a href="/#">
              <img src={SupportSvg} alt="" /> <span>Support Desk</span>
            </a>
          </li>

          <li>
            <button>
              <img src={LogooutSvg} alt="" /> <span>Log Out</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
