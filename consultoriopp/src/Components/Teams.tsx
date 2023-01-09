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
            <div className="teams_div_2">
                {props.map((element, index) => (
                    <p
                        className={`teams_p ${checkId === element.id ? "backgroundColo" : "" }`}
                        key={index}
                        onClick={() => setCheckId(element.id)}
                    >
                        {element.name}
                    </p>
                ))}
            </div>
            <div className="teams_div_3">
                {element && (
                    <Card className="teams_card">
                        <Box sx={{ display: "flex", flexDirection: "row" }}>
                            <CardMedia
                                className="teams_img"
                                sx={{ width: 151 }}
                                component="img"
                                image={mainLogo}
                                title={element.name}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    {element.name} - CRO {element.cro}
                                </Typography>

                                <ul>
                                    {element.info.map((algo, index) => (
                                        <li key={index}>{algo}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Box>
                    </Card>
                )}
            </div>
        </div>
    );
};

export default Team;
