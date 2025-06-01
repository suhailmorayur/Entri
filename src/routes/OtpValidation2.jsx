import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router';
import OtpPage from '../components/OtpPage';
import ExpTimer from '../components/ExpTimer';
import ResendOtp from '../components/ResendOtp';

function OtpValidation2(props) {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    mode: "onChange"
  });

  const onSubmit = (data) => {
    navigate("/validateAdhaarDetails")
  };

  const handleclick = () => {
navigate('/')
}

  return (
    <div className='container min-h-screen mx-auto flex flex-col'>
      <h1 className='mb-9 text-[22px]'>OTP Validation</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-4 '>
        <div className='bg-white rounded-2xl flex flex-col px-6 py-8'>
          <h1 className='text-[24px] font-medium'>Check your phone</h1>
          <span className='font-[24px]'>We have sent a One Time Password (OTP) in a text message (SMS) to your Primary mobile number +91 23********71 and primary email id avinash12345@nergymail.com</span>

  
          <OtpPage />
          <ExpTimer />
          <ResendOtp />





        </div>
        {/* Checkbox */}
        <div className='flex items-start mt-5'>
          <input
            type='checkbox'
            id="myCheckbox"
            {...register("click", { required: "Please confirm the checkbox" })}
            className='mt-1'
          />
          <label htmlFor='myCheckbox' className='lg:text-[20px] pl-3'>
            I agree to validate my Aadhaar details with UIDAl. After successful validation of OTP entered by you, the request for e-KYC Aadhaar data will be fetched from UIDAl            </label>
        </div>
        {errors.click && (
          <span className='text-red-600'>{errors.click.message}</span>
        )}
        <div className='flex justify-between items-center mt-8'>
          <button
            onClick={handleclick}
            className='border border-black py-2 px-8 text-blue-600 rounded-lg lg:text-[20px]'
          >
            Cancel
          </button>

          <button
            type='submit'
            className=' rounded-lg py-2 px-8  bg-[#D8D5D5] text-black lg:text-[20px] disabled:opacity-50'
            disabled={!isValid}
          >
            Continue
          </button>
        </div>

      </form>

    </div>
  );
}

export default OtpValidation2;