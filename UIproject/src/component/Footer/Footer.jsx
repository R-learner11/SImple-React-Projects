import React from 'react'

function Footer({name}) {
  return (
    <footer className="bg-[#040301] border-y bottom-0 mt-auto">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0 text-center">
                        <span className="font-extrabold text-2xl text-yellow-300 ">{name.toUpperCase()}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-amber-500 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4 text-white">
                                    
                                        Home
                                    
                                </li>
                                <li className='text-white'>
                                    About
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-amber-500 uppercase">Follow us</h2>
                            <ul className="text-white font-medium">
                                <li className="mb-4">
                                   
                                        Our Facebook page
                                    
                                </li>
                                <li>
                                    Our Instagram
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-amber-500 uppercase">Join Us</h2>
                            <ul className="text-white font-medium">
                                <li className="mb-4 ">
                                    Sweets community
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-white sm:text-center">
                        © 2023 Rlearner. All Rights Reserved.
                    </span>
                
                </div>
            </div>
        </footer>
  )
}

export default Footer