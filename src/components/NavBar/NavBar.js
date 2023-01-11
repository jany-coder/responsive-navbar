import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        {id:1, name: 'Home', path: '/home'},
        {id:2, name: 'Product', path: '/product'},
        {id:3, name: 'Orders', path: '/others'},
        {id:1, name: 'Contact', path: '/contact'},
        {id:1, name: 'About', path: '/about'},
]
    return (
        <nav className='bg-purple-200 w-full'>
            <div onClick={()=> setOpen(!open)} className="h-6 w-6 md:hidden">
                {
                    open? <XMarkIcon/> :  <Bars3Icon/>
                }
            </div>
            <ul className={`md:flex bg-purple-200 w-full justify-center gap-4 absolute md:static ${open? 'top-6 transition-all duration-150 ease-in': 'top-[-122px]  transition-all duration-150 ease-in'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;