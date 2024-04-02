import { NavLink } from "react-router-dom"
import { Container } from "react-bootstrap"

export default function Home() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow mb-3" style={{ backgroundColor: "#285E38"}}>
                <Container>
                    <NavLink className="navbar-brand" to="/">
                        <img style={{ cursor: "pointer" }}
                            className="rounded" src="/tattoo-logo.jpg" alt="A tattoo needle dripping ink on a document" width={"125px"} />
                    </NavLink>
                    <h1>InkTrack</h1>
                    <NavLink className="navbar-brand" to="/consent">Consent Form</NavLink>
                </Container>
            </nav>
            <div className="">
                <Container>
                    Tattooing is hard. Scheduling, forms, and client notes shouldn't be.
                </Container>
            </div>
        </div>
    )
}
