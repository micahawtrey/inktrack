import PropTypes from "prop-types"

export default function NavigationButtons({ props, next, back, current }) {
    return (
        <div className="d-flex justify-content-end mt-3">
            {back && <button onClick={(e) => {
                e.preventDefault()
                props.handleBackButton(current, back)}} className="btn btn-danger me-3">
                    Back
            </button>}
            {next && <button onClick={(event) => {
                event.preventDefault()
                props.handleNextButton(current, next)
                }} className="btn btn-primary">
                    Next
            </button>}
        </div>
    )
}

NavigationButtons.propTypes = {
    props: PropTypes.object,
    next: PropTypes.string,
    back: PropTypes.string,
    current: PropTypes.string,
    handleBackButton: PropTypes.func,
    handleNextButton: PropTypes.func
}
