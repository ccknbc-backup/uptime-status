import React from 'react';
import Link from './link';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <p>基于 <Link to="https://uptimerobot.com/" text="UptimeRobot" /> 接口制作，检测频率 1 小时</p>
        <p>&copy; 2021 <Link to="https://www.ccknbc.cc/" text="CCKNBC" /></p>
      </div>
    </div>
  );
}

export default Footer;
