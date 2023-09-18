import { FiSearch } from 'react-icons/fi';  // Importing the search (magnifier) icon

const Input = () => {
  return (
    <div className='relative'>
        <FiSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
        <input 
            type='text' 
            placeholder='Search...'
            className='pl-10 py-1 pr-4 border border-gray-300 rounded shadow-md focus:outline-none focus:border-blue-500'
        />
    </div>
  )
}

export default Input;
