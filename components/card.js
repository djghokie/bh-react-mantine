import React from 'react';

import {
    Card,
} from '@mantine/core';

import { Header } from './section';

export function CardTitle({ title }) {
    return (
        <Card.Section p="md">
          <Header title={title} />
        </Card.Section>
    )
}

export function SimpleCard({ title, children, ...props }) {
    return (
        <Card>
          <CardTitle title={title} />
          
          <Card.Section p="md">
            { children }
          </Card.Section>
        </Card>
    )
}
