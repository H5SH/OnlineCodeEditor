export async function Editor(){
    try{
        const response = await fetch('http://localhost:8080/Editor',{method: 'get'})
        return await response.json()
    }catch(err){
        console.log(err)
        return {id: 0}
    }
}