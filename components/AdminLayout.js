import AdminSideBar from "./AdminSideBar";


const AdminLayout = ({ children })=>{
    return (
        <>
           <section className="flex">
                <AdminSideBar />
                <main className="w-full">{children}</main>
           </section>
        </>
    )
}

export default AdminLayout