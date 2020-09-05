import React from "react"
import Body from "./Body";
import Homecardcontainer from "./Homecardcontainer";
import Avatars from "./Avatars";
import Howthisworks from "./Howthisworks";
export default class Index extends React.Component{


    render(){
        return(
            <React.Fragment>
            <Body/>
            <Homecardcontainer/>
            <div class="banner">

            </div>

            <Avatars/>
            <Howthisworks/>

            </React.Fragment>
        );
    }
}