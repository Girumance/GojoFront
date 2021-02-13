import React ,{useState}from 'react';
import Axios from "axios"
import {Grid} from '@material-ui/core';
import ImageHolder from "./ImageHolder"
const ImageController = (props) => {

    const [load,setLoad] = useState(false);
    const [data,setData] = useState([]);
    if(!load){

        const url =process.env.REACT_APP_BACKEND_URL+"image/allimages/"+props.id
        Axios.get(url).then( res => {
                setData(res.data)
                console.log(res.data)
                setLoad(true)
        })

    }
    return (
        
        <Grid container spacing={1}>

        {
                data.map( (res, index) => <ImageHolder key={index} img={res} />)
        }

        </Grid>
    );
};

export default ImageController;