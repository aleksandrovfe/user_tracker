import './App.css';
import {AddUser} from "./components/User/AddUser/AddUser";
import {useState} from "react";
import {UsersList} from "./components/User/UsersList/UsersList";
import {ErrorModal} from "./components/UI/ErrorModal/ErrorModal";

function App() {
    const [users, setUsers] = useState([])

    const addUserHandler = (user) => {
        setUsers((prevUsers) => ([
            user,
            ...prevUsers
        ]))
    }

    return (
        <div className="App">
            <ErrorModal />
            <AddUser onAddUser={addUserHandler}/>
            <UsersList users={users}/>
        </div>
    );
}

export default App;
