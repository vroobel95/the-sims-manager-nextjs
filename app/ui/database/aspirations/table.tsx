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
      translationKey: 'table.icon',
    },
    {
      key: 'name',
      label: 'Name',
      translationKey: 'columns.name',
    },
  ];

  const actions: Action[] = [
    {
      id: 'view',
      label: 'View',
      onClick: () => {
        // TODO: Implement view action
      },
    },
  ];

  return <Table columns={columns} data={aspirations || []} actions={actions} />;
}
