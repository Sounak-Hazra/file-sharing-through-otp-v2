import React, { useEffect } from 'react'
import { useState } from 'react';
import saveInLocal from '../utils/saveInLocalStorage';
import useGetDataFromStorage from '../hooks/useGetDataFromStorage';
import ShowData from '../components/ui/ShowData';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const LOCALSTORAGENAME = "allFiles"

const SendFile = () => {
  const [file, setFile] = useState(null); // this holds the file
  const [isDragging, setIsDragging] = useState(false);
  const { data, getData } = useGetDataFromStorage(LOCALSTORAGENAME)
  const [isSubmitting,setIsSubmitting] = useState()

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      console.log('Dropped file:', droppedFile);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      console.log('Selected file:', selectedFile);
    }
  };

  const sendData = async () => {

    setIsSubmitting(true)
    if (file == null) {
      alert("File is empty.")
    }
    const fromData = new FormData()
    fromData.set("file", file)

    try {
      const req = await fetch('http://localhost:5000/api/v1/upload/uploadSingle', {
        method: 'POST',
        body: fromData,
      });

      const data = await req.json()

      if (!data.file) {
        console.log(data)
        throw new Error(data.message || "Something went wrong")
      }
      toast.success("Data uploaded share otp for sharing the file.")

      saveInLocal(data.file || {}, LOCALSTORAGENAME)

      getData()
      
    } catch (error) {
      toast.error(error.message || "Something wrong try again letter.")
    } finally {
      setIsSubmitting(false)
    }

  }

  const removeData = () => {
    setFile(false)
  }


  useEffect(() => {
    getData()
  }, [])
  
  return (
    <>
      <div className='w-full h-fit flex items-center justify-center my-5'>
        <div
          onDragEnter={() => setIsDragging(true)}
          onDragLeave={() => setIsDragging(false)}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDrop={handleDrop}
          onClick={() => document.getElementById('fileInput').click()}
          className={`w-fit h-32 flex items-center justify-center p-4 rounded-2xl border border-dashed cursor-pointer transition-all duration-300 ${isDragging ? 'bg-green-100 border-green-400' : 'bg-gray-300/10 border-gray-400'
            }`}
        >
          <input
            id="fileInput"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
          <p className="text-gray-600">
            {file ? `Selected: ${file.name}` : 'Drag & Drop File Here or Click to Upload'}
          </p>
        </div>
      </div>

      <div className='w-full my-5 flex items-center justify-center gap-5'>
        <button disabled={file == null} onClick={sendData} className='font-bold bg-cyan-400 hover:bg-cyan-800 transition text-black text-2xl py-3 px-5 rounded-3xl'>
          Send
        </button>
        <button disabled={file == null} onClick={removeData} className='font-bold bg-red-400 hover:bg-red-800 transition text-black text-2xl py-3 px-5 rounded-3xl'>
          Remove
        </button>
      </div>
      <ShowData data={data}/>
    </>
  )
}

export default SendFile