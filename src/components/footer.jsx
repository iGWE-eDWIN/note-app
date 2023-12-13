import React from 'react';

const date = new Date();
const tDate = date.getFullYear();
// console.log(tDate);

const Footer = () => {
  return (
    <footer>
      <p>coyright @ {tDate}</p>
    </footer>
  );
};

export default Footer;
