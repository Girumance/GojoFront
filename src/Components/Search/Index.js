import React from "react"
import SearchPanel from "./SearchPanel"
import ContentHolder from "./ContentHolder"
import {useParams} from "react-router-dom"
function Index(){ 
const {city} = useParams();


        
        return(
            <React.Fragment >
                    <SearchPanel />
                    <ContentHolder city={city}/>
            </React.Fragment>
        );

    
}


export default Index;