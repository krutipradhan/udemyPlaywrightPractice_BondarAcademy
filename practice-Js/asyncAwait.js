
async function apiResp(){

console.log("Before API Responds")
const resp = await fetch("https://fake-json-api.mock.beeceptor.com/users")
const data = await resp.json()
console.log(data)

console.log("After API Responds")
}

apiResp()
