import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Hex: any;
  Json: any;
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  RichTextAST: any;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Entity & Node & {
  __typename?: 'Asset';
  altText?: Maybe<Scalars['String']>;
  authorAvatar: Array<Author>;
  coverImagePost: Array<Post>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type AssetAuthorAvatarArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<AuthorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<AuthorWhereInput>;
};


/** Asset system model */
export type AssetCoverImagePostArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  altText?: Maybe<Scalars['String']>;
  authorAvatar?: Maybe<AuthorCreateManyInlineInput>;
  coverImagePost?: Maybe<PostCreateManyInlineInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  imageSeoOverride?: Maybe<SeoOverrideCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  altText_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  altText_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  altText_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  altText_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  altText_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  altText_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  altText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  altText_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  altText_starts_with?: Maybe<Scalars['String']>;
  authorAvatar_every?: Maybe<AuthorWhereInput>;
  authorAvatar_none?: Maybe<AuthorWhereInput>;
  authorAvatar_some?: Maybe<AuthorWhereInput>;
  coverImagePost_every?: Maybe<PostWhereInput>;
  coverImagePost_none?: Maybe<PostWhereInput>;
  coverImagePost_some?: Maybe<PostWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdBy?: Maybe<UserWhereInput>;
  documentInStages_every?: Maybe<AssetWhereStageInput>;
  documentInStages_none?: Maybe<AssetWhereStageInput>;
  documentInStages_some?: Maybe<AssetWhereStageInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: Maybe<DocumentTransformationInput>;
  image?: Maybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  altText?: Maybe<Scalars['String']>;
  authorAvatar?: Maybe<AuthorUpdateManyInlineInput>;
  coverImagePost?: Maybe<PostUpdateManyInlineInput>;
  fileName?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  imageSeoOverride?: Maybe<SeoOverrideUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: Maybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: Maybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  altText?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: Maybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  altText_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  altText_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  altText_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  altText_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  altText_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  altText_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  altText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  altText_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  altText_starts_with?: Maybe<Scalars['String']>;
  authorAvatar_every?: Maybe<AuthorWhereInput>;
  authorAvatar_none?: Maybe<AuthorWhereInput>;
  authorAvatar_some?: Maybe<AuthorWhereInput>;
  coverImagePost_every?: Maybe<PostWhereInput>;
  coverImagePost_none?: Maybe<PostWhereInput>;
  coverImagePost_some?: Maybe<PostWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdBy?: Maybe<UserWhereInput>;
  documentInStages_every?: Maybe<AssetWhereStageInput>;
  documentInStages_none?: Maybe<AssetWhereStageInput>;
  documentInStages_some?: Maybe<AssetWhereStageInput>;
  fileName?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: Maybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  mimeType?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  size?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: Maybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedBy?: Maybe<UserWhereInput>;
  width?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: Maybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: Maybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: Maybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Author = Entity & Node & {
  __typename?: 'Author';
  /** Enter a short bio about yourself, or other authors. */
  biography?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Author>;
  /** List of Author versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Enter the display name for authors */
  name: Scalars['String'];
  /** Add a profile picture for authors */
  picture?: Maybe<Asset>;
  /** Connect blog posts to this author */
  posts: Array<Post>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** Enter the job title of the author */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type AuthorCreatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Locale>>;
};


export type AuthorDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type AuthorHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type AuthorPictureArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Locale>>;
};


export type AuthorPostsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
};


export type AuthorPublishedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Locale>>;
};


export type AuthorScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type AuthorUpdatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Locale>>;
};

export type AuthorConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: AuthorWhereUniqueInput;
};

/** A connection to a list of items. */
export type AuthorConnection = {
  __typename?: 'AuthorConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AuthorEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AuthorCreateInput = {
  biography?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  picture?: Maybe<AssetCreateOneInlineInput>;
  posts?: Maybe<PostCreateManyInlineInput>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AuthorCreateManyInlineInput = {
  /** Connect multiple existing Author documents */
  connect?: Maybe<Array<AuthorWhereUniqueInput>>;
  /** Create and connect multiple existing Author documents */
  create?: Maybe<Array<AuthorCreateInput>>;
};

export type AuthorCreateOneInlineInput = {
  /** Connect one existing Author document */
  connect?: Maybe<AuthorWhereUniqueInput>;
  /** Create and connect one Author document */
  create?: Maybe<AuthorCreateInput>;
};

/** An edge in a connection. */
export type AuthorEdge = {
  __typename?: 'AuthorEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Author;
};

/** Identifies documents */
export type AuthorManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AuthorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AuthorWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AuthorWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  biography?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  biography_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  biography_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  biography_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  biography_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  biography_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  biography_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  biography_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  biography_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  biography_starts_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdBy?: Maybe<UserWhereInput>;
  documentInStages_every?: Maybe<AuthorWhereStageInput>;
  documentInStages_none?: Maybe<AuthorWhereStageInput>;
  documentInStages_some?: Maybe<AuthorWhereStageInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  picture?: Maybe<AssetWhereInput>;
  posts_every?: Maybe<PostWhereInput>;
  posts_none?: Maybe<PostWhereInput>;
  posts_some?: Maybe<PostWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum AuthorOrderByInput {
  BiographyAsc = 'biography_ASC',
  BiographyDesc = 'biography_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type AuthorUpdateInput = {
  biography?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<AssetUpdateOneInlineInput>;
  posts?: Maybe<PostUpdateManyInlineInput>;
  title?: Maybe<Scalars['String']>;
};

export type AuthorUpdateManyInlineInput = {
  /** Connect multiple existing Author documents */
  connect?: Maybe<Array<AuthorConnectInput>>;
  /** Create and connect multiple Author documents */
  create?: Maybe<Array<AuthorCreateInput>>;
  /** Delete multiple Author documents */
  delete?: Maybe<Array<AuthorWhereUniqueInput>>;
  /** Disconnect multiple Author documents */
  disconnect?: Maybe<Array<AuthorWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Author documents */
  set?: Maybe<Array<AuthorWhereUniqueInput>>;
  /** Update multiple Author documents */
  update?: Maybe<Array<AuthorUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Author documents */
  upsert?: Maybe<Array<AuthorUpsertWithNestedWhereUniqueInput>>;
};

export type AuthorUpdateManyInput = {
  biography?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type AuthorUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AuthorUpdateManyInput;
  /** Document search */
  where: AuthorWhereInput;
};

export type AuthorUpdateOneInlineInput = {
  /** Connect existing Author document */
  connect?: Maybe<AuthorWhereUniqueInput>;
  /** Create and connect one Author document */
  create?: Maybe<AuthorCreateInput>;
  /** Delete currently connected Author document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Author document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Author document */
  update?: Maybe<AuthorUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Author document */
  upsert?: Maybe<AuthorUpsertWithNestedWhereUniqueInput>;
};

export type AuthorUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AuthorUpdateInput;
  /** Unique document search */
  where: AuthorWhereUniqueInput;
};

export type AuthorUpsertInput = {
  /** Create document if it didn't exist */
  create: AuthorCreateInput;
  /** Update document if it exists */
  update: AuthorUpdateInput;
};

export type AuthorUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AuthorUpsertInput;
  /** Unique document search */
  where: AuthorWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AuthorWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type AuthorWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AuthorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AuthorWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AuthorWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  biography?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  biography_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  biography_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  biography_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  biography_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  biography_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  biography_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  biography_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  biography_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  biography_starts_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdBy?: Maybe<UserWhereInput>;
  documentInStages_every?: Maybe<AuthorWhereStageInput>;
  documentInStages_none?: Maybe<AuthorWhereStageInput>;
  documentInStages_some?: Maybe<AuthorWhereStageInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  picture?: Maybe<AssetWhereInput>;
  posts_every?: Maybe<PostWhereInput>;
  posts_none?: Maybe<PostWhereInput>;
  posts_some?: Maybe<PostWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AuthorWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AuthorWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AuthorWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AuthorWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: Maybe<AuthorWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: Maybe<Stage>;
};

/** References Author record uniquely */
export type AuthorWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

export type Category = Entity & Node & {
  __typename?: 'Category';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Category>;
  /** List of Category versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars['String'];
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type CategoryCreatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Locale>>;
};


export type CategoryDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type CategoryHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type CategoryPublishedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Locale>>;
};


export type CategoryScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type CategoryUpdatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Locale>>;
};

export type CategoryConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: CategoryWhereUniqueInput;
};

/** A connection to a list of items. */
export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CategoryEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CategoryCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryCreateManyInlineInput = {
  /** Connect multiple existing Category documents */
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
  /** Create and connect multiple existing Category documents */
  create?: Maybe<Array<CategoryCreateInput>>;
};

export type CategoryCreateOneInlineInput = {
  /** Connect one existing Category document */
  connect?: Maybe<CategoryWhereUniqueInput>;
  /** Create and connect one Category document */
  create?: Maybe<CategoryCreateInput>;
};

/** An edge in a connection. */
export type CategoryEdge = {
  __typename?: 'CategoryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Category;
};

/** Identifies documents */
export type CategoryManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdBy?: Maybe<UserWhereInput>;
  documentInStages_every?: Maybe<CategoryWhereStageInput>;
  documentInStages_none?: Maybe<CategoryWhereStageInput>;
  documentInStages_some?: Maybe<CategoryWhereStageInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  slug?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum CategoryOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CategoryUpdateInput = {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type CategoryUpdateManyInlineInput = {
  /** Connect multiple existing Category documents */
  connect?: Maybe<Array<CategoryConnectInput>>;
  /** Create and connect multiple Category documents */
  create?: Maybe<Array<CategoryCreateInput>>;
  /** Delete multiple Category documents */
  delete?: Maybe<Array<CategoryWhereUniqueInput>>;
  /** Disconnect multiple Category documents */
  disconnect?: Maybe<Array<CategoryWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Category documents */
  set?: Maybe<Array<CategoryWhereUniqueInput>>;
  /** Update multiple Category documents */
  update?: Maybe<Array<CategoryUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Category documents */
  upsert?: Maybe<Array<CategoryUpsertWithNestedWhereUniqueInput>>;
};

export type CategoryUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: Maybe<Scalars['String']>;
};

export type CategoryUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CategoryUpdateManyInput;
  /** Document search */
  where: CategoryWhereInput;
};

export type CategoryUpdateOneInlineInput = {
  /** Connect existing Category document */
  connect?: Maybe<CategoryWhereUniqueInput>;
  /** Create and connect one Category document */
  create?: Maybe<CategoryCreateInput>;
  /** Delete currently connected Category document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Category document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Category document */
  update?: Maybe<CategoryUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Category document */
  upsert?: Maybe<CategoryUpsertWithNestedWhereUniqueInput>;
};

export type CategoryUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CategoryUpdateInput;
  /** Unique document search */
  where: CategoryWhereUniqueInput;
};

export type CategoryUpsertInput = {
  /** Create document if it didn't exist */
  create: CategoryCreateInput;
  /** Update document if it exists */
  update: CategoryUpdateInput;
};

export type CategoryUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CategoryUpsertInput;
  /** Unique document search */
  where: CategoryWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type CategoryWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type CategoryWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdBy?: Maybe<UserWhereInput>;
  documentInStages_every?: Maybe<CategoryWhereStageInput>;
  documentInStages_none?: Maybe<CategoryWhereStageInput>;
  documentInStages_some?: Maybe<CategoryWhereStageInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  slug?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CategoryWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CategoryWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CategoryWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CategoryWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: Maybe<CategoryWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: Maybe<Stage>;
};

/** References Category record uniquely */
export type CategoryWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars['Hex']>;
  rgba?: Maybe<RgbaInput>;
};

export type Comment = Entity & Node & {
  __typename?: 'Comment';
  comment: Scalars['String'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Comment>;
  email: Scalars['String'];
  /** List of Comment versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type CommentCreatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Locale>>;
};


export type CommentDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type CommentHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type CommentPublishedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Locale>>;
};


export type CommentScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type CommentUpdatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Locale>>;
};

export type CommentConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: CommentWhereUniqueInput;
};

/** A connection to a list of items. */
export type CommentConnection = {
  __typename?: 'CommentConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CommentEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CommentCreateInput = {
  comment: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentCreateManyInlineInput = {
  /** Connect multiple existing Comment documents */
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  /** Create and connect multiple existing Comment documents */
  create?: Maybe<Array<CommentCreateInput>>;
};

export type CommentCreateOneInlineInput = {
  /** Connect one existing Comment document */
  connect?: Maybe<CommentWhereUniqueInput>;
  /** Create and connect one Comment document */
  create?: Maybe<CommentCreateInput>;
};

/** An edge in a connection. */
export type CommentEdge = {
  __typename?: 'CommentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Comment;
};

/** Identifies documents */
export type CommentManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CommentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CommentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CommentWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  comment_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  comment_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  comment_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  comment_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  comment_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  comment_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  comment_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  comment_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  comment_starts_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdBy?: Maybe<UserWhereInput>;
  documentInStages_every?: Maybe<CommentWhereStageInput>;
  documentInStages_none?: Maybe<CommentWhereStageInput>;
  documentInStages_some?: Maybe<CommentWhereStageInput>;
  email?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum CommentOrderByInput {
  CommentAsc = 'comment_ASC',
  CommentDesc = 'comment_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CommentUpdateInput = {
  comment?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CommentUpdateManyInlineInput = {
  /** Connect multiple existing Comment documents */
  connect?: Maybe<Array<CommentConnectInput>>;
  /** Create and connect multiple Comment documents */
  create?: Maybe<Array<CommentCreateInput>>;
  /** Delete multiple Comment documents */
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  /** Disconnect multiple Comment documents */
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Comment documents */
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  /** Update multiple Comment documents */
  update?: Maybe<Array<CommentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Comment documents */
  upsert?: Maybe<Array<CommentUpsertWithNestedWhereUniqueInput>>;
};

export type CommentUpdateManyInput = {
  comment?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CommentUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CommentUpdateManyInput;
  /** Document search */
  where: CommentWhereInput;
};

export type CommentUpdateOneInlineInput = {
  /** Connect existing Comment document */
  connect?: Maybe<CommentWhereUniqueInput>;
  /** Create and connect one Comment document */
  create?: Maybe<CommentCreateInput>;
  /** Delete currently connected Comment document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Comment document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Comment document */
  update?: Maybe<CommentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Comment document */
  upsert?: Maybe<CommentUpsertWithNestedWhereUniqueInput>;
};

export type CommentUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CommentUpdateInput;
  /** Unique document search */
  where: CommentWhereUniqueInput;
};

export type CommentUpsertInput = {
  /** Create document if it didn't exist */
  create: CommentCreateInput;
  /** Update document if it exists */
  update: CommentUpdateInput;
};

export type CommentUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CommentUpsertInput;
  /** Unique document search */
  where: CommentWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type CommentWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type CommentWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CommentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CommentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CommentWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  comment_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  comment_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  comment_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  comment_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  comment_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  comment_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  comment_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  comment_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  comment_starts_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdBy?: Maybe<UserWhereInput>;
  documentInStages_every?: Maybe<CommentWhereStageInput>;
  documentInStages_none?: Maybe<CommentWhereStageInput>;
  documentInStages_some?: Maybe<CommentWhereStageInput>;
  email?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CommentWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CommentWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CommentWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CommentWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: Maybe<CommentWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: Maybe<Stage>;
};

/** References Comment record uniquely */
export type CommentWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: Maybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: Maybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: Maybe<Scalars['Boolean']>;
};



export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

/** An object with an ID */
export type Entity = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** This enumeration holds all typenames that implement the Entity interface. Components and models implement the Entity interface. */
export enum EntityTypeName {
  /** Asset system model */
  Asset = 'Asset',
  Author = 'Author',
  Category = 'Category',
  Comment = 'Comment',
  Link = 'Link',
  Navigation = 'Navigation',
  Page = 'Page',
  Post = 'Post',
  /** Scheduled Operation system model */
  ScheduledOperation = 'ScheduledOperation',
  /** Scheduled Release system model */
  ScheduledRelease = 'ScheduledRelease',
  SeoOverride = 'SeoOverride',
  /** User system model */
  User = 'User'
}

/** Allows to specify input to query models and components directly */
export type EntityWhereInput = {
  /** The ID of an object */
  id: Scalars['ID'];
  locale?: Maybe<Locale>;
  stage: Stage;
  /** The Type name of an object */
  typename: EntityTypeName;
};


export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>;
};


export type Link = Entity & {
  __typename?: 'Link';
  displayText?: Maybe<Scalars['String']>;
  externalUrl?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  page?: Maybe<LinkPage>;
  /** System stage field */
  stage: Stage;
};


export type LinkPageArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Locale>>;
};

export type LinkConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: LinkWhereUniqueInput;
};

/** A connection to a list of items. */
export type LinkConnection = {
  __typename?: 'LinkConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<LinkEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type LinkCreateInput = {
  displayText?: Maybe<Scalars['String']>;
  externalUrl?: Maybe<Scalars['String']>;
  page?: Maybe<LinkPageCreateOneInlineInput>;
};

export type LinkCreateManyInlineInput = {
  /** Create and connect multiple existing Link documents */
  create?: Maybe<Array<LinkCreateInput>>;
};

export type LinkCreateOneInlineInput = {
  /** Create and connect one Link document */
  create?: Maybe<LinkCreateInput>;
};

export type LinkCreateWithPositionInput = {
  /** Document to create */
  data: LinkCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type LinkEdge = {
  __typename?: 'LinkEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Link;
};

/** Identifies documents */
export type LinkManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<LinkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<LinkWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<LinkWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  displayText?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  displayText_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  displayText_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  displayText_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  displayText_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  displayText_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  displayText_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  displayText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  displayText_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  displayText_starts_with?: Maybe<Scalars['String']>;
  externalUrl?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  externalUrl_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  externalUrl_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  externalUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  externalUrl_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  externalUrl_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  externalUrl_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  externalUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  externalUrl_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  externalUrl_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values in which the union is connected to the given models */
  page?: Maybe<LinkPageWhereInput>;
  /** All values in which the union is empty */
  page_empty?: Maybe<Scalars['Boolean']>;
};

export enum LinkOrderByInput {
  DisplayTextAsc = 'displayText_ASC',
  DisplayTextDesc = 'displayText_DESC',
  ExternalUrlAsc = 'externalUrl_ASC',
  ExternalUrlDesc = 'externalUrl_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type LinkPage = Author | Page | Post;

export type LinkPageConnectInput = {
  Author?: Maybe<AuthorConnectInput>;
  Page?: Maybe<PageConnectInput>;
  Post?: Maybe<PostConnectInput>;
};

export type LinkPageCreateInput = {
  Author?: Maybe<AuthorCreateInput>;
  Page?: Maybe<PageCreateInput>;
  Post?: Maybe<PostCreateInput>;
};

export type LinkPageCreateManyInlineInput = {
  /** Connect multiple existing LinkPage documents */
  connect?: Maybe<Array<LinkPageWhereUniqueInput>>;
  /** Create and connect multiple existing LinkPage documents */
  create?: Maybe<Array<LinkPageCreateInput>>;
};

export type LinkPageCreateOneInlineInput = {
  /** Connect one existing LinkPage document */
  connect?: Maybe<LinkPageWhereUniqueInput>;
  /** Create and connect one LinkPage document */
  create?: Maybe<LinkPageCreateInput>;
};

export type LinkPageUpdateInput = {
  Author?: Maybe<AuthorUpdateInput>;
  Page?: Maybe<PageUpdateInput>;
  Post?: Maybe<PostUpdateInput>;
};

export type LinkPageUpdateManyInlineInput = {
  /** Connect multiple existing LinkPage documents */
  connect?: Maybe<Array<LinkPageConnectInput>>;
  /** Create and connect multiple LinkPage documents */
  create?: Maybe<Array<LinkPageCreateInput>>;
  /** Delete multiple LinkPage documents */
  delete?: Maybe<Array<LinkPageWhereUniqueInput>>;
  /** Disconnect multiple LinkPage documents */
  disconnect?: Maybe<Array<LinkPageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing LinkPage documents */
  set?: Maybe<Array<LinkPageWhereUniqueInput>>;
  /** Update multiple LinkPage documents */
  update?: Maybe<Array<LinkPageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple LinkPage documents */
  upsert?: Maybe<Array<LinkPageUpsertWithNestedWhereUniqueInput>>;
};

export type LinkPageUpdateManyWithNestedWhereInput = {
  Author?: Maybe<AuthorUpdateManyWithNestedWhereInput>;
  Page?: Maybe<PageUpdateManyWithNestedWhereInput>;
  Post?: Maybe<PostUpdateManyWithNestedWhereInput>;
};

export type LinkPageUpdateOneInlineInput = {
  /** Connect existing LinkPage document */
  connect?: Maybe<LinkPageWhereUniqueInput>;
  /** Create and connect one LinkPage document */
  create?: Maybe<LinkPageCreateInput>;
  /** Delete currently connected LinkPage document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected LinkPage document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single LinkPage document */
  update?: Maybe<LinkPageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single LinkPage document */
  upsert?: Maybe<LinkPageUpsertWithNestedWhereUniqueInput>;
};

export type LinkPageUpdateWithNestedWhereUniqueInput = {
  Author?: Maybe<AuthorUpdateWithNestedWhereUniqueInput>;
  Page?: Maybe<PageUpdateWithNestedWhereUniqueInput>;
  Post?: Maybe<PostUpdateWithNestedWhereUniqueInput>;
};

export type LinkPageUpsertWithNestedWhereUniqueInput = {
  Author?: Maybe<AuthorUpsertWithNestedWhereUniqueInput>;
  Page?: Maybe<PageUpsertWithNestedWhereUniqueInput>;
  Post?: Maybe<PostUpsertWithNestedWhereUniqueInput>;
};

export type LinkPageWhereInput = {
  Author?: Maybe<AuthorWhereInput>;
  Page?: Maybe<PageWhereInput>;
  Post?: Maybe<PostWhereInput>;
};

export type LinkPageWhereUniqueInput = {
  Author?: Maybe<AuthorWhereUniqueInput>;
  Page?: Maybe<PageWhereUniqueInput>;
  Post?: Maybe<PostWhereUniqueInput>;
};

export type LinkParent = Navigation;

export type LinkParentConnectInput = {
  Navigation?: Maybe<NavigationConnectInput>;
};

export type LinkParentCreateInput = {
  Navigation?: Maybe<NavigationCreateInput>;
};

export type LinkParentCreateManyInlineInput = {
  /** Connect multiple existing LinkParent documents */
  connect?: Maybe<Array<LinkParentWhereUniqueInput>>;
  /** Create and connect multiple existing LinkParent documents */
  create?: Maybe<Array<LinkParentCreateInput>>;
};

export type LinkParentCreateOneInlineInput = {
  /** Connect one existing LinkParent document */
  connect?: Maybe<LinkParentWhereUniqueInput>;
  /** Create and connect one LinkParent document */
  create?: Maybe<LinkParentCreateInput>;
};

export type LinkParentUpdateInput = {
  Navigation?: Maybe<NavigationUpdateInput>;
};

export type LinkParentUpdateManyInlineInput = {
  /** Connect multiple existing LinkParent documents */
  connect?: Maybe<Array<LinkParentConnectInput>>;
  /** Create and connect multiple LinkParent documents */
  create?: Maybe<Array<LinkParentCreateInput>>;
  /** Delete multiple LinkParent documents */
  delete?: Maybe<Array<LinkParentWhereUniqueInput>>;
  /** Disconnect multiple LinkParent documents */
  disconnect?: Maybe<Array<LinkParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing LinkParent documents */
  set?: Maybe<Array<LinkParentWhereUniqueInput>>;
  /** Update multiple LinkParent documents */
  update?: Maybe<Array<LinkParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple LinkParent documents */
  upsert?: Maybe<Array<LinkParentUpsertWithNestedWhereUniqueInput>>;
};

export type LinkParentUpdateManyWithNestedWhereInput = {
  Navigation?: Maybe<NavigationUpdateManyWithNestedWhereInput>;
};

export type LinkParentUpdateOneInlineInput = {
  /** Connect existing LinkParent document */
  connect?: Maybe<LinkParentWhereUniqueInput>;
  /** Create and connect one LinkParent document */
  create?: Maybe<LinkParentCreateInput>;
  /** Delete currently connected LinkParent document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected LinkParent document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single LinkParent document */
  update?: Maybe<LinkParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single LinkParent document */
  upsert?: Maybe<LinkParentUpsertWithNestedWhereUniqueInput>;
};

export type LinkParentUpdateWithNestedWhereUniqueInput = {
  Navigation?: Maybe<NavigationUpdateWithNestedWhereUniqueInput>;
};

export type LinkParentUpsertWithNestedWhereUniqueInput = {
  Navigation?: Maybe<NavigationUpsertWithNestedWhereUniqueInput>;
};

export type LinkParentWhereInput = {
  Navigation?: Maybe<NavigationWhereInput>;
};

export type LinkParentWhereUniqueInput = {
  Navigation?: Maybe<NavigationWhereUniqueInput>;
};

export type LinkUpdateInput = {
  displayText?: Maybe<Scalars['String']>;
  externalUrl?: Maybe<Scalars['String']>;
  page?: Maybe<LinkPageUpdateOneInlineInput>;
};

export type LinkUpdateManyInlineInput = {
  /** Create and connect multiple Link component instances */
  create?: Maybe<Array<LinkCreateWithPositionInput>>;
  /** Delete multiple Link documents */
  delete?: Maybe<Array<LinkWhereUniqueInput>>;
  /** Update multiple Link component instances */
  update?: Maybe<Array<LinkUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Link component instances */
  upsert?: Maybe<Array<LinkUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type LinkUpdateManyInput = {
  displayText?: Maybe<Scalars['String']>;
};

export type LinkUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: LinkUpdateManyInput;
  /** Document search */
  where: LinkWhereInput;
};

export type LinkUpdateOneInlineInput = {
  /** Create and connect one Link document */
  create?: Maybe<LinkCreateInput>;
  /** Delete currently connected Link document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Update single Link document */
  update?: Maybe<LinkUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Link document */
  upsert?: Maybe<LinkUpsertWithNestedWhereUniqueInput>;
};

export type LinkUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: Maybe<LinkUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: LinkWhereUniqueInput;
};

export type LinkUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: LinkUpdateInput;
  /** Unique document search */
  where: LinkWhereUniqueInput;
};

export type LinkUpsertInput = {
  /** Create document if it didn't exist */
  create: LinkCreateInput;
  /** Update document if it exists */
  update: LinkUpdateInput;
};

export type LinkUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: Maybe<LinkUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: LinkWhereUniqueInput;
};

export type LinkUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: LinkUpsertInput;
  /** Unique document search */
  where: LinkWhereUniqueInput;
};

/** Identifies documents */
export type LinkWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<LinkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<LinkWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<LinkWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  displayText?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  displayText_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  displayText_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  displayText_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  displayText_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  displayText_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  displayText_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  displayText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  displayText_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  displayText_starts_with?: Maybe<Scalars['String']>;
  externalUrl?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  externalUrl_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  externalUrl_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  externalUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  externalUrl_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  externalUrl_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  externalUrl_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  externalUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  externalUrl_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  externalUrl_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values in which the union is connected to the given models */
  page?: Maybe<LinkPageWhereInput>;
  /** All values in which the union is empty */
  page_empty?: Maybe<Scalars['Boolean']>;
};

/** References Link record uniquely */
export type LinkWhereUniqueInput = {
  externalUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one author */
  createAuthor?: Maybe<Author>;
  /** Create one category */
  createCategory?: Maybe<Category>;
  /** Create one comment */
  createComment?: Maybe<Comment>;
  /** Create one navigation */
  createNavigation?: Maybe<Navigation>;
  /** Create one page */
  createPage?: Maybe<Page>;
  /** Create one post */
  createPost?: Maybe<Post>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one author from _all_ existing stages. Returns deleted document. */
  deleteAuthor?: Maybe<Author>;
  /** Delete one category from _all_ existing stages. Returns deleted document. */
  deleteCategory?: Maybe<Category>;
  /** Delete one comment from _all_ existing stages. Returns deleted document. */
  deleteComment?: Maybe<Comment>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Author documents
   * @deprecated Please use the new paginated many mutation (deleteManyAuthorsConnection)
   */
  deleteManyAuthors: BatchPayload;
  /** Delete many Author documents, return deleted documents */
  deleteManyAuthorsConnection: AuthorConnection;
  /**
   * Delete many Category documents
   * @deprecated Please use the new paginated many mutation (deleteManyCategoriesConnection)
   */
  deleteManyCategories: BatchPayload;
  /** Delete many Category documents, return deleted documents */
  deleteManyCategoriesConnection: CategoryConnection;
  /**
   * Delete many Comment documents
   * @deprecated Please use the new paginated many mutation (deleteManyCommentsConnection)
   */
  deleteManyComments: BatchPayload;
  /** Delete many Comment documents, return deleted documents */
  deleteManyCommentsConnection: CommentConnection;
  /**
   * Delete many Navigation documents
   * @deprecated Please use the new paginated many mutation (deleteManyNavigationsConnection)
   */
  deleteManyNavigations: BatchPayload;
  /** Delete many Navigation documents, return deleted documents */
  deleteManyNavigationsConnection: NavigationConnection;
  /**
   * Delete many Page documents
   * @deprecated Please use the new paginated many mutation (deleteManyPagesConnection)
   */
  deleteManyPages: BatchPayload;
  /** Delete many Page documents, return deleted documents */
  deleteManyPagesConnection: PageConnection;
  /**
   * Delete many Post documents
   * @deprecated Please use the new paginated many mutation (deleteManyPostsConnection)
   */
  deleteManyPosts: BatchPayload;
  /** Delete many Post documents, return deleted documents */
  deleteManyPostsConnection: PostConnection;
  /** Delete one navigation from _all_ existing stages. Returns deleted document. */
  deleteNavigation?: Maybe<Navigation>;
  /** Delete one page from _all_ existing stages. Returns deleted document. */
  deletePage?: Maybe<Page>;
  /** Delete one post from _all_ existing stages. Returns deleted document. */
  deletePost?: Maybe<Post>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one author */
  publishAuthor?: Maybe<Author>;
  /** Publish one category */
  publishCategory?: Maybe<Category>;
  /** Publish one comment */
  publishComment?: Maybe<Comment>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Author documents
   * @deprecated Please use the new paginated many mutation (publishManyAuthorsConnection)
   */
  publishManyAuthors: BatchPayload;
  /** Publish many Author documents */
  publishManyAuthorsConnection: AuthorConnection;
  /**
   * Publish many Category documents
   * @deprecated Please use the new paginated many mutation (publishManyCategoriesConnection)
   */
  publishManyCategories: BatchPayload;
  /** Publish many Category documents */
  publishManyCategoriesConnection: CategoryConnection;
  /**
   * Publish many Comment documents
   * @deprecated Please use the new paginated many mutation (publishManyCommentsConnection)
   */
  publishManyComments: BatchPayload;
  /** Publish many Comment documents */
  publishManyCommentsConnection: CommentConnection;
  /**
   * Publish many Navigation documents
   * @deprecated Please use the new paginated many mutation (publishManyNavigationsConnection)
   */
  publishManyNavigations: BatchPayload;
  /** Publish many Navigation documents */
  publishManyNavigationsConnection: NavigationConnection;
  /**
   * Publish many Page documents
   * @deprecated Please use the new paginated many mutation (publishManyPagesConnection)
   */
  publishManyPages: BatchPayload;
  /** Publish many Page documents */
  publishManyPagesConnection: PageConnection;
  /**
   * Publish many Post documents
   * @deprecated Please use the new paginated many mutation (publishManyPostsConnection)
   */
  publishManyPosts: BatchPayload;
  /** Publish many Post documents */
  publishManyPostsConnection: PostConnection;
  /** Publish one navigation */
  publishNavigation?: Maybe<Navigation>;
  /** Publish one page */
  publishPage?: Maybe<Page>;
  /** Publish one post */
  publishPost?: Maybe<Post>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one author */
  schedulePublishAuthor?: Maybe<Author>;
  /** Schedule to publish one category */
  schedulePublishCategory?: Maybe<Category>;
  /** Schedule to publish one comment */
  schedulePublishComment?: Maybe<Comment>;
  /** Schedule to publish one navigation */
  schedulePublishNavigation?: Maybe<Navigation>;
  /** Schedule to publish one page */
  schedulePublishPage?: Maybe<Page>;
  /** Schedule to publish one post */
  schedulePublishPost?: Maybe<Post>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one author from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAuthor?: Maybe<Author>;
  /** Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCategory?: Maybe<Category>;
  /** Unpublish one comment from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishComment?: Maybe<Comment>;
  /** Unpublish one navigation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishNavigation?: Maybe<Navigation>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPage?: Maybe<Page>;
  /** Unpublish one post from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPost?: Maybe<Post>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one author from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAuthor?: Maybe<Author>;
  /** Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCategory?: Maybe<Category>;
  /** Unpublish one comment from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishComment?: Maybe<Comment>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Author documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAuthorsConnection)
   */
  unpublishManyAuthors: BatchPayload;
  /** Find many Author documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAuthorsConnection: AuthorConnection;
  /**
   * Unpublish many Category documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCategoriesConnection)
   */
  unpublishManyCategories: BatchPayload;
  /** Find many Category documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCategoriesConnection: CategoryConnection;
  /**
   * Unpublish many Comment documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCommentsConnection)
   */
  unpublishManyComments: BatchPayload;
  /** Find many Comment documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCommentsConnection: CommentConnection;
  /**
   * Unpublish many Navigation documents
   * @deprecated Please use the new paginated many mutation (unpublishManyNavigationsConnection)
   */
  unpublishManyNavigations: BatchPayload;
  /** Find many Navigation documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyNavigationsConnection: NavigationConnection;
  /**
   * Unpublish many Page documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPagesConnection)
   */
  unpublishManyPages: BatchPayload;
  /** Find many Page documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPagesConnection: PageConnection;
  /**
   * Unpublish many Post documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPostsConnection)
   */
  unpublishManyPosts: BatchPayload;
  /** Find many Post documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPostsConnection: PostConnection;
  /** Unpublish one navigation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishNavigation?: Maybe<Navigation>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPage?: Maybe<Page>;
  /** Unpublish one post from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPost?: Maybe<Post>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one author */
  updateAuthor?: Maybe<Author>;
  /** Update one category */
  updateCategory?: Maybe<Category>;
  /** Update one comment */
  updateComment?: Maybe<Comment>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many authors
   * @deprecated Please use the new paginated many mutation (updateManyAuthorsConnection)
   */
  updateManyAuthors: BatchPayload;
  /** Update many Author documents */
  updateManyAuthorsConnection: AuthorConnection;
  /**
   * Update many categories
   * @deprecated Please use the new paginated many mutation (updateManyCategoriesConnection)
   */
  updateManyCategories: BatchPayload;
  /** Update many Category documents */
  updateManyCategoriesConnection: CategoryConnection;
  /**
   * Update many comments
   * @deprecated Please use the new paginated many mutation (updateManyCommentsConnection)
   */
  updateManyComments: BatchPayload;
  /** Update many Comment documents */
  updateManyCommentsConnection: CommentConnection;
  /**
   * Update many navigations
   * @deprecated Please use the new paginated many mutation (updateManyNavigationsConnection)
   */
  updateManyNavigations: BatchPayload;
  /** Update many Navigation documents */
  updateManyNavigationsConnection: NavigationConnection;
  /**
   * Update many pages
   * @deprecated Please use the new paginated many mutation (updateManyPagesConnection)
   */
  updateManyPages: BatchPayload;
  /** Update many Page documents */
  updateManyPagesConnection: PageConnection;
  /**
   * Update many posts
   * @deprecated Please use the new paginated many mutation (updateManyPostsConnection)
   */
  updateManyPosts: BatchPayload;
  /** Update many Post documents */
  updateManyPostsConnection: PostConnection;
  /** Update one navigation */
  updateNavigation?: Maybe<Navigation>;
  /** Update one page */
  updatePage?: Maybe<Page>;
  /** Update one post */
  updatePost?: Maybe<Post>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one author */
  upsertAuthor?: Maybe<Author>;
  /** Upsert one category */
  upsertCategory?: Maybe<Category>;
  /** Upsert one comment */
  upsertComment?: Maybe<Comment>;
  /** Upsert one navigation */
  upsertNavigation?: Maybe<Navigation>;
  /** Upsert one page */
  upsertPage?: Maybe<Page>;
  /** Upsert one post */
  upsertPost?: Maybe<Post>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateAuthorArgs = {
  data: AuthorCreateInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateCommentArgs = {
  data: CommentCreateInput;
};


export type MutationCreateNavigationArgs = {
  data: NavigationCreateInput;
};


export type MutationCreatePageArgs = {
  data: PageCreateInput;
};


export type MutationCreatePostArgs = {
  data: PostCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteAuthorArgs = {
  where: AuthorWhereUniqueInput;
};


export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationDeleteCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAuthorsArgs = {
  where?: Maybe<AuthorManyWhereInput>;
};


export type MutationDeleteManyAuthorsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<AuthorManyWhereInput>;
};


export type MutationDeleteManyCategoriesArgs = {
  where?: Maybe<CategoryManyWhereInput>;
};


export type MutationDeleteManyCategoriesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<CategoryManyWhereInput>;
};


export type MutationDeleteManyCommentsArgs = {
  where?: Maybe<CommentManyWhereInput>;
};


export type MutationDeleteManyCommentsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentManyWhereInput>;
};


export type MutationDeleteManyNavigationsArgs = {
  where?: Maybe<NavigationManyWhereInput>;
};


export type MutationDeleteManyNavigationsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<NavigationManyWhereInput>;
};


export type MutationDeleteManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>;
};


export type MutationDeleteManyPagesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PageManyWhereInput>;
};


export type MutationDeleteManyPostsArgs = {
  where?: Maybe<PostManyWhereInput>;
};


export type MutationDeleteManyPostsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PostManyWhereInput>;
};


export type MutationDeleteNavigationArgs = {
  where: NavigationWhereUniqueInput;
};


export type MutationDeletePageArgs = {
  where: PageWhereUniqueInput;
};


export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishAuthorArgs = {
  to?: Array<Stage>;
  where: AuthorWhereUniqueInput;
};


export type MutationPublishCategoryArgs = {
  to?: Array<Stage>;
  where: CategoryWhereUniqueInput;
};


export type MutationPublishCommentArgs = {
  to?: Array<Stage>;
  where: CommentWhereUniqueInput;
};


export type MutationPublishManyAssetsArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: Maybe<AssetManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<AssetManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyAuthorsArgs = {
  to?: Array<Stage>;
  where?: Maybe<AuthorManyWhereInput>;
};


export type MutationPublishManyAuthorsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<AuthorManyWhereInput>;
};


export type MutationPublishManyCategoriesArgs = {
  to?: Array<Stage>;
  where?: Maybe<CategoryManyWhereInput>;
};


export type MutationPublishManyCategoriesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<CategoryManyWhereInput>;
};


export type MutationPublishManyCommentsArgs = {
  to?: Array<Stage>;
  where?: Maybe<CommentManyWhereInput>;
};


export type MutationPublishManyCommentsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<CommentManyWhereInput>;
};


export type MutationPublishManyNavigationsArgs = {
  to?: Array<Stage>;
  where?: Maybe<NavigationManyWhereInput>;
};


export type MutationPublishManyNavigationsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<NavigationManyWhereInput>;
};


export type MutationPublishManyPagesArgs = {
  to?: Array<Stage>;
  where?: Maybe<PageManyWhereInput>;
};


export type MutationPublishManyPagesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<PageManyWhereInput>;
};


export type MutationPublishManyPostsArgs = {
  to?: Array<Stage>;
  where?: Maybe<PostManyWhereInput>;
};


export type MutationPublishManyPostsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<PostManyWhereInput>;
};


export type MutationPublishNavigationArgs = {
  to?: Array<Stage>;
  where: NavigationWhereUniqueInput;
};


export type MutationPublishPageArgs = {
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
};


export type MutationPublishPostArgs = {
  to?: Array<Stage>;
  where: PostWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishAuthorArgs = {
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AuthorWhereUniqueInput;
};


export type MutationSchedulePublishCategoryArgs = {
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: CategoryWhereUniqueInput;
};


export type MutationSchedulePublishCommentArgs = {
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: CommentWhereUniqueInput;
};


export type MutationSchedulePublishNavigationArgs = {
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: NavigationWhereUniqueInput;
};


export type MutationSchedulePublishPageArgs = {
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
};


export type MutationSchedulePublishPostArgs = {
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: PostWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishAuthorArgs = {
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  where: AuthorWhereUniqueInput;
};


export type MutationScheduleUnpublishCategoryArgs = {
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  where: CategoryWhereUniqueInput;
};


export type MutationScheduleUnpublishCommentArgs = {
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  where: CommentWhereUniqueInput;
};


export type MutationScheduleUnpublishNavigationArgs = {
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  where: NavigationWhereUniqueInput;
};


export type MutationScheduleUnpublishPageArgs = {
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  where: PageWhereUniqueInput;
};


export type MutationScheduleUnpublishPostArgs = {
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  where: PostWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishAuthorArgs = {
  from?: Array<Stage>;
  where: AuthorWhereUniqueInput;
};


export type MutationUnpublishCategoryArgs = {
  from?: Array<Stage>;
  where: CategoryWhereUniqueInput;
};


export type MutationUnpublishCommentArgs = {
  from?: Array<Stage>;
  where: CommentWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAuthorsArgs = {
  from?: Array<Stage>;
  where?: Maybe<AuthorManyWhereInput>;
};


export type MutationUnpublishManyAuthorsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<AuthorManyWhereInput>;
};


export type MutationUnpublishManyCategoriesArgs = {
  from?: Array<Stage>;
  where?: Maybe<CategoryManyWhereInput>;
};


export type MutationUnpublishManyCategoriesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<CategoryManyWhereInput>;
};


export type MutationUnpublishManyCommentsArgs = {
  from?: Array<Stage>;
  where?: Maybe<CommentManyWhereInput>;
};


export type MutationUnpublishManyCommentsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<CommentManyWhereInput>;
};


export type MutationUnpublishManyNavigationsArgs = {
  from?: Array<Stage>;
  where?: Maybe<NavigationManyWhereInput>;
};


export type MutationUnpublishManyNavigationsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<NavigationManyWhereInput>;
};


export type MutationUnpublishManyPagesArgs = {
  from?: Array<Stage>;
  where?: Maybe<PageManyWhereInput>;
};


export type MutationUnpublishManyPagesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<PageManyWhereInput>;
};


export type MutationUnpublishManyPostsArgs = {
  from?: Array<Stage>;
  where?: Maybe<PostManyWhereInput>;
};


export type MutationUnpublishManyPostsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<PostManyWhereInput>;
};


export type MutationUnpublishNavigationArgs = {
  from?: Array<Stage>;
  where: NavigationWhereUniqueInput;
};


export type MutationUnpublishPageArgs = {
  from?: Array<Stage>;
  where: PageWhereUniqueInput;
};


export type MutationUnpublishPostArgs = {
  from?: Array<Stage>;
  where: PostWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateAuthorArgs = {
  data: AuthorUpdateInput;
  where: AuthorWhereUniqueInput;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateCommentArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAuthorsArgs = {
  data: AuthorUpdateManyInput;
  where?: Maybe<AuthorManyWhereInput>;
};


export type MutationUpdateManyAuthorsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: AuthorUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<AuthorManyWhereInput>;
};


export type MutationUpdateManyCategoriesArgs = {
  data: CategoryUpdateManyInput;
  where?: Maybe<CategoryManyWhereInput>;
};


export type MutationUpdateManyCategoriesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: CategoryUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<CategoryManyWhereInput>;
};


export type MutationUpdateManyCommentsArgs = {
  data: CommentUpdateManyInput;
  where?: Maybe<CommentManyWhereInput>;
};


export type MutationUpdateManyCommentsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: CommentUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentManyWhereInput>;
};


export type MutationUpdateManyNavigationsArgs = {
  data: NavigationUpdateManyInput;
  where?: Maybe<NavigationManyWhereInput>;
};


export type MutationUpdateManyNavigationsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: NavigationUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<NavigationManyWhereInput>;
};


export type MutationUpdateManyPagesArgs = {
  data: PageUpdateManyInput;
  where?: Maybe<PageManyWhereInput>;
};


export type MutationUpdateManyPagesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: PageUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PageManyWhereInput>;
};


export type MutationUpdateManyPostsArgs = {
  data: PostUpdateManyInput;
  where?: Maybe<PostManyWhereInput>;
};


export type MutationUpdateManyPostsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: PostUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PostManyWhereInput>;
};


export type MutationUpdateNavigationArgs = {
  data: NavigationUpdateInput;
  where: NavigationWhereUniqueInput;
};


export type MutationUpdatePageArgs = {
  data: PageUpdateInput;
  where: PageWhereUniqueInput;
};


export type MutationUpdatePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertAuthorArgs = {
  upsert: AuthorUpsertInput;
  where: AuthorWhereUniqueInput;
};


export type MutationUpsertCategoryArgs = {
  upsert: CategoryUpsertInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpsertCommentArgs = {
  upsert: CommentUpsertInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpsertNavigationArgs = {
  upsert: NavigationUpsertInput;
  where: NavigationWhereUniqueInput;
};


export type MutationUpsertPageArgs = {
  upsert: PageUpsertInput;
  where: PageWhereUniqueInput;
};


export type MutationUpsertPostArgs = {
  upsert: PostUpsertInput;
  where: PostWhereUniqueInput;
};

export type Navigation = Entity & Node & {
  __typename?: 'Navigation';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Navigation>;
  /** List of Navigation versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  link: Array<Link>;
  navId?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type NavigationCreatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Locale>>;
};


export type NavigationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type NavigationHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type NavigationLinkArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<LinkOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<LinkWhereInput>;
};


export type NavigationPublishedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Locale>>;
};


export type NavigationScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type NavigationUpdatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Locale>>;
};

export type NavigationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: NavigationWhereUniqueInput;
};

/** A connection to a list of items. */
export type NavigationConnection = {
  __typename?: 'NavigationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<NavigationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type NavigationCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  link?: Maybe<LinkCreateManyInlineInput>;
  navId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NavigationCreateManyInlineInput = {
  /** Connect multiple existing Navigation documents */
  connect?: Maybe<Array<NavigationWhereUniqueInput>>;
  /** Create and connect multiple existing Navigation documents */
  create?: Maybe<Array<NavigationCreateInput>>;
};

export type NavigationCreateOneInlineInput = {
  /** Connect one existing Navigation document */
  connect?: Maybe<NavigationWhereUniqueInput>;
  /** Create and connect one Navigation document */
  create?: Maybe<NavigationCreateInput>;
};

/** An edge in a connection. */
export type NavigationEdge = {
  __typename?: 'NavigationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Navigation;
};

/** Identifies documents */
export type NavigationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<NavigationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<NavigationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<NavigationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdBy?: Maybe<UserWhereInput>;
  documentInStages_every?: Maybe<NavigationWhereStageInput>;
  documentInStages_none?: Maybe<NavigationWhereStageInput>;
  documentInStages_some?: Maybe<NavigationWhereStageInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  link_every?: Maybe<LinkWhereInput>;
  link_none?: Maybe<LinkWhereInput>;
  link_some?: Maybe<LinkWhereInput>;
  navId?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  navId_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  navId_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  navId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  navId_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  navId_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  navId_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  navId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  navId_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  navId_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum NavigationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NavIdAsc = 'navId_ASC',
  NavIdDesc = 'navId_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type NavigationUpdateInput = {
  link?: Maybe<LinkUpdateManyInlineInput>;
  navId?: Maybe<Scalars['String']>;
};

export type NavigationUpdateManyInlineInput = {
  /** Connect multiple existing Navigation documents */
  connect?: Maybe<Array<NavigationConnectInput>>;
  /** Create and connect multiple Navigation documents */
  create?: Maybe<Array<NavigationCreateInput>>;
  /** Delete multiple Navigation documents */
  delete?: Maybe<Array<NavigationWhereUniqueInput>>;
  /** Disconnect multiple Navigation documents */
  disconnect?: Maybe<Array<NavigationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Navigation documents */
  set?: Maybe<Array<NavigationWhereUniqueInput>>;
  /** Update multiple Navigation documents */
  update?: Maybe<Array<NavigationUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Navigation documents */
  upsert?: Maybe<Array<NavigationUpsertWithNestedWhereUniqueInput>>;
};

export type NavigationUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: Maybe<Scalars['String']>;
};

export type NavigationUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: NavigationUpdateManyInput;
  /** Document search */
  where: NavigationWhereInput;
};

export type NavigationUpdateOneInlineInput = {
  /** Connect existing Navigation document */
  connect?: Maybe<NavigationWhereUniqueInput>;
  /** Create and connect one Navigation document */
  create?: Maybe<NavigationCreateInput>;
  /** Delete currently connected Navigation document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Navigation document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Navigation document */
  update?: Maybe<NavigationUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Navigation document */
  upsert?: Maybe<NavigationUpsertWithNestedWhereUniqueInput>;
};

export type NavigationUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: NavigationUpdateInput;
  /** Unique document search */
  where: NavigationWhereUniqueInput;
};

export type NavigationUpsertInput = {
  /** Create document if it didn't exist */
  create: NavigationCreateInput;
  /** Update document if it exists */
  update: NavigationUpdateInput;
};

export type NavigationUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: NavigationUpsertInput;
  /** Unique document search */
  where: NavigationWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type NavigationWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type NavigationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<NavigationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<NavigationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<NavigationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdBy?: Maybe<UserWhereInput>;
  documentInStages_every?: Maybe<NavigationWhereStageInput>;
  documentInStages_none?: Maybe<NavigationWhereStageInput>;
  documentInStages_some?: Maybe<NavigationWhereStageInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  link_every?: Maybe<LinkWhereInput>;
  link_none?: Maybe<LinkWhereInput>;
  link_some?: Maybe<LinkWhereInput>;
  navId?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  navId_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  navId_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  navId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  navId_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  navId_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  navId_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  navId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  navId_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  navId_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type NavigationWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<NavigationWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<NavigationWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<NavigationWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: Maybe<NavigationWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: Maybe<Stage>;
};

/** References Navigation record uniquely */
export type NavigationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  navId?: Maybe<Scalars['String']>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

export type Page = Entity & Node & {
  __typename?: 'Page';
  /** Enter the content for this page. The content uses the rich-text editor, giving you a better visual representation. */
  content: RichText;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Page>;
  /** List of Page versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  seoOverride?: Maybe<SeoOverride>;
  /** Enter the slug for this page, such as about, blog, or contact */
  slug: Scalars['String'];
  /** System stage field */
  stage: Stage;
  /** Enter a short description to be used as a subtitle */
  subtitle?: Maybe<Scalars['String']>;
  /** What is the title of your page? */
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PageCreatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Locale>>;
};


export type PageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type PageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type PagePublishedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Locale>>;
};


export type PageScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type PageSeoOverrideArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Locale>>;
};


export type PageUpdatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Locale>>;
};

export type PageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: PageWhereUniqueInput;
};

/** A connection to a list of items. */
export type PageConnection = {
  __typename?: 'PageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PageCreateInput = {
  content: Scalars['RichTextAST'];
  createdAt?: Maybe<Scalars['DateTime']>;
  seoOverride?: Maybe<SeoOverrideCreateOneInlineInput>;
  slug: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PageCreateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: Maybe<Array<PageWhereUniqueInput>>;
  /** Create and connect multiple existing Page documents */
  create?: Maybe<Array<PageCreateInput>>;
};

export type PageCreateOneInlineInput = {
  /** Connect one existing Page document */
  connect?: Maybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: Maybe<PageCreateInput>;
};

/** An edge in a connection. */
export type PageEdge = {
  __typename?: 'PageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Page;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Identifies documents */
export type PageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdBy?: Maybe<UserWhereInput>;
  documentInStages_every?: Maybe<PageWhereStageInput>;
  documentInStages_none?: Maybe<PageWhereStageInput>;
  documentInStages_some?: Maybe<PageWhereStageInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  seoOverride?: Maybe<SeoOverrideWhereInput>;
  slug?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  subtitle_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subtitle_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum PageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PageUpdateInput = {
  content?: Maybe<Scalars['RichTextAST']>;
  seoOverride?: Maybe<SeoOverrideUpdateOneInlineInput>;
  slug?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PageUpdateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: Maybe<Array<PageConnectInput>>;
  /** Create and connect multiple Page documents */
  create?: Maybe<Array<PageCreateInput>>;
  /** Delete multiple Page documents */
  delete?: Maybe<Array<PageWhereUniqueInput>>;
  /** Disconnect multiple Page documents */
  disconnect?: Maybe<Array<PageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Page documents */
  set?: Maybe<Array<PageWhereUniqueInput>>;
  /** Update multiple Page documents */
  update?: Maybe<Array<PageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Page documents */
  upsert?: Maybe<Array<PageUpsertWithNestedWhereUniqueInput>>;
};

export type PageUpdateManyInput = {
  content?: Maybe<Scalars['RichTextAST']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PageUpdateManyInput;
  /** Document search */
  where: PageWhereInput;
};

export type PageUpdateOneInlineInput = {
  /** Connect existing Page document */
  connect?: Maybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: Maybe<PageCreateInput>;
  /** Delete currently connected Page document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Page document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Page document */
  update?: Maybe<PageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Page document */
  upsert?: Maybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type PageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PageUpdateInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

export type PageUpsertInput = {
  /** Create document if it didn't exist */
  create: PageCreateInput;
  /** Update document if it exists */
  update: PageUpdateInput;
};

export type PageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PageUpsertInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type PageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdBy?: Maybe<UserWhereInput>;
  documentInStages_every?: Maybe<PageWhereStageInput>;
  documentInStages_none?: Maybe<PageWhereStageInput>;
  documentInStages_some?: Maybe<PageWhereStageInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  seoOverride?: Maybe<SeoOverrideWhereInput>;
  slug?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  subtitle_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subtitle_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: Maybe<PageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: Maybe<Stage>;
};

/** References Page record uniquely */
export type PageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};

export type Post = Entity & Node & {
  __typename?: 'Post';
  /** Who should be credited with writing this post? */
  author?: Maybe<Author>;
  /** Write your blog post! */
  content: PostContentRichText;
  /** Upload or select a cover image to set as your Featured Image */
  coverImage?: Maybe<Asset>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** What is the published date you would like to show for this post? */
  date: Scalars['Date'];
  /** Get the document in other stages */
  documentInStages: Array<Post>;
  /** Add a short excerpt to summarize this post */
  excerpt?: Maybe<Scalars['String']>;
  /** List of Post versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  seoOverride?: Maybe<SeoOverride>;
  /** Select a slug for this blog post, such as post-1, post-2, etc. */
  slug: Scalars['String'];
  /** System stage field */
  stage: Stage;
  /** Name your blog post! */
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PostAuthorArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Locale>>;
};


export type PostCoverImageArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Locale>>;
};


export type PostCreatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Locale>>;
};


export type PostDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type PostHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type PostPublishedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Locale>>;
};


export type PostScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type PostSeoOverrideArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Locale>>;
};


export type PostUpdatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Locale>>;
};

export type PostConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: PostWhereUniqueInput;
};

/** A connection to a list of items. */
export type PostConnection = {
  __typename?: 'PostConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PostEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PostContentRichText = {
  __typename?: 'PostContentRichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  json: Scalars['RichTextAST'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** @deprecated Please use the 'json' field */
  raw: Scalars['RichTextAST'];
  references: Array<PostContentRichTextEmbeddedTypes>;
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};


export type PostContentRichTextReferencesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type PostContentRichTextEmbeddedTypes = Asset;

export type PostCreateInput = {
  author?: Maybe<AuthorCreateOneInlineInput>;
  content: Scalars['RichTextAST'];
  coverImage?: Maybe<AssetCreateOneInlineInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['Date'];
  excerpt?: Maybe<Scalars['String']>;
  seoOverride?: Maybe<SeoOverrideCreateOneInlineInput>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostCreateManyInlineInput = {
  /** Connect multiple existing Post documents */
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  /** Create and connect multiple existing Post documents */
  create?: Maybe<Array<PostCreateInput>>;
};

export type PostCreateOneInlineInput = {
  /** Connect one existing Post document */
  connect?: Maybe<PostWhereUniqueInput>;
  /** Create and connect one Post document */
  create?: Maybe<PostCreateInput>;
};

/** An edge in a connection. */
export type PostEdge = {
  __typename?: 'PostEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Post;
};

/** Identifies documents */
export type PostManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PostWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PostWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  author?: Maybe<AuthorWhereInput>;
  coverImage?: Maybe<AssetWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdBy?: Maybe<UserWhereInput>;
  date?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars['Date']>;
  /** Any other value that exists and is not equal to the given value. */
  date_not?: Maybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  documentInStages_every?: Maybe<PostWhereStageInput>;
  documentInStages_none?: Maybe<PostWhereStageInput>;
  documentInStages_some?: Maybe<PostWhereStageInput>;
  excerpt?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  excerpt_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  excerpt_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  excerpt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  excerpt_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  excerpt_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  excerpt_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  excerpt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  excerpt_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  excerpt_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  seoOverride?: Maybe<SeoOverrideWhereInput>;
  slug?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum PostOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PostUpdateInput = {
  author?: Maybe<AuthorUpdateOneInlineInput>;
  content?: Maybe<Scalars['RichTextAST']>;
  coverImage?: Maybe<AssetUpdateOneInlineInput>;
  date?: Maybe<Scalars['Date']>;
  excerpt?: Maybe<Scalars['String']>;
  seoOverride?: Maybe<SeoOverrideUpdateOneInlineInput>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PostUpdateManyInlineInput = {
  /** Connect multiple existing Post documents */
  connect?: Maybe<Array<PostConnectInput>>;
  /** Create and connect multiple Post documents */
  create?: Maybe<Array<PostCreateInput>>;
  /** Delete multiple Post documents */
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  /** Disconnect multiple Post documents */
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Post documents */
  set?: Maybe<Array<PostWhereUniqueInput>>;
  /** Update multiple Post documents */
  update?: Maybe<Array<PostUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Post documents */
  upsert?: Maybe<Array<PostUpsertWithNestedWhereUniqueInput>>;
};

export type PostUpdateManyInput = {
  content?: Maybe<Scalars['RichTextAST']>;
  date?: Maybe<Scalars['Date']>;
  excerpt?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PostUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PostUpdateManyInput;
  /** Document search */
  where: PostWhereInput;
};

export type PostUpdateOneInlineInput = {
  /** Connect existing Post document */
  connect?: Maybe<PostWhereUniqueInput>;
  /** Create and connect one Post document */
  create?: Maybe<PostCreateInput>;
  /** Delete currently connected Post document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Post document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Post document */
  update?: Maybe<PostUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Post document */
  upsert?: Maybe<PostUpsertWithNestedWhereUniqueInput>;
};

export type PostUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PostUpdateInput;
  /** Unique document search */
  where: PostWhereUniqueInput;
};

export type PostUpsertInput = {
  /** Create document if it didn't exist */
  create: PostCreateInput;
  /** Update document if it exists */
  update: PostUpdateInput;
};

export type PostUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PostUpsertInput;
  /** Unique document search */
  where: PostWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PostWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type PostWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PostWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PostWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  author?: Maybe<AuthorWhereInput>;
  coverImage?: Maybe<AssetWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdBy?: Maybe<UserWhereInput>;
  date?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars['Date']>;
  /** Any other value that exists and is not equal to the given value. */
  date_not?: Maybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  documentInStages_every?: Maybe<PostWhereStageInput>;
  documentInStages_none?: Maybe<PostWhereStageInput>;
  documentInStages_some?: Maybe<PostWhereStageInput>;
  excerpt?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  excerpt_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  excerpt_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  excerpt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  excerpt_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  excerpt_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  excerpt_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  excerpt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  excerpt_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  excerpt_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  seoOverride?: Maybe<SeoOverrideWhereInput>;
  slug?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PostWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PostWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PostWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PostWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: Maybe<PostWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: Maybe<Stage>;
};

/** References Post record uniquely */
export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single author */
  author?: Maybe<Author>;
  /** Retrieve document version */
  authorVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple authors */
  authors: Array<Author>;
  /** Retrieve multiple authors using the Relay connection interface */
  authorsConnection: AuthorConnection;
  /** Retrieve multiple categories */
  categories: Array<Category>;
  /** Retrieve multiple categories using the Relay connection interface */
  categoriesConnection: CategoryConnection;
  /** Retrieve a single category */
  category?: Maybe<Category>;
  /** Retrieve document version */
  categoryVersion?: Maybe<DocumentVersion>;
  /** Retrieve a single comment */
  comment?: Maybe<Comment>;
  /** Retrieve document version */
  commentVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple comments */
  comments: Array<Comment>;
  /** Retrieve multiple comments using the Relay connection interface */
  commentsConnection: CommentConnection;
  /** Fetches an object given its ID */
  entities?: Maybe<Array<Entity>>;
  /** Retrieve a single navigation */
  navigation?: Maybe<Navigation>;
  /** Retrieve document version */
  navigationVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple navigations */
  navigations: Array<Navigation>;
  /** Retrieve multiple navigations using the Relay connection interface */
  navigationsConnection: NavigationConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single page */
  page?: Maybe<Page>;
  /** Retrieve document version */
  pageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pages */
  pages: Array<Page>;
  /** Retrieve multiple pages using the Relay connection interface */
  pagesConnection: PageConnection;
  /** Retrieve a single post */
  post?: Maybe<Post>;
  /** Retrieve document version */
  postVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple posts */
  posts: Array<Post>;
  /** Retrieve multiple posts using the Relay connection interface */
  postsConnection: PostConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<AssetWhereInput>;
};


export type QueryAuthorArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AuthorWhereUniqueInput;
};


export type QueryAuthorVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAuthorsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<AuthorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<AuthorWhereInput>;
};


export type QueryAuthorsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<AuthorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<AuthorWhereInput>;
};


export type QueryCategoriesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<CategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<CategoryWhereInput>;
};


export type QueryCategoriesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<CategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<CategoryWhereInput>;
};


export type QueryCategoryArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CategoryWhereUniqueInput;
};


export type QueryCategoryVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCommentArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CommentWhereUniqueInput;
};


export type QueryCommentVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<CommentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<CommentWhereInput>;
};


export type QueryCommentsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<CommentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<CommentWhereInput>;
};


export type QueryEntitiesArgs = {
  locales?: Maybe<Array<Locale>>;
  where: Array<EntityWhereInput>;
};


export type QueryNavigationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: NavigationWhereUniqueInput;
};


export type QueryNavigationVersionArgs = {
  where: VersionWhereInput;
};


export type QueryNavigationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<NavigationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<NavigationWhereInput>;
};


export type QueryNavigationsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<NavigationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<NavigationWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PageWhereUniqueInput;
};


export type QueryPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<PageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<PageWhereInput>;
};


export type QueryPagesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<PageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<PageWhereInput>;
};


export type QueryPostArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PostWhereUniqueInput;
};


export type QueryPostVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPostsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<PostWhereInput>;
};


export type QueryPostsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<PostWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ScheduledOperationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ScheduledOperationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ScheduledReleaseOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ScheduledReleaseOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ScheduledReleaseWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};


/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};


/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};


/** Scheduled Operation system model */
export type ScheduledOperation = Entity & Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Author | Category | Comment | Navigation | Page | Post;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: Maybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: Maybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdBy?: Maybe<UserWhereInput>;
  description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedBy?: Maybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: Maybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: Maybe<Scalars['Json']>;
  release?: Maybe<ScheduledReleaseWhereInput>;
  status?: Maybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Maybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: Maybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Maybe<ScheduledOperationStatus>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: Maybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: Maybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: Maybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: Maybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdBy?: Maybe<UserWhereInput>;
  description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedBy?: Maybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: Maybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: Maybe<Scalars['Json']>;
  release?: Maybe<ScheduledReleaseWhereInput>;
  status?: Maybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Maybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: Maybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Maybe<ScheduledOperationStatus>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Entity & Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<ScheduledOperationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: Maybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: Maybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: Maybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: Maybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdBy?: Maybe<UserWhereInput>;
  description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  isImplicit?: Maybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: Maybe<Scalars['Boolean']>;
  operations_every?: Maybe<ScheduledOperationWhereInput>;
  operations_none?: Maybe<ScheduledOperationWhereInput>;
  operations_some?: Maybe<ScheduledOperationWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedBy?: Maybe<UserWhereInput>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  status?: Maybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Maybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: Maybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Maybe<ScheduledReleaseStatus>>>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: Maybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: Maybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: Maybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: Maybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: Maybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: Maybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: Maybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: Maybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: Maybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update?: Maybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: Maybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdBy?: Maybe<UserWhereInput>;
  description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  isImplicit?: Maybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: Maybe<Scalars['Boolean']>;
  operations_every?: Maybe<ScheduledOperationWhereInput>;
  operations_none?: Maybe<ScheduledOperationWhereInput>;
  operations_some?: Maybe<ScheduledOperationWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedBy?: Maybe<UserWhereInput>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  status?: Maybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Maybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: Maybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Maybe<ScheduledReleaseStatus>>>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type SeoOverride = Entity & {
  __typename?: 'SeoOverride';
  description?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  image?: Maybe<Asset>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']>;
};


export type SeoOverrideImageArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>;
  locales?: Maybe<Array<Locale>>;
};

export type SeoOverrideConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: SeoOverrideWhereUniqueInput;
};

/** A connection to a list of items. */
export type SeoOverrideConnection = {
  __typename?: 'SeoOverrideConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SeoOverrideEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SeoOverrideCreateInput = {
  description?: Maybe<Scalars['String']>;
  image?: Maybe<AssetCreateOneInlineInput>;
  title?: Maybe<Scalars['String']>;
};

export type SeoOverrideCreateManyInlineInput = {
  /** Create and connect multiple existing SeoOverride documents */
  create?: Maybe<Array<SeoOverrideCreateInput>>;
};

export type SeoOverrideCreateOneInlineInput = {
  /** Create and connect one SeoOverride document */
  create?: Maybe<SeoOverrideCreateInput>;
};

export type SeoOverrideCreateWithPositionInput = {
  /** Document to create */
  data: SeoOverrideCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type SeoOverrideEdge = {
  __typename?: 'SeoOverrideEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: SeoOverride;
};

/** Identifies documents */
export type SeoOverrideManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SeoOverrideWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SeoOverrideWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SeoOverrideWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  image?: Maybe<AssetWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
};

export enum SeoOverrideOrderByInput {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type SeoOverrideParent = Page | Post;

export type SeoOverrideParentConnectInput = {
  Page?: Maybe<PageConnectInput>;
  Post?: Maybe<PostConnectInput>;
};

export type SeoOverrideParentCreateInput = {
  Page?: Maybe<PageCreateInput>;
  Post?: Maybe<PostCreateInput>;
};

export type SeoOverrideParentCreateManyInlineInput = {
  /** Connect multiple existing SeoOverrideParent documents */
  connect?: Maybe<Array<SeoOverrideParentWhereUniqueInput>>;
  /** Create and connect multiple existing SeoOverrideParent documents */
  create?: Maybe<Array<SeoOverrideParentCreateInput>>;
};

export type SeoOverrideParentCreateOneInlineInput = {
  /** Connect one existing SeoOverrideParent document */
  connect?: Maybe<SeoOverrideParentWhereUniqueInput>;
  /** Create and connect one SeoOverrideParent document */
  create?: Maybe<SeoOverrideParentCreateInput>;
};

export type SeoOverrideParentUpdateInput = {
  Page?: Maybe<PageUpdateInput>;
  Post?: Maybe<PostUpdateInput>;
};

export type SeoOverrideParentUpdateManyInlineInput = {
  /** Connect multiple existing SeoOverrideParent documents */
  connect?: Maybe<Array<SeoOverrideParentConnectInput>>;
  /** Create and connect multiple SeoOverrideParent documents */
  create?: Maybe<Array<SeoOverrideParentCreateInput>>;
  /** Delete multiple SeoOverrideParent documents */
  delete?: Maybe<Array<SeoOverrideParentWhereUniqueInput>>;
  /** Disconnect multiple SeoOverrideParent documents */
  disconnect?: Maybe<Array<SeoOverrideParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing SeoOverrideParent documents */
  set?: Maybe<Array<SeoOverrideParentWhereUniqueInput>>;
  /** Update multiple SeoOverrideParent documents */
  update?: Maybe<Array<SeoOverrideParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple SeoOverrideParent documents */
  upsert?: Maybe<Array<SeoOverrideParentUpsertWithNestedWhereUniqueInput>>;
};

export type SeoOverrideParentUpdateManyWithNestedWhereInput = {
  Page?: Maybe<PageUpdateManyWithNestedWhereInput>;
  Post?: Maybe<PostUpdateManyWithNestedWhereInput>;
};

export type SeoOverrideParentUpdateOneInlineInput = {
  /** Connect existing SeoOverrideParent document */
  connect?: Maybe<SeoOverrideParentWhereUniqueInput>;
  /** Create and connect one SeoOverrideParent document */
  create?: Maybe<SeoOverrideParentCreateInput>;
  /** Delete currently connected SeoOverrideParent document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected SeoOverrideParent document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single SeoOverrideParent document */
  update?: Maybe<SeoOverrideParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SeoOverrideParent document */
  upsert?: Maybe<SeoOverrideParentUpsertWithNestedWhereUniqueInput>;
};

export type SeoOverrideParentUpdateWithNestedWhereUniqueInput = {
  Page?: Maybe<PageUpdateWithNestedWhereUniqueInput>;
  Post?: Maybe<PostUpdateWithNestedWhereUniqueInput>;
};

export type SeoOverrideParentUpsertWithNestedWhereUniqueInput = {
  Page?: Maybe<PageUpsertWithNestedWhereUniqueInput>;
  Post?: Maybe<PostUpsertWithNestedWhereUniqueInput>;
};

export type SeoOverrideParentWhereInput = {
  Page?: Maybe<PageWhereInput>;
  Post?: Maybe<PostWhereInput>;
};

export type SeoOverrideParentWhereUniqueInput = {
  Page?: Maybe<PageWhereUniqueInput>;
  Post?: Maybe<PostWhereUniqueInput>;
};

export type SeoOverrideUpdateInput = {
  description?: Maybe<Scalars['String']>;
  image?: Maybe<AssetUpdateOneInlineInput>;
  title?: Maybe<Scalars['String']>;
};

export type SeoOverrideUpdateManyInlineInput = {
  /** Create and connect multiple SeoOverride component instances */
  create?: Maybe<Array<SeoOverrideCreateWithPositionInput>>;
  /** Delete multiple SeoOverride documents */
  delete?: Maybe<Array<SeoOverrideWhereUniqueInput>>;
  /** Update multiple SeoOverride component instances */
  update?: Maybe<Array<SeoOverrideUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple SeoOverride component instances */
  upsert?: Maybe<Array<SeoOverrideUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type SeoOverrideUpdateManyInput = {
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SeoOverrideUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SeoOverrideUpdateManyInput;
  /** Document search */
  where: SeoOverrideWhereInput;
};

export type SeoOverrideUpdateOneInlineInput = {
  /** Create and connect one SeoOverride document */
  create?: Maybe<SeoOverrideCreateInput>;
  /** Delete currently connected SeoOverride document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Update single SeoOverride document */
  update?: Maybe<SeoOverrideUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SeoOverride document */
  upsert?: Maybe<SeoOverrideUpsertWithNestedWhereUniqueInput>;
};

export type SeoOverrideUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: Maybe<SeoOverrideUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: SeoOverrideWhereUniqueInput;
};

export type SeoOverrideUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SeoOverrideUpdateInput;
  /** Unique document search */
  where: SeoOverrideWhereUniqueInput;
};

export type SeoOverrideUpsertInput = {
  /** Create document if it didn't exist */
  create: SeoOverrideCreateInput;
  /** Update document if it exists */
  update: SeoOverrideUpdateInput;
};

export type SeoOverrideUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: Maybe<SeoOverrideUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: SeoOverrideWhereUniqueInput;
};

export type SeoOverrideUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SeoOverrideUpsertInput;
  /** Unique document search */
  where: SeoOverrideWhereUniqueInput;
};

/** Identifies documents */
export type SeoOverrideWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SeoOverrideWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SeoOverrideWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SeoOverrideWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  image?: Maybe<AssetWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
};

/** References SeoOverride record uniquely */
export type SeoOverrideWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Entity & Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: Maybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  documentInStages_every?: Maybe<UserWhereStageInput>;
  documentInStages_none?: Maybe<UserWhereStageInput>;
  documentInStages_some?: Maybe<UserWhereStageInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<Maybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<Maybe<UserKind>>>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: Maybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  documentInStages_every?: Maybe<UserWhereStageInput>;
  documentInStages_none?: Maybe<UserWhereStageInput>;
  documentInStages_some?: Maybe<UserWhereStageInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<Maybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<Maybe<UserKind>>>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: Maybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: Maybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type AllPostsQueryVariables = Exact<{
  orderBy?: Maybe<PostOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
}>;


export type AllPostsQuery = (
  { __typename?: 'Query' }
  & { posts: Array<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'slug' | 'excerpt' | 'date'>
    & { coverImage?: Maybe<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'id' | 'url'>
    )>, content: (
      { __typename?: 'PostContentRichText' }
      & Pick<PostContentRichText, 'text'>
    ), author?: Maybe<(
      { __typename?: 'Author' }
      & Pick<Author, 'id'>
    )> }
  )> }
);


export const AllPostsDocument = gql`
    query allPosts($orderBy: PostOrderByInput, $first: Int, $skip: Int, $where: PostWhereInput) {
  posts(orderBy: $orderBy, first: $first, skip: $skip, where: $where) {
    id
    title
    slug
    excerpt
    date
    coverImage {
      id
      url
    }
    content {
      text
    }
    author {
      id
    }
  }
}
    `;

/**
 * __useAllPostsQuery__
 *
 * To run a query within a React component, call `useAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPostsQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useAllPostsQuery(baseOptions?: Apollo.QueryHookOptions<AllPostsQuery, AllPostsQueryVariables>) {
        return Apollo.useQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, baseOptions);
      }
export function useAllPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllPostsQuery, AllPostsQueryVariables>) {
          return Apollo.useLazyQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, baseOptions);
        }
export type AllPostsQueryHookResult = ReturnType<typeof useAllPostsQuery>;
export type AllPostsLazyQueryHookResult = ReturnType<typeof useAllPostsLazyQuery>;
export type AllPostsQueryResult = Apollo.QueryResult<AllPostsQuery, AllPostsQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "Entity": [
      "Asset",
      "Author",
      "Category",
      "Comment",
      "Link",
      "Navigation",
      "Page",
      "Post",
      "ScheduledOperation",
      "ScheduledRelease",
      "SeoOverride",
      "User"
    ],
    "LinkPage": [
      "Author",
      "Page",
      "Post"
    ],
    "LinkParent": [
      "Navigation"
    ],
    "Node": [
      "Asset",
      "Author",
      "Category",
      "Comment",
      "Navigation",
      "Page",
      "Post",
      "ScheduledOperation",
      "ScheduledRelease",
      "User"
    ],
    "PostContentRichTextEmbeddedTypes": [
      "Asset"
    ],
    "ScheduledOperationAffectedDocument": [
      "Asset",
      "Author",
      "Category",
      "Comment",
      "Navigation",
      "Page",
      "Post"
    ],
    "SeoOverrideParent": [
      "Page",
      "Post"
    ]
  }
};
      export default result;
    