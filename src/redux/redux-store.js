import { combineReducers, createStore } from "redux";
import DialogReducer from "./dialogs-reducer";
import ProfileReducer from "./profile-reducer";
import SidebarReducer from "./sideBar-reducer";


let reducers = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: DialogReducer,
    sidebar: SidebarReducer
});
let store = createStore(reducers);


export default store;