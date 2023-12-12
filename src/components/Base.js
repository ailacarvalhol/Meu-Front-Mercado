import React from 'react';
import { Box, Container, Typography } from '@mui/material';


function Base({ children, title }) {
    return (
        < Container maxWidth={false} sx={{ p: 3 }}>
            <Typography>
                {title}
            </Typography>
                {children}
        </Container>)

}

export default Base;