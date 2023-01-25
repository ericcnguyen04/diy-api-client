import {useState, useEffect} from 'react'
import axios from 'axios'

export default function Houseware() {
    const [houseware, setHouseware] = useState([])

    // show all bounties when that page first loads
    useEffect ( () => {
        const fetch = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/houseware`)
                console.log(response.data)
                setHouseware(response.data)
            } catch(err) {
                console.warn(err)
            }
        }
        fetch()
    }, [])
    
    const housewareEssentials = houseware.map((item) => {
        return(
            <div key={`houseware-${item._id}`}>
                <h3><a href={item.url}>{item.name}</a></h3>
                <h2>{item.category}</h2>
            </div>
        )
    })


    return (
        <div>
            {housewareEssentials}
        </div>
    )
}

