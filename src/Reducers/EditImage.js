const Login= (state=[],action) => {

    switch(action.type){
            case "Add_EditFile":
                console.log(state)
                state=[...state,action.File]
                return state;

            case "Remove":
                return state.pop(action.File)
                
             default :
             return state   


    }


}


export default Login;