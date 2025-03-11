import FormUser from "./components/FormUser"
import User from "./components/User"


function App() {

  return (
   <>
      <h2 className="text-center p-7 text-4xl font-bold text-gray-900">Usuários</h2>
      <div className="justify-center flex items-center flex-col">
       <FormUser />
       <User />
      </div>
   </>
  )
}

export default App
