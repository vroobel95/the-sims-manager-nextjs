'use client';

import { useBadges } from '@/app/lib/badges/useBadges';
import { BadgeRank } from '@/app/lib/definitions';
import Spinner from '../../spinner';
import Table, { Action, Column } from '../../table';

export default function BadgesTable() {
  const { badges, isLoading } = useBadges();

  if (isLoading) {
    return <Spinner />;
  }

  const rankOrder: Record<string, number> = {
    [BadgeRank.BRONZE]: 0,
    [BadgeRank.SILVER]: 1,
    [BadgeRank.GOLD]: 2,
  };

  const sortedBadges = [...(badges || [])].sort((a, b) => {
    const nameComparison = a.name.localeCompare(b.name);
    if (nameComparison !== 0) {
      return nameComparison;
    }
    return rankOrder[a.badge_rank] - rankOrder[b.badge_rank];
  });

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

  return <Table columns={columns} data={sortedBadges} actions={actions} />;
}
