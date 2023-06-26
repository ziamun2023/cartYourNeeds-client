//it is to save data to database

export const SaveUserFromSite =user=>{
        const currentUser={
            email: user.email,
        }

        fetch(`http://localhost:5000/users/${user?.email}`,{
            method:'PUT',
            headers:{
                'content-type':"application/json"
            }, //the data is being sent in  json format
            body: JSON.stringify(currentUser)
        })
    .then(res=>res.json())
    .then(data=>console.log(data))
    }


    export const adminPanel =(email)=>{
        const currentUser={
            role: 'admin',
        }

 return fetch(`http://localhost:5000/users/${email}`,{
            method:'PUT',
            headers:{
                'content-type':"application/json"
            }, //the data is being sent in  json format
            body: JSON.stringify(currentUser)
        })
    .then(res=>res.json())
   
    }



// get role


