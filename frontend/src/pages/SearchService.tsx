import React from 'react'

import Dropdown from '../ui/Dropdown';
import { Button } from '../ui/Button';
import { CheckBox } from '../ui/Checkbox';
import { InputSize } from '../ui/Input';

export default function SearchService() {
    return <>
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-blue p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">XOMO</span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="flex-1"></div>

                <div className="flex items-center">

                    <div className="text-white">
                        <h3>customer names</h3>
                    </div>
                    <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                        alt="Profile Image" className="w-12 h-12 rounded-full ml-2" />
                </div>
            </nav>
        </div>

    </>
}