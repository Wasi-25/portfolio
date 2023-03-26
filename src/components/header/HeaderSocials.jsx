import React from 'react';
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/wasiullah-khalique-71a10a1a6/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Wasi-25/" target="_blank"><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials