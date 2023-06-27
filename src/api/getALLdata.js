import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';



export const alldata = () =>{
  const {user}=useContext(AuthContext)
  
  
  
  const { refetch, data: alldata=[] } = useQuery({
      queryKey: ['carts',user?.email],
      queryFn: async () => {
          const res=await fetch(`https://localhost:5000/allUser`)
          return res.json()
  
         
        },
    })
    return [alldata,refetch]
  };
  
