export const Getdata=async()=>{
    const data=await fetch("https://randomuser.me/api/",{method:"GET"})

    return await data.json()
}

