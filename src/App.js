import { useEffect, useState } from 'react'
import Gallery from './Components/Gallery.js'
import SearchBar from './Components/SearchBar.js'

function App(){
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for anything Zelda!')
    let [data, setData] = useState([])

    // ****gets data but must be specified to exact character name in api. need to find how to general search
    useEffect(() => {
        const fetchData = async () => {
            const API_URL = `https://zelda.fanapis.com/api/characters?name=${encodeURI(search)}`
            const response = await fetch(API_URL)
            const data = await response
            console.log(data)
            if(data){
                setData(data.results)
            }else{
                setMessage('not found')
            }
        }

        if(search) fetchData()
    }, [search])

    //makes it so that when submitted it changes the searched term
    const handleSearch= (e, term) => {
        e.preventDefault()
        setSearch(term)
    }   

    return (
        <div>
            <SearchBar handleSearch={handleSearch} />
            {message}
            <Gallery data = {data} />
        </div>
    )
}

export default App

