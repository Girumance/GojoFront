export const Login = ()=>{

    return {
        type: "Login"
    }
}


export const Logout = () => {
    return {
        type : "Logout"
    }
}

export const Adduserdata  = (data) =>{

            return{
                type: "Store",
                data:data
            }

}

export const ADDFILE  = (data) =>{

    return{
        type: "Add_File",
        File:data
    }

}

export const AddSearch = (data) =>{
        return {
            type:"ADD_Search",
            data:data
        }
}