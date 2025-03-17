import { toast, ToastContainer } from "react-toastify"
import FormUser from "./components/FormUser"
import User from "./components/User"
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [users, setUsers] = useState([])
  const [values, setValues] = useState(null)

  const getUsers = async () => {
    try{
      const res = await axios.get('http://localhost:8082/')
      setUsers(res.data.sort((a,b) => (a.nome > b.nome ? 1 : -1)));
    } catch(err){
      toast.error(err);
    }
  }

  useEffect(() => {
    getUsers();
  }, [setUsers])

  return (
   <div>
      <h2 className="text-center p-7 text-4xl font-bold text-gray-900">Usuários</h2>
      <div className="justify-center flex items-center flex-col">
       <FormUser values={values} setValues={setValues} getUsers={getUsers} />
       <User setValues={setValues} users={users} setUsers={setUsers} />
      </div>
      <ToastContainer autoClose={3000} />
   </div>
  )
}

export default App
