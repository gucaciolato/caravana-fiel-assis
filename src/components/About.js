import React from 'react';
import './About.css';
import { Card, Button } from 'react-bootstrap';
import { FaWhatsapp, FaBus, FaUsers, FaTv } from 'react-icons/fa';
import caravanaImage from '../images/caravana.jpg';

function About() {
    return (
        <section
          id="about"
          className="parallax"
          style={{ backgroundImage: `url(${caravanaImage})` }} // Aplique a imagem
        >
            <div className="container">
                <Card className="text-center translucent-card">
                    <Card.Body>
                        <Card.Title><h3><strong>Quem somos?</strong></h3></Card.Title>
                        <Card.Text>
                            <p>Somos um grupo de torcedores apaixonados pelo Sport Club Corinthians Paulista, dedicados a promover o espírito corinthiano em Assis e proporcionar momentos de união e alegria para toda a comunidade.</p>
                            <h3><strong>Transmissões dos Jogos do Corinthians</strong></h3>
                            <p>Nosso principal objetivo é levar a emoção dos jogos do Corinthians para a população local. Organizamos eventos com transmissão das partidas em telões, oferecendo uma estrutura completa com som e iluminação. Tudo para proporcionar uma experiência única e inesquecível para os torcedores.</p>
                            <h3><strong>Ações Sociais</strong></h3>
                            <p>Além de vivermos a paixão pelo Timão, estamos comprometidos com causas sociais que beneficiam nossa comunidade. Recentemente, realizamos uma campanha de arrecadação de leite para asilos da região. Continuamos engajados em iniciativas que fazem a diferença na vida das pessoas ao nosso redor.</p>
                            <h3><strong>Parcerias que Fazem a Diferença</strong></h3>
                            <p>Para continuar com nossos projetos e ampliar nosso impacto, buscamos parcerias com empresas e pessoas que compartilham dos nossos valores. Seu apoio é essencial para que possamos seguir em frente e alcançar ainda mais corações corinthianos.</p>
                            <h3><strong>Junte-se a Nós!</strong></h3>
                            <p>Convidamos você a fazer parte dessa jornada conosco. Entre em contato e descubra como sua participação pode fortalecer a Caravana Fiel Assis-SP e a comunidade que servimos.</p>
                            <hr></hr>
                        </Card.Text>
                        <ul className="text-center list-unstyled my-4">
                            <li className="mb-3">
                                <FaBus className="me-2 text-danger" size={24} />
                                <span>Caravana para torcer com o Timão na Neo Química Arena.</span>
                            </li>
                            <li className="mb-3">
                                <FaUsers className="me-2 text-danger" size={24} />
                                <span>Ações sociais.</span>
                            </li>
                            <li className="mb-3">
                                <FaTv className="me-2 text-danger" size={24} />
                                <span>Eventos em Assis e região.</span>
                            </li>
                        </ul>

                        <Button variant="danger" href="https://chat.whatsapp.com/HE0TXTXp4KnD1IcKS10VR3">
                            <FaWhatsapp color="white" className="me-2" size={24} />
                            Junte-se a Nós
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </section>
    );
}

export default About;
