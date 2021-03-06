import { MediaState } from '../enums/media-state.enum';

export interface Image {
  readonly id: string;
  readonly entityId: string;
  readonly fileName: string;
  readonly state: MediaState;
  readonly order: number;
  readonly isStared: boolean; //TODO: Can star 1
  readonly isLoved: boolean; //TODO: Can love 10?
  readonly title: string;
  readonly description: string;
  readonly keywords: string;
  readonly dateCreated: string;
  readonly datePublished: string;
  readonly isGenerated: boolean;
  readonly isProcessing: boolean;
}
