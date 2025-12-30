'use client';

import { useLifetimeWants } from '@/app/lib/lifetimeWants/useLifetimeWants';
import Spinner from '../../spinner';
import Table, { Action, Column } from '../../table';

export default function LifetimeWantsTable() {
  const { lifetimeWants, isLoading } = useLifetimeWants();

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

  return (
    <Table columns={columns} data={lifetimeWants || []} actions={actions} />
  );
}
