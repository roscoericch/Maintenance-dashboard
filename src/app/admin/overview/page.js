import AdminLayout from "../../../../components/AdminLayout";
import React from 'react'
import Image from "next/image"

const AdminAgencyDetails = () => {
  return (
    <>
    <section>
        <AdminLayout>
            <section className="flex justify-between bg-white p-8 px-6 shadow-md">
                <h1 className="text-[#00359A]">Back</h1>
            </section>

            <section className="flex flex-col space-y-6 py-6 px-6">
                

                <section className="flex justify-between space-x-4 border-b border-grey p-2">
                  <div className="flex flex-col space-y-2">
                      <h1 className="text-[#1F1F1F] text-2xl font-bold" >Agency's Details</h1>
                      <p className="text-[#828282] text-lg  ">You get to know more details about the agency here.</p>
                  </div>
                  
                </section>

                <section className="flex justify-between gap-12">
                    <div className='card w-2/5'>
                        <div className="flex flex-col items-center p-4">
                            <Image
                            src="/images/Mask Group.png"
                            width={150}
                            height={20}
                            alt="Agency Profile"
                            />
                            <h2 className="text-[#00359A] font-bold mt-4">Volkswagen Coorp</h2>
                            <p className="text-[#4F4F4F] m-3">Volkwagen@gmail.com</p>

                            <section className="w-full border-b border-grey p-2 mb-3">
                            </section>

                            <p className="text-[#1F1F1F] m-2">Contact: <span className="text-[#4F4F4F]">Volkwagen@gmail.com</span></p>
                            <p className="text-[#1F1F1F] m-2">Date Joined: <span className="text-[#4F4F4F]">Volkwagen@gmail.com</span></p>

                            <section className="w-full border-b border-grey p-2 mb-5">
                            </section>

                            <button className="w-4/5 p-3 border border-[#B00020] text-[#B00020] rounded-md bg-white m-3">Remove</button>
                        </div>
                    </div>
                    <div className='card w-3/5'>
                        <div className="flex flex-col  p-4">
                            
                            <h2 className="text-[#00359A] font-bold mt-4">Agency Information</h2>
                            

                            <section className="w-full border-b border-grey p-2 mb-3">
                            </section>

                            <p className="text-[#1F1F1F] m-2">Company: <span className="text-[#4F4F4F]">Volkwagen Coorp</span></p>

                            <section className="w-full border-b border-grey p-2 mb-3">
                            </section>

                            <p className="text-[#1F1F1F] m-2">Email Address: Adelanke@gmail.com</p>

                            <section className="w-full border-b border-grey p-2 mb-3">
                            </section>

                            <p className="text-[#1F1F1F] m-2">Number of Workers: 500</p>

                            <section className="w-full border-b border-grey p-2 mb-3">
                            </section>

                            <p className="text-[#1F1F1F] m-2">About Us</p>
                            <p className="text-[#1F1F1F] m-2 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices adipiscing neque habitant neque, metus a vitae sit ac. At pellentesque purus nibh arcu. Nulla iaculis massa at mattis sollicitudin. Arcu commodo urna id nulla eu ac augue.
Neque leo aliq uam tempor et lacus, aliquam mam. At augue egestas risus amet turpis vitae phasellus id. Quis at nulla tristique arcu pellentesque in.</p> 

                            
                        </div>
                    </div>
                </section>
                
                
                
            </section>

            

            
            
        </AdminLayout>
        
    </section>
    </>
  )
}

export default AdminAgencyDetails