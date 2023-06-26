import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthContext';

const AddnewItem = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (e) => {
     setSelectedOption(e.target.value);
   };
    const {user}=useContext(AuthContext)
    const handleSubmit=(event)=>{
        event.preventDefault()
        const form =event.target
        const totalpurchase=0;
        const sellername=user?.displayName
        const category=selectedOption
       //  const instructorName=form.instructorName.name
        const selleremail=user.email
       //  const instructorEmail=form.instructorEmail.value
        const image=form.image.value
        const name=form.name.value
        const status=form.status._wrapperState.initialValue
        const price=parseInt(form.price.value)
        const quantity=form.quantity.value
        const description=form.description.value
       
        const classAdded={sellername,selleremail,image,name,totalpurchase,status,category,price,quantity,description}

console.log(classAdded)




        fetch('http://localhost:5000/postProducts',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(classAdded)
        })
        .then(res=>res.json())
        .then(result=>{
           if(result.insertedId){
            Swal.fire({
              title: 'success!',
              text: 'Successfully Added',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
           }
        })
        console.log(classAdded)
    }

    return (
        <form onSubmit={handleSubmit} action="">
        <div className='grid lg:ms-20 ms-10 lg:grid-cols-3 gap-4'>


        <div className="form-control w-full max-w-xs">
<label className="label">
 <span className="label-text text-black text-[15px] mx-auto my-3">Seller name</span>
 
</label>
<input  placeholder="Type here" name='sellername'   value={user?.displayName}  className=" py-3 text-black px-2 bg-white  rounded-md shadow-2xl  w-full max-w-xs" />

</div>

<div className="form-control w-full max-w-xs">
<label className="label">
 <span className="label-text text-black text-[15px] mx-auto my-3"> Seller Eail</span>
 
</label>
<input  placeholder="Pending" name='selleremail'   value={user?.email}  className=" py-3 text-black px-2 bg-white  rounded-md shadow-2xl  w-full max-w-xs" />

</div>
<div className="form-control w-full max-w-xs">
<label className="label">
 <span className="label-text text-black text-[15px] mx-auto my-3">Class Name</span>
 
</label>
<input type="text" placeholder="Type here" name='name' className=" py-3 text-black px-2 bg-white  rounded-md shadow-2xl  w-full max-w-xs" />

</div>
<div className="form-control w-full max-w-xs">
<label className="label">
 <span className="label-text text-black text-[15px] mx-auto my-3">Class photo</span>
 
</label>
<input type="text" placeholder="Type here" name='image' className=" py-3 text-black px-2 bg-white  rounded-md shadow-2xl  w-full max-w-xs" />

</div>
<div className="form-control w-full max-w-xs">
<label className="label">
 <span className="label-text text-black text-[15px] mx-auto my-3">Product status</span>
 
</label>
<input  placeholder="Pending" name='status' value='pending' className=" py-3 text-black px-2 bg-white  rounded-md shadow-2xl  w-full max-w-xs" />



</div>
<div className="form-control w-full max-w-xs">
<label className="label">
 <span className="label-text text-black text-[15px] mx-auto my-3"> Price</span>
 
</label>
<input type="text" placeholder="Type here" name='price' className=" py-3 text-black px-2 bg-white  rounded-md shadow-2xl  w-full max-w-xs" />

</div>
<div className="form-control w-full max-w-xs py-3 text-black px-2 bg-white  rounded-md shadow-2xl ">
  <label className="label">
    <span className="label-text bg-white">Product Category</span>
    
  </label>
  <select className='bg-white text-black' value={selectedOption} onChange={handleOptionChange}>
          <option value="">Select product Category</option>
          <option value="laptop">laptop</option>
          <option value="watch">watch</option>
          <option value="phone">Phone</option>
          <option value="Virtual reality">Virtual reality</option>
          <option value="Camera">Camera </option>
          <option value="Gaming Console">Gaming Console </option>
          <option value="Headphones">Headphones </option>
          <option value="Game">Game </option>
          <option value="pc">pc </option>
          <option value="Beauty Products">Beauty Products </option>
          <option value="Male Fashion">Male Fashion </option>
          <option value="Female fashion">Female fashion </option>
          <option value="Accessories">Accessories </option>
          <option value="Baby products">Baby products </option>
        </select>
  {/* <input type="text" placeholder="Type here" name='category' className=" py-3 text-black px-2 bg-white  rounded-md shadow-2xl  w-full max-w-xs" /> */}
  

</div>
<div className="form-control w-full max-w-xs">
<label className="label">
 <span className="label-text text-black text-[15px] mx-auto my-3"> quantity</span>
 
</label>
<input type="text" placeholder="Type here" name='quantity' className=" py-3 text-black px-2 bg-white  rounded-md shadow-2xl  w-full max-w-xs" />

</div>
<div className="form-control w-full max-w-xs">
<label className="label">
 <span className="label-text text-black text-[15px] mx-auto my-3">Description</span>
 
</label>
<input type="text" placeholder="Type here" name='description' className=" py-3 text-black px-2 bg-white  rounded-md shadow-2xl  w-full max-w-xs" />

</div>
<div className="form-control w-full max-w-xs">
<label className="label">
 <span className="label-text text-black text-[15px] mx-auto my-3">ratings</span>
 
</label>
<input type="text" placeholder="Type here" name='descratingsription' className=" py-3 text-black px-2 bg-white  rounded-md shadow-2xl  w-full max-w-xs" />

</div>




        </div>
        <input type="submit" className='btn bg-blue-300 border-0 shadow-xl mx-10 w-full  my-10 text-center text-black hover:text-white' value="submit" />
         </form>
    );
};

export default AddnewItem;