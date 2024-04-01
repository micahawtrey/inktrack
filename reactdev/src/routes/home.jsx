import { NavLink } from "react-router-dom"

export default function Home() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow mb-3" style={{ backgroundColor: "#285E38"}}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img style={{ cursor: "pointer" }}
                            className="rounded" src="/tattoo-logo.jpg" alt="A tattoo needle dripping ink on a document" width={"125px"} />
                    </NavLink>
                    <h1>Tattoo Client Assistant</h1>
                    <NavLink className="navbar-brand" to="/consent">Consent Form</NavLink>
                </div>
            </nav>
            <div className="">
                <div className="offset-3 col-6 shadow position-relative">
                    <div className="form-floating position-relative">
                        <input className={`form-control`} type="text" placeholder="" id="first_name"/>
                        <label htmlFor="first_name">First name<span className="text-danger">*</span></label>
                        <div className="d-flex justify-content-center position-relative z-3">
                            <div class="position-relative py-2 px-4 bg-light text-danger border border-danger w-50 shadow" style={{ borderRadius: "0.6rem" }}>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="position-absolute top-0 start-50 translate-middle mt-1" fill="var(--bs-danger)" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>
                                Marker
                            </div>
                        </div>
                        <input className={`form-control w-50`} type="email" id="email" placeholder=""/>
                        <label htmlFor="email">Email address<span className='text-danger'>*</span></label>
                    </div>
                    <div className="mb-3 form-floating position-relative z-0">

                    </div>
                </div>
            </div>
        </div>
    )
}
