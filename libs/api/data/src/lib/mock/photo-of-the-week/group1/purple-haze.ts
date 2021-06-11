import { PhotoOfTheWeekDto } from '@dark-rush-photography/api/types';

export class PurpleHaze extends PhotoOfTheWeekDto {
  slug = 'purple-haze';
  group = 1;
  title = 'Purple Haze';
  description = `
    This shot is from a Prairie in Wisconsin`;
  keywords = ['Wisconsin', 'Prairie', 'Purple', 'Flowers', 'Yellow'];
  dateCreated = new Date(2019, 6, 29).toISOString().substring(0, 10);
  datePublished = new Date(2019, 6, 29).toISOString().substring(0, 10);
  location = { stateOrProvince: 'Wisconsin', country: 'United States' };
  useTitleImage = false;

  private constructor() {
    super();
  }

  static of(): PhotoOfTheWeekDto {
    return new PurpleHaze();
  }
}
