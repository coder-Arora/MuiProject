import React from 'react'
import { Box, List, ListItem, Avatar, ListItemAvatar, ListItemText, ListItemButton, ListItemIcon,Switch } from "@mui/material";
import * as Icons from "@mui/icons-material";
// import { ImageIcon, Home } from "@mui/icons-material";

const index = ({mode,setMode}) => {
  const arr = [{ href: "#home", icon: "Home", iconName: "Homepage" }, { href: "#home", icon: "Article", iconName: "Pages" }, { href: "#home", icon: "Group", iconName: "Groups" }, { href: "#home", icon: "Storefront", iconName: "Marketplace" }, { href: "#home", icon: "Person", iconName: "Friends" }, { href: "#home", icon: "Settings", iconName: "Settings" }, { href: "#home", icon: "AccountBox", iconName: "Profile" },]
  return (
    <Box  flex={1} p={2} sx={{display:{xs:"none",sm:"block"}}}>
    <Box position="fixed" >
      <List>

        
        {arr.map((i, index) => {
          // Dynamically get the icon component using the icon name
          const IconComponent = Icons[i.icon];
          return (
            <ListItem disablePadding key={index}>
              <ListItemButton component="a" href={i.href}>
                <ListItemIcon>
                  <IconComponent /> {/* Render the icon component */}
                </ListItemIcon>
                <ListItemText primary={i.iconName} />
              </ListItemButton>
            </ListItem>
          );
        })}
          <ListItem disablePadding key={index}>
              <ListItemButton >
                <ListItemIcon>
                <Icons.ModeNight />  {/* Render the icon component */}
                </ListItemIcon>
                <Switch  onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
              </ListItemButton>
            </ListItem>
      </List>
    </Box>
    </Box>
  )
}

export default index;
