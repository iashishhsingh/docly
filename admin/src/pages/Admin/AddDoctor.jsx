import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const AddDoctor = () => {

  const [docImg, setDocImg] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [experience, setExperience] = useState('1')
  const [fees, setFees] = useState('')
  const [speciality, setSpeciality] = useState('General Physician')
  const [education, setEducation] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [aboutDoctor, setAboutDoctor] = useState('')

  const { backendURL, aToken } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {

      if (!docImg) {
        return toast.error("Please upload doctor's image")
      }

      const formData = new FormData()

      formData.append('image', docImg)
      formData.append('name', name)
      formData.append('email', email)
      formData.append('password', password)
      formData.append('experience', experience)
      formData.append('fees', Number(fees))
      formData.append('speciality', speciality)

      // Backend expects "degree"
      formData.append('degree', education)

      formData.append(
        'address',
        JSON.stringify({
          line1: address1,
          line2: address2
        })
      )

      formData.append('about', aboutDoctor)

      // Check FormData in console
      formData.forEach((value, key) => {
        console.log(`${key}:`, value)
      })

      // API request
      const { data } = await axios.post(
        backendURL + '/api/admin/add-doctor',
        formData,
        {
          headers: {
            aToken
          }
        }
      )

      if (data.success) {

        toast.success(data.message)

        // Reset form
        setDocImg(false)
        setName('')
        setEmail('')
        setPassword('')
        setExperience('1')
        setFees('')
        setSpeciality('General physician')
        setEducation('')
        setAddress1('')
        setAddress2('')
        setAboutDoctor('')

      } else {
        toast.error(data.message)
      }

    } catch (error) {

      console.log(error)

      toast.error(
        error.response?.data?.message || error.message
      )
    }
  }

  return (
    <form
      onSubmit={onSubmitHandler}
      className='m-5 w-full'
    >

      <p className='mb-3 text-lg font-medium'>
        Add Doctor
      </p>


      <div className='bg-white px-8 py-8 border border-gray-300 rounded w-full max-w-4xl max-h-[80vh] overflow-y-auto'>

        {/* Doctor Image */}
        <div className='flex items-center gap-4 mb-8 text-gray-500'>

          <label htmlFor='doc-id'>

            <img
              className='w-16 h-16 object-cover bg-gray-100 rounded-full cursor-pointer'
              src={
                docImg
                  ? URL.createObjectURL(docImg)
                  : assets.upload_area
              }
              alt="Upload Doctor"
            />

          </label>


          <input
            onChange={(e) => setDocImg(e.target.files[0])}
            type='file'
            id='doc-id'
            hidden
            accept='image/*'
          />

          <p>
            Upload Doctor's Image
          </p>

        </div>


        {/* Main Form */}
        <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>


          {/* Left Column */}
          <div className='w-full lg:flex-1 flex flex-col gap-4'>


            {/* Doctor Name */}
            <div className='flex flex-1 flex-col gap-1'>

              <p>
                Doctor Name
              </p>

              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className='border border-gray-300 rounded px-3 py-2'
                type='text'
                placeholder='Enter name'
                required
              />

            </div>


            {/* Doctor Email */}
            <div className='flex flex-1 flex-col gap-1'>

              <p>
                Doctor Email
              </p>

              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className='border border-gray-300 rounded px-3 py-2'
                type='email'
                placeholder='Enter email'
                required
              />

            </div>


            {/* Doctor Password */}
            <div className='flex flex-1 flex-col gap-1'>

              <p>
                Doctor Password
              </p>

              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className='border border-gray-300 rounded px-3 py-2'
                type='password'
                placeholder='Enter password'
                required
              />

            </div>


            {/* Experience */}
            <div className='flex flex-1 flex-col gap-1'>

              <p>
                Experience
              </p>

              <select
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                className='border border-gray-300 rounded px-3 py-2'
                name='experience'
                required
              >

                <option value=''>
                  Select Experience
                </option>

                <option value='1'>
                  1 Year
                </option>

                <option value='2'>
                  2 Years
                </option>

                <option value='3'>
                  3 Years
                </option>

                <option value='4'>
                  4 Years
                </option>

                <option value='5'>
                  5 Years
                </option>

                <option value='6'>
                  6 Years
                </option>

                <option value='7'>
                  7 Years
                </option>

                <option value='8'>
                  8 Years
                </option>

                <option value='9'>
                  9 Years
                </option>

                <option value='10'>
                  10 Years
                </option>

              </select>

            </div>


            {/* Fees */}
            <div className='flex flex-1 flex-col gap-1'>

              <p>
                Fees
              </p>

              <input
                onChange={(e) => setFees(e.target.value)}
                value={fees}
                className='border border-gray-300 rounded px-3 py-2'
                type='number'
                placeholder='Enter fees'
                required
              />

            </div>

          </div>


          {/* Right Column */}
          <div className='w-full lg:flex-1 flex flex-col gap-4'>


            {/* Specialization */}
            <div className='flex flex-1 flex-col gap-1'>

              <p>
                Specialization
              </p>

              <select
                onChange={(e) => setSpeciality(e.target.value)}
                value={speciality}
                className='border border-gray-300 rounded px-3 py-2'
                name='speciality'
                required
              >

                <option value=''>
                  Select Speciality
                </option>

                <option value='General physician'>
                  General physician
                </option>

                <option value='Dermatologist'>
                  Dermatologist
                </option>

                <option value='Gynecologist'>
                  Gynecologist
                </option>

                <option value='Pediatricians'>
                  Pediatricians
                </option>

                <option value='Neurologist'>
                  Neurologist
                </option>

                <option value='Gastroenterologist'>
                  Gastroenterologist
                </option>

              </select>

            </div>


            {/* Education / Degree */}
            <div className='flex flex-1 flex-col gap-1'>

              <p>
                Education / Degree
              </p>

              <input
                onChange={(e) => setEducation(e.target.value)}
                value={education}
                className='border border-gray-300 rounded px-3 py-2'
                type='text'
                placeholder='Enter degree'
                required
              />

            </div>


            {/* Address */}
            <div className='flex flex-1 flex-col gap-1'>

              <p>
                Address
              </p>

              <input
                onChange={(e) => setAddress1(e.target.value)}
                value={address1}
                className='border border-gray-300 rounded px-3 py-2'
                type='text'
                placeholder='Address 1'
                required
              />

              <input
                onChange={(e) => setAddress2(e.target.value)}
                value={address2}
                className='border border-gray-300 rounded px-3 py-2'
                type='text'
                placeholder='Address 2'
              />

            </div>

          </div>

        </div>


        {/* About Doctor */}
        <div className='mt-4 mb-2'>

          <p>
            About Doctor
          </p>

          <textarea
            onChange={(e) => setAboutDoctor(e.target.value)}
            value={aboutDoctor}
            className='w-full px-4 py-2 rounded border border-gray-300'
            placeholder='Write about doctor'
            rows='5'
            required
          />

        </div>


        {/* Submit Button */}
        <button
          type='submit'
          className='bg-primary text-white px-10 py-3 mt-4 rounded-full transition-all duration-300 ease-in-out hover:scale-105 active:scale-95'
        >
          Add Doctor
        </button>

      </div>

    </form>
  )
}

export default AddDoctor