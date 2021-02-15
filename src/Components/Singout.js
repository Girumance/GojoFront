import React from 'react';
import {useDispatch} from "react-redux"
import {Logout} from "./../Actions"
import {Button} from "@material-ui/core"


const Singout = () => {
    const dispatch = useDispatch();

    const onSignout = () =>{
        dispatch(Logout())
        localStorage.removeItem("username")
        localStorage.removeItem("password")

    }

    return (
        <div>
            <Button onClick={onSignout}  color="inherit">Sign Out</Button>
        </div>
    );
};

export default Singout;