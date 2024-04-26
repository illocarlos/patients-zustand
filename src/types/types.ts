export type Patient = {
    id: string,
    name: string,
    email: string,
    caretaker: string,
    date: Date,
    symptoms: string
}

export type drafyPaTient = Omit<Patient, 'id'>