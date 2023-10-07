import formatname from "./practice1";
function greeting(user){
    if(user){
        return <h1>hello {formatname(user)}</h1>
    }
    return <h1>hello stranger</h1>
}
export default greeting;