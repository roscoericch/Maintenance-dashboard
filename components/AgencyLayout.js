import AgencySideBar from "./AgencySideBar";


const AgencyLayout = ({ children })=>{
    return (
        <>
           <section className="flex">
                <AgencySideBar />
                <main className="w-full">{children}</main>
           </section>
        </>
    )
}

export default AgencyLayout