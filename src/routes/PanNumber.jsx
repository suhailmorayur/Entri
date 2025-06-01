

import { useSelector, useDispatch } from 'react-redux'

import { useNavigate } from 'react-router';
import { useForm } from "react-hook-form";
import { addAadharNumber } from '../features/aadhar/aadharSlices';

function PanNumber() {
      const dispatch = useDispatch()

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    mode: "onChange"
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
dispatch(addAadharNumber(data.pannumber))
navigate("/otpValidation")
  };

    const aadharNumber = useSelector(state=> state.aadhar.items)
console.log(aadharNumber);

  return (

    <div style={{marginLeft:''}} className='md:container min-h-screen mx-auto flex flex-col'>
      <h1 className='mb-9 text-[22px]'>Get New e-PAN</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-4'>

      <div className='bg-white rounded-2xl flex flex-col px-6 py-8'>
        <span className='font-medium text-lg lg:text-[24px]'>
          Remember:
          <span className='font-normal'>
            {" "}it's an Aadhaar e-KYC based process and allotment of PAN is free of cost.
            A PDF file of PAN will be generated and issued to the applicant. Help?
          </span>
        </span>

        <h2 className='font-medium mt-10 text-lg lg:text-[24px]'>
          Enter Your 12 digit Aadhaar Number for PAN allotment
          <span className='text-[#C97D02]'>*</span>
        </h2>

          {/* Aadhaar Number Input */}
          <input
            className='border w-40 border-gray-300 rounded-lg p-2 '
            {...register("pannumber", {
              required: "Aadhaar number is required",
              pattern: {
                value: /^[0-9]{12}$/,
                message: "Aadhaar number must be exactly 12 digits"
              }
            })}
          />
          {errors.pannumber && (
            <span className='text-red-600'>{errors.pannumber.message}</span>
          )}

          {/* Checkbox */}
          <div className='flex flex-row items-center mt-5'>
            <input
              type='checkbox'
              id="myCheckbox"
              {...register("click", { required: "Please confirm the checkbox" })}
              className='mt-1'
            />
            <label htmlFor='myCheckbox' className='lg:text-[20px] pl-3'>
              I confirm that <span className='text-[#C97D02]'>*</span>
            </label>
          </div>
          {errors.click && (
            <span className='text-red-600'>{errors.click.message}</span>
          )}

          {/* Informational List */}
          <ul className='mt-8 ml-5 lg:text-[20px] space-y-2'>
            <li>1.I have never been allotted a Permanent Account Number (PAN).</li>
            <li>2.My active mobile number is linked with Aadhaar.</li>
            <li>3.My complete date of birth (DD-MM-YYYY) is available on Aadhaar card.</li>
            <li>4.I am not a minor as on the application date of PAN.</li>
          </ul>

          {/* Buttons */}

      </div>
                <div className='flex justify-between items-center mt-8'>
            <button 
              type='button'
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

export default PanNumber;
