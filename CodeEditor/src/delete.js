export async function Delete(id){
    try{
        return await fetch(`http://localhost:8080/delete/${id}`, {method: 'delete'})
    }catch(err){
        console.log(err)
        return {id: 0}
    }
}