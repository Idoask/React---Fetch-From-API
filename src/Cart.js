import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DeletelIcon from "@mui/icons-material/Delete";
import { CartContext } from "./context";

import { useContext } from "react";
import { Avatar, IconButton } from "@mui/material";

const drawerWidth = 340;

export function Cart() {
  const { cart, setCart, products } = useContext(CartContext);

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="right"
    >
      <Toolbar />
      <Divider />
      <List>
        {Object.keys(cart).map((productId) => {
          const item = products.find((product) => product.id === +productId);
          const count = cart[productId];

          return (
            <ListItem
              secondaryAction={
                <IconButton
                  onClick={function () {
                    const count = cart[item.id] ? cart[item.id] - 1 : undefined; //
                    if (count) {
                      setCart({ ...cart, [item.id]: count });
                    } else {
                      const newCart = { ...cart };
                      delete newCart[item.id];
                      setCart(newCart);
                    }
                  }}
                >
                  <DeletelIcon />
                </IconButton>
              }
              key={productId}
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon>
                  <Avatar sx={{ width: 40, height: 40 }} src={item.image} />
                </ListItemIcon>
                <ListItemText
                  secondary={`$${item.price * count}`}
                  primary={`${item.title}`}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}
