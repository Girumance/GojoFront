import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core"
import PersonIcon from '@material-ui/icons/Person';
import MessageIcon from '@material-ui/icons/Message';
import AddBoxIcon from '@material-ui/icons/AddBox';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {useNavigate} from "react-router-dom"



function Sidebar(props) {

    const [flag, setFlag] = React.useState(1)
    

    const navigate = useNavigate();

   
const account = () => {
    setFlag(1)
    navigate("/dashboard")
   
    
}


const Property = ()=> {
    setFlag(2)
    navigate("/AddProperty")
    
    

}

const manage = ()=> {
    setFlag(3)
    navigate("/ManageProperty")
    
    

}
    
    return (
        <div>

                <List>
                    <ListItem onClick={account} selected={ flag==1 ? true : false} button>
                        <ListItemIcon >
                            <PersonIcon/>
                        </ListItemIcon>

                        <ListItemText>
                            Account & Profile
                        </ListItemText>
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <MessageIcon/>
                        </ListItemIcon>

                        <ListItemText>
                            My Messages
                        </ListItemText>
                    </ListItem>

                    <ListItem onClick={Property} selected={ flag==2 ? true : false} button>
                        <ListItemIcon>
                            <AddBoxIcon/>
                        </ListItemIcon>

                        <ListItemText>
                            Add Property
                        </ListItemText>
                    </ListItem>

                    <ListItem onClick={manage} selected={ flag==3 ? true : false} button>
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>

                        <ListItemText>
                            Manage Properties
                        </ListItemText>
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <FavoriteIcon/>
                        </ListItemIcon>

                        <ListItemText>
                            My Favorites
                        </ListItemText>
                    </ListItem>
                </List>
            
        </div>
    );
}

export default Sidebar;