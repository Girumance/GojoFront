import {combineReducers} from "redux"
import Login from "./Login"
import Userdata from "./UserData"
import Images from "./Images"
const reducers = combineReducers({
login:Login,
userdata:Userdata,
images:Images
}
)

export default reducers;
