import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaHackerrank} from 'react-icons/fa'

function HeaderSocial() {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/gokuldas-mp-3123301b3/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/Gokulmp1999' target="_blank"><FaGithub/></a>
        <a href='https://www.hackerrank.com/gokuldasmp1999' target="_blank"><FaHackerrank/></a>
    </div>
  )
}

export default HeaderSocial