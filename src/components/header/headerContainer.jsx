import { connect } from "react-redux";
import { setPopoverEvent, showPopover } from "../../store/popoverReducer";
import { Header } from "./header";

const mapStateToProps = (state) => {
    return { events: state.popover.events };
};

export const HeaderContainer = connect(mapStateToProps, { showPopover, setPopoverEvent })(Header);
