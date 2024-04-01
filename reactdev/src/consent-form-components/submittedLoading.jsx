import { useNavigate } from "react-router-dom"

export default function SubmittedLoading() {
    const navigate = useNavigate()

    const handleClick = (navURL) => {
        navigate(navURL)
    }

    return (
        <div className="container text-center justify-content-center">
            <h2>Please wait, you form has been submitted and is being processed! This may take up to a minute.</h2>
            <div className="mb-3">
                <img src="/loading-blocks.svg" alt="A loading icon" />
            </div>

            <button onClick={() => handleClick("/")} className="btn btn-primary">This is taking too long! I'm gonna miss the farmer's market!</button>
        </div>
    )
}
