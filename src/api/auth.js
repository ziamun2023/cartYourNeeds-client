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

// Admin Panel
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

    // make USer

    export const UserPanel =(email)=>{
        const currentUser={
            role: 'user',
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

    // seller panel

    export const sellerPanel =(email)=>{
        const currentUser={
            role: 'seller',
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

    //seller request to admin
    export const adminRequest =(email)=>{
        const currentUser={
            requestToSell: 'pending',
            requestMessage:'hello Admin , i want to be a seller in your website, would like to grow business with this website, please consider my request '

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


