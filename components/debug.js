import Link from 'next/link';

import { Table } from '@mantine/core';

import { AttributeList } from './attributes';
import { SimpleCard } from './card';

export function RawCard({ title="Map", map, ...props }) {
    return (
        <SimpleCard title={title} {...props}>
          { map === undefined && <i>map is undefined</i> }

          <pre>
			{ JSON.stringify(map, null, 2) }
		  </pre>
        </SimpleCard>
    )
}

export function MapCard({ title="Map", map, ...props }) {
    return (
        <SimpleCard title={title} {...props}>
          { map === undefined && <i>map is undefined</i> }

          <AttributeList item={map} />
        </SimpleCard>
    )
}

export function MapTable({ map, onDrillDown }) {
	if (!map) return <div>map undefined</div>

	function valueToString(val) {
		if (typeof val === 'object') JSON.stringify(val);

		return String(val);
	}

	return (
		  <Table>
			<Table.Thead>
			  <Table.Tr>
				<Table.Th>Key</Table.Th>
				<Table.Th>Value</Table.Th>
				<Table.Th></Table.Th>
			  </Table.Tr>
			</Table.Thead>
			<Table.Tbody>
			  {
				  Object.keys(map).map(k => {
					  const isComplex = typeof map[k] === 'object';

					  return (
						  <Table.Tr key={k}>
						    <Table.Td>{ isComplex ? <Link href={`${k}`}>{k}</Link> : k }</Table.Td>
							<Table.Td>{valueToString(map[k])}</Table.Td>
						  </Table.Tr>
					  )
				  })
			  }
			</Table.Tbody>
		  </Table>
	)
}

export function ArrayTable({ items, attributes }) {
	if (!items) return <div>items undefined</div>
	if (!attributes || attributes.length === 0) return <div>attributes undefined</div>

	function valueToString(val) {
		if (typeof val === 'object') JSON.stringify(val);

		return String(val);
	}

	return (
		<>
		  <Table striped>
			<thead>
			  <Table.Tr>
			    {
				  attributes.map(a => <Table.Th key={a}>{a}</Table.Th>)
			    }
			  </Table.Tr>
			</thead>
			<Table.Tbody>
			  {
				  items.map(item => {
					  return (
						  <Table.Tr key={item.id}>
			    {
				  attributes.map(a => <Table.Td key={a}>{valueToString(item[a])}</Table.Td>)
			    }
						  </Table.Tr>
					  )
				  })
			  }
			</Table.Tbody>
		  </Table>
		</>
	)
}
