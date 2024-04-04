import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import { isElementInViewport } from "../utils/utils"
import HomePageBlock from "../components/home-page-blocks"

export default function Home() {
    const blockOne = useRef(null)
    const blockTwo = useRef(null)
    const blockThree = useRef(null)
    const blockFour = useRef(null)
    const blockFive = useRef(null)

    const blockOneProps = {
        src: "/B_W_Tattooing.png",
        pos: "r",
        alt: "A black and white photo of a woman tattooing",
        title: "This is a test title",
        paragraph: "This is a test paragraph"
    }

    useEffect(() => {
        const slideInBlocks = [
                                blockOne.current,
                                blockTwo.current,
                                blockThree.current,
                                blockFour.current,
                                blockFive.current
                            ]
        const handleScroll = () => {
            slideInBlocks.forEach(element => {
                if (element && isElementInViewport(element)) {
                    element.classList.add("slide-in")
                }
            })
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div className="py-3 bg-leaves">
            <div className="mb-3 container color-ev">
                {/* <HomePageBlock props={blockOneProps}  ref={blockOne}/> */}
                <div className="d-flex align-items-center slide-in-div" ref={blockOne}>
                    <img src="/B_W_Tattooing.png"
                        className="home-image-l m-3 rounded"
                        alt="A black and white photo of a woman tattooing" />
                    <div className="p-3 text-center bg-bg-opaque rounded home-text-l">
                        <strong className="fs-2">Tattooing is hard enough</strong>
                        <p className="fs-4 fw-semibold">
                            InkTrack helps you take care of everything else that
                            keeps you from doing what you do best: stabbing people.
                        </p>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-end slide-in-div"
                    ref={blockTwo}>
                    <img src="/document-signing.jpg"
                        className="home-image-r m-3 rounded"
                        alt="A document being filled out on a desk" />
                    <div className="p-3 text-center bg-bg-opaque rounded home-text-r">
                        <strong className="fs-2">Document Management</strong>
                        <p className="fs-4 fw-semibold">
                            From consent forms to deposit policies, create
                            and organize all of your documents in one place!
                        </p>
                    </div>
                </div>
                <div className="d-flex align-items-center slide-in-div" ref={blockThree}>
                    <img src="/Tattoo-Consultation.png"
                        className="home-image-l m-3 rounded"
                        alt="A black and white photo of a woman designing a
                        tattoo while her client sits in a tattoo chair" />
                    <div className="p-3 text-center bg-bg-opaque rounded home-text-l">
                        <strong className="fs-2">Client Notes</strong>
                        <p className="fs-4 fw-semibold">
                            Whether you want to keep track of your clients' ideas and
                            references or who always brings you coffee, InkTrack can help!
                        </p>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-end slide-in-div"
                    ref={blockFour}>
                    <img src="/calendar.jpg"
                        className="home-image-r m-3 rounded"
                        alt="A black and white photo of someone sending a
                        text message on their phone" />
                    <div className="p-3 text-center bg-bg-opaque rounded home-text-r">
                        <strong className="fs-2">Scheduling</strong>
                        <p className="fs-4 fw-semibold">
                            Give your clients the option to schedule themselves, or manage
                            the scheduling yourself.
                        </p>
                    </div>
                </div>
                <div className="d-flex align-items-center slide-in-div" ref={blockFive}>
                    <img src="/B_W_Tattooing.png"
                        className="home-image-l m-3 rounded"
                        alt="A black and white photo of a woman designing a
                        tattoo while her client sits in a tattoo chair" />
                    <div className="p-3 text-center bg-bg-opaque rounded home-text-l">
                        <strong className="fs-2">Automated Reminders</strong>
                        <p className="fs-4 fw-semibold">
                            Sign up to automatically send personalized reminder messages
                            to your clients so they never miss a session again!
                        </p>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-around"
                    style={{height: "250px"}}>
                    <Link className="nav-link fs-4 bg-bg" to="/login">Log In</Link>
                    <Link className="nav-link fs-4 bg-bg" to="/signup">Sign Up</Link>
                    <Link className="nav-link fs-4 bg-bg" to="/company/contact">Contact Us</Link>
                </div>
            </div>
        </div>
    )
}
