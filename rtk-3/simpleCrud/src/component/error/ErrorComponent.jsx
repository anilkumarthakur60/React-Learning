import * as React from 'react';
import {Box, LinearProgress, Stack} from '@mui/material';
import {blue} from "@mui/material/colors";

export default function ErrorComponent() {

    const [progress, setProgress] = React.useState(0);
    const [buffer, setBuffer] = React.useState(10);

    const progressRef = React.useRef(() => {
    });
    React.useEffect(() => {
        progressRef.current = () => {
            if (progress > 100) {
                setProgress(0);
                setBuffer(10);
            } else {
                const diff = Math.random() * 10;
                const diff2 = Math.random() * 10;
                setProgress(progress + diff);
                setBuffer(progress + diff + diff2);
            }
        };
    });

    React.useEffect(() => {
        const timer = setInterval(() => {
            progressRef.current();
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);


    return (
        <>
            {/*<Box*/}
            {/*    sx={{*/}
            {/*        display: 'flex',*/}
            {/*        justifyContent: 'center',*/}
            {/*        alignItems: 'center',*/}
            {/*        flexDirection: 'column',*/}
            {/*        minHeight: '100vh',*/}
            {/*        backgroundColor: blue[500],*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <Typography variant="h1" style={{ color: 'white' }}>*/}
            {/*        404*/}
            {/*    </Typography>*/}
            {/*    <Typography variant="h6" style={{ color: 'white' }}>*/}
            {/*        The page you’re looking for doesn’t exist.*/}
            {/*    </Typography>*/}
            {/*    <Button variant="contained">Back Home</Button>*/}
            {/*    <div >*/}
            {/*        <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />*/}
            {/*    </div>*/}
            {/*    <CircularProgress />*/}


            {/*</Box>*/}
            <Box sx={{

                    display: 'flex',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    // flexDirection: 'column',
                    // minHeight: '100vh',
            }}>
                <LinearProgress sx={{width:'100%'}} variant="buffer" value={progress} valueBuffer={buffer}/>
            </Box>
        </>
    );

}