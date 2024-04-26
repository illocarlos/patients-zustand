

type ErrorFormProp = {
    error?: string
}

const ErrorForm = ({ error }: ErrorFormProp) => {
    return (
        <p className="  text-white text-center bg-red-600 font-bold">{error}</p>
    )
}

export default ErrorForm