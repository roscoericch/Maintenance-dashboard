import AgencyLayout from '../../../../components/AgencyLayout'
import React from 'react'
import Image from "next/image"

const AgencyNotification = () => {
  return (
    <>
        <AgencyLayout>
            <section className="flex justify-between bg-white p-8 px-6 shadow-md">
                <h1 className="text-[#00359A] text-3xl font-bold">Notification</h1>
               
            </section>
            <section className="flex flex-col space-y-6 py-6 px-6">
                
                {/* Table Section */}
                <section className="flex flex-col card">
                   <div className="">
                    {/* table header with searchbar */}
                   </div>
                   <div>
                    <table className="border-collapse border text-center w-full">
                        <thead>
                          <tr>
                            <th className="">Agencys Name</th>
                            <th>Email Address</th>
                            <th>Date</th>
                            <th>Contact</th>
                            <th>Members</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Volkswagen Group</td>
                            <td>GodwinOgbaji@gmail.com</td>
                            <td>18-02-2009</td>
                            <td>+4400000232434232</td>
                            <td>200</td>
                            <td>View Details</td>
                          </tr>
                        </tbody>
                    </table>
                   </div>
                </section>
            </section>
        </AgencyLayout>
    </>
  )
}

export default AgencyNotification