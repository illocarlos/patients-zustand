
type PatientsDetailsItemProp = {
    typeItemm: string,
    data: string
}

const PatientsDetailsItem = ({ data, typeItemm }: PatientsDetailsItemProp) => {
    return (
        <p className="font-bold  mb-3 text-gray-700 uppercase">    {typeItemm}{' '}
            <span className="font-normal normal-case">{data}</span>
        </p>
    )
}

export default PatientsDetailsItem