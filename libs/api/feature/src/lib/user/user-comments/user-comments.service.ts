import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';

import {
  Comment,
  CommentAdd,
  CommentUpdate,
} from '@dark-rush-photography/shared/types';
import {
  CommentProvider,
  Document,
  DocumentModel,
} from '@dark-rush-photography/api/data';

@Injectable()
export class UserCommentsService {
  constructor(
    @InjectModel(Document.name)
    private readonly entityModel: Model<DocumentModel>,
    private readonly commentProvider: CommentProvider
  ) {}

  add$(commentAdd: CommentAdd): Observable<Comment> {
    return this.commentProvider.add$(commentAdd, this.entityModel);
  }

  update$(
    id: string,
    entityId: string,
    commentUpdate: CommentUpdate
  ): Observable<Comment> {
    return this.commentProvider.update$(
      id,
      entityId,
      commentUpdate,
      this.entityModel
    );
  }

  findOne$(id: string, entityId: string): Observable<Comment> {
    return this.commentProvider.findOne$(id, entityId, this.entityModel);
  }

  remove$(id: string, entityId: string): Observable<void> {
    return this.commentProvider
      .remove$(id, entityId, this.entityModel)
      .pipe(mapTo(undefined));
  }
}
