'use client';

import { useBadges } from '@/app/lib/badges/useBadges';
import Spinner from '../../spinner';
import Table, { Action, Column } from '../../table';

export default function BadgesTable() {
  const { badges, isLoading } = useBadges();

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
    {
      key: 'badge_rank',
      label: 'Rank',
    },
  ];

  const actions: Action[] = [
    {
      id: 'view',
      label: 'View',
      onClick: (row) => {
        console.log('View badge:', row);
        // TODO: Implement view action
      },
    },
  ];

  return <Table columns={columns} data={badges || []} actions={actions} />;
}
