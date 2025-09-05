// components/FileUploader.tsx
"use client"

import { useState } from "react"

interface FileUploaderProps {
  onFileSelect?: (file: File) => void
  onPreviewChange?: (preview: string) => void
}

export default function FileUploader({
  onFileSelect,
  onPreviewChange,
}: FileUploaderProps) {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPrev] = useState<string>("")
  const [status, setStatus] = useState<string>("Upload your file!")

  function addFile(e: React.ChangeEvent<HTMLInputElement>) {
    const ACCEPTED_FORMATS = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/svg+xml", // svg should be svg+xml
      "image/jpg",
    ]

    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0]

      if (onFileSelect) onFileSelect(selectedFile)
      setFile(selectedFile)

      if (selectedFile.type.startsWith("image/")) {
          if (ACCEPTED_FORMATS.includes(selectedFile.type)) {
            const reader = new FileReader()
            reader.onload = () => {
              if (typeof reader.result === "string") {
                setPrev(reader.result)
                if (onPreviewChange) onPreviewChange(reader.result)
              }
            }
            reader.readAsDataURL(selectedFile)
          } else {
            resetWithMessage("Unsupported file format!")
          }
      } else {
        resetWithMessage("Unsupported file type!")
      }
    }
  }

  function resetWithMessage(msg: string) {
    setFile(null)
    setPrev("")
    setStatus(msg)
  }

  return (
    <div className="flex justify-center items-center min-h-[100vh]">
      <div className="bg-violet-400 rounded-[15px] shadow-lg pt-[1px] px-5 pb-7 w-[clamp(20rem,35vw,35rem)] flex flex-col items-center">
        <h1 className="text-[clamp(1.1rem,2vw,2rem)] text-white font-bold py-5">
          Upload Your Prescription
        </h1>

        {/* input area */}
        <div className="flex flex-col rounded-[15px] p-5 w-[clamp(16rem,30vw,30rem)] bg-white items-center">
          <div className="flex flex-col rounded-[15px] w-[clamp(12rem,25vw,25rem)] m-5 p-7 border border-violet-200 shadow-md bg-violet-100 cursor-pointer items-center">
            <img
              src="/file-upload-fill.svg" // put svg in /public folder
              alt="file upload"
              className="w-[clamp(2rem,3vw,3rem)] h-[clamp(2rem,3vw,3rem)] m-3"
            />
            <p className="text-[clamp(0.7rem,1vw,1rem)] text-center">
              Drag and drop your files here
            </p>
            <input
              type="file"
              onChange={addFile}
              className="bg-violet-300 w-[clamp(8rem,12vw,12rem)] p-2 m-3 text-[clamp(0.8rem,1vw,1rem)] cursor-pointer rounded-md hover:bg-violet-400 transition duration-100"
            />
            {file === null ? (
              <p className="text-[clamp(0.7rem,1vw,1rem)]">{status}</p>
            ) : null}
            {file && (
              <div className="mb-4 text-sm">
                <p className="text-[clamp(0.8rem,1vw,1rem)]">
                  File name : {file.name}
                </p>
                <p className="text-[clamp(0.8rem,1vw,1rem)]">
                  Size : {(file.size / 1024).toFixed(2)} KB
                </p>
                <p className="text-[clamp(0.8rem,1vw,1rem)]">
                  File type : {file.type}
                </p>
                <button
                  onClick={() => resetWithMessage("Upload your file!")}
                  className="cursor-pointer bg-violet-300 rounded duration-300 hover:bg-violet-400 m-3 mb-0 ml-0 p-2 text-[clamp(0.7rem,1vw,1rem)]"
                >
                  Remove File
                </button>
              </div>
            )}
          </div>

          <p className="text-[clamp(0.8rem,1vw,1rem)] text-center md:hidden">
            Accepted file formats:
            <br />
            JPG, JPEG, PNG, WebP & SVG
          </p>
          <p className="text-[clamp(0.8rem,1vw,1rem)] hidden md:block">
            Accepted file formats: JPG, JPEG, PNG, WebP & SVG
          </p>
        </div>

        {file && preview && (
          <div className="bg-white m-5 p-5 rounded-[15px] w-[clamp(16rem,30vw,30rem)]">
            <h1 className="text-[clamp(1.1rem,1.5vw,1.5rem)] font-bold my-2 ml-1">
              Upload Confirmation
            </h1>
            <div className="flex">
              <div>
                <img
                  src={preview}
                  alt="uploaded file"
                  className="h-15 w-15 mr-5 m-1 border border-gray-400"
                />
              </div>
              <div className="mb-4 hidden md:block text-sm w-[21rem]">
                <p>File name : {file.name}</p>
                <p className="font-bold">Uploaded Successfully!!</p>
              </div>
              <div className="mb-4 ml-4 mt-1 md:hidden text-sm w-[21rem]">
                <p className="text-[0.8rem]">
                  File name :
                  <br />
                  {file.name}
                </p>
                <p className="font-bold text-[0.8rem]">
                  Uploaded Successfully!!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
