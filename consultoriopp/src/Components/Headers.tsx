import React from "react";
import phoneMask from "../_Mask/phone";
import "../css/header.css";
type infoProps = {
    telefone: number;
    endereço: string;
    numero: number;
    bairro: string;
    cidade: string;
};

class HeaderClass extends React.Component<infoProps> {
    render() {
        const { endereço, numero, telefone, bairro, cidade } = this.props;
        return (
            <div className="header_div">
                <header className="header_header">
                    <section className="header_section">
                        <p className="header_p">
                            {endereço}, {numero} - {bairro} - {cidade}
                        </p>
                        <p className="header_p">{phoneMask(telefone)}</p>
                    </section>
                </header>
            </div>
        );
    }
}

export default HeaderClass;
