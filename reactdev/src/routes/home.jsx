import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import { isElementInViewport } from "../utils/utils"
import HomePageBlock from "../components/home-page-block"

export default function Home() {
    const blockOne = useRef(null)
    const blockTwo = useRef(null)
    const blockThree = useRef(null)
    const blockFour = useRef(null)
    const blockFive = useRef(null)

    const blockOneProps = {
        src: "/B_W_Tattooing.png",
        pos: "l",
        alt: "A black and white photo of a woman tattooing",
        title: "Tattooing is hard enough",
        paragraph: "InkTrack helps you take care of everything else that keeps you from doing what you do best: stabbing people."
    }

    const blockTwoProps = {
        src: "/document-signing.jpg",
        pos: "r",
        alt: "A black and white photo of a signed document on a desk and a fountain pen",
        title: "Document Management",
        paragraph: "From consent forms to deposit policies, create and organize all of your documents in one place!"
    }

    const blockThreeProps = {
        src: "/Tattoo-Consultation.png",
        pos: "l",
        alt: "A black and white photo of a woman designing a tattoo while her client sits in a tattoo chair",
        title: "Client Notes",
        paragraph: "Whether you want to keep track of your clients' ideas and references or who always brings you coffee, InkTrack can help!"
    }

    const blockFourProps = {
        src: "/calendar.jpg",
        pos: "r",
        alt: "A photo of a calendar on a wall",
        title: "Scheduling",
        paragraph: "Give your clients the option to schedule themselves, or manage the scheduling yourself."
    }

    const blockFiveProps = {
        src: "/B_W_Tattooing.png",
        pos: "l",
        alt: "A black and white photo of a woman tattooing",
        title: "Automated Reminders",
        paragraph: "Sign up to automatically send personalized reminder messages to your clients so they never miss a session again!"
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
                <div className="slide-in-left" ref={blockOne}>
                    <HomePageBlock props={blockOneProps}/>
                </div>
                <div className="slide-in-right" ref={blockTwo}>
                    <HomePageBlock props={blockTwoProps} />
                </div>
                <div className="slide-in-left" ref={blockThree}>
                    <HomePageBlock props={blockThreeProps} />
                </div>
                <div className="slide-in-right" ref={blockFour}>
                    <HomePageBlock props={blockFourProps} />
                </div>
                <div className="slide-in-left" ref={blockFive}>
                    <HomePageBlock props={blockFiveProps} />
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
