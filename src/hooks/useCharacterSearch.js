import { useEffect , useState } from 'react'
import axios from 'axios'

export default function useCharacterSearch( id ) {

    // setting states for: characters, loading, next, error
    const [loading , SetLoading] = useState(true)
    const [error , SetError] = useState(200)
    const [character , SetCharacter] = useState([])

    // fetching data
    useEffect(() => {
        // console.log("nj")
        SetError(200);
        axios({
            method: 'GET',
            url: 'https://rickandmortyapi.com/api/character/' + id,
            // cancelToken : new axios.CancelToken(c => cancel = c)
        })
        .then(res => {
            SetCharacter(() => {
                // console.log(ress.data)
                return res.data
            })
            // check next page
            SetLoading(false)
        })
        .catch(err => {
            // ignoring cancel error
            // if(axios.isCancel(err)) return
            // if(err.response.status === 404){
            //     // loading remove
            //     //need to output proper message
            //     SetLoading(false)
            //     return
            SetError(err.response.status)
            // }
            
        })
        // cancel request on unmount
    },[id])
    return {loading , error , character}
}
