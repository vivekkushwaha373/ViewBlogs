import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';


const Pagination = () => {
  const { page, handlePageChange,totalPages} = useContext(AppContext);
  return (
    <div className="w-full flex justify-center border-2 items-center">
      <div className="flex justify-between w-full max-w-[35%]  py-2">
        {
          page>1&&
          <button
             className="rounded-md px-4 py-1 border"
              onClick={() => handlePageChange(page - 1)}>
              Previous
            
           </button>
        }
        
        {
          page < totalPages &&
          <button
              className="rounded-md px-4 py-1 border"
              onClick={() => handlePageChange(page + 1)}>
                  Next
          </button>
        }
        <p className="font-bold text-sm">
          page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pagination
