import { useMemo } from "react"
import { usePatienteStore } from "../store/store"
import PatientDetails from "./PatientDetails"


const PatientList = () => {
    const patientsList = usePatienteStore(state => state.patients)

    const isPatient = useMemo(() => patientsList.length <= 0 ? false : true, [patientsList])
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            {isPatient ?
                <>
                    <h2 className="font-black text-3xl text-center"> listado de paciente</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        administra tus{" "}
                        <span className=" text-indigo-500 font-bold"> pacientes</span>
                        {
                            patientsList.map(each => (
                                <PatientDetails
                                    key={each.id}
                                    patient={each}
                                />
                            ))
                        }
                    </p>

                </>
                :
                <>
                    <h2 className="font-black text-3xl text-center">no hay paciente</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        registre uno{" "}
                        <span className=" text-indigo-500 font-bold"> y aparecera aqui</span>
                    </p>

                </>
            }
        </div>
    )
}

export default PatientList