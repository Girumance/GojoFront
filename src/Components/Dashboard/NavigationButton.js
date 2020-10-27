import React from 'react';
import {Button} from "@material-ui/core"
import {useNavigate} from "react-router-dom"
function NavigationButton(props) {
const navigate = useNavigate();
    const  dashboard = () => {
        
        navigate("/Dashboard");

      }

    return (
        <Button color="inherit" onClick={dashboard} >Dashboard</Button>
    );
}

export default NavigationButton;