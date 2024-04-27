import { create, } from "zustand"
import { Patient, drafyPaTient } from "../types/types"
import { v4 as uuid } from 'uuid'
import { devtools, persist } from "zustand/middleware"




// esto es para type si fuera js no existiria
type PatientState = {
    patients: Patient[],
    activeId: Patient['id']
    addPatient: (data: drafyPaTient) => void,
    deletedPatient: (id: Patient['id']) => void,
    getPatientById: (id: Patient['id']) => void,
    updatePatient: (patient: drafyPaTient) => void,
}

// sintaxis para llamarl funcion
//
export const usePatienteStore = create<PatientState>()(
    devtools(
        persist((set) => ({

            patients: [],
            activeId: '',

            // funcion para añadir paciente al estado de patients
            //dentro tenemos otra funcion que te genera el id
            addPatient: (data) => {

                const createPatient = (patient: drafyPaTient): Patient => {
                    return { ...patient, id: uuid() }
                }

                const newPatienst = createPatient(data)
                // set se usa para modificar el state en este caso patients es decir si quieres escribir dentro
                set((state) => ({
                    patients: [...state.patients, newPatienst]
                }))

            },
            deletedPatient: (id) => {


                set((state) => ({
                    patients: state.patients.filter(eachpatient => eachpatient.id !== id)
                }))

            },
            getPatientById: (id) => {

                set(() => ({
                    activeId: id
                }))

            },
            updatePatient: (patient) => {

                set((state) => ({
                    patients: state.patients.map(eachpatient => eachpatient.id === state.activeId ? { id: state.activeId, ...patient } : eachpatient),
                    activeId: '',
                }))

            }


        }), {

            // esto es para modificar el default de la persdistencia por defecto es que se quede guardado 
            //pero si quieres que se elimine la info una vez cierras el navegador seria sessionstorage y deberas de llamarlo
            //pero repito por defecto al llamar el persist te autoguarda una vez lo llamas al nombrarlo con un name
            name: 'patient-storage',
            // storage: createJSONStorage(() => sessionStorage)
        })

    ))