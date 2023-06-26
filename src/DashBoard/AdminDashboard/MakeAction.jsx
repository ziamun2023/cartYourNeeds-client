import React from 'react';

const MakeAction = () => {
    return (
        <div>
              <button onClick={()=>beAhost()} className=' text-black py-3 px-4 font-semibold rounded-md   animatin-btn duration-500'>Make admin</button>
      <button className=' text-black py-3 px-4 font-semibold rounded-md admin-btn duration-500'>Make Seller</button>
      <button className=' text-black py-3 px-4 font-semibold rounded-md user-btn  duration-500'>Make User</button>
        </div>
    );
};

export default MakeAction;