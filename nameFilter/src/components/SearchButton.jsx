import React from 'react'

const SearchButton = ({person}) => {
  const handleClick = () => {
    console.log(person.id)
  } 
  return (
    <div>
      <button className='mt-[4rem] w-28 h-12 bg-gray-300 hover:bg-blue-200 cursor-pointer' >
      <h2 className='p-2 text-center rounded-sm font-bold text-lg'>Search</h2>
      </button>
   
    </div>
  )
}

export default SearchButton
