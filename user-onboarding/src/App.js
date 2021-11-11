import React, {useEffect, useState} from 'react'
import Users from "./Components/Users";
import axios from "axios";
import './App.css';

const initialFormValues = {
    //Text Inputs
    name: '',
    email: '',
    password: '',
    //Checkbox
    termsOfService: false,
}

const initialFormErrors = {
    //Text Inputs
    name: '',
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
                setUsers([res.data.data, ...users]);
            })
            .catch(err => {
                console.error(err);
            })
            .finally(() => {
                setFormValues(initialFormValues)
            })
    }






    return (
        <div>
            <h1>Friends Online</h1>
            <Users users={users} />
        </div>
    )
}

export default App;


