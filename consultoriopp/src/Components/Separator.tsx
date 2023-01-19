import { Button } from "@mui/material";
import "../css/separator.css";
import { ContatoProps } from "../_Mock/infoGerais";

const Separator = ({ title, description }: ContatoProps) => {
    const openInNewTab = (url: string) => {
        window.open(url, '_blank', 'noreferrer');
      };
    
    return (
        <div className="separator_div" id="cell">
            <section>
                <h2 className="separator_p">{title}</h2>
                <p className="separator_p">{description}</p>
            </section>
            <section>
                <Button variant="contained" onClick={() => openInNewTab("https://wa.me/5531988211146")}>aqui algo</Button>
            </section>
        </div>
    );
};
export default Separator;
