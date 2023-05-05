import Figure from "./Figure"
import data from "../data.json"

const Main =()=> {

    const figureComponents = data.map(item => {
        return <Figure 
            key = {item.id}
            img = {item.img}
            title = {item.title}
            publisher = {item.publisher}
            yearReleased = {item.yearReleased}
        />
    })

    return(

        <main className="main">
            <div className="container">
                <div className="row">
                    {figureComponents}
                </div>
            </div>
        </main>


    )
}

export default Main