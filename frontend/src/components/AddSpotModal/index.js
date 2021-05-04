import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddSpotForm from './AddSpotForm';

function AddSpotFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div onClick={() => setShowModal(true)}>Add a spot</div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddSpotForm />
                </Modal>
            )}
        </>
    );
}

export default AddSpotFormModal;
