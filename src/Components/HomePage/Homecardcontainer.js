import React from "react"
import { Typography,Grid } from "@material-ui/core"
import HomeCards from "./HomeCards"

const image =[
   { title:"Houses", img: require("./images/house.jpg")},
   {title:"Apartments", img:require("./images/Condo.jpg")},
    {title:"Cottages", img:require("./images/Cottage.jpg")},
    {title:"Studio", img:require("./images/studio.jpg")}
]

const Homecardcontainer =() => {

    return (
        <div className="cards">
                <Typography align="center" color="textSecondary" variant="h4">Find Homes  that suit your style</Typography>

                <Grid container  >

                    <Grid item xs={1} md={1}>

                    </Grid>

                    <Grid item md={10}>

                    <Grid container  spacing={1}>
                    {
                        image.map( (img,index) => (
                            <Grid item xs={3} key={index}>
                                <HomeCards image={img} />
                            </Grid>

                        ))
                    }
                </Grid>
                    <Grid item xs={1} md={1}> 

                    </Grid>
                    </Grid>

                </Grid>

        </div>
    );
}

export default Homecardcontainer;