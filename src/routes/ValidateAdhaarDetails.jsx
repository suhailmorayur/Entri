import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux'


function ValidateAdhaarDetails(props) {
        const aadhaarNumber = useSelector(state=> state.aadhar.items)
          const navigate = useNavigate()
      const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    mode: "onChange"
  });

    const onSubmit = (data) => {
    };

      const handleclick = () => {
navigate('/')
}
    return (
    <div className='container min-h-screen mx-auto flex flex-col'>
      <h1 className='mb-9 text-[22px]'>Your personal data based on Aadhaar e-KYC</h1>
        <form  onSubmit={handleSubmit(onSubmit)} className='mt-4 '>
      <div className='bg-white rounded-2xl flex flex-col px-6 py-8'>

<div className=' flex flex-col gap-7'>
    <div className='flex flex-row items-center gap-[590px]'>
   <span>Photo</span>
   {aadhaarNumber[0].photo ? <img className='rounded-full w-24' src={aadhaarNumber[0].photo} alt="" /> : <img className='rounded-full w-24' src="" alt="" /> } 
</div>
<  hr className='text-[#EEEEEE]'/>
 <div className='flex flex-row items-center lg:gap-[505px]'>
<span>Aadhaar Number</span>
<span>{aadhaarNumber[0].aadhar}</span>
 </div>
<  hr className='text-[#EEEEEE]'/>

<div className='flex flex-row items-center lg:gap-[590px]'>
<span>Name</span>    

{aadhaarNumber[0].name ? <span>{aadhaarNumber[0].name}</span> : <span>".........."</span>} 
</div>
<  hr className='text-[#EEEEEE]'/>

<div className='flex flex-row items-center lg:gap-[540px]'>
<span>Date Of Birth</span>
{aadhaarNumber[0].dateOfBirth ? <span>{aadhaarNumber[0].dateOfBirth}</span> : <span>00-00-00</span>}
</div>

</div>
  

  


       
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
              className='border-2 rounded-lg py-2 px-8 bg-blue-600 text-white lg:text-[20px] disabled:opacity-50'
              disabled={!isValid}
            >
              Continue
            </button>
          </div>
          
                        </form>

    </div>
    );
}

export default ValidateAdhaarDetails;