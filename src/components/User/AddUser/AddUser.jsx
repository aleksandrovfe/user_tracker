import {useState} from "react";
import {Card} from "../../UI/Card/Card";
import {Button} from "../../UI/Button/Button";
import classes from './AddUser.module.css'
import {ErrorModal} from "../../UI/ErrorModal/ErrorModal";

export const AddUser = ({onAddUser}) => {
    const [userName, setUserName] = useState('')
    const [age, setAge] = useState('')
    const [errors, setErrors] = useState()

    const submitFormHandler = event => {
        event.preventDefault()
        console.log('sdsd',userName.length)

        if (userName.trim().length === 0 || age.trim().length === 0) {
            setErrors({
                title: 'Invalid Input',
                message: 'Please enter valid name and age (non-empty values)'
            })

            return
        }

        if (age < 0) {
            setErrors({
                title: 'Invalid Input',
                message: 'Please enter age (> 0)'
            })

            return
        }

        onAddUser({
            id: Math.random(),
            name: userName,
            age,
        })
    }

    const userNameChangeHandler = (event) => {
        setUserName(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setAge(event.target.value)
    }

    const clearErrors = () => {
        setErrors(null)
    }

    return (
        <>
            {errors && <ErrorModal message={errors.message} title={errors.title} onCloseModal={clearErrors}/>}
            <Card className={classes.form__wrapper}>
                <form onSubmit={submitFormHandler}>
                    <div className={classes.box}>
                        <label className={classes.label} htmlFor="userName">User Name</label>
                        <input className={classes.input} value={userName} onChange={userNameChangeHandler} id="userName"
                               type="text" placeholder='User Name'/>
                    </div>
                    <div className={classes.box}>
                        <label className={classes.label} htmlFor="userAge">Age</label>
                        <input className={classes.input} value={age} onChange={ageChangeHandler} id="userAge"
                               type="number"
                               placeholder='User Age'/>
                    </div>
                    <div className={classes.box}>
                        <Button type="submit">Add User</Button>
                    </div>
                </form>
            </Card>
        </>
    )
}
