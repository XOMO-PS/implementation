import React, { useState } from 'react'

import Dropdown from '../ui/Dropdown';
import { Button } from '../ui/Button';
import { CheckBox } from '../ui/Checkbox';
import { Input, InputSize } from '../ui/Input';

export default function SearchService() {
    // const [options, setOptions] = useState([]); 
    const [selectedValue, setSelectedValue] = useState('');
    const [showTable, setShowTable] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    // handle the dropdown
    // const handleDropdownChange = () => {
    //     setSelectedValue(true);
    //     setShowTable(true); 
    // };

    return <>
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-blue p-4">
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

            <div className='flex flex-col p-24 ml-100  container mx-auto'>
                <div className='ml-23 w-2/5'>
                    <Dropdown title="Select a service" options={[
                        "Select a service",
                        "Carpenter",
                        "Plumber",
                        "Electrician",
                        "Mason",
                        "Painter",
                        "Welder",
                        "Other",
                    ]} value={selectedValue}
                        //onChange={handleDropdownChange}
                        onChange={setSelectedValue}
                    />
                </div>
                {/* {showTable && ( */}
                <div className="flex ">

                    <div className='flex-1 pr-4 pt-3 mt-32 mr-3'>
                        <table className="table-fixed table border-none py-9">
                            <caption className="caption-top bg-cyan-50">Providers</caption>
                            <thead className="bg-gray-100 ">
                                <tr className='bg-blue font-poppins text-left font-normal'>
                                    <th className="px-4 py-2">Names</th>
                                    <th className="px-4 py-2">Profession</th>
                                    <th className="px-4 py-2">Location</th>
                                    <th className="px-4 py-2">Book</th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                <tr className=''>
                                    <td className=" px-4 py-2">The Sliding Mr. Bones </td>
                                    <td className=" px-4 py-2">Malcolm Lockyer</td>
                                    <td className=" px-4 py-2">1961</td>
                                    <td className=" px-4 py-2">View</td>
                                </tr>
                                <tr className='bg-cyan-50 hover:bg-gray-100 transition-opacity duration-300'>
                                    <td className=" px-4 py-2">Witchy Woman</td>
                                    <td className=" px-4 py-2">The Eagles</td>
                                    <td className=" px-4 py-2">1972</td>
                                    <td className=" px-4 py-2">View</td>
                                </tr>
                                <tr>
                                    <td className=" px-4 py-2">Shining Star</td>
                                    <td className=" px-4 py-2">Earth, Wind, and Fire</td>
                                    <td className=" px-4 py-2">1975</td>
                                    <td className=" px-4 py-2">View</td>
                                </tr>
                                <tr className='bg-cyan-50'>
                                    <td className=" px-4 py-2">Witchy Woman</td>
                                    <td className=" px-4 py-2">The Eagles</td>
                                    <td className=" px-4 py-2">1972</td>
                                    <td className=" px-4 py-2">View</td>
                                </tr>
                            </tbody>
                            <tfoot className='bg-cyan-100'>
                                <tr>
                                    
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    <div className="flex border hover:border-darkGreen rounded-2xl">
                        <div className="flex-1 p-4">
                            <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                                alt="Your Image"
                                className="w-32 h-32 mb-4m rounded-2xl mb-4" />
                            <label className="form-control w-full max-w-xs pt-2">
                                <div className="label">
                                    <span className="label-text">Telephone</span>
                                </div>
                                <Input
                                    inputSize="small"
                                    value="(123) 4567 890"
                                    leftIcon={"phone"}
                                    disabled
                                />
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Email</span>
                                </div>
                                <Input
                                    inputSize="small"
                                    value="email@email.com"
                                    leftIcon={"email"}
                                    disabled
                                />
                            </label>
                        </div>
                        <div className="flex-1 p-4">
                            <label className="form-control w-full max-w-xs mb-4">
                                <div className="label">
                                    <span className="label-text">Full names</span>
                                </div>
                                <Input
                                    inputSize="small"
                                    value="Full names"
                                    disabled
                                />
                            </label>
                            <label className="form-control w-full max-w-xs mb-4">
                                <div className="label">
                                    <span className="label-text">Location</span>
                                </div>
                                <Input
                                    inputSize="small"
                                    value="Bremen"
                                    disabled
                                />
                            </label>
                            <label className="form-control w-full max-w-xs mt-4">
                                <div className="label">
                                    <span className="label-text">Company</span>
                                </div>
                                <Input
                                    inputSize="small"
                                    value="Company"
                                    disabled
                                />
                            </label>
                            <label className="form-control w-full max-w-xs p-4">
                                <div className="label">
                                    <span className="label-text">Position</span>
                                </div>
                                <Input
                                    inputSize="small"
                                    value="Position"
                                    disabled
                                />
                            </label>
                            <div className="w-48 mt-8">
                                <Button buttonType="green" buttonSize="xlarge" isRounded>
                                    Contact
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
                {/* )} */}
            </div>


        </div>

    </>
}