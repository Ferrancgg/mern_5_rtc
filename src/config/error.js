const setError=(status,message)=>{
    const error= new Error
    error.status=error
    error.message=message
    return error
}

module.exports={setError}