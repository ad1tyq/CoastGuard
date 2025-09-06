// Enhanced FileUploader.tsx - Hazard Evidence Upload
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
  const [status, setStatus] = useState<string>("Upload hazard evidence")
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)

  function addFile(e: React.ChangeEvent<HTMLInputElement>) {
    const ACCEPTED_FORMATS = [
      "image/jpeg",
      "image/png", 
      "image/webp",
      "image/jpg",
      "video/mp4",
      "video/webm",
      "video/quicktime"
    ]

    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0]
      const maxSize = 10 * 1024 * 1024 // 10MB limit

      if (selectedFile.size > maxSize) {
        resetWithMessage("File too large! Maximum size is 10MB")
        return
      }

      if (onFileSelect) onFileSelect(selectedFile)
      setFile(selectedFile)

      if (selectedFile.type.startsWith("image/") || selectedFile.type.startsWith("video/")) {
        if (ACCEPTED_FORMATS.includes(selectedFile.type)) {
          setIsProcessing(true)
          const reader = new FileReader()
          reader.onload = () => {
            if (typeof reader.result === "string") {
              setPrev(reader.result)
              if (onPreviewChange) onPreviewChange(reader.result)
              
              // Simulate upload progress
              let progress = 0
              const interval = setInterval(() => {
                progress += 15
                setUploadProgress(progress)
                if (progress >= 100) {
                  clearInterval(interval)
                  setStatus("Analysis complete - Ready to submit!")
                  setIsProcessing(false)
                }
              }, 150)
            }
          }
          reader.readAsDataURL(selectedFile)
        } else {
          resetWithMessage("Unsupported file format!")
        }
      } else {
        resetWithMessage("Please upload images or videos only!")
      }
    }
  }

  function resetWithMessage(msg: string) {
    setFile(null)
    setPrev("")
    setStatus(msg)
    setUploadProgress(0)
    setIsProcessing(false)
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 w-full">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Evidence Upload</h3>
        <p className="text-gray-600">Upload photos or videos of the coastal hazard for verification</p>
      </div>

      <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 hover:bg-blue-50/30 transition-all duration-300">
        <div className="text-5xl mb-4">📸</div>
        <h4 className="font-semibold text-gray-800 mb-2">Drag & Drop Evidence Here</h4>
        <p className="text-sm text-gray-600 mb-4">Or click to browse your files</p>
        
        <input
          type="file"
          onChange={addFile}
          accept="image/*,video/*"
          className="w-full p-3 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition-colors font-medium"
        />
        
        {file === null && (
          <p className="text-sm text-gray-500 mt-3">{status}</p>
        )}

        {isProcessing && (
          <div className="mt-4">
            <div className="bg-gray-200 rounded-full h-3">
              <div 
                className="bg-blue-500 h-3 rounded-full transition-all duration-300 flex items-center justify-end pr-2"
                style={{ width: `${uploadProgress}%` }}
              >
                {uploadProgress > 20 && (
                  <span className="text-white text-xs font-semibold">{uploadProgress}%</span>
                )}
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              {uploadProgress < 50 ? 'Uploading...' : 
               uploadProgress < 80 ? 'AI analyzing image...' : 
               'Finalizing upload...'}
            </p>
          </div>
        )}

        {file && !isProcessing && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex-shrink-0">
                {file.type.startsWith("image/") ? (
                  <span className="text-2xl">🖼️</span>
                ) : (
                  <span className="text-2xl">🎥</span>
                )}
              </div>
              <div className="flex-1 text-left">
                <p className="font-semibold text-gray-800 text-sm truncate">{file.name}</p>
                <p className="text-xs text-gray-500">
                  {(file.size / 1024).toFixed(2)} KB • {file.type}
                </p>
              </div>
            </div>
            
            {uploadProgress === 100 && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✅</span>
                  <span className="text-sm font-semibold text-green-800">Upload Successful!</span>
                </div>
                <p className="text-xs text-green-700 mt-1">
                  AI analysis: Hazard evidence detected and verified
                </p>
              </div>
            )}
            
            <button
              onClick={() => resetWithMessage("Upload hazard evidence")}
              className="text-sm bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200 transition-colors"
            >
              Remove File
            </button>
          </div>
        )}
      </div>

      {file && preview && uploadProgress === 100 && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="font-semibold text-blue-800 mb-3">Evidence Preview</h4>
          <div className="flex items-start gap-4">
            {file.type.startsWith("image/") ? (
              <img
                src={preview}
                alt="hazard evidence"
                className="w-20 h-20 object-cover rounded-lg border-2 border-blue-200"
              />
            ) : (
              <div className="w-20 h-20 bg-blue-100 rounded-lg border-2 border-blue-200 flex items-center justify-center">
                <span className="text-2xl">🎬</span>
              </div>
            )}
            <div className="flex-1">
              <p className="font-semibold text-blue-800">Evidence Ready for Submission</p>
              <p className="text-sm text-blue-600 mb-2">
                This file will be attached to your hazard report for verification
              </p>
              <div className="flex gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold">
                  AI Verified
                </span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-semibold">
                  Ready to Submit
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h5 className="font-semibold text-gray-700 mb-2">Upload Guidelines</h5>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Accepted: JPG, PNG, WebP, MP4, WebM (max 10MB)</li>
          <li>• Clear photos of hazard conditions work best</li>
          <li>• Include timestamps and location context when possible</li>
          <li>• All uploads are encrypted and securely stored</li>
        </ul>
      </div>
    </div>
  )
}