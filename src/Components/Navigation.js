import React from "react"
import {Toolbar, AppBar,IconButton, Typography, Button} from "@material-ui/core"
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CustomDialog from "./Dialog/CustomDialog"
import SignUp from "./SignUp"
import SignIn from "./SignIn";
import {connect} from "react-redux"
import {Login, Adduserdata} from "./../Actions"
import Axios from "axios"
import NavigationButton from "./Dashboard/NavigationButton"
import  {useNavigate} from "react-router-dom"

class Navigation extends React.Component{

    constructor(props){
        super(props);

        this.handleSignUpClickOpen=this.handleSignUpClickOpen.bind(this)
        this.handleSignUpClose= this.handleSignUpClose.bind(this)
        this.handleSignInClickOpen=this.handleSignInClickOpen.bind(this)
        this.handleSigninClose=this.handleSigninClose.bind(this);
        
        
        

        this.state={
            signupopen:false,
            signinopen:false
        }
    }

    

     handleSignUpClickOpen = () => {

    
            this.setState({
                
                signupopen:true

            })
      };

      
      
       handleSignUpClose = () => {

        
        this.setState({
                
            signupopen:false

        })
        
      };

      handleSignInClickOpen = () => {

        
        this.setState({
            
            signinopen:true

        })
  };
  
   handleSigninClose = () => {
    this.setState({
            
        signinopen:false

    })
    
  };


render(){
    const navigate = useNavigate
   const home=() =>{
        navigate("/")
    }

    if(localStorage.getItem("username")!="None"){

        const data = {
            username:localStorage.getItem("username"),
            password:localStorage.getItem("password")
        }
        

            const backurl=process.env.REACT_APP_BACKEND_URL+"login"
            Axios.post(backurl,data).then( res => {
              console.log("From sign in method")
              this.props.dispatch(Login())
              this.props.dispatch(Adduserdata(res.data))
              localStorage.setItem("username",data.username)
              localStorage.setItem("password",data.password)
              
              
            }).then(res => {
              console.log(res)
            })
        
          
    }

   

    return(

        <AppBar position="fixed">
        <Toolbar >
        <IconButton color="inherit"><HomeWorkIcon/></IconButton>
        <Typography onClick={home} variant="h5" style={{flexGrow:1}}> GOJO HOMES</Typography>
           
            { !this.props.login ?
                <React.Fragment>
        <Button onClick={()=>this.handleSignUpClickOpen()} color="inherit">Sign UP</Button>
        <Button onClick={()=>this.handleSignInClickOpen()} color="inherit">LOG IN</Button>
            </React.Fragment>
            :""
            }
    

        <Button color="inherit">About Us</Button>
        <Button color="inherit">Contact Us</Button>
        { this.props.login ?<>
            <NavigationButton />
            <Button color="inherit">{this.props.name}</Button>
<IconButton color="inherit"><AccountCircleIcon/></IconButton>


</>

        : ""
        }
        <CustomDialog value={this.state.signupopen} onClose={this.handleSignUpClose}><SignUp /></CustomDialog>
        <CustomDialog value={this.state.signinopen} onClose={this.handleSigninClose}><SignIn onClose={this.handleSigninClose}/></CustomDialog>
    
        
    </Toolbar>
    </AppBar>
    );
}



}
const mapStateToProps= (state) =>{

    return{
        login:state.login,
        name:state.userdata.firstName,
        signin: state.signin
        
    } 
}

const mapDispatcherToProps = (dispatch) => {

    return {
        dispatch: (action) => {
                dispatch(action)
        } 
    }

}

export default connect(mapStateToProps) (Navigation)