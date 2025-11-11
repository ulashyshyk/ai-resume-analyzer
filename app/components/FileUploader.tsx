import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import {formatSize} from '../lib/utils'
interface FileUploaderProps{
    onFileSelect? : (file: File | null) => void
}
const FileUploader = ({onFileSelect} : FileUploaderProps) => {
    const [file,setFile] = useState<File | null>(null)
    const onDrop = useCallback((uploadedFiles: File[]) => {
        const newFile = uploadedFiles[0] || null
        setFile(newFile);
        onFileSelect?.(newFile)
    }, [onFileSelect])
    
    const maxFileSize = 20 * 1024 * 1024
    const {getRootProps, getInputProps, isDragActive,acceptedFiles} = useDropzone({
        onDrop,
        multiple:false,
        accept: {'application/pdf':['.pdf']},
        maxSize:maxFileSize
    })

  return (
    <div className="w-full gradient-border bg-gradient-to-t from-slate-200 to-slate-300">
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            <div className='space-y-4 cursor-pointer'>
                {file ? (
                    <div className='uploader-selected-file' onClick={(e)=>e.stopPropagation()}>
                        <div className='flex items-center space-x-3'>
                        <img src='/images/pdf.png' alt='pdf' className='size-10'/>
                            <div>
                                <p className='ml-1 text-sm text-gray-700  font-medium truncate max-w-xs'>
                                    {file.name}
                                </p>
                                <p className='text-sm text-gray-500'>
                                    {formatSize(file.size)}
                                </p>
                            </div>
                        </div> 
                        <button className='p-2 cursor-pointer' onClick={(e)=>{
                            setFile(null)
                            onFileSelect?.(null)
                        }}>
                            <img src='/icons/cross.svg' alt='remove' className='w-4 h-4'/>
                        </button>
                    </div>
                ):(
                    <div>
                        <div className='mx-auto w-16 h-16 flex items-center justify-center mb-2'>
                            <img src='/icons/info.svg' alt='upload' className='size-20'/>
                        </div>
                        <p className='text-lg text-gray-500'>
                            <span className='font-semibold'> Click to upload </span>
                            or drag and drop
                        </p>
                        <p className='text-lg text-gray-500'>
                            PDF (max 20 MB)
                        </p>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default FileUploader
