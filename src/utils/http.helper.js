import compose from 'ramda/src/compose'
import { API_URL } from '../config'

const requestUrl = route => `${API_URL}${route}`

const httpRequest = method => url => data =>
    fetch(url, {
        method,
        mode: "cors",
        cache: "no-cache",
        // credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json())

export const post = route => data => 
    compose(httpRequest('POST'), requestUrl)(route)(data)

// export const post = route => data => {
//     const url = requestUrl(route);
//     return httpRequest('POST')(url)(data)
// }