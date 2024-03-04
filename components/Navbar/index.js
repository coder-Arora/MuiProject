'use client';
import React, { useState } from 'react'
import { Box,AppBar,Toolbar,Typography,InputBase,Avatar,Badge } from '@mui/material'
import { styled } from '@mui/material/styles';
import{Mail,Notifications} from "@mui/icons-material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));

  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

const index = () => {
  const [open,setOpen] = useState(false)
  return (

        <AppBar position="sticky">
            <StyledToolbar>
            <Typography
            variant="h6"
            noWrap
            component="div"
            // sx={{ display: { xs: 'none', sm: 'block' } }}
          >
           FEEDER
          </Typography>
          <Search>
          <InputBase placeholder="search..." />
        </Search>
      

<Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={(e) => setOpen(true)}
          />
          
        </Icons>

       
            </StyledToolbar>
            {
            open&& <Menu
            id="basic-menu"
            // anchorEl={anchorEl}
            open={open}
            onClose={e=>setOpen(!open)}
            sx={{marginTop:"50px"}}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
             
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={e=>setOpen(!open)}>Profile</MenuItem>
            <MenuItem onClick={e=>setOpen(!open)}>My account</MenuItem>
            <MenuItem onClick={e=>setOpen(!open)}>Logout</MenuItem>
          </Menu>
          }
        </AppBar>
      
   
  )
}

export default index
