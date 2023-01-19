import { TeamProps } from "../_Mock/infoGerais";
import "../css/teams.css";
import { useState, useEffect } from "react";
import mainLogo from "../_icon/images.jpeg";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

type listOfTeam = {
    props: TeamProps[];
};

const Team = ({ props }: listOfTeam) => {
    const [checkId, setCheckId] = useState<number>(1);
    const [element, setElement] = useState<TeamProps>();

    useEffect(() => {
        checkId &&
            setElement(
                props.find((element: TeamProps) => element.id === checkId)
            );
    });

    console.log(element);
    return (
        <div className="teams_div">
            <h1>CONHEÇA NOSSA EQUIPE</h1>
            {/*<div className="teams_div_2">
                {props.map((element, index) => (
                    <p
                        className={`teams_p ${checkId === element.id ? "backgroundColo" : "" }`}
                        key={index}
                        onClick={() => setCheckId(element.id)}
                    >
                        {element.name}
                    </p>
                ))}
                </div>*/}

            {props.map((element, index) => (
                <div className="teams_div_2">
                    <img className="teams_img" src={mainLogo}></img>
                    <section className="teams_section">
                        <h2>
                            {element.name} - CRO - {element.cro}
                        </h2>
                        <ul>
                            {element.info.map((algo, index) => (
                                <li className="teams_li" key={index}>
                                    {algo}
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            ))}
        </div>
    );
};

export default Team;
