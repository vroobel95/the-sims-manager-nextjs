'use client';

import { useChemistries } from '@/app/lib/chemistries/useChemistries';
import Spinner from '../../spinner';
import Table, { Action, Column } from '../../table';

export default function ChemistriesTable() {
  const { chemistries, isLoading } = useChemistries();

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

  return <Table columns={columns} data={chemistries || []} actions={actions} />;
}
