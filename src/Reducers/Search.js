const Search =(state="none",action)=> {
            switch(action.type){
                case "ADD_Search":
                    return state=action.data
                 default:
                  return state;   


            }
} 

export default Search;