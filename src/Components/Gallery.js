import GalleryItem from './GalleryItem'

function Gallery({ data }) {
    //*** not working. should make a gallery item for each item in the data array. but data needs to be specified
    if (data) {
    const display = data.map((item,i) => {
        return <GalleryItem key={i} item={item} />
    })
}

    return(
        <div>
        </div>
    )
}

export default Gallery