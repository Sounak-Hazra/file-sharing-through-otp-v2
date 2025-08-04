import React from 'react'
import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <>
            <div className='w-full h-20 flex items-center justify-center'>
                <NavLink to={"/"} className={({ isAvtive }) => `text-3xl font-bold`} >

                    SHARE AnyWhare
                </NavLink>
            </div>
            <div className='flex justify-around items-center h-16'>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `px-10 py-2 text-2xl font-bold rounded-4xl text-black ${isActive ? 'bg-cyan-500' : 'bg-gray-300'
                        }`
                    }
                >
                    Send
                </NavLink>

                <NavLink to={"/recive"} className={({ isActive }) =>
                        `px-10 py-2 text-2xl font-bold rounded-4xl text-black ${isActive ? 'bg-cyan-500' : 'bg-gray-300'
                        }`
                    }>
                    Recive
                </NavLink>
            </div>

        </>
    )
}

export default Nav