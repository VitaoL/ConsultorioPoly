import { QualidadeProps } from "../_Mock/infoGerais";
import "../css/listRow.css";
import { Icon } from "@mui/material";
import insulina from "../_icon/images.jpeg";

type listOfQualidade = {
    props: QualidadeProps[];
};

const ListRow = ({ props }: listOfQualidade) => {
    return (
        <div className="listRow_div">
            <ul className="listRow_ul">
                {props.map((element, index) => (
                    <li key={index} className="listRow_li">
                        {/*<svg width="100" height="100">
                            <img src={insulina} alt="asdf" />
                        </svg>*/}
                        <h1 className="listRow_h1">{element.title}</h1>
                        <p className="listRow_p">{element.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListRow;
