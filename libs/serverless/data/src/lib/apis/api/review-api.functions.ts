import { HttpService } from '@nestjs/common';

import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Image, ImageDimensionType } from '@dark-rush-photography/shared-types';
import { Env } from '@dark-rush-photography/serverless/types';
import { apiAuth$ } from './auth-api.functions';

export const addReviewImage$ = (
  env: Env,
  httpService: HttpService,
  reviewSlug: string,
  slug: string
): Observable<Image> => {
  return apiAuth$(env, httpService).pipe(
    switchMap((authToken) =>
      httpService.put<Image>(
        `${env.darkRushPhotographyApi}/v1/review/${reviewSlug}/image`,
        {
          slug,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            DRP_ADMIN_KEY: env.darkRushPhotographyAdminKey,
          },
        }
      )
    ),
    map((axiosResponse) => axiosResponse.data)
  );
};

export const addReviewImageType$ = (
  env: Env,
  httpService: HttpService,
  reviewSlug: string,
  slug: string,
  imageDimensionType: ImageDimensionType,
  width: number,
  height: number
): Observable<Image> => {
  return apiAuth$(env, httpService).pipe(
    switchMap((authToken) =>
      httpService.put<Image>(
        `${env.darkRushPhotographyApi}/v1/review/${reviewSlug}/image/${slug}`,
        {
          type: imageDimensionType,
          width,
          height,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            DRP_ADMIN_KEY: env.darkRushPhotographyAdminKey,
          },
        }
      )
    ),
    map((axiosResponse) => axiosResponse.data)
  );
};
