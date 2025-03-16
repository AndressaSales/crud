import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const User = ({users, setUsers, setValues}) => {
  const handleEdit = (item) => {
    setValues(item)
  }
  const handledelete = (id) => {
    axios.delete('http://localhost:8082/delete/'+id)
    .then(({data}) => {const newArry = users.filter((user) => user.id !== id);
      setUsers(newArry); toast.success(data)
     })
  }
  return (
   <table className='w-full p-[20px] shadow max-w-[1120px] rounded-[5px]' style={{margin: '20px auto', wordBreak: 'break-all'}}>
      <thead>
        <tr>
          <th style={{textAlign: 'start', borderBottom: 'inset', paddingBottom: '5px'}}>Nome</th>
          <th style={{textAlign: 'start', borderBottom: 'inset', paddingBottom: '5px'}}>Email</th>
          <th style={{textAlign: 'start', borderBottom: 'inset', paddingBottom: '5px'}}>Telefone</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((u) => {
            return <tr key={u.id}>
              <td className='pt-[15px]' width="30%">{u.nome}</td>
              <td className='pt-[15px]' width="30%">{u.email}</td>
              <td className='pt-[15px]' width="20%">{u.telefone}</td>
              <td className='pt-[15px]' width='5%'> 
                <FaEdit className='text-blue-700 cursor-pointer' onClick={() => handleEdit(item)} />
              </td>
              <td className='pt-[15px]' width='5%'>
                <FaTrash className='text-red-500 cursor-pointer' onClick={() => handledelete(item.id)}/>
              </td>
            </tr>
          })
        }
      </tbody>
   </table>
  )
}

export default User