import React from "react"
import SearchPanel from "./SearchPanel"
import ContentHolder from "./ContentHolder"

class Index extends React.Component{

    render(){

        return(
            <React.Fragment>
                    <SearchPanel/>
                    <ContentHolder/>
            </React.Fragment>
        );

    }
}


export default Index;