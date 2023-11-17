import React from 'react'

function Footer() {
  return (
    <>
        <footer className="bg-[#040301] border-y bottom-0 mt-auto">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-4 lg:py-7">
                <div className="md:flex md:justify-between grid grid-rows-3">

                    <div className="text-center">
                        <span className="font-bold text-[32px] text-white ">The News</span>
                    </div>

                    <div className=" text-white font-normal mt-3">
                        <ul className="md:flex md:gap-6 grid grid-cols-2 text-center">
                            <li className="mb-3 ">
                                About Us
                            </li>

                            <li className="mb-3 ">
                                Contact Us
                            </li>

                            <li className="mb-3 ">
                                Policy
                            </li>

                            <li className="mb-3 ">
                                Services
                            </li>
                        </ul>  
                    </div>

                    <div className="flex items-center mobile:justify-between">
                        <span className="text-sm text-white text-center mx-auto ">
                            © 2023 Rlearner. All Rights Reserved.
                        </span>
                
                    </div>
                </div>
                
            </div>
        </footer> 
    </>
  )
}

export default Footer