import { Container, Navbar, NavDropdown } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export default function InkTrackNavbar() {
    return (
        <div className="shadow mb-3 bg-hg" >
            <Container className="d-flex justify-content-between">
                <NavLink className="navbar-brand" to="/">
                    <img style={{ cursor: "pointer" }}
                        className="rounded" src="/InkTrack.png"
                        alt="A tattoo needle dripping ink on a document" height={"60px"} />
                </NavLink>
                <Navbar>
                    <NavLink className="nav-link" to="/login">Log in</NavLink>
                    <NavLink className="nav-link" to="/signup">Sign up</NavLink>
                    <NavDropdown title="Hello Username!" className="">
                        <NavLink className="nav-link-dropdown" to="/user/dashboard">Dashboard</NavLink>
                        <NavLink className="nav-link-dropdown" to="/user/forms">Forms</NavLink>
                        <NavLink className="nav-link-dropdown" to="/user/clients">Clients</NavLink>
                        <NavLink className="nav-link-dropdown" to="/user/calendar">Calendar</NavLink>
                        <NavLink className="nav-link-dropdown" to="">Log out</NavLink>
                    </NavDropdown>
                </Navbar>
            </Container>
        </div>
    )
}
