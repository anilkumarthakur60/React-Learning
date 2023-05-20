import React from 'react';
import IconButton from "@mui/material/IconButton";
import { ListItemIcon, Menu, MenuItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
// eslint-disable-next-line react/prop-types
export const CustomMaterialMenu = ({ row, onDeleteRow, onEditRow, size }) => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const deleteRow = () => {
        if (onDeleteRow) {
            onDeleteRow(row);
        }
        setAnchorEl(false)
    };

    const editRow = () => {
        if (onEditRow) {
            onEditRow(row);
        }

        setAnchorEl(false)
    };



    return (
        <div>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
                size={size}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu

                id="menu"
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}

                PaperProps={{
                    style: {
                        maxHeight: 216,
                        // width: '20ch',
                    },
                }}
            >
                <MenuItem onClick={editRow} >
                    <ListItemIcon>
                        <EditIcon fontSize="small" color="secondary" />
                    </ListItemIcon>
                    <Typography variant="inherit">Edit</Typography>
                </MenuItem>
                <MenuItem onClick={deleteRow} >
                    <ListItemIcon >
                        <DeleteIcon fontSize="small" color="error" />
                    </ListItemIcon>
                    <Typography variant="inherit">Delete</Typography>
                </MenuItem>
            </Menu>
        </div>
    );
};



