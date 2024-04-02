import { Container, Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="">
            <Container>
                <div className="row b-flex justify-content-around mb-2">
                    <div className="col-6 pt-3">
                        <strong>Company</strong>
                        <hr className="w-25 my-2" />
                        <Navbar>
                            <Nav className="flex-column">
                                <Nav.Item>
                                    <Link className="nav-link" to="/company/about_us">About Us</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link className="nav-link" to="/company/contact_us">Contact Us</Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar>
                    </div>
                    <div className="col-lg-6 pt-3 text-center">
                        <img className="rounded" src="/tattoo-logo.jpg" alt="A tattoo needle dripping ink on a document" width={"125px"} />
                    </div>
                </div>
            </Container>
            <hr className="mb-1" />
            <div className="text-center mb-2">
                <strong>This needs to be copyrighted!</strong>
            </div>
        </footer>
    )
}
