export async function save(Data){
    try{
        const response = await fetch('http://localhost:8080/saved', {
            body: Data,
            method: 'post'})
        return await response.json()
    }catch(err){
        console.log(err)
        return{id: 0}
    }
}