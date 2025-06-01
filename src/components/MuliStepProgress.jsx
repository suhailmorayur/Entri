

import React from 'react';

function MuliStepProgress(props) {
    return (
        <div className='flex flex-col gap-[14px]'>
            <div className="   flex items-center lg:w-[800px] h-[23.o2] ">
                <div className="flex items-center w-full">
                    <div className="w-7 h-7  mx-[-1px] bg-[#5F5BFA] flex items-center justify-center rounded-full">
                        <div className='flex flex-col gap-10'>
                            <img className="w-4 h-4 fill-white" viewBox="0 0 24 24" src="/check.png" alt="" />

                        </div>

                    </div>
                    <div className="md:w-60 w-full h-[3px] bg-[#5F5BFA]"></div>
                </div>
                <div className="flex items-center w-full">
                    <div className="w-7 h-7 shrink-0 mx-[-1px] bg-[#5F5BFA] flex items-center justify-center rounded-full">
                        
                        <img className="w-4 h-4 fill-white" viewBox="0 0 24 24" src="/check.png" alt="" />
                    </div>
                    <div className="w-full h-[3px] bg-[#5F5BFA]"></div>
                </div>
                <div className="flex items-center w-full">
                    <div className="w-7 h-7  mx-[-1px] bg-[#5F5BFA] flex items-center justify-center rounded-full">
                        <span className="w-3 h-3 bg-[#030088] rounded-full"></span>
                    </div>
                    <div className="w-full h-[3px] bg-[#5F5BFA] "></div>
                </div>
                <div className="flex items-center">
                    <div className="w-7 h-7  mx-[-1px] bg-[#5F5BFA] flex items-center justify-center rounded-full">
                        <span className="text-sm text-white font-semibold">4</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center md:gap-[130px] gap-[50px] '>
                <span className='text-[16px]'>Enter Aadhaar <br /> Number</span>
                <span className='text-[16px]'>OTP  Validation</span>
                <span className='text-[16px]'>Validate Adhaar <br /> Details</span>
                <span className='text-[16px]'>Select and Update <br /> PAN Details</span>

            </div>
        </div>

    );
}

export default MuliStepProgress;