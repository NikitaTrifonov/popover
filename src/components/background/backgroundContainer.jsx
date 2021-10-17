import { connect } from "react-redux";
import { startEventsGenerator } from "../../store/popoverReducer";
import { Background } from "./background";

export const BackgroundContainer = connect(null, { startEventsGenerator })(Background);
