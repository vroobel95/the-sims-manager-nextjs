'use client';

import { useAspirations } from '@/app/lib/aspirations/useAspirations';
import Spinner from '../../spinner';
import Table, { Action, Column } from '../../table';

export default function AspirationsTable() {
  const { aspirations, isLoading } = useAspirations();

  if (isLoading) {
    return <Spinner />;
  }

  const columns: Column[] = [
    {
      key: 'icon_url',
      label: 'Icon',
      iconUrl: 'icon_url',
    },
    {
      key: 'name',
      label: 'Name',
    },
  ];

  const actions: Action[] = [
    {
      id: 'view',
      label: 'View',
      onClick: (row) => {
        console.log('View aspiration:', row);
        // TODO: Implement view action
      },
    },
  ];

  return <Table columns={columns} data={aspirations || []} actions={actions} />;
}
