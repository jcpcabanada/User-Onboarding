import React, {useEffect, useState} from 'react'
import Users from "./Components/Users";
import axios from "axios";
import './App.css';
import * as yup from 'yup';
import schema from './validation/formSchema';
import Form from "./Components/Form";

const initialFormValues = {
    //Text Inputs
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    //Checkbox
    termsOfService: false,
}

const initialFormErrors = {
    //Text Inputs
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    //Checkbox
    termsOfService: false,
}

const initialUsers = []
const initialDisabled = true

function App() {
    const [users, setUsers] = useState(initialUsers) //array of user obj's
    const [formValues, setFormValues] = useState(initialFormValues) //obj
    const [formErrors, setFormErrors] = useState(initialFormErrors) //obj
    const [disabled, setDisabled] = useState(initialDisabled) //boolean


    useEffect(() => {
        axios.get(`https://reqres.in/api/users`)
            .then(res => {
                const users = res.data.data;
                setUsers(users);
            })
            .catch(err => {
                console.error(err);
            })
    }, [])


    const postNewUser = (newFriend) => {
        axios
            .post('https://reqres.in/api/users', newFriend)
            .then(res => {
                setUsers([newFriend, ...users]);
                // console.log(res.data)
            })
            .catch(err => {
                console.error(err);
            })
            .finally(() => {
                setFormValues(initialFormValues)
            })
    }

    // useEffect(() => {
    //     postNewUser(initialFormValues);
    // },[])

    const validate = (name, value) => {
        yup
            .reach(schema, name)
            .validate(value)
            .then(() => setFormErrors({...formErrors, [name]: ''}))
            .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
    }

    const change = (name, value) => {
        validate(name, value);
        setFormValues({...formErrors, [name]: value})
    }

    const submit = () => {
        const newUser = {
            first_name: formValues.first_name.trim(),
            last_name: formValues.last_name.trim(),
            email: formValues.email.trim(),
            password: formValues.password.trim(),
        }
        postNewUser(newUser);
    }

    useEffect(() => {
        schema.isValid(formValues).then(valid => setDisabled(!valid));
    }, [formValues])


    return (
        <div className="page">
            <div>
                <Form
                    values={formValues}
                    change={change}
                    submit={submit}
                    errors={formErrors}
                    disabled={disabled}
                />
            </div>
            <div>
                <h1>Friends Online</h1>
                <Users users={users} key={users.id}/>
            </div>
        </div>
    )
}

export default App;


