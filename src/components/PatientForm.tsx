
import { useForm } from "react-hook-form"
import ErrorForm from "./ErrorForm"
import { drafyPaTient } from "../types/types"
import { toast } from "react-toastify"
import { usePatienteStore } from "../store/store"
import { useEffect } from "react"

export default function PatientForm() {
    const { addPatient, activeId, patients, updatePatient } = usePatienteStore()
    const { register, setValue, handleSubmit, formState: { errors }, reset } = useForm<drafyPaTient>()

    useEffect(() => {
        if (activeId) {
            const activePatient = patients.filter(eachPatient => eachPatient.id === activeId)[0]
            setValue('name', activePatient.name)
            setValue('email', activePatient.email)
            setValue('caretaker', activePatient.caretaker)
            setValue('date', activePatient.date)
            setValue('symptoms', activePatient.symptoms)

        }
    }, [activeId])


    const registerPatient = (data: drafyPaTient) => {
        if (activeId) {
            updatePatient(data)
            toast.warning('se edito el paciente exitosamente')

        } else {
            addPatient(data)
            toast.success('se añadio el paciente exitosamente')
        }
        reset()
    }


    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes </h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                noValidate
                onSubmit={handleSubmit(registerPatient)}
            >
                <div className="mb-5">
                    <label htmlFor="name" className="text-sm uppercase font-bold">
                        Paciente
                    </label>
                    <input
                        id="name"
                        className="w-full p-3  border border-gray-100"
                        type="text"
                        placeholder="Nombre del Paciente"
                        {...register('name', {
                            required: 'el nombre del paciente es obligatorio',

                        })}

                    />

                    <ErrorForm
                        error={errors.name?.message}
                    />

                </div>

                <div className="mb-5">
                    <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                        Propietario
                    </label>
                    <input
                        id="caretaker"
                        className="w-full p-3  border border-gray-100"
                        type="text"
                        placeholder="Nombre del Propietario"
                        {...register('caretaker', {
                            required: 'el nombre del Propietario es obligatorio',

                        })}
                    />

                    <ErrorForm
                        error={errors.caretaker?.message}
                    />

                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="text-sm uppercase font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        className="w-full p-3  border border-gray-100"
                        type="email"
                        placeholder="Email de Registro"
                        {...register("email", {
                            required: "El Email es Obligatorio",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Email No Válido'
                            }
                        })}
                    />

                    <ErrorForm
                        error={errors.email?.message}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="date" className="text-sm uppercase font-bold">
                        Fecha Alta
                    </label>
                    <input
                        id="date"
                        className="w-full p-3  border border-gray-100"
                        type="date"
                        {...register('date', {
                            required: 'la fecha de la cita es obligatoria',

                        })}
                    />

                    <ErrorForm
                        error={errors.date?.message}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                        Síntomas
                    </label>
                    <textarea
                        id="symptoms"
                        className="w-full p-3  border border-gray-100"
                        placeholder="Síntomas del paciente"
                        {...register('symptoms', {
                            required: 'la symptoms de la cita es obligatoria',

                        })}
                    />

                    <ErrorForm
                        error={errors.symptoms?.message}
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value='Guardar Paciente'
                />
            </form>
        </div>
    )
}