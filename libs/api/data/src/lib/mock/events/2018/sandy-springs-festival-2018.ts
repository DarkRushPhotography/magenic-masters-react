import { EventDto } from '@dark-rush-photography/api/types';

export class SandySpringsFestival2018 extends EventDto {
  group = 2018;
  slug = 'sandy-springs-festival-2018';
  title = 'Sandy Springs Festival, 2018';
  description = '';
  keywords = [];
  dateCreated = new Date(2018, 1, 7).toISOString().substring(0, 10);
  datePublished = new Date(2018, 1, 7).toISOString().substring(0, 10);
  location = {
    country: 'United States',
  };
  useTileImage = false;

  private constructor() {
    super();
  }

  static of(): EventDto {
    return new SandySpringsFestival2018();
  }
}
