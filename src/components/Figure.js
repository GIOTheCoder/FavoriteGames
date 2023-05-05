const Figure =(props)=> {
    return (
        <div className="col-md-4">
            <figure className="figure game-figure">
                <img src={`images/${props.img}`} alt={props.title} className="img-fluid rounded album-img"/>
                <figcaption className="figure-caption text-capitalize text-end">{props.title}</figcaption>
                <figcaption className="figure-caption text-capitalize text-end">{props.publisher}</figcaption>
                <figcaption className="figure-caption text-end">{props.yearReleased}</figcaption>
            </figure>  
        </div>
    )
}

export default Figure