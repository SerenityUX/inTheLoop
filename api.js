
// fetch a paginated records list
export function loginFunction(user_id) {
    const results = fetch(`https://x8ki-letl-twmt.n7.xano.io/api:7v6zckRK/users/${user_id}`).then((result) => {
        result.json().then((data) => {
            return(data)
        })
    })
} 

export function getEvents() {
    const results = fetch(`https://x8ki-letl-twmt.n7.xano.io/api:7v6zckRK/events`).then((result) => {
        result.json().then((data) => {
            return(data)
        })
    })
} 