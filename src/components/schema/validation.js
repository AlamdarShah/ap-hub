import * as yup from "yup";


const useSchema= yup.object().shape({
    name: yup.string().required('the name is required....'),
    contact: yup.number().required('number is required'),
    email: yup.string().email().required('Email is required'),         
    Address: yup.string().required('Address is required....'),
    city: yup.string().required('city is required'),
    Zip: yup.string().required('zid code is required')
})       
export default useSchema;