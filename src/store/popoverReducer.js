import { getRandomTitle } from "../common/eventTitleGenerator";

const ADD_EVENT = "ADD_EVENT";
const SET_POPOVER_EVENT = "SET_POPOVER_EVENT";
const GET_EVENTS = "GET_EVENTS";
const SHOW_POPOVER = "SHOW_POPOVER";

const initialState = {
    events: [],
    popoverEvents: [],
    isShowPopover: false,
};

export const popoverReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EVENT:
            return { ...state, events: [...state.events, action.newEvent] };

        case SET_POPOVER_EVENT: {
            const events = state.events;
            const popoverEvents = [];

            for (let i = 0; i < events.length; i++) {
                if (i === 5) break;

                popoverEvents.push(events[i]);
            }

            return { ...state, popoverEvents };
        }

        case SHOW_POPOVER: {
            return { ...state, isShowPopover: state.events.length > 0 };
        }

        default:
            return state;
    }
};

export const addEvent = (newEvent) => ({
    type: ADD_EVENT,
    newEvent,
});

export const setPopoverEvent = () => ({
    type: SET_POPOVER_EVENT,
});

export const showPopover = () => ({ type: SHOW_POPOVER });

export const startEventsGenerator = (interval = 20_000) => {
    return (dispatch) => {
        setInterval(() => {
            const newEvent = { id: Date.now(), date: new Date(), title: getRandomTitle() };
            dispatch(addEvent(newEvent));
        }, interval);
    };
};
