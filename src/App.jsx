import React from 'react';
import { Typography, CssBaseline, AppBar,Toolbar } from '@mui/material';

const App = () => {
    return (<>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
                <Typography variant='h2'>Hello World!</Typography>
            </Toolbar>

        </AppBar>
    </>);
}

export default App;