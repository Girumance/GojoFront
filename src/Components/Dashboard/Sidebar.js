import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core"
import PersonIcon from '@material-ui/icons/Person';
import MessageIcon from '@material-ui/icons/Message';
import AddBoxIcon from '@material-ui/icons/AddBox';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
function Sidebar(props) {
    return (
        <div>

                <List>
                    <ListItem selected={true} button>
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

                    <ListItem button>
                        <ListItemIcon>
                            <AddBoxIcon/>
                        </ListItemIcon>

                        <ListItemText>
                            Add Property
                        </ListItemText>
                    </ListItem>

                    <ListItem button>
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