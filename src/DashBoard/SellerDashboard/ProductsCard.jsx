import React from 'react';
import Swal from 'sweetalert2';

const ProductsCard = ({product,index,refetch}) => {

    const handleDeleteCart=prdoduct=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
             fetch(`http://localhost:5000/deleteProduct/${prdoduct._id}`,{
                method:"DELETE"
             })
             .then(res=>res.json())
             .then(data=>{
                if(data.deletedCount>0){
                    refetch()
                    Swal.fire(
                        "Deleted!",
                        'Your Cart Item has been deleted',
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
        <tr className='hover:translate-x-5 relative duration-500 hover:shadow-2xl hover:rounded-2xl hover:bg-slate-200 hover:text-black'>
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
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{category}</div>
            </div>
          </div>
        </td>
      
        <td>{price}</td>
       
        <td>
          Total Sold 
          <br/>
          <span className="badge badge-ghost badge-sm">Total Unit Sold : </span>
        </td>
        <th>
        <td>{quantity}</td>
        </th>
        <th>
        <td>{status}</td>
        </th>
        <th>
        <td className='flex gap-3'><div><button className='btn bg-white border-0 text-black hover:text-white duration-300 shadow-xl'>Update</button></div><div><button onClick={()=>handleDeleteCart(product)} className='btn border-0 hover:bg-red-500 bg-white shadow-xl text-black'>Delete</button></div></td>
        </th>
        <p className={`absolute top-2 w-2 ${status==='pending'?"bg-yellow-400" :"bg-green-300"} left-0 rounded-r-lg h-[80px] `}></p>
      </tr>
   
    );
};

export default ProductsCard;