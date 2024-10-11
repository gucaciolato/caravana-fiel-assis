import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

import caravanaImage from '../images/caravana.jpg';
import acaoImage from '../images/acao.jpg';
import itaqueraImage from '../images/itaquera.jpg';

function Photos() {
    const [showModal, setShowModal] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const handleShow = (image) => {
        setCurrentImage(image);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setCurrentImage('');
    };

    return (
        <section id="photos" className="py-5">
            <div className="container text-center">
                <h2>Fotos</h2>
                <div className="row">
                    <div className="col-md-4">
                        <img
                            src={caravanaImage}
                            className="img-fluid"
                            alt="Foto 1"
                            onClick={() => handleShow(caravanaImage)}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                    <div className="col-md-4">
                        <img
                            src={acaoImage}
                            className="img-fluid"
                            alt="Foto 2"
                            onClick={() => handleShow(acaoImage)}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                    <div className="col-md-4">
                        <img
                            src={itaqueraImage}
                            className="img-fluid"
                            alt="Foto 3"
                            onClick={() => handleShow(itaqueraImage)}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                </div>
                <a href="https://www.instagram.com/caravanafielassis/" className="btn btn-danger mt-3">
                    Veja mais no Instagram
                </a>

                {/* Modal para exibir a imagem ampliada */}
                <Modal show={showModal} onHide={handleClose} centered size="lg">
                    <Modal.Body>
                        <img src={currentImage} alt="Imagem ampliada" className="img-fluid" />
                    </Modal.Body>
                </Modal>
            </div>
        </section>
    );
}

export default Photos;
