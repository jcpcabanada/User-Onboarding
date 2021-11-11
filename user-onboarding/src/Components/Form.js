import React from "react";

export default function Form(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        // const { name, value, checked, type } =
    }

    return (
        <>

        </>
    )
}