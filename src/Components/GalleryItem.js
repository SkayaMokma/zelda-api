import { useState } from 'react'

// not working. copied general layout but needs to be personalized to this api

function GalleryItem({ item }) {
    let [view, setView] = useState(false)

    //css for the information
    const simpleStyle = {
        'width': '25vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px'
    }
    
    const detailStyle = {
        'width': '80vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px',
        'backgroundImage': ``,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'color': 'yellow'
    }

        //sets up a thumbnail type display
    const simpleView = () => {
        return (
            <div style={simpleStyle}>
                <h3>{}</h3>
                <h4>{}</h4>
            </div>
        )
    }
        // sets up more detailed view
    const detailView = () => {
        return (
            <div style={detailStyle}>
                <h2>{}</h2>
                <h3>{}</h3>
                <h4>{}</h4>
                <h4>{}</h4>
            </div>
        )
    }

    //uses clicks to alternate between detail and simple views
    return (
        <div onClick={() => setView(!view)}
        style={{'display': 'inline-block'}}>
        
            {/* This simple ternary shows the simple view when 'view' is false! */}
            {view ? detailView() : simpleView()}

        </div>
    )

}

export default GalleryItem