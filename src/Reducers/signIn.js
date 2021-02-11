const SignIn = (state=(data)=>{
},action)=> {
    switch(action.type){
        case "ADD_SIGNIN":
            return state=action.data
         default:
          return state;   


    }
} 

export default SignIn;