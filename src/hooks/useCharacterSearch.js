import { useEffect , useState } from 'react'
import axios from 'axios'

export default function useCharacterSearch( id ) {

    // setting states for: character, loading, error
    const [loading , SetLoading] = useState(true)
    const [error , SetError] = useState(200)
    const [character , SetCharacter] = useState([])

    useEffect(() => {

        SetError(200);
        axios({
            method: 'GET',
            url: 'https://rickandmortyapi.com/api/character/' + id,
        })
        .then(res => {
            SetCharacter(res.data)
            SetLoading(false)
        })
        .catch(err => {
            SetError(err.response.status)            
        })
    },[id])
    return {loading , error , character}
}
