import { toast } from "react-toastify"
import { usePatienteStore } from "../store/store"
import { Patient } from "../types/types"
import PatientsDetailsItem from "./PatientsDetailsItem"


type PatientDetailsProp = {
    patient: Patient
}

const PatientDetails = ({ patient }: PatientDetailsProp) => {
    const { deletedPatient, getPatientById } = usePatienteStore()

    const handleClick = () => {
        deletedPatient(patient.id)
        toast.warning('se elimino el paciente exitosamente')
    }

    return (
        <div className="mx-5 my-10 px-5 py-10">

            <PatientsDetailsItem typeItemm='id' data={patient.id} />
            <PatientsDetailsItem typeItemm='nombre paciente' data={patient.name} />
            <PatientsDetailsItem typeItemm='propietario' data={patient.caretaker} />
            <PatientsDetailsItem typeItemm='email' data={patient.email} />
            <PatientsDetailsItem typeItemm='fecha' data={patient.date.toString()} />
            <PatientsDetailsItem typeItemm='sintomas' data={patient.symptoms} />
            <div className="gap-3 flex flex-col md:flex-row justify-between mt-10">

                <button
                    onClick={() => getPatientById(patient.id)}
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                > Editar</button>
                <button
                    onClick={() => handleClick()}
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                > Eliminar</button>
            </div>
        </div >
    )
}

export default PatientDetails