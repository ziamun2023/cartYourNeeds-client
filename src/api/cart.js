import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';



const UseFavCart = () =>{
  const {user}=useContext(AuthContext)
  
  
  
  const { refetch, data: cart=[] } = useQuery({
      queryKey: ['carts',user?.email],
      queryFn: async () => {
          const res=await fetch(`https://music-server-psi.vercel.app/carts?email=${user?.email}`)
          return res.json()
  
         
        },
    })
    return [cart,refetch]
  };
  