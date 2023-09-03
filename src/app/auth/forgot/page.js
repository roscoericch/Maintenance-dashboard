export default function ForgotPassword() {
  return (
    <main className="flex min-h-screen items-center justify-between">
      {/* Background Image for Desktop */}
      <div className="hidden md:block bg-[url('../../public/images/forgotpass.png')] bg-center h-screen w-6/12"></div>
      <div className='bg-white h-screen w-full md:w-7/12'>
        <div className='flex flex-col items-center justify-center h-screen'>
          <div className='w-9/12'>
            <h1 className='text-3xl mb-4'>Forgot your password?</h1>
            <p className='text-md mb-4 text-[#828282]'>Not to worry, it happens! Click the reset button below, we’ll send a reset link to your registered email address.</p>
          </div>
          <div className='w-9/12'>
            <button type='submit' className='w-full h-14 rounded-lg border border-solid bg-[#00AEFF] text-white'>Reset Your Password</button>
          </div>
        </div>
      </div>
    </main>
  )
}
