import Button from "../Component/Button";
import Modal from "../Component/Modal";
import {useState} from "react";

function ModalPage(){

    const [showModal, setShowModal] = useState(false);

    const handleClick = (e) => {
        setShowModal(!showModal);
        console.log('---------data logging--------', e);
    }

    const handleModalClick = (e) => {
        setShowModal(e);
        console.log('---------data logging--------', e);
    }



    const handleClose = () => {
        setShowModal(false);
    };
    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>
                I Accept
            </Button>
        </div>
    );
    const modal = (
        <Modal onClose={handleModalClick} actionBar={actionBar}>
            <p>Here is an important agreement for you to accept</p>
        </Modal>
    );


    return (
        <div className="relative ">
            <Button primary onClick={handleClick}>Open Modal</Button>
            {showModal && modal}

        </div>
    );
}
export default ModalPage;