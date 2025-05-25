import React from 'react';

import {
    Group,
    Stack,
    Text,
} from '@mantine/core';

import { Card } from './paper';

import { format } from 'date-fns';

const ATTRIBUTE_FORMATS = {
    object: value => JSON.stringify(value, null, 2),
	date: val => val ? format(val, 'P') : '',
	datetime: val => val ? format(val, 'Pp') : '',
	time: val => val ? format(val, 'p') : '',
}

export function AttributeValue({ label, value, undefinedValue='-' }) {
    return (
        <Group position="apart">
          <Text size="sm" c="dimmed">{label}</Text>

          <Text size="sm" fw={500}>{ value?.toString() || undefinedValue }</Text>
        </Group>
    )
}

export function AttributeList({ item={}, labels={}, attributes }) {
	function renderAttribute(attribute) {
		const { key, name, label, type, format, unspecified, href, copy } = attribute;

		const f = type ? ATTRIBUTE_FORMATS[type] : format;

		const value = f ? f(item[name], item) : item[name];
        const valueS = value !== undefined && new String(value);

        // { value && copy && renderCopyButton(value) }

        return <AttributeValue key={key || name}
            label={label || name}
            value={valueS || unspecified}
            />
	}

    const model = Array.isArray(attributes) ? attributes : Object.keys(item).map(k => {
        return {
            name: k
        }
    })
    
    return (
        <Stack spacing="sm">
          { model.map(renderAttribute) }
        </Stack>
    )
}

export function AttributesCard({ title, item={}, labels = {}, attributes, ...props }) {
    return (
        <Card p="md" title={title} {...props}>
          <AttributeList item={item} labels={labels} attributes={attributes} />
        </Card>
    );
}
