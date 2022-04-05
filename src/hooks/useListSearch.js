import { useEffect , useState } from 'react'
import axios from 'axios'

export default function useCharacterSearch( query , pageNumber ) {

    // setting states for: characters, loading, next, error
    const [loading , SetLoading] = useState(true)
    const [error , SetError] = useState(200)
    const [characters , SetCharacters] = useState([])
    const [next , SetNext] = useState(false)

    // make empty on new search
    useEffect(() => {
        SetCharacters([])
    },[query])

    // fetching data
    useEffect(() => {
        SetError(200);
        let cancel
        axios({
            method: 'GET',
            url: 'https://rickandmortyapi.com/api/character/',
            params : {
                page : pageNumber,
                name : query
            },
            cancelToken : new axios.CancelToken(c => cancel = c)
        })
        .then(res => {
            SetCharacters(lastcharacters => {
                return [...lastcharacters, ...res.data.results]
            })
            // check next page
            SetNext(res.data.results.length > 0)
            SetLoading(false)
        })
        .catch(err => {
            // ignoring cancel error
            if(axios.isCancel(err)) return
            // if(err.response.status === 404){
            //     // loading remove
            //     //need to output proper message
            //     SetLoading(false)
            //     return
            // }
            SetError(err.response.status)
        })
        // cancel request on unmount
        return () => cancel()
    },[query, pageNumber])
    return {loading , error , characters , next}
}
