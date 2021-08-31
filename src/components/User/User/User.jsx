import classes from './User.module.css'

export const User = ({name, age}) => {
    return (
        <p className={classes.user__info}>{name} {age} years old </p>
    )
}
