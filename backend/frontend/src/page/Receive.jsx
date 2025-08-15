import React from 'react'
import { useState } from 'react'
import OtpInput from '../components/OtpInput'
import { toast } from 'sonner'


const Receive = () => {

  const [link, setLink] = useState("")
  const [otp, setOtp] = useState("")


  const getLink = async () => {
    try {
      if (otp.length != 10) {
        return;
      } 

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/getdata/singleFile?otp=${otp}`)
      const {data} = await res.json()

      setLink(data.fileLink)

      toast.success("Link generated click to download.")
    } catch (error) {
      console.log(error)
      toast.error(error.message || "Error occured try again latter.")
    }
  }
  return (
    <>
      <div className="h-[40vh] flex items-center justify-center flex-col gap-6 px-4">
        <h2 className="text-2xl font-bold text-white">Enter 10-Digit OTP</h2>

        <OtpInput length={10} onChange={setOtp} />

        <button
          onClick={getLink}
          className="mt-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-lg px-6 py-2 rounded-xl shadow-md transition-all duration-300"
        >
          Get
        </button>
      </div>

      <div className='flex gap-3 flex-wrap justify-center'>
        <h2 className="text-2xl font-bold text-white" >
          {
          link &&
            "Your Link is here:"
          }
          {
            !link &&
            "Give the 10 digit otp to get the link"
          }
        </h2>

        {
          link &&
          <a className='text-xl text-blue-500 hover:underline' download href={link}>{ link }</a>
        }
      </div>

    </>
  )
}

export default Receive