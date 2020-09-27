import {combineReducers} from "redux"
import Login from "./Login"
import Userdata from "./UserData"
import Images from "./Images"
import Search from "./Search"
const reducers = combineReducers({
login:Login,
userdata:Userdata,
images:Images,
search:Search
}
)

export default reducers;
