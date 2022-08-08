import React from 'react'
import './Roles.css'
import { AiFillPlusCircle } from "react-icons/ai"; 
import RoleAccordion from '../components/RoleAccordion';


export default function Roles() {

  function selectedRole() {
    var mylist = document.getElementById("r-list");
    document.getElementById("role").value = mylist.options[mylist.selectedIndex].text;
    console.log(mylist.options[mylist.selectedIndex].text)
  }

  

  return (
    <div className="r-roles">

      <form className='r-form'>
        <select className='r-list' id='r-list' onChange={selectedRole}>
          <option>  </option>
          <option> HR </option>
          <option> Admin </option>
          <option> Manager </option>
          <option> Employee </option>
          <option> xxxxxxxxxx </option>
          <option> xxxxxxxxxxxx </option>
        </select>
      </form>

      <button className='plus-btn'>
        
        <AiFillPlusCircle  className="AiFillPlusCircle "  size="30px" />
      </button>
      <hr className='hr' />

      <div className="role-name">
        <ul className='flex-container space-between'>
          <li className='flex-item'>Role Name:</li>
          <li>
            <input type="text" id="role" size="20" className='flex-item'/>
          </li>
        </ul>
      </div>
<br /> <br />
        <RoleAccordion />

    </div>
  )
}

