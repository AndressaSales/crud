import React from 'react'

const FormUser = () => {
  return (
    <form className=' flex lg:flex-row flex-col   py-10 px-71 text-gray-800 gap-6'>
        <div>
            <label>Name</label>
            <input className='border-gray-600 border-[2px] outline-none py-2 rounded-md pl-2' />
        </div>
        <div>
            <label>Email</label>
            <input type='email' className='border-gray-600 border-[2px] outline-none py-2 rounded-md pl-2' />
        </div>     <div>
            <label>Telefone</label>
            <input className='border-gray-600 border-[2px] outline-none py-2 rounded-md pl-2' />
        </div>     <div>
            <label>Data de Nascimento</label>
            <input className='border-gray-600 border-[2px] outline-none py-2 rounded-md pl-2' type='date'  />
        </div>
        <button className='bg-sky-500 rounded-md font-bold hover:bg-sky-700 cursor-pointer text-[#fff] px-5 py-2' type='submit'>SALVAR</button>
    </form>
  )
}

export default FormUser