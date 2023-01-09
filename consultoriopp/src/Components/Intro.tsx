import { Button } from "@mui/material";
import "../css/intro.css";

const Intro = () => {
    return (
        <div className="intro_div" >
            <section className="intro_section_1">
                <h1 className="intro_h1">
                    O seu bem estar é a nossa prioridade
                </h1>
                <p>
                    Buscamos o melhor para a sua saúde, procurando inovar e
                    estar atentos ao que há de mais moderno e eficaz em
                    odontologia e estética.
                </p>
                <Button variant="contained" size="large">Atendimento via WhatsApp</Button>
            </section>
            <section className="intro_section_2">
                <img
                    className="intro_img"
                    src="https://lirp.cdn-website.com/763e5923/dms3rep/multi/opt/WhatsApp-Image-2022-11-22-at-11.28.56-591w.jpeg"
                />
            </section>
        </div>
    );
};

export default Intro;
