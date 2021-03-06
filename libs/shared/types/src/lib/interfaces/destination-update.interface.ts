import { Location } from './location.interface';
import { SocialMediaUrl } from './social-media-url.interface';

export interface DestinationUpdate {
  readonly slug: string;
  readonly title?: string;
  readonly description?: string;
  readonly keywords: string[];
  readonly datePublished?: string;
  readonly location?: Location;
  readonly useTileImage: boolean;
  readonly text: string[];
  readonly hasExtendedReality: boolean;
  readonly websiteUrl?: string;
  readonly socialMediaUrls: SocialMediaUrl[];
}
