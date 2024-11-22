import FileUpload from '../components/FileUpload'

export default function UploadFilePage() {
    
  return (
    <div className='w-screen h-screen bg-zinc-800 pt-4 flex flex-col justify-center items-center space-y-12'>
        <p className='text-4xl text-white font-bold tracking-wide'>Extract Data with Ease</p>
        <FileUpload />
    </div>
  )
}
