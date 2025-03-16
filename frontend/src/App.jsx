import { toast, ToastContainer } from "react-toastify"
import FormUser from "./components/FormUser"
import User from "./components/User"
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [users, setUsers] = useState([])
  const [values, setValues] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:8082/')
    .then(res => setUsers(res.data))
    .catch(err => toast.error(err))
  }, [])

  return (
   <div>
      <h2 className="text-center p-7 text-4xl font-bold text-gray-900">Usuários</h2>
      <div className="justify-center flex items-center flex-col">
       <FormUser values={values} setValues={setValues} setUsers={setUsers} />
       <User setValues={setValues} users={users} setUsers={setUsers} />
      </div>
      <ToastContainer />
   </div>
  )
}

export default App
