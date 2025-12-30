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
      translationKey: 'table.icon',
    },
    {
      key: 'name',
      label: 'Name',
      translationKey: 'columns.name',
    },
    {
      key: 'badge_rank',
      label: 'Rank',
      translationKey: 'columns.rank',
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

  return <Table columns={columns} data={badges || []} actions={actions} />;
}
