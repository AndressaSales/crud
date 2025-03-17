import axios from "axios";
import { useEffect, useRef } from "react";
import {toast} from 'react-toastify'
const FormUser = ({values, setValues, getUsers}) => {

    const ref = useRef();
    useEffect(() => {
        if(values){
            const user = ref.current;

            user.nome.value = values.nome;
            user.email.value = values.email;
            user.telefone.value = values.telefone;
        }
    }, [values])

    const handleSubmit =  (e) => {
        e.preventDefault();
        const user = ref.current;
        if (!user.nome.value || !user.email.value || !user.telefone.value) {
            return toast.warn("Preencha todos os campos!")
        }
        
        if(values){
           axios.put('http://localhost:8082/updade/' + values.id, {
            nome: user.nome.value,
            email: user.email.value,
            telefone: user.telefone.value
           })
           .then(({data}) => toast.success(data))
           .catch(({data}) => toast.error(data))
        }else{
            axios.post('http://localhost:8082/usuario', {
                nome: user.nome.value,
                email: user.email.value,
                telefone: user.telefone.value
            })
            .then(({data}) => toast.success(data))
            .catch(({data}) => toast.error(data))
        }
        user.nome.value = '';
        user.email.value = '';
        user.telefone.value = '';
        setValues(null);
        getUsers();
    }

  return (
    <form className=' flex lg:flex-row flex-col  py-10 px-71 text-gray-800 gap-6' ref={ref}  onSubmit={handleSubmit}>
        <div className="flex-col flex gap-2 text-gray-900">
            <label>Name</label>
            <input className='border-gray-600 border-[2px] outline-none py-2 rounded-md pl-2' name="nome" />
        </div>
        <div className="flex-col flex gap-2 text-gray-900 font-serif">
            <label>Email</label>
            <input type='email' className='border-gray-600 border-[2px] outline-none py-2 rounded-md pl-2' name="email" />
        </div>     
        <div className="flex-col flex gap-2 text-gray-900 font-serif">
            <label>Telefone</label>
            <input className='border-gray-600 border-[2px] outline-none py-2 rounded-md pl-2' name="telefone" />
        </div>     
        <button className='bg-sky-500 rounded-md font-bold hover:bg-sky-700 cursor-pointer text-[#fff] px-5 py-2' type='submit'>SALVAR</button>
    </form>
  )
}

export default FormUser