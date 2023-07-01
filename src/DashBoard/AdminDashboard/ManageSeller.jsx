import React from 'react';
import { Slide } from 'react-awesome-reveal';

const ManageSeller = () => {
    const {data: users =[], refetch}=useQuery(['CUN-user'],async()=>{
        const res=await fetch(`http://localhost:5000/allUser`)
        return res.json()
      })
      const allSeller=users.filter(s=>s.role==='seller')
      const pending=users.filter(pend=>pend.)

    return  (
        <div className='grid lg:grid-cols-2 gap-5'>
        <div>
        <Slide direction='left'>
        <div className="overflow-x-auto">
            <p className='text-center text-black text-3xl'>All Seller</p>
          <table className="table ">
            <thead>
              <tr>
                <th  className='text-black text-[14px]'>#</th> 
                <th className='text-black text-[14px] '>Name</th> 
                <th className='text-black text-[14px] '>Email</th> 
                <th className='text-black text-[14px] '>Phone number</th> 
                <th className='text-black text-[14px] '>Show Details</th> 
        
                {/* <th className='text-black text-[14px] '>Location</th>  */}
                {/* <th className='text-black text-[14px] '>Registration date</th> */}
                {/* <th className='text-black text-[14px] '>Set Role</th> */}
              
              </tr>
            </thead> 
            <tbody >
              {
                allSeller.map((c,index)=><tr className=' hover:translate-x-5 hover:rounded-2xl relative duration-500 hover:shadow-2xl  hover:bg-slate-200 hover:text-black' >
                  <th>{index+1}</th>
             
              <td className='text-black text-[13px]'>{}</td>
                  <td className='text-black text-[13px] '>{c.email}</td>
                  <td className='text-black text-[13px]'>{c.email}</td>
                  <td className='text-black text-[13px]'>{c.role}</td>
         
                  <td className='text-black text-[13px]'><button onClick={()=>getDetails(c._id)}>btn</button></td>
                  {/* <td className='text-black text-[13px]'>{c.email}</td> */}
                  {/* <td className='text-black text-[13px]'>{c.email}</td> */}
             
           
                
                </tr>)
              }
           
            
            </tbody> 
       
          </table>
         
        </div></Slide>
            </div>
            <div>
                <div>
                   <div>profile Details</div>
                   <div><div><p>Name:</p></div><div>
                   <p>Email:</p></div></div>
                   <div><p>Shop Name:</p></div>
                   <div><p>Total products:</p></div>
                   <div><p>Total Sell:</p></div>
                   <div><p>Joining Date:</p></div>
                </div>
                <div>
                   
                </div>
                </div></div>
      );
};

export default ManageSeller;