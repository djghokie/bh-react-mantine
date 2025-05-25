import React from 'react';

import {
    Divider,
    Text,
} from '@mantine/core';

export function Header({ title }) {
    return (
        <>
          <Text size="lg" fw={500} mb="md">{ title }</Text>

          <Divider mb="sm" />
        </>
    )
}
