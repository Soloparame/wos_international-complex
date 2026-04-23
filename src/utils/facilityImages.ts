import type { Facility } from '../data/facilitiesData';

const categoryImageMap: Record<string, [string, string]> = {
  Medical: ['/image/hospital1.png', '/image/hospital2.png'],
  Residential: ['/image/residence1.png', '/image/residence2.png'],
  Commercial: ['/image/commercial1.png', '/image/commercial2.png'],
  Academic: ['/image/educational cenetr1.png', '/image/educational center2.png'],
  Operations: ['/image/adminstration1.png', '/image/adminstration2.png'],
};

export const getFacilityImage = (facility: Facility): string => {
  const images = categoryImageMap[facility.category];
  if (!images) return '/image/general overview.png';
  return parseInt(facility.sector, 10) % 2 === 0 ? images[1] : images[0];
};
