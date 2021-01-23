import React from 'react';
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

const NavBar = () => {
    return (
        <div>
            <header className='bg-blue-600'>
                <div className='container mx-auto flex justify-between'>
                    <nav className='flex'>
                        <NavLink
                            to='/'
                            exact
                            activeClassName='text-white'
                            className='inline-flex items-center 
                            py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest'
                        >
                            Mr. Spock
                            </NavLink>
                        <NavLink to='/post' activeClassName='text-red-100 bg-red-700'
                            className='inline-flex items-center py3 px-3 my-6 rounded text-red-200 hover:text-green-800'
                        >
                            Blog Posts
                             </NavLink>
                        <NavLink to='/project' activeClassName='text-red-100 bg-red-700'
                            className='inline-flex items-center py3 px-3 my-6 rounded text-red-200 hover:text-green-800'
                        >
                            Projects
                             </NavLink>
                        <NavLink to='/about' activeClassName='text-red-100 bg-red-700'
                            className='inline-flex items-center py3 px-3 my-6 rounded text-red-200 hover:text-green-800'
                        >
                            About Me
                             </NavLink>
                    </nav>

                    <div className='inline-flex py-3 px-3 my-3'>
                        <SocialIcon url='https://twitter.com/therealnimoy?lang=en' className='mr-4' target='_blank' fgColor='#fff' style={{ height: 35, width: 35 }} />
                        <SocialIcon url='https://www.facebook.com/Spock-200641986617766/' className='mr-4' target='_blank' fgColor='#fff' style={{ height: 35, width: 35 }} />
                        <SocialIcon url='https://github.com/spockframework' className='mr-4' target='_blank' fgColor='#fff' style={{ height: 35, width: 35 }} />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default NavBar;