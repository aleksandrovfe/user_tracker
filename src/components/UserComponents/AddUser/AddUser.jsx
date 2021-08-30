import {Card} from "../../UI/Card/Card";

import classes from './AddUser.module.css'

export const AddUser = () => {
    const submitFormHandler = event => {
        event.preventDefault()


    }

    return (
        <Card className={classes.form__wrapper}>
            <form onSubmit={submitFormHandler}>
                <div className={classes.box}>
                    <label className={classes.label} htmlFor="userName">User Name</label>
                    <input className={classes.input} id="userName" type="text" placeholder='User Name'/>
                </div>
                <div className={classes.box}>
                    <label className={classes.label} htmlFor="userAge">Age</label>
                    <input className={classes.input} id="userAge" type="number" placeholder='User Age'/>
                </div>
                <div className={classes.box}>
                    <button type="submit" className={classes.btn}>Add User</button>
                </div>
            </form>
        </Card>
    )
}