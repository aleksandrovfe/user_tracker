export const AddUser = () => {
    const submitFormHandler = event => {
        event.preventDefault()


    }
    return (
        <form onSubmit={submitFormHandler}>
            <div>
                <label htmlFor="userName">User Name</label>
                <input id="userName" type="text" placeholder='User Name'/>
            </div>
            <div>
                <label htmlFor="userAge">User Name</label>
                <input id="userAge" type="number" placeholder='User Age'/>
            </div>
            <div>
                <button type="submit">Add User</button>
            </div>
        </form>
    )
}