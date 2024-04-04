export default function HomePageBlock({ props }) {
    return (
        <div className={props.pos == "r" ? "d-flex align-items-center justify-content-end"
            : "d-flex align-items-center"}>
            <img src={props.src}
                className={`home-image-${props.pos} m-3 rounded`}
                alt={props.alt} />
            <div className={`home-text-${props.pos} p-3 text-center bg-bg-opaque rounded`}>
                <strong className="fs-2">{props.title}</strong>
                <p className="fs-4 fw-semibold">{props.paragraph}</p>
            </div>
        </div>
    )
}
