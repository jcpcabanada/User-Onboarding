import * as yup from 'yup'

const formSchema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required('First Name required, not only recommended.'),
    last_name: yup
        .string()
        .trim()
        .required('Last Name required, not only recommended.'),
    email: yup
        .string()
        .email('Must be a valid email address!')
        .required('Email required, not only recommended.'),
    password: yup
        .string()
        .trim()
        .required('Password required, not only recommended.')
        .min(6, 'At least 6 characters long for password.')
        .matches(/[a-z]/, 'at least one lowercase char')
        .matches(/[A-Z]/, 'at least one uppercase char')
        .matches(/[a-zA-Z]+[^a-zA-Z\s]+/, 'at least 1 number or special char (@,!,#, etc).'),
    termsOfService: yup
        .boolean().oneOf([true], 'Terms of Services must be accepted.')
});
export default formSchema;