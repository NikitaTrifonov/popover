import { connect } from "react-redux";
import { Popover } from "./popover";

const mapStateToProps = (state) => {
    return { events: state.popover.popoverEvents };
};

export const PopoverContainer = connect(mapStateToProps)(Popover);
