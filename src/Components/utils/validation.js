export const validationName=(name)=>{
    // console.log(name)
    // console.log(name.trim().length)
    if(name.length>=5){
        return true
    }else{
        return false
    }   
}

export const validationEmail=(email)=>{
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    console.log()
    return emailPattern.test(email)
}