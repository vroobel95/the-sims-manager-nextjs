import { Aspiration } from '../definitions';

export const mapToAspirationsArray = (data: any[]): Aspiration[] | null => {
  data.map((item) => {
    if (
      typeof item.id === 'string' &&
      typeof item.name === 'string' &&
      (typeof item.icon_url === 'string' || item.icon_url === undefined)
    ) {
      return {
        id: item.id,
        name: item.name,
        icon_url: item.icon_url,
      };
    }
  });
  console.error('Invalid Dictionary data', data);
  return null;
};
