import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router';

function OtpValidation(props) {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    mode: "onChange"
  });

  const onSubmit = (data) => {
    navigate("/otpValidation2")
  };

    const handleclick = () => {
navigate('/')
}
  return (
    <div className='container min-h-screen mx-auto flex flex-col'>
      <h1 className='mb-9 text-[22px]'>OTP Validation</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-4 '>
        <div className='bg-white rounded-2xl flex flex-col px-6 py-8'>
          <span className='font-medium text-lg lg:text-[24px]'>
            Request for generating OTP by SMS to your Aadhaar linked Mobile Number will be sent to UIDAl - Please read the terms and provide consent.
          </span>
          <div className='border rounded-2xl py-[25px] px-[38px] '>
            <h2 className='font-medium  text-lg lg:text-[24px]'>
              Consent Declaration for Generation of new PAN based on Aadhaar e-KYC details:
            </h2>
            <span className='[20px]'>1.I have understood the process of authentication described herein and hereby grant consent for use of my Aadhaar identity information (through Aadhaar based e-KYC authentication facility of
              UIDAI) for puropses of authentication of my identity in accordance with the provisions of the Aadhaar (Targeted Delivery of Financial and other Subsidies, Benefits and Services) Act, 2016 and allied rules and regulations notified there under, and for purposes of verifying and validating my credentials as maintained by the Income Tax Department.</span>



            {/* Checkbox */}
            <div className='flex items-center pt-[74px]'>
              <input
                type='checkbox'
                id="myCheckbox"
                {...register("click", { required: "Please confirm the checkbox" })}
                className='mt-1'
              />
              <label htmlFor='myCheckbox' className='lg:text-[20px] font-medium pl-3'>
                I have read the consent terms and agree to proceed further <span className='text-[#C97D02]'>*</span>
              </label>
            </div>
            {errors.click && (
              <span className='text-red-600'>{errors.click.message}</span>
            )}
          </div>





        </div>
        <div className='flex justify-between items-center mt-8'>
          <button
            onClick={handleclick}
            className='border border-black py-2 px-8 text-blue-600 rounded-lg lg:text-[20px]'
          >
            Cancel
          </button>

          <button
            type='submit'
            className=' rounded-lg py-2 px-8 bg-[#D8D5D5] text-black lg:text-[20px] disabled:opacity-50'
            disabled={!isValid}
          >
            Continue
          </button>

        </div>
      </form>

    </div>
  );
}

export default OtpValidation;