import React from 'react';

import {
    Paper,
} from '@mantine/core';

import { Header } from './section';

export function Card({ title, children, ...props }) {
    return (
        <Paper p="md" withBorder {...props}>
          { title && <Header title={title} /> }

          { children }
       </Paper>
    );
} 
