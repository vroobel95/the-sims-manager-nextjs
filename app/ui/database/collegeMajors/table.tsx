'use client';

import { useCollegeMajors } from '@/app/lib/collegeMajors/useCollegeMajors';
import Spinner from '../../spinner';
import Table, { Action, Column } from '../../table';

export default function CollegeMajorsTable() {
  const { collegeMajors, isLoading } = useCollegeMajors();

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
        // TODO: Implement view action
      },
    },
  ];

  return (
    <Table columns={columns} data={collegeMajors || []} actions={actions} />
  );
}
