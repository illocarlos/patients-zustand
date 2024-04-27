import PatientForm from "./components/PatientForm"
import PatientList from "./components/PatientList"
import { ToastContainer } from "react-toastify"
import 'react-toastify/ReactToastify.css'
function App() {
  return (
    <>
      <div className="container max-auto mt-20">
        <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
          clinica veterinadia
        </h1>
        <div className="mt-12 md:flex ">
          <PatientForm />
          <PatientList />
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"

        />
      </div>
    </>
  )
}

export default App
