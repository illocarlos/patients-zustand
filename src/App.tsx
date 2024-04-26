import PatientForm from "./components/PatientForm"
import PatientList from "./components/PatientList"
function App() {
  return (
    <>
      <div className="container max-auto mt-20">
        <h1 className="font-black text-6xl text-center md:w-2/3 md:mx-auto">
          clinica veterinadia
        </h1>
        <div className="mt-12 md:flex">
          <PatientForm />
          <PatientList />
        </div>
      </div>
    </>
  )
}

export default App
