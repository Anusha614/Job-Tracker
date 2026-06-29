import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoutBtn from "./Logout_btn";
import { useSelector } from "react-redux";


export default function Header () {

  const authstatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug:'/',
      active: true
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authstatus
    },
    {
      name: 'Sign Up',
      slug: '/sign-up',
      active: !authstatus
    },
    {
      name: 'All Applications',
      slug: '/all-applications',
      active: authstatus
    },
    {
      name: 'Application',
      slug: '/application/:id',
      active: authstatus
    },
    {
      name: 'Create Application',
      slug: '/add-application',
      active: authstatus
    }
   
  ]


    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl">Job Tracker</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
       {navItems.map((item) =>
        item.active ? (
          <li key = {item.name}>
            <button className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
            onClick={() => navigate(item.slug)}>
              {item.name}
            </button>
          </li>
        ):null
      )}
      { authstatus && (
       <li>
          <LogoutBtn/>
       </li>
      )}
    </ul>
  </div> 
</div>
    )
}