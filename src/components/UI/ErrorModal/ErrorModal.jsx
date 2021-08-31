import {Card} from "../Card/Card";
import {Button} from "../Button/Button";
import classes from './ErrorModal.module.css'
import * as ReactDOM from "react-dom";

export const ErrorModal = ({title, message, onCloseModal}) => {
    const Modal = ({title, message, onCloseModal}) => {
        return (
            <div className={classes.modal__wrapper}>
                <Card className={classes.modal}>
                    <h2>{title}</h2>
                    <p>{message}</p>
                    <Button className={classes.btn} onClick={onCloseModal}>Okay</Button>
                </Card>
            </div>
        )
    }

    return (
        <>
            {ReactDOM.createPortal(
                <Modal
                    title={title}
                    message={message}
                    onCloseModal={onCloseModal}
                />,
                document.getElementById('portal'))}
        </>
    )
}
