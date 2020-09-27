import React from "react"
import {Toolbar, AppBar,IconButton, Typography, Button} from "@material-ui/core"
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CustomDialog from "./Dialog/CustomDialog"
import SignUp from "./SignUp"
import SignIn from "./SignIn";
import {connect} from "react-redux"

 class Navigation extends React.Component{

    constructor(){
        super();

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

    console.log(this.props.login)

    return(

        <AppBar position="fixed">
        <Toolbar >
        <IconButton color="inherit"><HomeWorkIcon/></IconButton>
        <Typography variant="h5" style={{flexGrow:1}}> GOJO HOMES</Typography>
           
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
        name:state.userdata.firstName
        
    } 
}

export default connect(mapStateToProps) (Navigation)