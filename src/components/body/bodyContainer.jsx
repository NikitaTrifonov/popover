import { connect } from "react-redux";
import { Body } from "./body";

const mapStateToProps = (state) => {
    return {
        isShowPopover: state.popover.isShowPopover,
    };
};

export const BodyContainer = connect(mapStateToProps)(Body);
