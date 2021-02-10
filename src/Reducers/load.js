const Load =(state="none",action)=> {
    switch(action.type){
        case "ADD_LOAD":
            return state=action.data
         default:
          return state;   


    }
} 

export default Load;