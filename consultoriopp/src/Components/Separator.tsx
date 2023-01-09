import { Button } from "@mui/material";
import "../css/separator.css";
import { ContatoProps } from "../_Mock/infoGerais";

const Separator = ({ title, description }: ContatoProps) => {
    return (
        <div className="separator_div" id="cell">
            <section>
                <h2 className="separator_p">{title}</h2>
                <p className="separator_p">{description}</p>
            </section>
            <section>
                <Button variant="contained">aqui algo</Button>
            </section>
        </div>
    );
};
export default Separator;
