import {combineReducers} from "redux"
import Login from "./Login"
import Userdata from "./UserData"
import Images from "./Images"
import Search from "./Search"
import Load from "./load"
import SignIn from "./signIn"
import EditImage from "./EditImage"
const reducers = combineReducers({
login:Login,
userdata:Userdata,
images:Images,
search:Search,
load:Load,
signin:SignIn,
editimage:EditImage
}
)

export default reducers;
