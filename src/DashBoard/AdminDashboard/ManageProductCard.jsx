import React from 'react';
import Swal from 'sweetalert2';

const ManageProductCard = ({product,index,refetch}) => {
    const HandleDeny=prdoduct=>{
        Swal.fire({
            title: 'Are you sure, you want deny?',
            text: "This product wil not be published!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Deny it!'
          }).then((result) => {
            if (result.isConfirmed) {
             fetch(`http://localhost:5000/allproducts/deny/${prdoduct._id}`,{
                method:"PUT"
                
             })
             .then(res=>res.json())
             .then(data=>{
                refetch()
                if(data){
                  
                    Swal.fire(
                        "Deny!",
                        'This product has been rejected',
                        'success'
                    )
                    refetch()
                }
             })
            }
          })
    }
    const handleApprove=prdoduct=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "This product wil  be published!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, approve it!'
          }).then((result) => {
            if (result.isConfirmed) {
             fetch(`http://localhost:5000/allproducts/approve/${prdoduct._id}`,{
                method:"PUT"
                
             })
             .then(res=>res.json())
             .then(data=>{
                refetch()
                if(data){
                  
                    Swal.fire(
                        "Published!",
                        'This product has been published to Website',
                        'success'
                    )
                    refetch()
                }
             })
            }
          })
    }
   
    const {sellername,selleremail,image,name,totalpurchase,status,category,price,quantity,description}=product
    return (
        <tr className='relative'>
        <th>
         {index+1}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold text-black">{name}</div>
              <div className="text-sm opacity-50 text-black">{category}</div>
            </div>
          </div>
        </td>
      
        <td className='text-black'>{price}</td>
       
        <td>
          seller Name : {sellername} 
          <br/>
          <span className="badge badge-ghost ">Email: {selleremail}</span>
        </td>
        <th>
        <td className='text-black'>{quantity}</td>
        </th>
        <th>
        <td className='text-black'>{status}</td>
        </th>
        <th>
        <td className='flex gap-3'><div><button onClick={()=>handleApprove(product)} className='btn bg-white border-0 text-black hover:text-white duration-300 shadow-xl'>Approve</button></div><div><button onClick={()=>HandleDeny(product)} className='btn border-0 hover:bg-red-500 bg-white shadow-xl text-black'>Deny</button></div></td>
        </th>
        <p className={`absolute  ${status==='Rejected' && "bg-red-400" } ${status==='approved' && "bg-green-400" }  top-2 w-2 ${status==='pending' && "bg-yellow-400" } left-0 rounded-r-lg h-[80px] `}></p>
      </tr>
    );
};

export default ManageProductCard;