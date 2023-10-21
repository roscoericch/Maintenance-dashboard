export default function Login() {
  return (
    <main className="flex min-h-screen items-center justify-between">
      {/* Background Image for Desktop */}
      <div className="hidden md:block bg-[url('../../public/images/loginimg.png')] bg-center h-screen w-6/12"></div>
      <div className='bg-white h-screen w-full md:w-7/12'>
        <div className='flex flex-col items-center justify-center h-screen'>
          <div className='w-9/12'>
            <p className='text-right'>Dont have an account? <span className='text-[#00359A]'>Sign Up</span></p>
          </div>
          <div className='w-9/12'>
            <h1 className='text-3xl mb-4'>Welcome Back To Nova!</h1>
            <p className='text-md mb-4 text-[#828282]'>Create Your Account</p>
          </div>
          <div className='w-9/12'>
            <input type='text' className='w-full h-14 rounded-lg border border-solid mb-9' />
            <input type='text' className='w-full h-14 rounded-lg border border-solid mb-9' />
            <div className='w-9/12'>
              <input type="checkbox" className='mb-8' />
              <p className='mb-8'>Forgot Password?</p>
            </div>
          </div>
          <div className='w-9/12'>
            <button type='submit' className='w-full h-14 rounded-lg border border-solid bg-[#00AEFF] text-white'>Login</button>
          </div>
        </div>
      </div>
    </main>
  )
}

