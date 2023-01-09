import "./App.css";
import HeaderClass from "./Components/Headers";
import { Info, Qualidade, Contato, Team } from "./_Mock/infoGerais";
import NavBar from "./Components/NavBar";
import Intro from "./Components/Intro";
import Separator from "./Components/Separator";
import ListRow from "./Components/ListRow";
import Teams from "./Components/Teams";

function App() {
    return (
        <div className="App">
            <HeaderClass {...Info} />
            <NavBar />
            <Intro />
            <Separator {...Contato} />
            <ListRow props={Qualidade} />
            <Separator {...Contato} />
            <Teams props={Team}/>

        </div>
    );
}

export default App;
