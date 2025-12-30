'use client';

import { useCareers } from '@/app/lib/careers/useCareers';
import Spinner from '../../spinner';
import Table, { Action, Column } from '../../table';

export default function CareersTable() {
  const { careers, isLoading } = useCareers();

  if (isLoading) {
    return <Spinner />;
  }

  const sortedCareers = [...(careers || [])].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

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

  return <Table columns={columns} data={sortedCareers} actions={actions} />;
}
