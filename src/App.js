import "./App.css";
import { BackgroundContainer } from "./components/background/backgroundContainer";
import { BodyContainer } from "./components/body/bodyContainer";
import { HeaderContainer } from "./components/header/headerContainer";

function App() {
    return (
        <div className="app_wrapper">
            <div className="app_content">
                <HeaderContainer />
                <BodyContainer />
                <BackgroundContainer />
            </div>
        </div>
    );
}

export default App;
