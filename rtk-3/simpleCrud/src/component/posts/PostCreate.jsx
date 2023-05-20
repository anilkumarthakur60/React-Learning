import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Box, Grid, TextField } from '@mui/material';
import useStore, { storeName } from '../../hooks/useStore';
import { useCreatePostMutation } from '../../redux/post/postApi';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const PostCreate = () => {


    const { formData, setFormData, setShowModal, showModal } = useStore(storeName.posts)

    const handleClickOpen = () => {

        setShowModal(true)
    };

    const handleClose = () => {

        setShowModal(false)
    };

    const [createPost] = useCreatePostMutation()


    const handleSubmit = () => {

        createPost(formData)
    }


    return (<>

        <div className="">
            <Button variant="outlined" onClick={handleClickOpen}>
                Open full-screen dialog
            </Button>
            <Dialog
                fullScreen
                open={showModal}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Sound
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleSubmit}>
                            save
                        </Button>
                    </Toolbar>
                </AppBar>
                <Box>
                    <pre>
                        {JSON.stringify(formData)}
                    </pre>
                    <Grid container direction="row" paddingY={2} justifyContent="flex-start" alignItems="start" spacing={2}>

                        <Grid item md={6}>
                            <TextField name='name' value={formData.name ?? null} onChange={setFormData} fullWidth size='small' id="outlined-basic" label="Outlined" variant="filled" />
                        </Grid>
                        <Grid item md={6}>
                            <TextField name='slug' value={formData.slug ?? null} onChange={setFormData} fullWidth size='small' id="outlined-basic" label="Outlined" variant="filled" />
                        </Grid>

                    </Grid>

                </Box>
            </Dialog>
        </div>
    </>
    )
}

export default PostCreate