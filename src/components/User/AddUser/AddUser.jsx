import {useState} from "react";
import {Card} from "../../UI/Card/Card";
import {Button} from "../../UI/Button/Button";
import classes from './AddUser.module.css'

export const AddUser = ({onAddUser}) => {
    const [userName, setUserName] = useState('')
    const [age, setAge] = useState('')

    const submitFormHandler = event => {
        event.preventDefault()

        const userData = {
            id: Math.random(),
            userName,
            age,
        }

        onAddUser(userData)

        console.log(userName, age)

    }

    const userNameChangeHandler = (event) => {
        setUserName(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setAge(event.target.value)
    }

    return (
        <Card className={classes.form__wrapper}>
            <form onSubmit={submitFormHandler}>
                <div className={classes.box}>
                    <label className={classes.label} htmlFor="userName">User Name</label>
                    <input className={classes.input} value={userName} onChange={userNameChangeHandler} id="userName"
                           type="text" placeholder='User Name'/>
                </div>
                <div className={classes.box}>
                    <label className={classes.label} htmlFor="userAge">Age</label>
                    <input className={classes.input} value={age} onChange={ageChangeHandler} id="userAge" type="number"
                           placeholder='User Age'/>
                </div>
                <div className={classes.box}>
                    <Button type="submit">Add User</Button>
                </div>
            </form>
        </Card>
    )
}
