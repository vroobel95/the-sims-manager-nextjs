'use client';

import { useHobbies } from '@/app/lib/hobbies/useHobbies';
import Spinner from '../../spinner';
import Table, { Action, Column } from '../../table';

export default function HobbiesTable() {
  const { hobbies, isLoading } = useHobbies();

  if (isLoading) {
    return <Spinner />;
  }

  const columns: Column[] = [
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
        console.log('View hobby:', row);
        // TODO: Implement view action
      },
    },
  ];

  return <Table columns={columns} data={hobbies || []} actions={actions} />;
}
