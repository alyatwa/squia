/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Activity = {
  __typename?: 'Activity';
  _count: ActivityCount;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  orderRequirements?: Maybe<Array<OrderWorkerRequirement>>;
  pricings?: Maybe<Array<Pricing>>;
  workers?: Maybe<Array<Worker>>;
};

export type ActivityCount = {
  __typename?: 'ActivityCount';
  orderRequirements: Scalars['Int']['output'];
  pricings: Scalars['Int']['output'];
  workers: Scalars['Int']['output'];
};

export type ActivityCreateNestedOneWithoutOrderRequirementsInput = {
  connect?: InputMaybe<ActivityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ActivityCreateOrConnectWithoutOrderRequirementsInput>;
  create?: InputMaybe<ActivityCreateWithoutOrderRequirementsInput>;
};

export type ActivityCreateNestedOneWithoutPricingsInput = {
  connect?: InputMaybe<ActivityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ActivityCreateOrConnectWithoutPricingsInput>;
  create?: InputMaybe<ActivityCreateWithoutPricingsInput>;
};

export type ActivityCreateNestedOneWithoutWorkersInput = {
  connect?: InputMaybe<ActivityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ActivityCreateOrConnectWithoutWorkersInput>;
  create?: InputMaybe<ActivityCreateWithoutWorkersInput>;
};

export type ActivityCreateOrConnectWithoutOrderRequirementsInput = {
  create: ActivityCreateWithoutOrderRequirementsInput;
  where: ActivityWhereUniqueInput;
};

export type ActivityCreateOrConnectWithoutPricingsInput = {
  create: ActivityCreateWithoutPricingsInput;
  where: ActivityWhereUniqueInput;
};

export type ActivityCreateOrConnectWithoutWorkersInput = {
  create: ActivityCreateWithoutWorkersInput;
  where: ActivityWhereUniqueInput;
};

export type ActivityCreateWithoutOrderRequirementsInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  pricings?: InputMaybe<PricingCreateNestedManyWithoutActivityInput>;
  workers?: InputMaybe<WorkerCreateNestedManyWithoutActivityInput>;
};

export type ActivityCreateWithoutPricingsInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  orderRequirements?: InputMaybe<OrderWorkerRequirementCreateNestedManyWithoutActivityInput>;
  workers?: InputMaybe<WorkerCreateNestedManyWithoutActivityInput>;
};

export type ActivityCreateWithoutWorkersInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  orderRequirements?: InputMaybe<OrderWorkerRequirementCreateNestedManyWithoutActivityInput>;
  pricings?: InputMaybe<PricingCreateNestedManyWithoutActivityInput>;
};

export type ActivityNullableScalarRelationFilter = {
  is?: InputMaybe<ActivityWhereInput>;
  isNot?: InputMaybe<ActivityWhereInput>;
};

export type ActivityOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  orderRequirements?: InputMaybe<OrderWorkerRequirementOrderByRelationAggregateInput>;
  pricings?: InputMaybe<PricingOrderByRelationAggregateInput>;
  workers?: InputMaybe<WorkerOrderByRelationAggregateInput>;
};

export type ActivityScalarRelationFilter = {
  is?: InputMaybe<ActivityWhereInput>;
  isNot?: InputMaybe<ActivityWhereInput>;
};

export type ActivityUpdateOneRequiredWithoutPricingsNestedInput = {
  connect?: InputMaybe<ActivityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ActivityCreateOrConnectWithoutPricingsInput>;
  create?: InputMaybe<ActivityCreateWithoutPricingsInput>;
  update?: InputMaybe<ActivityUpdateToOneWithWhereWithoutPricingsInput>;
  upsert?: InputMaybe<ActivityUpsertWithoutPricingsInput>;
};

export type ActivityUpdateOneWithoutOrderRequirementsNestedInput = {
  connect?: InputMaybe<ActivityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ActivityCreateOrConnectWithoutOrderRequirementsInput>;
  create?: InputMaybe<ActivityCreateWithoutOrderRequirementsInput>;
  delete?: InputMaybe<ActivityWhereInput>;
  disconnect?: InputMaybe<ActivityWhereInput>;
  update?: InputMaybe<ActivityUpdateToOneWithWhereWithoutOrderRequirementsInput>;
  upsert?: InputMaybe<ActivityUpsertWithoutOrderRequirementsInput>;
};

export type ActivityUpdateOneWithoutWorkersNestedInput = {
  connect?: InputMaybe<ActivityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ActivityCreateOrConnectWithoutWorkersInput>;
  create?: InputMaybe<ActivityCreateWithoutWorkersInput>;
  delete?: InputMaybe<ActivityWhereInput>;
  disconnect?: InputMaybe<ActivityWhereInput>;
  update?: InputMaybe<ActivityUpdateToOneWithWhereWithoutWorkersInput>;
  upsert?: InputMaybe<ActivityUpsertWithoutWorkersInput>;
};

export type ActivityUpdateToOneWithWhereWithoutOrderRequirementsInput = {
  data: ActivityUpdateWithoutOrderRequirementsInput;
  where?: InputMaybe<ActivityWhereInput>;
};

export type ActivityUpdateToOneWithWhereWithoutPricingsInput = {
  data: ActivityUpdateWithoutPricingsInput;
  where?: InputMaybe<ActivityWhereInput>;
};

export type ActivityUpdateToOneWithWhereWithoutWorkersInput = {
  data: ActivityUpdateWithoutWorkersInput;
  where?: InputMaybe<ActivityWhereInput>;
};

export type ActivityUpdateWithoutOrderRequirementsInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pricings?: InputMaybe<PricingUpdateManyWithoutActivityNestedInput>;
  workers?: InputMaybe<WorkerUpdateManyWithoutActivityNestedInput>;
};

export type ActivityUpdateWithoutPricingsInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderRequirements?: InputMaybe<OrderWorkerRequirementUpdateManyWithoutActivityNestedInput>;
  workers?: InputMaybe<WorkerUpdateManyWithoutActivityNestedInput>;
};

export type ActivityUpdateWithoutWorkersInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderRequirements?: InputMaybe<OrderWorkerRequirementUpdateManyWithoutActivityNestedInput>;
  pricings?: InputMaybe<PricingUpdateManyWithoutActivityNestedInput>;
};

export type ActivityUpsertWithoutOrderRequirementsInput = {
  create: ActivityCreateWithoutOrderRequirementsInput;
  update: ActivityUpdateWithoutOrderRequirementsInput;
  where?: InputMaybe<ActivityWhereInput>;
};

export type ActivityUpsertWithoutPricingsInput = {
  create: ActivityCreateWithoutPricingsInput;
  update: ActivityUpdateWithoutPricingsInput;
  where?: InputMaybe<ActivityWhereInput>;
};

export type ActivityUpsertWithoutWorkersInput = {
  create: ActivityCreateWithoutWorkersInput;
  update: ActivityUpdateWithoutWorkersInput;
  where?: InputMaybe<ActivityWhereInput>;
};

export type ActivityWhereInput = {
  AND?: InputMaybe<Array<ActivityWhereInput>>;
  NOT?: InputMaybe<Array<ActivityWhereInput>>;
  OR?: InputMaybe<Array<ActivityWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  orderRequirements?: InputMaybe<OrderWorkerRequirementListRelationFilter>;
  pricings?: InputMaybe<PricingListRelationFilter>;
  workers?: InputMaybe<WorkerListRelationFilter>;
};

export type ActivityWhereUniqueInput = {
  AND?: InputMaybe<Array<ActivityWhereInput>>;
  NOT?: InputMaybe<Array<ActivityWhereInput>>;
  OR?: InputMaybe<Array<ActivityWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orderRequirements?: InputMaybe<OrderWorkerRequirementListRelationFilter>;
  pricings?: InputMaybe<PricingListRelationFilter>;
  workers?: InputMaybe<WorkerListRelationFilter>;
};

export type Admin = {
  __typename?: 'Admin';
  Interview?: Maybe<Array<Interview>>;
  _count: AdminCount;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type AdminCount = {
  __typename?: 'AdminCount';
  Interview: Scalars['Int']['output'];
};

export type AdminCreateNestedOneWithoutInterviewInput = {
  connect?: InputMaybe<AdminWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AdminCreateOrConnectWithoutInterviewInput>;
  create?: InputMaybe<AdminCreateWithoutInterviewInput>;
};

export type AdminCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<AdminWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AdminCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<AdminCreateWithoutUserInput>;
};

export type AdminCreateOrConnectWithoutInterviewInput = {
  create: AdminCreateWithoutInterviewInput;
  where: AdminWhereUniqueInput;
};

export type AdminCreateOrConnectWithoutUserInput = {
  create: AdminCreateWithoutUserInput;
  where: AdminWhereUniqueInput;
};

export type AdminCreateWithoutInterviewInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutAdminInput;
};

export type AdminCreateWithoutUserInput = {
  Interview?: InputMaybe<InterviewCreateNestedManyWithoutAdminInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AdminNullableScalarRelationFilter = {
  is?: InputMaybe<AdminWhereInput>;
  isNot?: InputMaybe<AdminWhereInput>;
};

export type AdminOrderByWithRelationInput = {
  Interview?: InputMaybe<InterviewOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type AdminUpdateOneWithoutInterviewNestedInput = {
  connect?: InputMaybe<AdminWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AdminCreateOrConnectWithoutInterviewInput>;
  create?: InputMaybe<AdminCreateWithoutInterviewInput>;
  delete?: InputMaybe<AdminWhereInput>;
  disconnect?: InputMaybe<AdminWhereInput>;
  update?: InputMaybe<AdminUpdateToOneWithWhereWithoutInterviewInput>;
  upsert?: InputMaybe<AdminUpsertWithoutInterviewInput>;
};

export type AdminUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<AdminWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AdminCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<AdminCreateWithoutUserInput>;
  delete?: InputMaybe<AdminWhereInput>;
  disconnect?: InputMaybe<AdminWhereInput>;
  update?: InputMaybe<AdminUpdateToOneWithWhereWithoutUserInput>;
  upsert?: InputMaybe<AdminUpsertWithoutUserInput>;
};

export type AdminUpdateToOneWithWhereWithoutInterviewInput = {
  data: AdminUpdateWithoutInterviewInput;
  where?: InputMaybe<AdminWhereInput>;
};

export type AdminUpdateToOneWithWhereWithoutUserInput = {
  data: AdminUpdateWithoutUserInput;
  where?: InputMaybe<AdminWhereInput>;
};

export type AdminUpdateWithoutInterviewInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAdminNestedInput>;
};

export type AdminUpdateWithoutUserInput = {
  Interview?: InputMaybe<InterviewUpdateManyWithoutAdminNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AdminUpsertWithoutInterviewInput = {
  create: AdminCreateWithoutInterviewInput;
  update: AdminUpdateWithoutInterviewInput;
  where?: InputMaybe<AdminWhereInput>;
};

export type AdminUpsertWithoutUserInput = {
  create: AdminCreateWithoutUserInput;
  update: AdminUpdateWithoutUserInput;
  where?: InputMaybe<AdminWhereInput>;
};

export type AdminWhereInput = {
  AND?: InputMaybe<Array<AdminWhereInput>>;
  Interview?: InputMaybe<InterviewListRelationFilter>;
  NOT?: InputMaybe<Array<AdminWhereInput>>;
  OR?: InputMaybe<Array<AdminWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AdminWhereUniqueInput = {
  AND?: InputMaybe<Array<AdminWhereInput>>;
  Interview?: InputMaybe<InterviewListRelationFilter>;
  NOT?: InputMaybe<Array<AdminWhereInput>>;
  OR?: InputMaybe<Array<AdminWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type AuthToken = {
  __typename?: 'AuthToken';
  accessToken: Scalars['String']['output'];
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type Client = {
  __typename?: 'Client';
  _count: ClientCount;
  commercialRegistration?: Maybe<Scalars['String']['output']>;
  companyAddress?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  companyType?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  groupId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  interviews?: Maybe<Array<Interview>>;
  orders?: Maybe<Array<Order>>;
  payments?: Maybe<Array<Payment>>;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
  whatsAppMessages?: Maybe<Array<WhatsAppMessage>>;
};

export type ClientCount = {
  __typename?: 'ClientCount';
  interviews: Scalars['Int']['output'];
  orders: Scalars['Int']['output'];
  payments: Scalars['Int']['output'];
  whatsAppMessages: Scalars['Int']['output'];
};

export type ClientCreateNestedOneWithoutInterviewsInput = {
  connect?: InputMaybe<ClientWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClientCreateOrConnectWithoutInterviewsInput>;
  create?: InputMaybe<ClientCreateWithoutInterviewsInput>;
};

export type ClientCreateNestedOneWithoutOrdersInput = {
  connect?: InputMaybe<ClientWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClientCreateOrConnectWithoutOrdersInput>;
  create?: InputMaybe<ClientCreateWithoutOrdersInput>;
};

export type ClientCreateNestedOneWithoutPaymentsInput = {
  connect?: InputMaybe<ClientWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClientCreateOrConnectWithoutPaymentsInput>;
  create?: InputMaybe<ClientCreateWithoutPaymentsInput>;
};

export type ClientCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<ClientWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClientCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<ClientCreateWithoutUserInput>;
};

export type ClientCreateNestedOneWithoutWhatsAppMessagesInput = {
  connect?: InputMaybe<ClientWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClientCreateOrConnectWithoutWhatsAppMessagesInput>;
  create?: InputMaybe<ClientCreateWithoutWhatsAppMessagesInput>;
};

export type ClientCreateOrConnectWithoutInterviewsInput = {
  create: ClientCreateWithoutInterviewsInput;
  where: ClientWhereUniqueInput;
};

export type ClientCreateOrConnectWithoutOrdersInput = {
  create: ClientCreateWithoutOrdersInput;
  where: ClientWhereUniqueInput;
};

export type ClientCreateOrConnectWithoutPaymentsInput = {
  create: ClientCreateWithoutPaymentsInput;
  where: ClientWhereUniqueInput;
};

export type ClientCreateOrConnectWithoutUserInput = {
  create: ClientCreateWithoutUserInput;
  where: ClientWhereUniqueInput;
};

export type ClientCreateOrConnectWithoutWhatsAppMessagesInput = {
  create: ClientCreateWithoutWhatsAppMessagesInput;
  where: ClientWhereUniqueInput;
};

export type ClientCreateWithoutInterviewsInput = {
  commercialRegistration?: InputMaybe<Scalars['String']['input']>;
  companyAddress?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  companyType?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  groupId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<OrderCreateNestedManyWithoutClientInput>;
  payments?: InputMaybe<PaymentCreateNestedManyWithoutClientInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutClientInput;
  whatsAppMessages?: InputMaybe<WhatsAppMessageCreateNestedManyWithoutClientInput>;
};

export type ClientCreateWithoutOrdersInput = {
  commercialRegistration?: InputMaybe<Scalars['String']['input']>;
  companyAddress?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  companyType?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  groupId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  interviews?: InputMaybe<InterviewCreateNestedManyWithoutClientInput>;
  payments?: InputMaybe<PaymentCreateNestedManyWithoutClientInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutClientInput;
  whatsAppMessages?: InputMaybe<WhatsAppMessageCreateNestedManyWithoutClientInput>;
};

export type ClientCreateWithoutPaymentsInput = {
  commercialRegistration?: InputMaybe<Scalars['String']['input']>;
  companyAddress?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  companyType?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  groupId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  interviews?: InputMaybe<InterviewCreateNestedManyWithoutClientInput>;
  orders?: InputMaybe<OrderCreateNestedManyWithoutClientInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutClientInput;
  whatsAppMessages?: InputMaybe<WhatsAppMessageCreateNestedManyWithoutClientInput>;
};

export type ClientCreateWithoutUserInput = {
  commercialRegistration?: InputMaybe<Scalars['String']['input']>;
  companyAddress?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  companyType?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  groupId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  interviews?: InputMaybe<InterviewCreateNestedManyWithoutClientInput>;
  orders?: InputMaybe<OrderCreateNestedManyWithoutClientInput>;
  payments?: InputMaybe<PaymentCreateNestedManyWithoutClientInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  whatsAppMessages?: InputMaybe<WhatsAppMessageCreateNestedManyWithoutClientInput>;
};

export type ClientCreateWithoutWhatsAppMessagesInput = {
  commercialRegistration?: InputMaybe<Scalars['String']['input']>;
  companyAddress?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  companyType?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  groupId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  interviews?: InputMaybe<InterviewCreateNestedManyWithoutClientInput>;
  orders?: InputMaybe<OrderCreateNestedManyWithoutClientInput>;
  payments?: InputMaybe<PaymentCreateNestedManyWithoutClientInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutClientInput;
};

export type ClientNullableScalarRelationFilter = {
  is?: InputMaybe<ClientWhereInput>;
  isNot?: InputMaybe<ClientWhereInput>;
};

export type ClientOrderByWithRelationInput = {
  commercialRegistration?: InputMaybe<SortOrderInput>;
  companyAddress?: InputMaybe<SortOrderInput>;
  companyName?: InputMaybe<SortOrderInput>;
  companyType?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  groupId?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  interviews?: InputMaybe<InterviewOrderByRelationAggregateInput>;
  orders?: InputMaybe<OrderOrderByRelationAggregateInput>;
  payments?: InputMaybe<PaymentOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
  whatsAppMessages?: InputMaybe<WhatsAppMessageOrderByRelationAggregateInput>;
};

export type ClientScalarRelationFilter = {
  is?: InputMaybe<ClientWhereInput>;
  isNot?: InputMaybe<ClientWhereInput>;
};

export type ClientUpdateOneRequiredWithoutOrdersNestedInput = {
  connect?: InputMaybe<ClientWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClientCreateOrConnectWithoutOrdersInput>;
  create?: InputMaybe<ClientCreateWithoutOrdersInput>;
  update?: InputMaybe<ClientUpdateToOneWithWhereWithoutOrdersInput>;
  upsert?: InputMaybe<ClientUpsertWithoutOrdersInput>;
};

export type ClientUpdateOneWithoutInterviewsNestedInput = {
  connect?: InputMaybe<ClientWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClientCreateOrConnectWithoutInterviewsInput>;
  create?: InputMaybe<ClientCreateWithoutInterviewsInput>;
  delete?: InputMaybe<ClientWhereInput>;
  disconnect?: InputMaybe<ClientWhereInput>;
  update?: InputMaybe<ClientUpdateToOneWithWhereWithoutInterviewsInput>;
  upsert?: InputMaybe<ClientUpsertWithoutInterviewsInput>;
};

export type ClientUpdateOneWithoutPaymentsNestedInput = {
  connect?: InputMaybe<ClientWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClientCreateOrConnectWithoutPaymentsInput>;
  create?: InputMaybe<ClientCreateWithoutPaymentsInput>;
  delete?: InputMaybe<ClientWhereInput>;
  disconnect?: InputMaybe<ClientWhereInput>;
  update?: InputMaybe<ClientUpdateToOneWithWhereWithoutPaymentsInput>;
  upsert?: InputMaybe<ClientUpsertWithoutPaymentsInput>;
};

export type ClientUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<ClientWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClientCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<ClientCreateWithoutUserInput>;
  delete?: InputMaybe<ClientWhereInput>;
  disconnect?: InputMaybe<ClientWhereInput>;
  update?: InputMaybe<ClientUpdateToOneWithWhereWithoutUserInput>;
  upsert?: InputMaybe<ClientUpsertWithoutUserInput>;
};

export type ClientUpdateOneWithoutWhatsAppMessagesNestedInput = {
  connect?: InputMaybe<ClientWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClientCreateOrConnectWithoutWhatsAppMessagesInput>;
  create?: InputMaybe<ClientCreateWithoutWhatsAppMessagesInput>;
  delete?: InputMaybe<ClientWhereInput>;
  disconnect?: InputMaybe<ClientWhereInput>;
  update?: InputMaybe<ClientUpdateToOneWithWhereWithoutWhatsAppMessagesInput>;
  upsert?: InputMaybe<ClientUpsertWithoutWhatsAppMessagesInput>;
};

export type ClientUpdateToOneWithWhereWithoutInterviewsInput = {
  data: ClientUpdateWithoutInterviewsInput;
  where?: InputMaybe<ClientWhereInput>;
};

export type ClientUpdateToOneWithWhereWithoutOrdersInput = {
  data: ClientUpdateWithoutOrdersInput;
  where?: InputMaybe<ClientWhereInput>;
};

export type ClientUpdateToOneWithWhereWithoutPaymentsInput = {
  data: ClientUpdateWithoutPaymentsInput;
  where?: InputMaybe<ClientWhereInput>;
};

export type ClientUpdateToOneWithWhereWithoutUserInput = {
  data: ClientUpdateWithoutUserInput;
  where?: InputMaybe<ClientWhereInput>;
};

export type ClientUpdateToOneWithWhereWithoutWhatsAppMessagesInput = {
  data: ClientUpdateWithoutWhatsAppMessagesInput;
  where?: InputMaybe<ClientWhereInput>;
};

export type ClientUpdateWithoutInterviewsInput = {
  commercialRegistration?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  companyAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  companyName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  companyType?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  groupId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  orders?: InputMaybe<OrderUpdateManyWithoutClientNestedInput>;
  payments?: InputMaybe<PaymentUpdateManyWithoutClientNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutClientNestedInput>;
  whatsAppMessages?: InputMaybe<WhatsAppMessageUpdateManyWithoutClientNestedInput>;
};

export type ClientUpdateWithoutOrdersInput = {
  commercialRegistration?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  companyAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  companyName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  companyType?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  groupId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  interviews?: InputMaybe<InterviewUpdateManyWithoutClientNestedInput>;
  payments?: InputMaybe<PaymentUpdateManyWithoutClientNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutClientNestedInput>;
  whatsAppMessages?: InputMaybe<WhatsAppMessageUpdateManyWithoutClientNestedInput>;
};

export type ClientUpdateWithoutPaymentsInput = {
  commercialRegistration?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  companyAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  companyName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  companyType?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  groupId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  interviews?: InputMaybe<InterviewUpdateManyWithoutClientNestedInput>;
  orders?: InputMaybe<OrderUpdateManyWithoutClientNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutClientNestedInput>;
  whatsAppMessages?: InputMaybe<WhatsAppMessageUpdateManyWithoutClientNestedInput>;
};

export type ClientUpdateWithoutUserInput = {
  commercialRegistration?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  companyAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  companyName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  companyType?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  groupId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  interviews?: InputMaybe<InterviewUpdateManyWithoutClientNestedInput>;
  orders?: InputMaybe<OrderUpdateManyWithoutClientNestedInput>;
  payments?: InputMaybe<PaymentUpdateManyWithoutClientNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  whatsAppMessages?: InputMaybe<WhatsAppMessageUpdateManyWithoutClientNestedInput>;
};

export type ClientUpdateWithoutWhatsAppMessagesInput = {
  commercialRegistration?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  companyAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  companyName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  companyType?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  groupId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  interviews?: InputMaybe<InterviewUpdateManyWithoutClientNestedInput>;
  orders?: InputMaybe<OrderUpdateManyWithoutClientNestedInput>;
  payments?: InputMaybe<PaymentUpdateManyWithoutClientNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutClientNestedInput>;
};

export type ClientUpsertWithoutInterviewsInput = {
  create: ClientCreateWithoutInterviewsInput;
  update: ClientUpdateWithoutInterviewsInput;
  where?: InputMaybe<ClientWhereInput>;
};

export type ClientUpsertWithoutOrdersInput = {
  create: ClientCreateWithoutOrdersInput;
  update: ClientUpdateWithoutOrdersInput;
  where?: InputMaybe<ClientWhereInput>;
};

export type ClientUpsertWithoutPaymentsInput = {
  create: ClientCreateWithoutPaymentsInput;
  update: ClientUpdateWithoutPaymentsInput;
  where?: InputMaybe<ClientWhereInput>;
};

export type ClientUpsertWithoutUserInput = {
  create: ClientCreateWithoutUserInput;
  update: ClientUpdateWithoutUserInput;
  where?: InputMaybe<ClientWhereInput>;
};

export type ClientUpsertWithoutWhatsAppMessagesInput = {
  create: ClientCreateWithoutWhatsAppMessagesInput;
  update: ClientUpdateWithoutWhatsAppMessagesInput;
  where?: InputMaybe<ClientWhereInput>;
};

export type ClientWhereInput = {
  AND?: InputMaybe<Array<ClientWhereInput>>;
  NOT?: InputMaybe<Array<ClientWhereInput>>;
  OR?: InputMaybe<Array<ClientWhereInput>>;
  commercialRegistration?: InputMaybe<StringNullableFilter>;
  companyAddress?: InputMaybe<StringNullableFilter>;
  companyName?: InputMaybe<StringNullableFilter>;
  companyType?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  groupId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  interviews?: InputMaybe<InterviewListRelationFilter>;
  orders?: InputMaybe<OrderListRelationFilter>;
  payments?: InputMaybe<PaymentListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  whatsAppMessages?: InputMaybe<WhatsAppMessageListRelationFilter>;
};

export type ClientWhereUniqueInput = {
  AND?: InputMaybe<Array<ClientWhereInput>>;
  NOT?: InputMaybe<Array<ClientWhereInput>>;
  OR?: InputMaybe<Array<ClientWhereInput>>;
  commercialRegistration?: InputMaybe<StringNullableFilter>;
  companyAddress?: InputMaybe<StringNullableFilter>;
  companyName?: InputMaybe<StringNullableFilter>;
  companyType?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  groupId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  interviews?: InputMaybe<InterviewListRelationFilter>;
  orders?: InputMaybe<OrderListRelationFilter>;
  payments?: InputMaybe<PaymentListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<Scalars['String']['input']>;
  whatsAppMessages?: InputMaybe<WhatsAppMessageListRelationFilter>;
};

export type CreateCheckoutOutput = {
  __typename?: 'CreateCheckoutOutput';
  checkoutId: Scalars['String']['output'];
  paymentId: Scalars['String']['output'];
  redirectUrl: Scalars['String']['output'];
};

export type CreateOrderWorkerRequirementInput = {
  activityId?: InputMaybe<Scalars['ID']['input']>;
  interviewId?: InputMaybe<Scalars['ID']['input']>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  nationalityId?: InputMaybe<Scalars['ID']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  positionId?: InputMaybe<Scalars['ID']['input']>;
  quantity?: Scalars['Int']['input'];
  salaryPerPerson?: InputMaybe<Scalars['Float']['input']>;
  specialtyId?: InputMaybe<Scalars['ID']['input']>;
  workerId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreatePricingInput = {
  activityId: Scalars['String']['input'];
  adminCommission: Scalars['Float']['input'];
  maxWage: Scalars['Float']['input'];
  minWage: Scalars['Float']['input'];
  nationalityId: Scalars['String']['input'];
  positionId: Scalars['String']['input'];
  specialtyId: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type CreateWorkerInput = {
  accommodationType?: InputMaybe<Scalars['String']['input']>;
  activityId?: InputMaybe<Scalars['String']['input']>;
  currentCity?: InputMaybe<Scalars['String']['input']>;
  currentSalary?: InputMaybe<Scalars['Float']['input']>;
  currentWorkplace?: InputMaybe<Scalars['String']['input']>;
  cvFile?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  expectedSalary?: InputMaybe<Scalars['Float']['input']>;
  experience?: InputMaybe<Scalars['String']['input']>;
  expiryDate?: InputMaybe<Scalars['DateTime']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  hourlyRate?: InputMaybe<Scalars['Float']['input']>;
  iban?: InputMaybe<Scalars['String']['input']>;
  iqamaImage?: InputMaybe<Scalars['String']['input']>;
  iqamaNumber?: InputMaybe<Scalars['String']['input']>;
  nationalityId?: InputMaybe<Scalars['String']['input']>;
  portfolioFiles?: InputMaybe<Scalars['String']['input']>;
  positionId?: InputMaybe<Scalars['String']['input']>;
  profilePicture?: InputMaybe<Scalars['String']['input']>;
  referralSource?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Scalars['String']['input']>;
  specialtyId?: InputMaybe<Scalars['String']['input']>;
  transferCount?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['String']['input'];
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type EnumInterviewStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<InterviewStatus>;
};

export type EnumInterviewStatusFilter = {
  equals?: InputMaybe<InterviewStatus>;
  in?: InputMaybe<Array<InterviewStatus>>;
  not?: InputMaybe<NestedEnumInterviewStatusFilter>;
  notIn?: InputMaybe<Array<InterviewStatus>>;
};

export type EnumMeetingTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<MeetingType>;
};

export type EnumMeetingTypeFilter = {
  equals?: InputMaybe<MeetingType>;
  in?: InputMaybe<Array<MeetingType>>;
  not?: InputMaybe<NestedEnumMeetingTypeFilter>;
  notIn?: InputMaybe<Array<MeetingType>>;
};

export type EnumPaymentPurposeNullableFilter = {
  equals?: InputMaybe<PaymentPurpose>;
  in?: InputMaybe<Array<PaymentPurpose>>;
  not?: InputMaybe<NestedEnumPaymentPurposeNullableFilter>;
  notIn?: InputMaybe<Array<PaymentPurpose>>;
};

export type EnumPaymentStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<PaymentStatus>;
};

export type EnumPaymentStatusFilter = {
  equals?: InputMaybe<PaymentStatus>;
  in?: InputMaybe<Array<PaymentStatus>>;
  not?: InputMaybe<NestedEnumPaymentStatusFilter>;
  notIn?: InputMaybe<Array<PaymentStatus>>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']['input']>;
  divide?: InputMaybe<Scalars['Float']['input']>;
  increment?: InputMaybe<Scalars['Float']['input']>;
  multiply?: InputMaybe<Scalars['Float']['input']>;
  set?: InputMaybe<Scalars['Float']['input']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type ForgotPasswordInput = {
  email: Scalars['String']['input'];
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Interview = {
  __typename?: 'Interview';
  Client?: Maybe<Client>;
  _count: InterviewCount;
  admin?: Maybe<Admin>;
  adminAttended: Scalars['Boolean']['output'];
  adminId: Scalars['String']['output'];
  adminName?: Maybe<Scalars['String']['output']>;
  availableTimes?: Maybe<Scalars['String']['output']>;
  clientAttended: Scalars['Boolean']['output'];
  clientConfirmationTime?: Maybe<Scalars['DateTime']['output']>;
  clientConfirmed: Scalars['Boolean']['output'];
  clientId?: Maybe<Scalars['String']['output']>;
  clientNotificationTime?: Maybe<Scalars['DateTime']['output']>;
  clientNotified: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  dateTime: Scalars['DateTime']['output'];
  duration?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  meetingType: MeetingType;
  notes?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Order>;
  orderId?: Maybe<Scalars['String']['output']>;
  payments?: Maybe<Array<Payment>>;
  rating?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Scalars['String']['output']>;
  resultNotes?: Maybe<Scalars['String']['output']>;
  scheduledAt?: Maybe<Scalars['DateTime']['output']>;
  status: InterviewStatus;
  updatedAt: Scalars['DateTime']['output'];
  worker: Worker;
  workerAttended: Scalars['Boolean']['output'];
  workerConfirmationTime?: Maybe<Scalars['DateTime']['output']>;
  workerConfirmed: Scalars['Boolean']['output'];
  workerId: Scalars['String']['output'];
  workerNotificationTime?: Maybe<Scalars['DateTime']['output']>;
  workerNotified: Scalars['Boolean']['output'];
  zoomMeeting?: Maybe<ZoomMeeting>;
};

export type InterviewCount = {
  __typename?: 'InterviewCount';
  payments: Scalars['Int']['output'];
};

export type InterviewCreateInput = {
  Client?: InputMaybe<ClientCreateNestedOneWithoutInterviewsInput>;
  admin?: InputMaybe<AdminCreateNestedOneWithoutInterviewInput>;
  adminAttended?: InputMaybe<Scalars['Boolean']['input']>;
  adminName?: InputMaybe<Scalars['String']['input']>;
  availableTimes?: InputMaybe<Scalars['String']['input']>;
  clientAttended?: InputMaybe<Scalars['Boolean']['input']>;
  clientConfirmationTime?: InputMaybe<Scalars['DateTime']['input']>;
  clientConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  clientNotificationTime?: InputMaybe<Scalars['DateTime']['input']>;
  clientNotified?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime?: InputMaybe<Scalars['DateTime']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  meetingType?: InputMaybe<MeetingType>;
  notes?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<OrderCreateNestedOneWithoutInterviewsInput>;
  payments?: InputMaybe<PaymentCreateNestedManyWithoutInterviewInput>;
  rating?: InputMaybe<Scalars['String']['input']>;
  result?: InputMaybe<Scalars['String']['input']>;
  resultNotes?: InputMaybe<Scalars['String']['input']>;
  scheduledAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<InterviewStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  worker: WorkerCreateNestedOneWithoutInterviewsInput;
  workerAttended?: InputMaybe<Scalars['Boolean']['input']>;
  workerConfirmationTime?: InputMaybe<Scalars['DateTime']['input']>;
  workerConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  workerNotificationTime?: InputMaybe<Scalars['DateTime']['input']>;
  workerNotified?: InputMaybe<Scalars['Boolean']['input']>;
  zoomMeeting?: InputMaybe<ZoomMeetingCreateNestedOneWithoutInterviewInput>;
};

export type InterviewCreateManyAdminInput = {
  adminAttended?: InputMaybe<Scalars['Boolean']['input']>;
  adminName?: InputMaybe<Scalars['String']['input']>;
  availableTimes?: InputMaybe<Scalars['String']['input']>;
  clientAttended?: InputMaybe<Scalars['Boolean']['input']>;
  clientConfirmationTime?: InputMaybe<Scalars['DateTime']['input']>;
  clientConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  clientNotificationTime?: InputMaybe<Scalars['DateTime']['input']>;
  clientNotified?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime?: InputMaybe<Scalars['DateTime']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  meetingType?: InputMaybe<MeetingType>;
  notes?: InputMaybe<Scalars['String']['input']>;
  orderId?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['String']['input']>;
  result?: InputMaybe<Scalars['String']['input']>;
  resultNotes?: InputMaybe<Scalars['String']['input']>;
  scheduledAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<InterviewStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workerAttended?: InputMaybe<Scalars['Boolean']['input']>;
  workerConfirmationTime?: InputMaybe<Scalars['DateTime']['input']>;
  workerConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  workerId: Scalars['String']['input'];
  workerNotificationTime?: InputMaybe<Scalars['DateTime']['input']>;
  workerNotified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InterviewCreateManyAdminInputEnvelope = {
  data: Array<InterviewCreateManyAdminInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InterviewCreateManyClientInput = {
  adminAttended?: InputMaybe<Scalars['Boolean']['input']>;
  adminId: Scalars['String']['input'];
  adminName?: InputMaybe<Scalars['String']['input']>;
  availableTimes?: InputMaybe<Scalars['String']['input']>;
  clientAttended?: InputMaybe<Scalars['Boolean']['input']>;
  clientConfirmationTime?: InputMaybe<Scalars['DateTime']['input']>;
  clientConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  clientNotificationTime?: InputMaybe<Scalars['DateTime']['input']>;
  clientNotified?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime?: InputMaybe<Scalars['DateTime']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  meetingType?: InputMaybe<MeetingType>;
  notes?: InputMaybe<Scalars['String']['input']>;
  orderId?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['String']['input']>;
  result?: InputMaybe<Scalars['String']['input']>;
  resultNotes?: InputMaybe<Scalars['String']['input']>;
  scheduledAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<InterviewStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workerAttended?: InputMaybe<Scalars['Boolean']['input']>;
  workerConfirmationTime?: InputMaybe<Scalars['DateTime']['input']>;
  workerConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  workerId: Scalars['String']['input'];
  workerNotificationTime?: InputMaybe<Scalars['DateTime']['input']>;
  workerNotified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InterviewCreateManyClientInputEnvelope = {
  data: Array<InterviewCreateManyClientInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InterviewCreateManyOrderInput = {
  adminAttended?: InputMaybe<Scalars['Boolean']['input']>;
  adminId: Scalars['String']['input'];
  adminName?: InputMaybe<Scalars['String']['input']>;
  availableTimes?: InputMaybe<Scalars['String']['input']>;
  clientAttended?: InputMaybe<Scalars['Boolean']['input']>;
  clientConfirmationTime?: InputMaybe<Scalars['DateTime']['input']>;
  clientConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  clientNotificationTime?: InputMaybe<Scalars['DateTime']['input']>;
  clientNotified?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime?: InputMaybe<Scalars['DateTime']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  meetingType?: InputMaybe<MeetingType>;
  notes?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['String']['input']>;
  result?: InputMaybe<Scalars['String']['input']>;
  resultNotes?: InputMaybe<Scalars['String']['input']>;
  scheduledAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<InterviewStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workerAttended?: InputMaybe<Scalars['Boolean']['input']>;
  workerConfirmationTime?: InputMaybe<Scalars['DateTime']['input']>;
  workerConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  workerId: Scalars['String']['input'];
  workerNotificationTime?: InputMaybe<Scalars['DateTime']['input']>;
  workerNotified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InterviewCreateManyOrderInputEnvelope = {
  data: Array<InterviewCreateManyOrderInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InterviewCreateManyWorkerInput = {
  adminAttended?: InputMaybe<Scalars['Boolean']['input']>;
  adminId: Scalars['String']['input'];
  adminName?: InputMaybe<Scalars['String']['input']>;
  availableTimes?: InputMaybe<Scalars['String']['input']>;
  clientAttended?: InputMaybe<Scalars['Boolean']['input']>;
  clientConfirmationTime?: InputMaybe<Scalars['DateTime']['input']>;
  clientConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  clientNotificationTime?: InputMaybe<Scalars['DateTime']['input']>;
  clientNotified?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime?: InputMaybe<Scalars['DateTime']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  meetingType?: InputMaybe<MeetingType>;
  notes?: InputMaybe<Scalars['String']['input']>;
  orderId?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['String']['input']>;
  result?: InputMaybe<Scalars['String']['input']>;
  resultNotes?: InputMaybe<Scalars['String']['input']>;
  scheduledAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<InterviewStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workerAttended?: InputMaybe<Scalars['Boolean']['input']>;
  workerConfirmationTime?: InputMaybe<Scalars['DateTime']['input']>;
  workerConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  workerNotificationTime?: InputMaybe<Scalars['DateTime']['input']>;
  workerNotified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InterviewCreateManyWorkerInputEnvelope = {
  data: Array<InterviewCreateManyWorkerInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InterviewCreateNestedManyWithoutAdminInput = {
  connect?: InputMaybe<Array<InterviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InterviewCreateOrConnectWithoutAdminInput>>;
  create?: InputMaybe<Array<InterviewCreateWithoutAdminInput>>;
  createMany?: InputMaybe<InterviewCreateManyAdminInputEnvelope>;
};

export type InterviewCreateNestedManyWithoutClientInput = {
  connect?: InputMaybe<Array<InterviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InterviewCreateOrConnectWithoutClientInput>>;
  create?: InputMaybe<Array<InterviewCreateWithoutClientInput>>;
  createMany?: InputMaybe<InterviewCreateManyClientInputEnvelope>;
};

export type InterviewCreateNestedManyWithoutOrderInput = {
  connect?: InputMaybe<Array<InterviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InterviewCreateOrConnectWithoutOrderInput>>;
  create?: InputMaybe<Array<InterviewCreateWithoutOrderInput>>;
  createMany?: InputMaybe<InterviewCreateManyOrderInputEnvelope>;
};

export type InterviewCreateNestedManyWithoutWorkerInput = {
  connect?: InputMaybe<Array<InterviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InterviewCreateOrConnectWithoutWorkerInput>>;
  create?: InputMaybe<Array<InterviewCreateWithoutWorkerInput>>;
  createMany?: InputMaybe<InterviewCreateManyWorkerInputEnvelope>;
};

export type InterviewCreateNestedOneWithoutPaymentsInput = {
  connect?: InputMaybe<InterviewWhereUniqueInput>;
  connectOrCreate?: InputMaybe<InterviewCreateOrConnectWithoutPaymentsInput>;
  create?: InputMaybe<InterviewCreateWithoutPaymentsInput>;
};

export type InterviewCreateOrConnectWithoutAdminInput = {
  create: InterviewCreateWithoutAdminInput;
  where: InterviewWhereUniqueInput;
};

export type InterviewCreateOrConnectWithoutClientInput = {
  create: InterviewCreateWithoutClientInput;
  where: InterviewWhereUniqueInput;
};

export type InterviewCreateOrConnectWithoutOrderInput = {
  create: InterviewCreateWithoutOrderInput;
  where: InterviewWhereUniqueInput;
};

export type InterviewCreateOrConnectWithoutPaymentsInput = {
  create: InterviewCreateWithoutPaymentsInput;
  where: InterviewWhereUniqueInput;
};

export type InterviewCreateOrConnectWithoutWorkerInput = {
  create: InterviewCreateWithoutWorkerInput;
  where: InterviewWhereUniqueInput;
};

export type InterviewCreateWithoutAdminInput = {
  Client?: InputMaybe<ClientCreateNestedOneWithoutInterviewsInput>;
  adminAttended?: InputMaybe<Scalars['Boolean']['input']>;
  adminName?: InputMaybe<Scalars['String']['input']>;
  availableTimes?: InputMaybe<Scalars['String']['input']>;
  clientAttended?: InputMaybe<Scalars['Boolean']['input']>;
  clientConfirmationTime?: InputMaybe<Scalars['DateTime']['input']>;
  clientConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  clientNotificationTime?: InputMaybe<Scalars['DateTime']['input']>;
  clientNotified?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime?: InputMaybe<Scalars['DateTime']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  meetingType?: InputMaybe<MeetingType>;
  notes?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<OrderCreateNestedOneWithoutInterviewsInput>;
  payments?: InputMaybe<PaymentCreateNestedManyWithoutInterviewInput>;
  rating?: InputMaybe<Scalars['String']['input']>;
  result?: InputMaybe<Scalars['String']['input']>;
  resultNotes?: InputMaybe<Scalars['String']['input']>;
  scheduledAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<InterviewStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  worker: WorkerCreateNestedOneWithoutInterviewsInput;
  workerAttended?: InputMaybe<Scalars['Boolean']['input']>;
  workerConfirmationTime?: InputMaybe<Scalars['DateTime']['input']>;
  workerConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  workerNotificationTime?: InputMaybe<Scalars['DateTime']['input']>;
  workerNotified?: InputMaybe<Scalars['Boolean']['input']>;
  zoomMeeting?: InputMaybe<ZoomMeetingCreateNestedOneWithoutInterviewInput>;
};

export type InterviewCreateWithoutClientInput = {
  admin?: InputMaybe<AdminCreateNestedOneWithoutInterviewInput>;
  adminAttended?: InputMaybe<Scalars['Boolean']['input']>;
  adminName?: InputMaybe<Scalars['String']['input']>;
  availableTimes?: InputMaybe<Scalars['String']['input']>;
  clientAttended?: InputMaybe<Scalars['Boolean']['input']>;
  clientConfirmationTime?: InputMaybe<Scalars['DateTime']['input']>;
  clientConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  clientNotificationTime?: InputMaybe<Scalars['DateTime']['input']>;
  clientNotified?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime?: InputMaybe<Scalars['DateTime']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  meetingType?: InputMaybe<MeetingType>;
  notes?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<OrderCreateNestedOneWithoutInterviewsInput>;
  payments?: InputMaybe<PaymentCreateNestedManyWithoutInterviewInput>;
  rating?: InputMaybe<Scalars['String']['input']>;
  result?: InputMaybe<Scalars['String']['input']>;
  resultNotes?: InputMaybe<Scalars['String']['input']>;
  scheduledAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<InterviewStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  worker: WorkerCreateNestedOneWithoutInterviewsInput;
  workerAttended?: InputMaybe<Scalars['Boolean']['input']>;
  workerConfirmationTime?: InputMaybe<Scalars['DateTime']['input']>;
  workerConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  workerNotificationTime?: InputMaybe<Scalars['DateTime']['input']>;
  workerNotified?: InputMaybe<Scalars['Boolean']['input']>;
  zoomMeeting?: InputMaybe<ZoomMeetingCreateNestedOneWithoutInterviewInput>;
};

export type InterviewCreateWithoutOrderInput = {
  Client?: InputMaybe<ClientCreateNestedOneWithoutInterviewsInput>;
  admin?: InputMaybe<AdminCreateNestedOneWithoutInterviewInput>;
  adminAttended?: InputMaybe<Scalars['Boolean']['input']>;
  adminName?: InputMaybe<Scalars['String']['input']>;
  availableTimes?: InputMaybe<Scalars['String']['input']>;
  clientAttended?: InputMaybe<Scalars['Boolean']['input']>;
  clientConfirmationTime?: InputMaybe<Scalars['DateTime']['input']>;
  clientConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  clientNotificationTime?: InputMaybe<Scalars['DateTime']['input']>;
  clientNotified?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime?: InputMaybe<Scalars['DateTime']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  meetingType?: InputMaybe<MeetingType>;
  notes?: InputMaybe<Scalars['String']['input']>;
  payments?: InputMaybe<PaymentCreateNestedManyWithoutInterviewInput>;
  rating?: InputMaybe<Scalars['String']['input']>;
  result?: InputMaybe<Scalars['String']['input']>;
  resultNotes?: InputMaybe<Scalars['String']['input']>;
  scheduledAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<InterviewStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  worker: WorkerCreateNestedOneWithoutInterviewsInput;
  workerAttended?: InputMaybe<Scalars['Boolean']['input']>;
  workerConfirmationTime?: InputMaybe<Scalars['DateTime']['input']>;
  workerConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  workerNotificationTime?: InputMaybe<Scalars['DateTime']['input']>;
  workerNotified?: InputMaybe<Scalars['Boolean']['input']>;
  zoomMeeting?: InputMaybe<ZoomMeetingCreateNestedOneWithoutInterviewInput>;
};

export type InterviewCreateWithoutPaymentsInput = {
  Client?: InputMaybe<ClientCreateNestedOneWithoutInterviewsInput>;
  admin?: InputMaybe<AdminCreateNestedOneWithoutInterviewInput>;
  adminAttended?: InputMaybe<Scalars['Boolean']['input']>;
  adminName?: InputMaybe<Scalars['String']['input']>;
  availableTimes?: InputMaybe<Scalars['String']['input']>;
  clientAttended?: InputMaybe<Scalars['Boolean']['input']>;
  clientConfirmationTime?: InputMaybe<Scalars['DateTime']['input']>;
  clientConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  clientNotificationTime?: InputMaybe<Scalars['DateTime']['input']>;
  clientNotified?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime?: InputMaybe<Scalars['DateTime']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  meetingType?: InputMaybe<MeetingType>;
  notes?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<OrderCreateNestedOneWithoutInterviewsInput>;
  rating?: InputMaybe<Scalars['String']['input']>;
  result?: InputMaybe<Scalars['String']['input']>;
  resultNotes?: InputMaybe<Scalars['String']['input']>;
  scheduledAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<InterviewStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  worker: WorkerCreateNestedOneWithoutInterviewsInput;
  workerAttended?: InputMaybe<Scalars['Boolean']['input']>;
  workerConfirmationTime?: InputMaybe<Scalars['DateTime']['input']>;
  workerConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  workerNotificationTime?: InputMaybe<Scalars['DateTime']['input']>;
  workerNotified?: InputMaybe<Scalars['Boolean']['input']>;
  zoomMeeting?: InputMaybe<ZoomMeetingCreateNestedOneWithoutInterviewInput>;
};

export type InterviewCreateWithoutWorkerInput = {
  Client?: InputMaybe<ClientCreateNestedOneWithoutInterviewsInput>;
  admin?: InputMaybe<AdminCreateNestedOneWithoutInterviewInput>;
  adminAttended?: InputMaybe<Scalars['Boolean']['input']>;
  adminName?: InputMaybe<Scalars['String']['input']>;
  availableTimes?: InputMaybe<Scalars['String']['input']>;
  clientAttended?: InputMaybe<Scalars['Boolean']['input']>;
  clientConfirmationTime?: InputMaybe<Scalars['DateTime']['input']>;
  clientConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  clientNotificationTime?: InputMaybe<Scalars['DateTime']['input']>;
  clientNotified?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime?: InputMaybe<Scalars['DateTime']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  meetingType?: InputMaybe<MeetingType>;
  notes?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<OrderCreateNestedOneWithoutInterviewsInput>;
  payments?: InputMaybe<PaymentCreateNestedManyWithoutInterviewInput>;
  rating?: InputMaybe<Scalars['String']['input']>;
  result?: InputMaybe<Scalars['String']['input']>;
  resultNotes?: InputMaybe<Scalars['String']['input']>;
  scheduledAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<InterviewStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workerAttended?: InputMaybe<Scalars['Boolean']['input']>;
  workerConfirmationTime?: InputMaybe<Scalars['DateTime']['input']>;
  workerConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  workerNotificationTime?: InputMaybe<Scalars['DateTime']['input']>;
  workerNotified?: InputMaybe<Scalars['Boolean']['input']>;
  zoomMeeting?: InputMaybe<ZoomMeetingCreateNestedOneWithoutInterviewInput>;
};

export type InterviewListRelationFilter = {
  every?: InputMaybe<InterviewWhereInput>;
  none?: InputMaybe<InterviewWhereInput>;
  some?: InputMaybe<InterviewWhereInput>;
};

export type InterviewNullableScalarRelationFilter = {
  is?: InputMaybe<InterviewWhereInput>;
  isNot?: InputMaybe<InterviewWhereInput>;
};

export type InterviewOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type InterviewOrderByWithRelationInput = {
  Client?: InputMaybe<ClientOrderByWithRelationInput>;
  admin?: InputMaybe<AdminOrderByWithRelationInput>;
  adminAttended?: InputMaybe<SortOrder>;
  adminId?: InputMaybe<SortOrder>;
  adminName?: InputMaybe<SortOrderInput>;
  availableTimes?: InputMaybe<SortOrderInput>;
  clientAttended?: InputMaybe<SortOrder>;
  clientConfirmationTime?: InputMaybe<SortOrderInput>;
  clientConfirmed?: InputMaybe<SortOrder>;
  clientId?: InputMaybe<SortOrderInput>;
  clientNotificationTime?: InputMaybe<SortOrderInput>;
  clientNotified?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  dateTime?: InputMaybe<SortOrder>;
  duration?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  meetingType?: InputMaybe<SortOrder>;
  notes?: InputMaybe<SortOrderInput>;
  order?: InputMaybe<OrderOrderByWithRelationInput>;
  orderId?: InputMaybe<SortOrderInput>;
  payments?: InputMaybe<PaymentOrderByRelationAggregateInput>;
  rating?: InputMaybe<SortOrderInput>;
  result?: InputMaybe<SortOrderInput>;
  resultNotes?: InputMaybe<SortOrderInput>;
  scheduledAt?: InputMaybe<SortOrderInput>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  worker?: InputMaybe<WorkerOrderByWithRelationInput>;
  workerAttended?: InputMaybe<SortOrder>;
  workerConfirmationTime?: InputMaybe<SortOrderInput>;
  workerConfirmed?: InputMaybe<SortOrder>;
  workerId?: InputMaybe<SortOrder>;
  workerNotificationTime?: InputMaybe<SortOrderInput>;
  workerNotified?: InputMaybe<SortOrder>;
  zoomMeeting?: InputMaybe<ZoomMeetingOrderByWithRelationInput>;
};

export enum InterviewScalarFieldEnum {
  AdminAttended = 'adminAttended',
  AdminId = 'adminId',
  AdminName = 'adminName',
  AvailableTimes = 'availableTimes',
  ClientAttended = 'clientAttended',
  ClientConfirmationTime = 'clientConfirmationTime',
  ClientConfirmed = 'clientConfirmed',
  ClientId = 'clientId',
  ClientNotificationTime = 'clientNotificationTime',
  ClientNotified = 'clientNotified',
  CreatedAt = 'createdAt',
  DateTime = 'dateTime',
  Duration = 'duration',
  Id = 'id',
  MeetingType = 'meetingType',
  Notes = 'notes',
  OrderId = 'orderId',
  Rating = 'rating',
  Result = 'result',
  ResultNotes = 'resultNotes',
  ScheduledAt = 'scheduledAt',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  WorkerAttended = 'workerAttended',
  WorkerConfirmationTime = 'workerConfirmationTime',
  WorkerConfirmed = 'workerConfirmed',
  WorkerId = 'workerId',
  WorkerNotificationTime = 'workerNotificationTime',
  WorkerNotified = 'workerNotified'
}

export type InterviewScalarWhereInput = {
  AND?: InputMaybe<Array<InterviewScalarWhereInput>>;
  NOT?: InputMaybe<Array<InterviewScalarWhereInput>>;
  OR?: InputMaybe<Array<InterviewScalarWhereInput>>;
  adminAttended?: InputMaybe<BoolFilter>;
  adminId?: InputMaybe<StringFilter>;
  adminName?: InputMaybe<StringNullableFilter>;
  availableTimes?: InputMaybe<StringNullableFilter>;
  clientAttended?: InputMaybe<BoolFilter>;
  clientConfirmationTime?: InputMaybe<DateTimeNullableFilter>;
  clientConfirmed?: InputMaybe<BoolFilter>;
  clientId?: InputMaybe<StringNullableFilter>;
  clientNotificationTime?: InputMaybe<DateTimeNullableFilter>;
  clientNotified?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dateTime?: InputMaybe<DateTimeFilter>;
  duration?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<StringFilter>;
  meetingType?: InputMaybe<EnumMeetingTypeFilter>;
  notes?: InputMaybe<StringNullableFilter>;
  orderId?: InputMaybe<StringNullableFilter>;
  rating?: InputMaybe<StringNullableFilter>;
  result?: InputMaybe<StringNullableFilter>;
  resultNotes?: InputMaybe<StringNullableFilter>;
  scheduledAt?: InputMaybe<DateTimeNullableFilter>;
  status?: InputMaybe<EnumInterviewStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  workerAttended?: InputMaybe<BoolFilter>;
  workerConfirmationTime?: InputMaybe<DateTimeNullableFilter>;
  workerConfirmed?: InputMaybe<BoolFilter>;
  workerId?: InputMaybe<StringFilter>;
  workerNotificationTime?: InputMaybe<DateTimeNullableFilter>;
  workerNotified?: InputMaybe<BoolFilter>;
};

export enum InterviewStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Confirmed = 'CONFIRMED',
  Pending = 'PENDING',
  Scheduled = 'SCHEDULED'
}

export type InterviewUpdateInput = {
  Client?: InputMaybe<ClientUpdateOneWithoutInterviewsNestedInput>;
  admin?: InputMaybe<AdminUpdateOneWithoutInterviewNestedInput>;
  adminAttended?: InputMaybe<BoolFieldUpdateOperationsInput>;
  adminName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  availableTimes?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  clientAttended?: InputMaybe<BoolFieldUpdateOperationsInput>;
  clientConfirmationTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  clientConfirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  clientNotificationTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  clientNotified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dateTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  duration?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  meetingType?: InputMaybe<EnumMeetingTypeFieldUpdateOperationsInput>;
  notes?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  order?: InputMaybe<OrderUpdateOneWithoutInterviewsNestedInput>;
  payments?: InputMaybe<PaymentUpdateManyWithoutInterviewNestedInput>;
  rating?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  result?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  resultNotes?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scheduledAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumInterviewStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  worker?: InputMaybe<WorkerUpdateOneRequiredWithoutInterviewsNestedInput>;
  workerAttended?: InputMaybe<BoolFieldUpdateOperationsInput>;
  workerConfirmationTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  workerConfirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  workerNotificationTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  workerNotified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  zoomMeeting?: InputMaybe<ZoomMeetingUpdateOneWithoutInterviewNestedInput>;
};

export type InterviewUpdateManyMutationInput = {
  adminAttended?: InputMaybe<BoolFieldUpdateOperationsInput>;
  adminName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  availableTimes?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  clientAttended?: InputMaybe<BoolFieldUpdateOperationsInput>;
  clientConfirmationTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  clientConfirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  clientNotificationTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  clientNotified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dateTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  duration?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  meetingType?: InputMaybe<EnumMeetingTypeFieldUpdateOperationsInput>;
  notes?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  result?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  resultNotes?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scheduledAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumInterviewStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  workerAttended?: InputMaybe<BoolFieldUpdateOperationsInput>;
  workerConfirmationTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  workerConfirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  workerNotificationTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  workerNotified?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type InterviewUpdateManyWithWhereWithoutAdminInput = {
  data: InterviewUpdateManyMutationInput;
  where: InterviewScalarWhereInput;
};

export type InterviewUpdateManyWithWhereWithoutClientInput = {
  data: InterviewUpdateManyMutationInput;
  where: InterviewScalarWhereInput;
};

export type InterviewUpdateManyWithWhereWithoutOrderInput = {
  data: InterviewUpdateManyMutationInput;
  where: InterviewScalarWhereInput;
};

export type InterviewUpdateManyWithWhereWithoutWorkerInput = {
  data: InterviewUpdateManyMutationInput;
  where: InterviewScalarWhereInput;
};

export type InterviewUpdateManyWithoutAdminNestedInput = {
  connect?: InputMaybe<Array<InterviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InterviewCreateOrConnectWithoutAdminInput>>;
  create?: InputMaybe<Array<InterviewCreateWithoutAdminInput>>;
  createMany?: InputMaybe<InterviewCreateManyAdminInputEnvelope>;
  delete?: InputMaybe<Array<InterviewWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<InterviewScalarWhereInput>>;
  disconnect?: InputMaybe<Array<InterviewWhereUniqueInput>>;
  set?: InputMaybe<Array<InterviewWhereUniqueInput>>;
  update?: InputMaybe<Array<InterviewUpdateWithWhereUniqueWithoutAdminInput>>;
  updateMany?: InputMaybe<Array<InterviewUpdateManyWithWhereWithoutAdminInput>>;
  upsert?: InputMaybe<Array<InterviewUpsertWithWhereUniqueWithoutAdminInput>>;
};

export type InterviewUpdateManyWithoutClientNestedInput = {
  connect?: InputMaybe<Array<InterviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InterviewCreateOrConnectWithoutClientInput>>;
  create?: InputMaybe<Array<InterviewCreateWithoutClientInput>>;
  createMany?: InputMaybe<InterviewCreateManyClientInputEnvelope>;
  delete?: InputMaybe<Array<InterviewWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<InterviewScalarWhereInput>>;
  disconnect?: InputMaybe<Array<InterviewWhereUniqueInput>>;
  set?: InputMaybe<Array<InterviewWhereUniqueInput>>;
  update?: InputMaybe<Array<InterviewUpdateWithWhereUniqueWithoutClientInput>>;
  updateMany?: InputMaybe<Array<InterviewUpdateManyWithWhereWithoutClientInput>>;
  upsert?: InputMaybe<Array<InterviewUpsertWithWhereUniqueWithoutClientInput>>;
};

export type InterviewUpdateManyWithoutOrderNestedInput = {
  connect?: InputMaybe<Array<InterviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InterviewCreateOrConnectWithoutOrderInput>>;
  create?: InputMaybe<Array<InterviewCreateWithoutOrderInput>>;
  createMany?: InputMaybe<InterviewCreateManyOrderInputEnvelope>;
  delete?: InputMaybe<Array<InterviewWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<InterviewScalarWhereInput>>;
  disconnect?: InputMaybe<Array<InterviewWhereUniqueInput>>;
  set?: InputMaybe<Array<InterviewWhereUniqueInput>>;
  update?: InputMaybe<Array<InterviewUpdateWithWhereUniqueWithoutOrderInput>>;
  updateMany?: InputMaybe<Array<InterviewUpdateManyWithWhereWithoutOrderInput>>;
  upsert?: InputMaybe<Array<InterviewUpsertWithWhereUniqueWithoutOrderInput>>;
};

export type InterviewUpdateManyWithoutWorkerNestedInput = {
  connect?: InputMaybe<Array<InterviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InterviewCreateOrConnectWithoutWorkerInput>>;
  create?: InputMaybe<Array<InterviewCreateWithoutWorkerInput>>;
  createMany?: InputMaybe<InterviewCreateManyWorkerInputEnvelope>;
  delete?: InputMaybe<Array<InterviewWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<InterviewScalarWhereInput>>;
  disconnect?: InputMaybe<Array<InterviewWhereUniqueInput>>;
  set?: InputMaybe<Array<InterviewWhereUniqueInput>>;
  update?: InputMaybe<Array<InterviewUpdateWithWhereUniqueWithoutWorkerInput>>;
  updateMany?: InputMaybe<Array<InterviewUpdateManyWithWhereWithoutWorkerInput>>;
  upsert?: InputMaybe<Array<InterviewUpsertWithWhereUniqueWithoutWorkerInput>>;
};

export type InterviewUpdateOneWithoutPaymentsNestedInput = {
  connect?: InputMaybe<InterviewWhereUniqueInput>;
  connectOrCreate?: InputMaybe<InterviewCreateOrConnectWithoutPaymentsInput>;
  create?: InputMaybe<InterviewCreateWithoutPaymentsInput>;
  delete?: InputMaybe<InterviewWhereInput>;
  disconnect?: InputMaybe<InterviewWhereInput>;
  update?: InputMaybe<InterviewUpdateToOneWithWhereWithoutPaymentsInput>;
  upsert?: InputMaybe<InterviewUpsertWithoutPaymentsInput>;
};

export type InterviewUpdateToOneWithWhereWithoutPaymentsInput = {
  data: InterviewUpdateWithoutPaymentsInput;
  where?: InputMaybe<InterviewWhereInput>;
};

export type InterviewUpdateWithWhereUniqueWithoutAdminInput = {
  data: InterviewUpdateWithoutAdminInput;
  where: InterviewWhereUniqueInput;
};

export type InterviewUpdateWithWhereUniqueWithoutClientInput = {
  data: InterviewUpdateWithoutClientInput;
  where: InterviewWhereUniqueInput;
};

export type InterviewUpdateWithWhereUniqueWithoutOrderInput = {
  data: InterviewUpdateWithoutOrderInput;
  where: InterviewWhereUniqueInput;
};

export type InterviewUpdateWithWhereUniqueWithoutWorkerInput = {
  data: InterviewUpdateWithoutWorkerInput;
  where: InterviewWhereUniqueInput;
};

export type InterviewUpdateWithoutAdminInput = {
  Client?: InputMaybe<ClientUpdateOneWithoutInterviewsNestedInput>;
  adminAttended?: InputMaybe<BoolFieldUpdateOperationsInput>;
  adminName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  availableTimes?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  clientAttended?: InputMaybe<BoolFieldUpdateOperationsInput>;
  clientConfirmationTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  clientConfirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  clientNotificationTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  clientNotified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dateTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  duration?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  meetingType?: InputMaybe<EnumMeetingTypeFieldUpdateOperationsInput>;
  notes?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  order?: InputMaybe<OrderUpdateOneWithoutInterviewsNestedInput>;
  payments?: InputMaybe<PaymentUpdateManyWithoutInterviewNestedInput>;
  rating?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  result?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  resultNotes?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scheduledAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumInterviewStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  worker?: InputMaybe<WorkerUpdateOneRequiredWithoutInterviewsNestedInput>;
  workerAttended?: InputMaybe<BoolFieldUpdateOperationsInput>;
  workerConfirmationTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  workerConfirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  workerNotificationTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  workerNotified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  zoomMeeting?: InputMaybe<ZoomMeetingUpdateOneWithoutInterviewNestedInput>;
};

export type InterviewUpdateWithoutClientInput = {
  admin?: InputMaybe<AdminUpdateOneWithoutInterviewNestedInput>;
  adminAttended?: InputMaybe<BoolFieldUpdateOperationsInput>;
  adminName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  availableTimes?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  clientAttended?: InputMaybe<BoolFieldUpdateOperationsInput>;
  clientConfirmationTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  clientConfirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  clientNotificationTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  clientNotified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dateTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  duration?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  meetingType?: InputMaybe<EnumMeetingTypeFieldUpdateOperationsInput>;
  notes?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  order?: InputMaybe<OrderUpdateOneWithoutInterviewsNestedInput>;
  payments?: InputMaybe<PaymentUpdateManyWithoutInterviewNestedInput>;
  rating?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  result?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  resultNotes?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scheduledAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumInterviewStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  worker?: InputMaybe<WorkerUpdateOneRequiredWithoutInterviewsNestedInput>;
  workerAttended?: InputMaybe<BoolFieldUpdateOperationsInput>;
  workerConfirmationTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  workerConfirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  workerNotificationTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  workerNotified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  zoomMeeting?: InputMaybe<ZoomMeetingUpdateOneWithoutInterviewNestedInput>;
};

export type InterviewUpdateWithoutOrderInput = {
  Client?: InputMaybe<ClientUpdateOneWithoutInterviewsNestedInput>;
  admin?: InputMaybe<AdminUpdateOneWithoutInterviewNestedInput>;
  adminAttended?: InputMaybe<BoolFieldUpdateOperationsInput>;
  adminName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  availableTimes?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  clientAttended?: InputMaybe<BoolFieldUpdateOperationsInput>;
  clientConfirmationTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  clientConfirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  clientNotificationTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  clientNotified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dateTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  duration?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  meetingType?: InputMaybe<EnumMeetingTypeFieldUpdateOperationsInput>;
  notes?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  payments?: InputMaybe<PaymentUpdateManyWithoutInterviewNestedInput>;
  rating?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  result?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  resultNotes?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scheduledAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumInterviewStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  worker?: InputMaybe<WorkerUpdateOneRequiredWithoutInterviewsNestedInput>;
  workerAttended?: InputMaybe<BoolFieldUpdateOperationsInput>;
  workerConfirmationTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  workerConfirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  workerNotificationTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  workerNotified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  zoomMeeting?: InputMaybe<ZoomMeetingUpdateOneWithoutInterviewNestedInput>;
};

export type InterviewUpdateWithoutPaymentsInput = {
  Client?: InputMaybe<ClientUpdateOneWithoutInterviewsNestedInput>;
  admin?: InputMaybe<AdminUpdateOneWithoutInterviewNestedInput>;
  adminAttended?: InputMaybe<BoolFieldUpdateOperationsInput>;
  adminName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  availableTimes?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  clientAttended?: InputMaybe<BoolFieldUpdateOperationsInput>;
  clientConfirmationTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  clientConfirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  clientNotificationTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  clientNotified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dateTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  duration?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  meetingType?: InputMaybe<EnumMeetingTypeFieldUpdateOperationsInput>;
  notes?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  order?: InputMaybe<OrderUpdateOneWithoutInterviewsNestedInput>;
  rating?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  result?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  resultNotes?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scheduledAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumInterviewStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  worker?: InputMaybe<WorkerUpdateOneRequiredWithoutInterviewsNestedInput>;
  workerAttended?: InputMaybe<BoolFieldUpdateOperationsInput>;
  workerConfirmationTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  workerConfirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  workerNotificationTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  workerNotified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  zoomMeeting?: InputMaybe<ZoomMeetingUpdateOneWithoutInterviewNestedInput>;
};

export type InterviewUpdateWithoutWorkerInput = {
  Client?: InputMaybe<ClientUpdateOneWithoutInterviewsNestedInput>;
  admin?: InputMaybe<AdminUpdateOneWithoutInterviewNestedInput>;
  adminAttended?: InputMaybe<BoolFieldUpdateOperationsInput>;
  adminName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  availableTimes?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  clientAttended?: InputMaybe<BoolFieldUpdateOperationsInput>;
  clientConfirmationTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  clientConfirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  clientNotificationTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  clientNotified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dateTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  duration?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  meetingType?: InputMaybe<EnumMeetingTypeFieldUpdateOperationsInput>;
  notes?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  order?: InputMaybe<OrderUpdateOneWithoutInterviewsNestedInput>;
  payments?: InputMaybe<PaymentUpdateManyWithoutInterviewNestedInput>;
  rating?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  result?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  resultNotes?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scheduledAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumInterviewStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  workerAttended?: InputMaybe<BoolFieldUpdateOperationsInput>;
  workerConfirmationTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  workerConfirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  workerNotificationTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  workerNotified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  zoomMeeting?: InputMaybe<ZoomMeetingUpdateOneWithoutInterviewNestedInput>;
};

export type InterviewUpsertWithWhereUniqueWithoutAdminInput = {
  create: InterviewCreateWithoutAdminInput;
  update: InterviewUpdateWithoutAdminInput;
  where: InterviewWhereUniqueInput;
};

export type InterviewUpsertWithWhereUniqueWithoutClientInput = {
  create: InterviewCreateWithoutClientInput;
  update: InterviewUpdateWithoutClientInput;
  where: InterviewWhereUniqueInput;
};

export type InterviewUpsertWithWhereUniqueWithoutOrderInput = {
  create: InterviewCreateWithoutOrderInput;
  update: InterviewUpdateWithoutOrderInput;
  where: InterviewWhereUniqueInput;
};

export type InterviewUpsertWithWhereUniqueWithoutWorkerInput = {
  create: InterviewCreateWithoutWorkerInput;
  update: InterviewUpdateWithoutWorkerInput;
  where: InterviewWhereUniqueInput;
};

export type InterviewUpsertWithoutPaymentsInput = {
  create: InterviewCreateWithoutPaymentsInput;
  update: InterviewUpdateWithoutPaymentsInput;
  where?: InputMaybe<InterviewWhereInput>;
};

export type InterviewWhereInput = {
  AND?: InputMaybe<Array<InterviewWhereInput>>;
  Client?: InputMaybe<ClientNullableScalarRelationFilter>;
  NOT?: InputMaybe<Array<InterviewWhereInput>>;
  OR?: InputMaybe<Array<InterviewWhereInput>>;
  admin?: InputMaybe<AdminNullableScalarRelationFilter>;
  adminAttended?: InputMaybe<BoolFilter>;
  adminId?: InputMaybe<StringFilter>;
  adminName?: InputMaybe<StringNullableFilter>;
  availableTimes?: InputMaybe<StringNullableFilter>;
  clientAttended?: InputMaybe<BoolFilter>;
  clientConfirmationTime?: InputMaybe<DateTimeNullableFilter>;
  clientConfirmed?: InputMaybe<BoolFilter>;
  clientId?: InputMaybe<StringNullableFilter>;
  clientNotificationTime?: InputMaybe<DateTimeNullableFilter>;
  clientNotified?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dateTime?: InputMaybe<DateTimeFilter>;
  duration?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<StringFilter>;
  meetingType?: InputMaybe<EnumMeetingTypeFilter>;
  notes?: InputMaybe<StringNullableFilter>;
  order?: InputMaybe<OrderNullableScalarRelationFilter>;
  orderId?: InputMaybe<StringNullableFilter>;
  payments?: InputMaybe<PaymentListRelationFilter>;
  rating?: InputMaybe<StringNullableFilter>;
  result?: InputMaybe<StringNullableFilter>;
  resultNotes?: InputMaybe<StringNullableFilter>;
  scheduledAt?: InputMaybe<DateTimeNullableFilter>;
  status?: InputMaybe<EnumInterviewStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  worker?: InputMaybe<WorkerScalarRelationFilter>;
  workerAttended?: InputMaybe<BoolFilter>;
  workerConfirmationTime?: InputMaybe<DateTimeNullableFilter>;
  workerConfirmed?: InputMaybe<BoolFilter>;
  workerId?: InputMaybe<StringFilter>;
  workerNotificationTime?: InputMaybe<DateTimeNullableFilter>;
  workerNotified?: InputMaybe<BoolFilter>;
  zoomMeeting?: InputMaybe<ZoomMeetingNullableScalarRelationFilter>;
};

export type InterviewWhereUniqueInput = {
  AND?: InputMaybe<Array<InterviewWhereInput>>;
  Client?: InputMaybe<ClientNullableScalarRelationFilter>;
  NOT?: InputMaybe<Array<InterviewWhereInput>>;
  OR?: InputMaybe<Array<InterviewWhereInput>>;
  admin?: InputMaybe<AdminNullableScalarRelationFilter>;
  adminAttended?: InputMaybe<BoolFilter>;
  adminId?: InputMaybe<StringFilter>;
  adminName?: InputMaybe<StringNullableFilter>;
  availableTimes?: InputMaybe<StringNullableFilter>;
  clientAttended?: InputMaybe<BoolFilter>;
  clientConfirmationTime?: InputMaybe<DateTimeNullableFilter>;
  clientConfirmed?: InputMaybe<BoolFilter>;
  clientId?: InputMaybe<StringNullableFilter>;
  clientNotificationTime?: InputMaybe<DateTimeNullableFilter>;
  clientNotified?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dateTime?: InputMaybe<DateTimeFilter>;
  duration?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  meetingType?: InputMaybe<EnumMeetingTypeFilter>;
  notes?: InputMaybe<StringNullableFilter>;
  order?: InputMaybe<OrderNullableScalarRelationFilter>;
  orderId?: InputMaybe<StringNullableFilter>;
  payments?: InputMaybe<PaymentListRelationFilter>;
  rating?: InputMaybe<StringNullableFilter>;
  result?: InputMaybe<StringNullableFilter>;
  resultNotes?: InputMaybe<StringNullableFilter>;
  scheduledAt?: InputMaybe<DateTimeNullableFilter>;
  status?: InputMaybe<EnumInterviewStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  worker?: InputMaybe<WorkerScalarRelationFilter>;
  workerAttended?: InputMaybe<BoolFilter>;
  workerConfirmationTime?: InputMaybe<DateTimeNullableFilter>;
  workerConfirmed?: InputMaybe<BoolFilter>;
  workerId?: InputMaybe<StringFilter>;
  workerNotificationTime?: InputMaybe<DateTimeNullableFilter>;
  workerNotified?: InputMaybe<BoolFilter>;
  zoomMeeting?: InputMaybe<ZoomMeetingNullableScalarRelationFilter>;
};

export type LoginInput = {
  password: Scalars['String']['input'];
  usernameOrEmail: Scalars['String']['input'];
};

export enum MeetingType {
  InPerson = 'IN_PERSON',
  Online = 'ONLINE'
}

export type Mutation = {
  __typename?: 'Mutation';
  addOrderWorkerRequirement: Order;
  approveOrder: Order;
  createInterview: Interview;
  createNoonCheckout: CreateCheckoutOutput;
  createOrder: Order;
  createPricing: Pricing;
  createUser: User;
  createWorker: Worker;
  deleteInterview: Interview;
  forgotPassword: Scalars['Boolean']['output'];
  login: AuthToken;
  removeOrder: Order;
  removeOrderWorkerRequirement: Order;
  removePricing: Pricing;
  removeUser: User;
  removeWorker: Worker;
  resetPassword: Scalars['Boolean']['output'];
  scheduleInterview: Interview;
  signup: AuthToken;
  updateInterview: Interview;
  updateInterviewStatus: Interview;
  updateOrder: Order;
  updateOrderPaymentStatus: Order;
  updatePricing: Pricing;
  updateUser: User;
  updateWorker: Worker;
};


export type MutationAddOrderWorkerRequirementArgs = {
  orderId: Scalars['ID']['input'];
  requirementInput: CreateOrderWorkerRequirementInput;
};


export type MutationApproveOrderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCreateInterviewArgs = {
  data: InterviewCreateInput;
};


export type MutationCreateNoonCheckoutArgs = {
  orderId: Scalars['String']['input'];
  purpose?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateOrderArgs = {
  createOrderInput: OrderCreateInput;
};


export type MutationCreatePricingArgs = {
  input: CreatePricingInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationCreateWorkerArgs = {
  createWorkerInput: CreateWorkerInput;
};


export type MutationDeleteInterviewArgs = {
  where: InterviewWhereUniqueInput;
};


export type MutationForgotPasswordArgs = {
  forgotPasswordInput: ForgotPasswordInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRemoveOrderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveOrderWorkerRequirementArgs = {
  orderId: Scalars['ID']['input'];
  requirementId: Scalars['ID']['input'];
};


export type MutationRemovePricingArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveWorkerArgs = {
  id: Scalars['String']['input'];
};


export type MutationResetPasswordArgs = {
  resetPasswordInput: ResetPasswordInput;
};


export type MutationScheduleInterviewArgs = {
  input: ScheduleInterviewInput;
};


export type MutationSignupArgs = {
  signupInput: SignupInput;
};


export type MutationUpdateInterviewArgs = {
  data: InterviewUpdateInput;
  where: InterviewWhereUniqueInput;
};


export type MutationUpdateInterviewStatusArgs = {
  input: UpdateInterviewStatusInput;
};


export type MutationUpdateOrderArgs = {
  id: Scalars['String']['input'];
  updateOrderInput: OrderUpdateInput;
};


export type MutationUpdateOrderPaymentStatusArgs = {
  id: Scalars['ID']['input'];
  paymentId?: InputMaybe<Scalars['String']['input']>;
  status: Scalars['String']['input'];
};


export type MutationUpdatePricingArgs = {
  input: UpdatePricingInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationUpdateWorkerArgs = {
  id: Scalars['String']['input'];
  updateWorkerInput: UpdateWorkerInput;
};

export type Nationality = {
  __typename?: 'Nationality';
  _count: NationalityCount;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  orderRequirements?: Maybe<Array<OrderWorkerRequirement>>;
  pricings?: Maybe<Array<Pricing>>;
  workers?: Maybe<Array<Worker>>;
};

export type NationalityCount = {
  __typename?: 'NationalityCount';
  orderRequirements: Scalars['Int']['output'];
  pricings: Scalars['Int']['output'];
  workers: Scalars['Int']['output'];
};

export type NationalityCreateNestedOneWithoutOrderRequirementsInput = {
  connect?: InputMaybe<NationalityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NationalityCreateOrConnectWithoutOrderRequirementsInput>;
  create?: InputMaybe<NationalityCreateWithoutOrderRequirementsInput>;
};

export type NationalityCreateNestedOneWithoutPricingsInput = {
  connect?: InputMaybe<NationalityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NationalityCreateOrConnectWithoutPricingsInput>;
  create?: InputMaybe<NationalityCreateWithoutPricingsInput>;
};

export type NationalityCreateNestedOneWithoutWorkersInput = {
  connect?: InputMaybe<NationalityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NationalityCreateOrConnectWithoutWorkersInput>;
  create?: InputMaybe<NationalityCreateWithoutWorkersInput>;
};

export type NationalityCreateOrConnectWithoutOrderRequirementsInput = {
  create: NationalityCreateWithoutOrderRequirementsInput;
  where: NationalityWhereUniqueInput;
};

export type NationalityCreateOrConnectWithoutPricingsInput = {
  create: NationalityCreateWithoutPricingsInput;
  where: NationalityWhereUniqueInput;
};

export type NationalityCreateOrConnectWithoutWorkersInput = {
  create: NationalityCreateWithoutWorkersInput;
  where: NationalityWhereUniqueInput;
};

export type NationalityCreateWithoutOrderRequirementsInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  pricings?: InputMaybe<PricingCreateNestedManyWithoutNationalityInput>;
  workers?: InputMaybe<WorkerCreateNestedManyWithoutNationalityInput>;
};

export type NationalityCreateWithoutPricingsInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  orderRequirements?: InputMaybe<OrderWorkerRequirementCreateNestedManyWithoutNationalityInput>;
  workers?: InputMaybe<WorkerCreateNestedManyWithoutNationalityInput>;
};

export type NationalityCreateWithoutWorkersInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  orderRequirements?: InputMaybe<OrderWorkerRequirementCreateNestedManyWithoutNationalityInput>;
  pricings?: InputMaybe<PricingCreateNestedManyWithoutNationalityInput>;
};

export type NationalityNullableScalarRelationFilter = {
  is?: InputMaybe<NationalityWhereInput>;
  isNot?: InputMaybe<NationalityWhereInput>;
};

export type NationalityOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  orderRequirements?: InputMaybe<OrderWorkerRequirementOrderByRelationAggregateInput>;
  pricings?: InputMaybe<PricingOrderByRelationAggregateInput>;
  workers?: InputMaybe<WorkerOrderByRelationAggregateInput>;
};

export type NationalityScalarRelationFilter = {
  is?: InputMaybe<NationalityWhereInput>;
  isNot?: InputMaybe<NationalityWhereInput>;
};

export type NationalityUpdateOneRequiredWithoutPricingsNestedInput = {
  connect?: InputMaybe<NationalityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NationalityCreateOrConnectWithoutPricingsInput>;
  create?: InputMaybe<NationalityCreateWithoutPricingsInput>;
  update?: InputMaybe<NationalityUpdateToOneWithWhereWithoutPricingsInput>;
  upsert?: InputMaybe<NationalityUpsertWithoutPricingsInput>;
};

export type NationalityUpdateOneWithoutOrderRequirementsNestedInput = {
  connect?: InputMaybe<NationalityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NationalityCreateOrConnectWithoutOrderRequirementsInput>;
  create?: InputMaybe<NationalityCreateWithoutOrderRequirementsInput>;
  delete?: InputMaybe<NationalityWhereInput>;
  disconnect?: InputMaybe<NationalityWhereInput>;
  update?: InputMaybe<NationalityUpdateToOneWithWhereWithoutOrderRequirementsInput>;
  upsert?: InputMaybe<NationalityUpsertWithoutOrderRequirementsInput>;
};

export type NationalityUpdateOneWithoutWorkersNestedInput = {
  connect?: InputMaybe<NationalityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NationalityCreateOrConnectWithoutWorkersInput>;
  create?: InputMaybe<NationalityCreateWithoutWorkersInput>;
  delete?: InputMaybe<NationalityWhereInput>;
  disconnect?: InputMaybe<NationalityWhereInput>;
  update?: InputMaybe<NationalityUpdateToOneWithWhereWithoutWorkersInput>;
  upsert?: InputMaybe<NationalityUpsertWithoutWorkersInput>;
};

export type NationalityUpdateToOneWithWhereWithoutOrderRequirementsInput = {
  data: NationalityUpdateWithoutOrderRequirementsInput;
  where?: InputMaybe<NationalityWhereInput>;
};

export type NationalityUpdateToOneWithWhereWithoutPricingsInput = {
  data: NationalityUpdateWithoutPricingsInput;
  where?: InputMaybe<NationalityWhereInput>;
};

export type NationalityUpdateToOneWithWhereWithoutWorkersInput = {
  data: NationalityUpdateWithoutWorkersInput;
  where?: InputMaybe<NationalityWhereInput>;
};

export type NationalityUpdateWithoutOrderRequirementsInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pricings?: InputMaybe<PricingUpdateManyWithoutNationalityNestedInput>;
  workers?: InputMaybe<WorkerUpdateManyWithoutNationalityNestedInput>;
};

export type NationalityUpdateWithoutPricingsInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderRequirements?: InputMaybe<OrderWorkerRequirementUpdateManyWithoutNationalityNestedInput>;
  workers?: InputMaybe<WorkerUpdateManyWithoutNationalityNestedInput>;
};

export type NationalityUpdateWithoutWorkersInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderRequirements?: InputMaybe<OrderWorkerRequirementUpdateManyWithoutNationalityNestedInput>;
  pricings?: InputMaybe<PricingUpdateManyWithoutNationalityNestedInput>;
};

export type NationalityUpsertWithoutOrderRequirementsInput = {
  create: NationalityCreateWithoutOrderRequirementsInput;
  update: NationalityUpdateWithoutOrderRequirementsInput;
  where?: InputMaybe<NationalityWhereInput>;
};

export type NationalityUpsertWithoutPricingsInput = {
  create: NationalityCreateWithoutPricingsInput;
  update: NationalityUpdateWithoutPricingsInput;
  where?: InputMaybe<NationalityWhereInput>;
};

export type NationalityUpsertWithoutWorkersInput = {
  create: NationalityCreateWithoutWorkersInput;
  update: NationalityUpdateWithoutWorkersInput;
  where?: InputMaybe<NationalityWhereInput>;
};

export type NationalityWhereInput = {
  AND?: InputMaybe<Array<NationalityWhereInput>>;
  NOT?: InputMaybe<Array<NationalityWhereInput>>;
  OR?: InputMaybe<Array<NationalityWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  orderRequirements?: InputMaybe<OrderWorkerRequirementListRelationFilter>;
  pricings?: InputMaybe<PricingListRelationFilter>;
  workers?: InputMaybe<WorkerListRelationFilter>;
};

export type NationalityWhereUniqueInput = {
  AND?: InputMaybe<Array<NationalityWhereInput>>;
  NOT?: InputMaybe<Array<NationalityWhereInput>>;
  OR?: InputMaybe<Array<NationalityWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orderRequirements?: InputMaybe<OrderWorkerRequirementListRelationFilter>;
  pricings?: InputMaybe<PricingListRelationFilter>;
  workers?: InputMaybe<WorkerListRelationFilter>;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumInterviewStatusFilter = {
  equals?: InputMaybe<InterviewStatus>;
  in?: InputMaybe<Array<InterviewStatus>>;
  not?: InputMaybe<NestedEnumInterviewStatusFilter>;
  notIn?: InputMaybe<Array<InterviewStatus>>;
};

export type NestedEnumMeetingTypeFilter = {
  equals?: InputMaybe<MeetingType>;
  in?: InputMaybe<Array<MeetingType>>;
  not?: InputMaybe<NestedEnumMeetingTypeFilter>;
  notIn?: InputMaybe<Array<MeetingType>>;
};

export type NestedEnumPaymentPurposeNullableFilter = {
  equals?: InputMaybe<PaymentPurpose>;
  in?: InputMaybe<Array<PaymentPurpose>>;
  not?: InputMaybe<NestedEnumPaymentPurposeNullableFilter>;
  notIn?: InputMaybe<Array<PaymentPurpose>>;
};

export type NestedEnumPaymentStatusFilter = {
  equals?: InputMaybe<PaymentStatus>;
  in?: InputMaybe<Array<PaymentStatus>>;
  not?: InputMaybe<NestedEnumPaymentStatusFilter>;
  notIn?: InputMaybe<Array<PaymentStatus>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NullableEnumPaymentPurposeFieldUpdateOperationsInput = {
  set?: InputMaybe<PaymentPurpose>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']['input']>;
  divide?: InputMaybe<Scalars['Float']['input']>;
  increment?: InputMaybe<Scalars['Float']['input']>;
  multiply?: InputMaybe<Scalars['Float']['input']>;
  set?: InputMaybe<Scalars['Float']['input']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Order = {
  __typename?: 'Order';
  _count: OrderCount;
  amount: Scalars['Float']['output'];
  client: Client;
  clientId: Scalars['String']['output'];
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  finalPayment?: Maybe<Scalars['Float']['output']>;
  hoursDuty?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  initialPayment?: Maybe<Scalars['Float']['output']>;
  interviews?: Maybe<Array<Interview>>;
  isApproved: Scalars['Boolean']['output'];
  paymentMethod?: Maybe<Scalars['String']['output']>;
  paymentPercentage?: Maybe<Scalars['Float']['output']>;
  paymentProof?: Maybe<Scalars['String']['output']>;
  paymentStatus: PaymentStatus;
  payments?: Maybe<Array<Payment>>;
  price?: Maybe<Scalars['Float']['output']>;
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  workerRequirements?: Maybe<Array<OrderWorkerRequirement>>;
};

export type OrderCount = {
  __typename?: 'OrderCount';
  interviews: Scalars['Int']['output'];
  payments: Scalars['Int']['output'];
  workerRequirements: Scalars['Int']['output'];
};

export type OrderCreateInput = {
  amount: Scalars['Float']['input'];
  client: ClientCreateNestedOneWithoutOrdersInput;
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  finalPayment?: InputMaybe<Scalars['Float']['input']>;
  hoursDuty?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  initialPayment?: InputMaybe<Scalars['Float']['input']>;
  interviews?: InputMaybe<InterviewCreateNestedManyWithoutOrderInput>;
  isApproved?: InputMaybe<Scalars['Boolean']['input']>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  paymentPercentage?: InputMaybe<Scalars['Float']['input']>;
  paymentProof?: InputMaybe<Scalars['String']['input']>;
  paymentStatus?: InputMaybe<PaymentStatus>;
  payments?: InputMaybe<PaymentCreateNestedManyWithoutOrderInput>;
  price?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workerRequirements?: InputMaybe<OrderWorkerRequirementCreateNestedManyWithoutOrderInput>;
};

export type OrderCreateManyClientInput = {
  amount: Scalars['Float']['input'];
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  finalPayment?: InputMaybe<Scalars['Float']['input']>;
  hoursDuty?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  initialPayment?: InputMaybe<Scalars['Float']['input']>;
  isApproved?: InputMaybe<Scalars['Boolean']['input']>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  paymentPercentage?: InputMaybe<Scalars['Float']['input']>;
  paymentProof?: InputMaybe<Scalars['String']['input']>;
  paymentStatus?: InputMaybe<PaymentStatus>;
  price?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderCreateManyClientInputEnvelope = {
  data: Array<OrderCreateManyClientInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderCreateNestedManyWithoutClientInput = {
  connect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderCreateOrConnectWithoutClientInput>>;
  create?: InputMaybe<Array<OrderCreateWithoutClientInput>>;
  createMany?: InputMaybe<OrderCreateManyClientInputEnvelope>;
};

export type OrderCreateNestedOneWithoutInterviewsInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrderCreateOrConnectWithoutInterviewsInput>;
  create?: InputMaybe<OrderCreateWithoutInterviewsInput>;
};

export type OrderCreateNestedOneWithoutPaymentsInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrderCreateOrConnectWithoutPaymentsInput>;
  create?: InputMaybe<OrderCreateWithoutPaymentsInput>;
};

export type OrderCreateNestedOneWithoutWorkerRequirementsInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrderCreateOrConnectWithoutWorkerRequirementsInput>;
  create?: InputMaybe<OrderCreateWithoutWorkerRequirementsInput>;
};

export type OrderCreateOrConnectWithoutClientInput = {
  create: OrderCreateWithoutClientInput;
  where: OrderWhereUniqueInput;
};

export type OrderCreateOrConnectWithoutInterviewsInput = {
  create: OrderCreateWithoutInterviewsInput;
  where: OrderWhereUniqueInput;
};

export type OrderCreateOrConnectWithoutPaymentsInput = {
  create: OrderCreateWithoutPaymentsInput;
  where: OrderWhereUniqueInput;
};

export type OrderCreateOrConnectWithoutWorkerRequirementsInput = {
  create: OrderCreateWithoutWorkerRequirementsInput;
  where: OrderWhereUniqueInput;
};

export type OrderCreateWithoutClientInput = {
  amount: Scalars['Float']['input'];
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  finalPayment?: InputMaybe<Scalars['Float']['input']>;
  hoursDuty?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  initialPayment?: InputMaybe<Scalars['Float']['input']>;
  interviews?: InputMaybe<InterviewCreateNestedManyWithoutOrderInput>;
  isApproved?: InputMaybe<Scalars['Boolean']['input']>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  paymentPercentage?: InputMaybe<Scalars['Float']['input']>;
  paymentProof?: InputMaybe<Scalars['String']['input']>;
  paymentStatus?: InputMaybe<PaymentStatus>;
  payments?: InputMaybe<PaymentCreateNestedManyWithoutOrderInput>;
  price?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workerRequirements?: InputMaybe<OrderWorkerRequirementCreateNestedManyWithoutOrderInput>;
};

export type OrderCreateWithoutInterviewsInput = {
  amount: Scalars['Float']['input'];
  client: ClientCreateNestedOneWithoutOrdersInput;
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  finalPayment?: InputMaybe<Scalars['Float']['input']>;
  hoursDuty?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  initialPayment?: InputMaybe<Scalars['Float']['input']>;
  isApproved?: InputMaybe<Scalars['Boolean']['input']>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  paymentPercentage?: InputMaybe<Scalars['Float']['input']>;
  paymentProof?: InputMaybe<Scalars['String']['input']>;
  paymentStatus?: InputMaybe<PaymentStatus>;
  payments?: InputMaybe<PaymentCreateNestedManyWithoutOrderInput>;
  price?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workerRequirements?: InputMaybe<OrderWorkerRequirementCreateNestedManyWithoutOrderInput>;
};

export type OrderCreateWithoutPaymentsInput = {
  amount: Scalars['Float']['input'];
  client: ClientCreateNestedOneWithoutOrdersInput;
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  finalPayment?: InputMaybe<Scalars['Float']['input']>;
  hoursDuty?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  initialPayment?: InputMaybe<Scalars['Float']['input']>;
  interviews?: InputMaybe<InterviewCreateNestedManyWithoutOrderInput>;
  isApproved?: InputMaybe<Scalars['Boolean']['input']>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  paymentPercentage?: InputMaybe<Scalars['Float']['input']>;
  paymentProof?: InputMaybe<Scalars['String']['input']>;
  paymentStatus?: InputMaybe<PaymentStatus>;
  price?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workerRequirements?: InputMaybe<OrderWorkerRequirementCreateNestedManyWithoutOrderInput>;
};

export type OrderCreateWithoutWorkerRequirementsInput = {
  amount: Scalars['Float']['input'];
  client: ClientCreateNestedOneWithoutOrdersInput;
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  finalPayment?: InputMaybe<Scalars['Float']['input']>;
  hoursDuty?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  initialPayment?: InputMaybe<Scalars['Float']['input']>;
  interviews?: InputMaybe<InterviewCreateNestedManyWithoutOrderInput>;
  isApproved?: InputMaybe<Scalars['Boolean']['input']>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  paymentPercentage?: InputMaybe<Scalars['Float']['input']>;
  paymentProof?: InputMaybe<Scalars['String']['input']>;
  paymentStatus?: InputMaybe<PaymentStatus>;
  payments?: InputMaybe<PaymentCreateNestedManyWithoutOrderInput>;
  price?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderListRelationFilter = {
  every?: InputMaybe<OrderWhereInput>;
  none?: InputMaybe<OrderWhereInput>;
  some?: InputMaybe<OrderWhereInput>;
};

export type OrderNullableScalarRelationFilter = {
  is?: InputMaybe<OrderWhereInput>;
  isNot?: InputMaybe<OrderWhereInput>;
};

export type OrderOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type OrderOrderByWithRelationInput = {
  amount?: InputMaybe<SortOrder>;
  client?: InputMaybe<ClientOrderByWithRelationInput>;
  clientId?: InputMaybe<SortOrder>;
  completedAt?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrderInput>;
  finalPayment?: InputMaybe<SortOrderInput>;
  hoursDuty?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  initialPayment?: InputMaybe<SortOrderInput>;
  interviews?: InputMaybe<InterviewOrderByRelationAggregateInput>;
  isApproved?: InputMaybe<SortOrder>;
  paymentMethod?: InputMaybe<SortOrderInput>;
  paymentPercentage?: InputMaybe<SortOrderInput>;
  paymentProof?: InputMaybe<SortOrderInput>;
  paymentStatus?: InputMaybe<SortOrder>;
  payments?: InputMaybe<PaymentOrderByRelationAggregateInput>;
  price?: InputMaybe<SortOrderInput>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  workerRequirements?: InputMaybe<OrderWorkerRequirementOrderByRelationAggregateInput>;
};

export type OrderScalarRelationFilter = {
  is?: InputMaybe<OrderWhereInput>;
  isNot?: InputMaybe<OrderWhereInput>;
};

export type OrderScalarWhereInput = {
  AND?: InputMaybe<Array<OrderScalarWhereInput>>;
  NOT?: InputMaybe<Array<OrderScalarWhereInput>>;
  OR?: InputMaybe<Array<OrderScalarWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  clientId?: InputMaybe<StringFilter>;
  completedAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  finalPayment?: InputMaybe<FloatNullableFilter>;
  hoursDuty?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  initialPayment?: InputMaybe<FloatNullableFilter>;
  isApproved?: InputMaybe<BoolFilter>;
  paymentMethod?: InputMaybe<StringNullableFilter>;
  paymentPercentage?: InputMaybe<FloatNullableFilter>;
  paymentProof?: InputMaybe<StringNullableFilter>;
  paymentStatus?: InputMaybe<EnumPaymentStatusFilter>;
  price?: InputMaybe<FloatNullableFilter>;
  status?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type OrderUpdateInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  client?: InputMaybe<ClientUpdateOneRequiredWithoutOrdersNestedInput>;
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  finalPayment?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  hoursDuty?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  initialPayment?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  interviews?: InputMaybe<InterviewUpdateManyWithoutOrderNestedInput>;
  isApproved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  paymentMethod?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  paymentPercentage?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  paymentProof?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  paymentStatus?: InputMaybe<EnumPaymentStatusFieldUpdateOperationsInput>;
  payments?: InputMaybe<PaymentUpdateManyWithoutOrderNestedInput>;
  price?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  workerRequirements?: InputMaybe<OrderWorkerRequirementUpdateManyWithoutOrderNestedInput>;
};

export type OrderUpdateManyMutationInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  finalPayment?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  hoursDuty?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  initialPayment?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  isApproved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  paymentMethod?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  paymentPercentage?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  paymentProof?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  paymentStatus?: InputMaybe<EnumPaymentStatusFieldUpdateOperationsInput>;
  price?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type OrderUpdateManyWithWhereWithoutClientInput = {
  data: OrderUpdateManyMutationInput;
  where: OrderScalarWhereInput;
};

export type OrderUpdateManyWithoutClientNestedInput = {
  connect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderCreateOrConnectWithoutClientInput>>;
  create?: InputMaybe<Array<OrderCreateWithoutClientInput>>;
  createMany?: InputMaybe<OrderCreateManyClientInputEnvelope>;
  delete?: InputMaybe<Array<OrderWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<OrderScalarWhereInput>>;
  disconnect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  set?: InputMaybe<Array<OrderWhereUniqueInput>>;
  update?: InputMaybe<Array<OrderUpdateWithWhereUniqueWithoutClientInput>>;
  updateMany?: InputMaybe<Array<OrderUpdateManyWithWhereWithoutClientInput>>;
  upsert?: InputMaybe<Array<OrderUpsertWithWhereUniqueWithoutClientInput>>;
};

export type OrderUpdateOneRequiredWithoutWorkerRequirementsNestedInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrderCreateOrConnectWithoutWorkerRequirementsInput>;
  create?: InputMaybe<OrderCreateWithoutWorkerRequirementsInput>;
  update?: InputMaybe<OrderUpdateToOneWithWhereWithoutWorkerRequirementsInput>;
  upsert?: InputMaybe<OrderUpsertWithoutWorkerRequirementsInput>;
};

export type OrderUpdateOneWithoutInterviewsNestedInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrderCreateOrConnectWithoutInterviewsInput>;
  create?: InputMaybe<OrderCreateWithoutInterviewsInput>;
  delete?: InputMaybe<OrderWhereInput>;
  disconnect?: InputMaybe<OrderWhereInput>;
  update?: InputMaybe<OrderUpdateToOneWithWhereWithoutInterviewsInput>;
  upsert?: InputMaybe<OrderUpsertWithoutInterviewsInput>;
};

export type OrderUpdateOneWithoutPaymentsNestedInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrderCreateOrConnectWithoutPaymentsInput>;
  create?: InputMaybe<OrderCreateWithoutPaymentsInput>;
  delete?: InputMaybe<OrderWhereInput>;
  disconnect?: InputMaybe<OrderWhereInput>;
  update?: InputMaybe<OrderUpdateToOneWithWhereWithoutPaymentsInput>;
  upsert?: InputMaybe<OrderUpsertWithoutPaymentsInput>;
};

export type OrderUpdateToOneWithWhereWithoutInterviewsInput = {
  data: OrderUpdateWithoutInterviewsInput;
  where?: InputMaybe<OrderWhereInput>;
};

export type OrderUpdateToOneWithWhereWithoutPaymentsInput = {
  data: OrderUpdateWithoutPaymentsInput;
  where?: InputMaybe<OrderWhereInput>;
};

export type OrderUpdateToOneWithWhereWithoutWorkerRequirementsInput = {
  data: OrderUpdateWithoutWorkerRequirementsInput;
  where?: InputMaybe<OrderWhereInput>;
};

export type OrderUpdateWithWhereUniqueWithoutClientInput = {
  data: OrderUpdateWithoutClientInput;
  where: OrderWhereUniqueInput;
};

export type OrderUpdateWithoutClientInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  finalPayment?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  hoursDuty?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  initialPayment?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  interviews?: InputMaybe<InterviewUpdateManyWithoutOrderNestedInput>;
  isApproved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  paymentMethod?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  paymentPercentage?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  paymentProof?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  paymentStatus?: InputMaybe<EnumPaymentStatusFieldUpdateOperationsInput>;
  payments?: InputMaybe<PaymentUpdateManyWithoutOrderNestedInput>;
  price?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  workerRequirements?: InputMaybe<OrderWorkerRequirementUpdateManyWithoutOrderNestedInput>;
};

export type OrderUpdateWithoutInterviewsInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  client?: InputMaybe<ClientUpdateOneRequiredWithoutOrdersNestedInput>;
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  finalPayment?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  hoursDuty?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  initialPayment?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  isApproved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  paymentMethod?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  paymentPercentage?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  paymentProof?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  paymentStatus?: InputMaybe<EnumPaymentStatusFieldUpdateOperationsInput>;
  payments?: InputMaybe<PaymentUpdateManyWithoutOrderNestedInput>;
  price?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  workerRequirements?: InputMaybe<OrderWorkerRequirementUpdateManyWithoutOrderNestedInput>;
};

export type OrderUpdateWithoutPaymentsInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  client?: InputMaybe<ClientUpdateOneRequiredWithoutOrdersNestedInput>;
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  finalPayment?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  hoursDuty?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  initialPayment?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  interviews?: InputMaybe<InterviewUpdateManyWithoutOrderNestedInput>;
  isApproved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  paymentMethod?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  paymentPercentage?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  paymentProof?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  paymentStatus?: InputMaybe<EnumPaymentStatusFieldUpdateOperationsInput>;
  price?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  workerRequirements?: InputMaybe<OrderWorkerRequirementUpdateManyWithoutOrderNestedInput>;
};

export type OrderUpdateWithoutWorkerRequirementsInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  client?: InputMaybe<ClientUpdateOneRequiredWithoutOrdersNestedInput>;
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  finalPayment?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  hoursDuty?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  initialPayment?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  interviews?: InputMaybe<InterviewUpdateManyWithoutOrderNestedInput>;
  isApproved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  paymentMethod?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  paymentPercentage?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  paymentProof?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  paymentStatus?: InputMaybe<EnumPaymentStatusFieldUpdateOperationsInput>;
  payments?: InputMaybe<PaymentUpdateManyWithoutOrderNestedInput>;
  price?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type OrderUpsertWithWhereUniqueWithoutClientInput = {
  create: OrderCreateWithoutClientInput;
  update: OrderUpdateWithoutClientInput;
  where: OrderWhereUniqueInput;
};

export type OrderUpsertWithoutInterviewsInput = {
  create: OrderCreateWithoutInterviewsInput;
  update: OrderUpdateWithoutInterviewsInput;
  where?: InputMaybe<OrderWhereInput>;
};

export type OrderUpsertWithoutPaymentsInput = {
  create: OrderCreateWithoutPaymentsInput;
  update: OrderUpdateWithoutPaymentsInput;
  where?: InputMaybe<OrderWhereInput>;
};

export type OrderUpsertWithoutWorkerRequirementsInput = {
  create: OrderCreateWithoutWorkerRequirementsInput;
  update: OrderUpdateWithoutWorkerRequirementsInput;
  where?: InputMaybe<OrderWhereInput>;
};

export type OrderWhereInput = {
  AND?: InputMaybe<Array<OrderWhereInput>>;
  NOT?: InputMaybe<Array<OrderWhereInput>>;
  OR?: InputMaybe<Array<OrderWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  client?: InputMaybe<ClientScalarRelationFilter>;
  clientId?: InputMaybe<StringFilter>;
  completedAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  finalPayment?: InputMaybe<FloatNullableFilter>;
  hoursDuty?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  initialPayment?: InputMaybe<FloatNullableFilter>;
  interviews?: InputMaybe<InterviewListRelationFilter>;
  isApproved?: InputMaybe<BoolFilter>;
  paymentMethod?: InputMaybe<StringNullableFilter>;
  paymentPercentage?: InputMaybe<FloatNullableFilter>;
  paymentProof?: InputMaybe<StringNullableFilter>;
  paymentStatus?: InputMaybe<EnumPaymentStatusFilter>;
  payments?: InputMaybe<PaymentListRelationFilter>;
  price?: InputMaybe<FloatNullableFilter>;
  status?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  workerRequirements?: InputMaybe<OrderWorkerRequirementListRelationFilter>;
};

export type OrderWhereUniqueInput = {
  AND?: InputMaybe<Array<OrderWhereInput>>;
  NOT?: InputMaybe<Array<OrderWhereInput>>;
  OR?: InputMaybe<Array<OrderWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  client?: InputMaybe<ClientScalarRelationFilter>;
  clientId?: InputMaybe<StringFilter>;
  completedAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  finalPayment?: InputMaybe<FloatNullableFilter>;
  hoursDuty?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  initialPayment?: InputMaybe<FloatNullableFilter>;
  interviews?: InputMaybe<InterviewListRelationFilter>;
  isApproved?: InputMaybe<BoolFilter>;
  paymentMethod?: InputMaybe<StringNullableFilter>;
  paymentPercentage?: InputMaybe<FloatNullableFilter>;
  paymentProof?: InputMaybe<StringNullableFilter>;
  paymentStatus?: InputMaybe<EnumPaymentStatusFilter>;
  payments?: InputMaybe<PaymentListRelationFilter>;
  price?: InputMaybe<FloatNullableFilter>;
  status?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  workerRequirements?: InputMaybe<OrderWorkerRequirementListRelationFilter>;
};

export type OrderWorkerRequirement = {
  __typename?: 'OrderWorkerRequirement';
  activity?: Maybe<Activity>;
  activityId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  nationality?: Maybe<Nationality>;
  nationalityId?: Maybe<Scalars['String']['output']>;
  order: Order;
  orderId: Scalars['String']['output'];
  position?: Maybe<Position>;
  positionId?: Maybe<Scalars['String']['output']>;
  quantity: Scalars['Int']['output'];
  specialty?: Maybe<Specialty>;
  specialtyId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderWorkerRequirementCreateManyActivityInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  nationalityId?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['String']['input'];
  positionId?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  specialtyId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderWorkerRequirementCreateManyActivityInputEnvelope = {
  data: Array<OrderWorkerRequirementCreateManyActivityInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderWorkerRequirementCreateManyNationalityInput = {
  activityId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['String']['input'];
  positionId?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  specialtyId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderWorkerRequirementCreateManyNationalityInputEnvelope = {
  data: Array<OrderWorkerRequirementCreateManyNationalityInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderWorkerRequirementCreateManyOrderInput = {
  activityId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  nationalityId?: InputMaybe<Scalars['String']['input']>;
  positionId?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  specialtyId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderWorkerRequirementCreateManyOrderInputEnvelope = {
  data: Array<OrderWorkerRequirementCreateManyOrderInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderWorkerRequirementCreateManyPositionInput = {
  activityId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  nationalityId?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
  specialtyId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderWorkerRequirementCreateManyPositionInputEnvelope = {
  data: Array<OrderWorkerRequirementCreateManyPositionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderWorkerRequirementCreateManySpecialtyInput = {
  activityId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  nationalityId?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['String']['input'];
  positionId?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderWorkerRequirementCreateManySpecialtyInputEnvelope = {
  data: Array<OrderWorkerRequirementCreateManySpecialtyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderWorkerRequirementCreateNestedManyWithoutActivityInput = {
  connect?: InputMaybe<Array<OrderWorkerRequirementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderWorkerRequirementCreateOrConnectWithoutActivityInput>>;
  create?: InputMaybe<Array<OrderWorkerRequirementCreateWithoutActivityInput>>;
  createMany?: InputMaybe<OrderWorkerRequirementCreateManyActivityInputEnvelope>;
};

export type OrderWorkerRequirementCreateNestedManyWithoutNationalityInput = {
  connect?: InputMaybe<Array<OrderWorkerRequirementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderWorkerRequirementCreateOrConnectWithoutNationalityInput>>;
  create?: InputMaybe<Array<OrderWorkerRequirementCreateWithoutNationalityInput>>;
  createMany?: InputMaybe<OrderWorkerRequirementCreateManyNationalityInputEnvelope>;
};

export type OrderWorkerRequirementCreateNestedManyWithoutOrderInput = {
  connect?: InputMaybe<Array<OrderWorkerRequirementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderWorkerRequirementCreateOrConnectWithoutOrderInput>>;
  create?: InputMaybe<Array<OrderWorkerRequirementCreateWithoutOrderInput>>;
  createMany?: InputMaybe<OrderWorkerRequirementCreateManyOrderInputEnvelope>;
};

export type OrderWorkerRequirementCreateNestedManyWithoutPositionInput = {
  connect?: InputMaybe<Array<OrderWorkerRequirementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderWorkerRequirementCreateOrConnectWithoutPositionInput>>;
  create?: InputMaybe<Array<OrderWorkerRequirementCreateWithoutPositionInput>>;
  createMany?: InputMaybe<OrderWorkerRequirementCreateManyPositionInputEnvelope>;
};

export type OrderWorkerRequirementCreateNestedManyWithoutSpecialtyInput = {
  connect?: InputMaybe<Array<OrderWorkerRequirementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderWorkerRequirementCreateOrConnectWithoutSpecialtyInput>>;
  create?: InputMaybe<Array<OrderWorkerRequirementCreateWithoutSpecialtyInput>>;
  createMany?: InputMaybe<OrderWorkerRequirementCreateManySpecialtyInputEnvelope>;
};

export type OrderWorkerRequirementCreateOrConnectWithoutActivityInput = {
  create: OrderWorkerRequirementCreateWithoutActivityInput;
  where: OrderWorkerRequirementWhereUniqueInput;
};

export type OrderWorkerRequirementCreateOrConnectWithoutNationalityInput = {
  create: OrderWorkerRequirementCreateWithoutNationalityInput;
  where: OrderWorkerRequirementWhereUniqueInput;
};

export type OrderWorkerRequirementCreateOrConnectWithoutOrderInput = {
  create: OrderWorkerRequirementCreateWithoutOrderInput;
  where: OrderWorkerRequirementWhereUniqueInput;
};

export type OrderWorkerRequirementCreateOrConnectWithoutPositionInput = {
  create: OrderWorkerRequirementCreateWithoutPositionInput;
  where: OrderWorkerRequirementWhereUniqueInput;
};

export type OrderWorkerRequirementCreateOrConnectWithoutSpecialtyInput = {
  create: OrderWorkerRequirementCreateWithoutSpecialtyInput;
  where: OrderWorkerRequirementWhereUniqueInput;
};

export type OrderWorkerRequirementCreateWithoutActivityInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<NationalityCreateNestedOneWithoutOrderRequirementsInput>;
  order: OrderCreateNestedOneWithoutWorkerRequirementsInput;
  position?: InputMaybe<PositionCreateNestedOneWithoutOrderRequirementsInput>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  specialty?: InputMaybe<SpecialtyCreateNestedOneWithoutOrderRequirementsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderWorkerRequirementCreateWithoutNationalityInput = {
  activity?: InputMaybe<ActivityCreateNestedOneWithoutOrderRequirementsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  order: OrderCreateNestedOneWithoutWorkerRequirementsInput;
  position?: InputMaybe<PositionCreateNestedOneWithoutOrderRequirementsInput>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  specialty?: InputMaybe<SpecialtyCreateNestedOneWithoutOrderRequirementsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderWorkerRequirementCreateWithoutOrderInput = {
  activity?: InputMaybe<ActivityCreateNestedOneWithoutOrderRequirementsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<NationalityCreateNestedOneWithoutOrderRequirementsInput>;
  position?: InputMaybe<PositionCreateNestedOneWithoutOrderRequirementsInput>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  specialty?: InputMaybe<SpecialtyCreateNestedOneWithoutOrderRequirementsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderWorkerRequirementCreateWithoutPositionInput = {
  activity?: InputMaybe<ActivityCreateNestedOneWithoutOrderRequirementsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<NationalityCreateNestedOneWithoutOrderRequirementsInput>;
  order: OrderCreateNestedOneWithoutWorkerRequirementsInput;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  specialty?: InputMaybe<SpecialtyCreateNestedOneWithoutOrderRequirementsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderWorkerRequirementCreateWithoutSpecialtyInput = {
  activity?: InputMaybe<ActivityCreateNestedOneWithoutOrderRequirementsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<NationalityCreateNestedOneWithoutOrderRequirementsInput>;
  order: OrderCreateNestedOneWithoutWorkerRequirementsInput;
  position?: InputMaybe<PositionCreateNestedOneWithoutOrderRequirementsInput>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderWorkerRequirementListRelationFilter = {
  every?: InputMaybe<OrderWorkerRequirementWhereInput>;
  none?: InputMaybe<OrderWorkerRequirementWhereInput>;
  some?: InputMaybe<OrderWorkerRequirementWhereInput>;
};

export type OrderWorkerRequirementOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type OrderWorkerRequirementScalarWhereInput = {
  AND?: InputMaybe<Array<OrderWorkerRequirementScalarWhereInput>>;
  NOT?: InputMaybe<Array<OrderWorkerRequirementScalarWhereInput>>;
  OR?: InputMaybe<Array<OrderWorkerRequirementScalarWhereInput>>;
  activityId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  nationalityId?: InputMaybe<StringNullableFilter>;
  orderId?: InputMaybe<StringFilter>;
  positionId?: InputMaybe<StringNullableFilter>;
  quantity?: InputMaybe<IntFilter>;
  specialtyId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type OrderWorkerRequirementUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type OrderWorkerRequirementUpdateManyWithWhereWithoutActivityInput = {
  data: OrderWorkerRequirementUpdateManyMutationInput;
  where: OrderWorkerRequirementScalarWhereInput;
};

export type OrderWorkerRequirementUpdateManyWithWhereWithoutNationalityInput = {
  data: OrderWorkerRequirementUpdateManyMutationInput;
  where: OrderWorkerRequirementScalarWhereInput;
};

export type OrderWorkerRequirementUpdateManyWithWhereWithoutOrderInput = {
  data: OrderWorkerRequirementUpdateManyMutationInput;
  where: OrderWorkerRequirementScalarWhereInput;
};

export type OrderWorkerRequirementUpdateManyWithWhereWithoutPositionInput = {
  data: OrderWorkerRequirementUpdateManyMutationInput;
  where: OrderWorkerRequirementScalarWhereInput;
};

export type OrderWorkerRequirementUpdateManyWithWhereWithoutSpecialtyInput = {
  data: OrderWorkerRequirementUpdateManyMutationInput;
  where: OrderWorkerRequirementScalarWhereInput;
};

export type OrderWorkerRequirementUpdateManyWithoutActivityNestedInput = {
  connect?: InputMaybe<Array<OrderWorkerRequirementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderWorkerRequirementCreateOrConnectWithoutActivityInput>>;
  create?: InputMaybe<Array<OrderWorkerRequirementCreateWithoutActivityInput>>;
  createMany?: InputMaybe<OrderWorkerRequirementCreateManyActivityInputEnvelope>;
  delete?: InputMaybe<Array<OrderWorkerRequirementWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<OrderWorkerRequirementScalarWhereInput>>;
  disconnect?: InputMaybe<Array<OrderWorkerRequirementWhereUniqueInput>>;
  set?: InputMaybe<Array<OrderWorkerRequirementWhereUniqueInput>>;
  update?: InputMaybe<Array<OrderWorkerRequirementUpdateWithWhereUniqueWithoutActivityInput>>;
  updateMany?: InputMaybe<Array<OrderWorkerRequirementUpdateManyWithWhereWithoutActivityInput>>;
  upsert?: InputMaybe<Array<OrderWorkerRequirementUpsertWithWhereUniqueWithoutActivityInput>>;
};

export type OrderWorkerRequirementUpdateManyWithoutNationalityNestedInput = {
  connect?: InputMaybe<Array<OrderWorkerRequirementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderWorkerRequirementCreateOrConnectWithoutNationalityInput>>;
  create?: InputMaybe<Array<OrderWorkerRequirementCreateWithoutNationalityInput>>;
  createMany?: InputMaybe<OrderWorkerRequirementCreateManyNationalityInputEnvelope>;
  delete?: InputMaybe<Array<OrderWorkerRequirementWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<OrderWorkerRequirementScalarWhereInput>>;
  disconnect?: InputMaybe<Array<OrderWorkerRequirementWhereUniqueInput>>;
  set?: InputMaybe<Array<OrderWorkerRequirementWhereUniqueInput>>;
  update?: InputMaybe<Array<OrderWorkerRequirementUpdateWithWhereUniqueWithoutNationalityInput>>;
  updateMany?: InputMaybe<Array<OrderWorkerRequirementUpdateManyWithWhereWithoutNationalityInput>>;
  upsert?: InputMaybe<Array<OrderWorkerRequirementUpsertWithWhereUniqueWithoutNationalityInput>>;
};

export type OrderWorkerRequirementUpdateManyWithoutOrderNestedInput = {
  connect?: InputMaybe<Array<OrderWorkerRequirementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderWorkerRequirementCreateOrConnectWithoutOrderInput>>;
  create?: InputMaybe<Array<OrderWorkerRequirementCreateWithoutOrderInput>>;
  createMany?: InputMaybe<OrderWorkerRequirementCreateManyOrderInputEnvelope>;
  delete?: InputMaybe<Array<OrderWorkerRequirementWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<OrderWorkerRequirementScalarWhereInput>>;
  disconnect?: InputMaybe<Array<OrderWorkerRequirementWhereUniqueInput>>;
  set?: InputMaybe<Array<OrderWorkerRequirementWhereUniqueInput>>;
  update?: InputMaybe<Array<OrderWorkerRequirementUpdateWithWhereUniqueWithoutOrderInput>>;
  updateMany?: InputMaybe<Array<OrderWorkerRequirementUpdateManyWithWhereWithoutOrderInput>>;
  upsert?: InputMaybe<Array<OrderWorkerRequirementUpsertWithWhereUniqueWithoutOrderInput>>;
};

export type OrderWorkerRequirementUpdateManyWithoutPositionNestedInput = {
  connect?: InputMaybe<Array<OrderWorkerRequirementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderWorkerRequirementCreateOrConnectWithoutPositionInput>>;
  create?: InputMaybe<Array<OrderWorkerRequirementCreateWithoutPositionInput>>;
  createMany?: InputMaybe<OrderWorkerRequirementCreateManyPositionInputEnvelope>;
  delete?: InputMaybe<Array<OrderWorkerRequirementWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<OrderWorkerRequirementScalarWhereInput>>;
  disconnect?: InputMaybe<Array<OrderWorkerRequirementWhereUniqueInput>>;
  set?: InputMaybe<Array<OrderWorkerRequirementWhereUniqueInput>>;
  update?: InputMaybe<Array<OrderWorkerRequirementUpdateWithWhereUniqueWithoutPositionInput>>;
  updateMany?: InputMaybe<Array<OrderWorkerRequirementUpdateManyWithWhereWithoutPositionInput>>;
  upsert?: InputMaybe<Array<OrderWorkerRequirementUpsertWithWhereUniqueWithoutPositionInput>>;
};

export type OrderWorkerRequirementUpdateManyWithoutSpecialtyNestedInput = {
  connect?: InputMaybe<Array<OrderWorkerRequirementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderWorkerRequirementCreateOrConnectWithoutSpecialtyInput>>;
  create?: InputMaybe<Array<OrderWorkerRequirementCreateWithoutSpecialtyInput>>;
  createMany?: InputMaybe<OrderWorkerRequirementCreateManySpecialtyInputEnvelope>;
  delete?: InputMaybe<Array<OrderWorkerRequirementWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<OrderWorkerRequirementScalarWhereInput>>;
  disconnect?: InputMaybe<Array<OrderWorkerRequirementWhereUniqueInput>>;
  set?: InputMaybe<Array<OrderWorkerRequirementWhereUniqueInput>>;
  update?: InputMaybe<Array<OrderWorkerRequirementUpdateWithWhereUniqueWithoutSpecialtyInput>>;
  updateMany?: InputMaybe<Array<OrderWorkerRequirementUpdateManyWithWhereWithoutSpecialtyInput>>;
  upsert?: InputMaybe<Array<OrderWorkerRequirementUpsertWithWhereUniqueWithoutSpecialtyInput>>;
};

export type OrderWorkerRequirementUpdateWithWhereUniqueWithoutActivityInput = {
  data: OrderWorkerRequirementUpdateWithoutActivityInput;
  where: OrderWorkerRequirementWhereUniqueInput;
};

export type OrderWorkerRequirementUpdateWithWhereUniqueWithoutNationalityInput = {
  data: OrderWorkerRequirementUpdateWithoutNationalityInput;
  where: OrderWorkerRequirementWhereUniqueInput;
};

export type OrderWorkerRequirementUpdateWithWhereUniqueWithoutOrderInput = {
  data: OrderWorkerRequirementUpdateWithoutOrderInput;
  where: OrderWorkerRequirementWhereUniqueInput;
};

export type OrderWorkerRequirementUpdateWithWhereUniqueWithoutPositionInput = {
  data: OrderWorkerRequirementUpdateWithoutPositionInput;
  where: OrderWorkerRequirementWhereUniqueInput;
};

export type OrderWorkerRequirementUpdateWithWhereUniqueWithoutSpecialtyInput = {
  data: OrderWorkerRequirementUpdateWithoutSpecialtyInput;
  where: OrderWorkerRequirementWhereUniqueInput;
};

export type OrderWorkerRequirementUpdateWithoutActivityInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  nationality?: InputMaybe<NationalityUpdateOneWithoutOrderRequirementsNestedInput>;
  order?: InputMaybe<OrderUpdateOneRequiredWithoutWorkerRequirementsNestedInput>;
  position?: InputMaybe<PositionUpdateOneWithoutOrderRequirementsNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  specialty?: InputMaybe<SpecialtyUpdateOneWithoutOrderRequirementsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type OrderWorkerRequirementUpdateWithoutNationalityInput = {
  activity?: InputMaybe<ActivityUpdateOneWithoutOrderRequirementsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<OrderUpdateOneRequiredWithoutWorkerRequirementsNestedInput>;
  position?: InputMaybe<PositionUpdateOneWithoutOrderRequirementsNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  specialty?: InputMaybe<SpecialtyUpdateOneWithoutOrderRequirementsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type OrderWorkerRequirementUpdateWithoutOrderInput = {
  activity?: InputMaybe<ActivityUpdateOneWithoutOrderRequirementsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  nationality?: InputMaybe<NationalityUpdateOneWithoutOrderRequirementsNestedInput>;
  position?: InputMaybe<PositionUpdateOneWithoutOrderRequirementsNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  specialty?: InputMaybe<SpecialtyUpdateOneWithoutOrderRequirementsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type OrderWorkerRequirementUpdateWithoutPositionInput = {
  activity?: InputMaybe<ActivityUpdateOneWithoutOrderRequirementsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  nationality?: InputMaybe<NationalityUpdateOneWithoutOrderRequirementsNestedInput>;
  order?: InputMaybe<OrderUpdateOneRequiredWithoutWorkerRequirementsNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  specialty?: InputMaybe<SpecialtyUpdateOneWithoutOrderRequirementsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type OrderWorkerRequirementUpdateWithoutSpecialtyInput = {
  activity?: InputMaybe<ActivityUpdateOneWithoutOrderRequirementsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  nationality?: InputMaybe<NationalityUpdateOneWithoutOrderRequirementsNestedInput>;
  order?: InputMaybe<OrderUpdateOneRequiredWithoutWorkerRequirementsNestedInput>;
  position?: InputMaybe<PositionUpdateOneWithoutOrderRequirementsNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type OrderWorkerRequirementUpsertWithWhereUniqueWithoutActivityInput = {
  create: OrderWorkerRequirementCreateWithoutActivityInput;
  update: OrderWorkerRequirementUpdateWithoutActivityInput;
  where: OrderWorkerRequirementWhereUniqueInput;
};

export type OrderWorkerRequirementUpsertWithWhereUniqueWithoutNationalityInput = {
  create: OrderWorkerRequirementCreateWithoutNationalityInput;
  update: OrderWorkerRequirementUpdateWithoutNationalityInput;
  where: OrderWorkerRequirementWhereUniqueInput;
};

export type OrderWorkerRequirementUpsertWithWhereUniqueWithoutOrderInput = {
  create: OrderWorkerRequirementCreateWithoutOrderInput;
  update: OrderWorkerRequirementUpdateWithoutOrderInput;
  where: OrderWorkerRequirementWhereUniqueInput;
};

export type OrderWorkerRequirementUpsertWithWhereUniqueWithoutPositionInput = {
  create: OrderWorkerRequirementCreateWithoutPositionInput;
  update: OrderWorkerRequirementUpdateWithoutPositionInput;
  where: OrderWorkerRequirementWhereUniqueInput;
};

export type OrderWorkerRequirementUpsertWithWhereUniqueWithoutSpecialtyInput = {
  create: OrderWorkerRequirementCreateWithoutSpecialtyInput;
  update: OrderWorkerRequirementUpdateWithoutSpecialtyInput;
  where: OrderWorkerRequirementWhereUniqueInput;
};

export type OrderWorkerRequirementWhereInput = {
  AND?: InputMaybe<Array<OrderWorkerRequirementWhereInput>>;
  NOT?: InputMaybe<Array<OrderWorkerRequirementWhereInput>>;
  OR?: InputMaybe<Array<OrderWorkerRequirementWhereInput>>;
  activity?: InputMaybe<ActivityNullableScalarRelationFilter>;
  activityId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  nationality?: InputMaybe<NationalityNullableScalarRelationFilter>;
  nationalityId?: InputMaybe<StringNullableFilter>;
  order?: InputMaybe<OrderScalarRelationFilter>;
  orderId?: InputMaybe<StringFilter>;
  position?: InputMaybe<PositionNullableScalarRelationFilter>;
  positionId?: InputMaybe<StringNullableFilter>;
  quantity?: InputMaybe<IntFilter>;
  specialty?: InputMaybe<SpecialtyNullableScalarRelationFilter>;
  specialtyId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type OrderWorkerRequirementWhereUniqueInput = {
  AND?: InputMaybe<Array<OrderWorkerRequirementWhereInput>>;
  NOT?: InputMaybe<Array<OrderWorkerRequirementWhereInput>>;
  OR?: InputMaybe<Array<OrderWorkerRequirementWhereInput>>;
  activity?: InputMaybe<ActivityNullableScalarRelationFilter>;
  activityId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<NationalityNullableScalarRelationFilter>;
  nationalityId?: InputMaybe<StringNullableFilter>;
  order?: InputMaybe<OrderScalarRelationFilter>;
  orderId?: InputMaybe<StringFilter>;
  position?: InputMaybe<PositionNullableScalarRelationFilter>;
  positionId?: InputMaybe<StringNullableFilter>;
  quantity?: InputMaybe<IntFilter>;
  specialty?: InputMaybe<SpecialtyNullableScalarRelationFilter>;
  specialtyId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PaginationDto = {
  /** Limit */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Page */
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type PaginationMeta = {
  __typename?: 'PaginationMeta';
  limit: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Payment = {
  __typename?: 'Payment';
  amount: Scalars['Float']['output'];
  client?: Maybe<Client>;
  clientId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  dateTime: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  interview?: Maybe<Interview>;
  interviewId?: Maybe<Scalars['String']['output']>;
  noonOrderId?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Order>;
  orderId?: Maybe<Scalars['String']['output']>;
  paymentMethod?: Maybe<Scalars['String']['output']>;
  purpose?: Maybe<PaymentPurpose>;
  status: PaymentStatus;
  transactionId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type PaymentCreateManyClientInput = {
  amount: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  interviewId?: InputMaybe<Scalars['String']['input']>;
  noonOrderId?: InputMaybe<Scalars['String']['input']>;
  orderId?: InputMaybe<Scalars['String']['input']>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  purpose?: InputMaybe<PaymentPurpose>;
  status?: InputMaybe<PaymentStatus>;
  transactionId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PaymentCreateManyClientInputEnvelope = {
  data: Array<PaymentCreateManyClientInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PaymentCreateManyInterviewInput = {
  amount: Scalars['Float']['input'];
  clientId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  noonOrderId?: InputMaybe<Scalars['String']['input']>;
  orderId?: InputMaybe<Scalars['String']['input']>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  purpose?: InputMaybe<PaymentPurpose>;
  status?: InputMaybe<PaymentStatus>;
  transactionId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PaymentCreateManyInterviewInputEnvelope = {
  data: Array<PaymentCreateManyInterviewInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PaymentCreateManyOrderInput = {
  amount: Scalars['Float']['input'];
  clientId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  interviewId?: InputMaybe<Scalars['String']['input']>;
  noonOrderId?: InputMaybe<Scalars['String']['input']>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  purpose?: InputMaybe<PaymentPurpose>;
  status?: InputMaybe<PaymentStatus>;
  transactionId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PaymentCreateManyOrderInputEnvelope = {
  data: Array<PaymentCreateManyOrderInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PaymentCreateNestedManyWithoutClientInput = {
  connect?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PaymentCreateOrConnectWithoutClientInput>>;
  create?: InputMaybe<Array<PaymentCreateWithoutClientInput>>;
  createMany?: InputMaybe<PaymentCreateManyClientInputEnvelope>;
};

export type PaymentCreateNestedManyWithoutInterviewInput = {
  connect?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PaymentCreateOrConnectWithoutInterviewInput>>;
  create?: InputMaybe<Array<PaymentCreateWithoutInterviewInput>>;
  createMany?: InputMaybe<PaymentCreateManyInterviewInputEnvelope>;
};

export type PaymentCreateNestedManyWithoutOrderInput = {
  connect?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PaymentCreateOrConnectWithoutOrderInput>>;
  create?: InputMaybe<Array<PaymentCreateWithoutOrderInput>>;
  createMany?: InputMaybe<PaymentCreateManyOrderInputEnvelope>;
};

export type PaymentCreateOrConnectWithoutClientInput = {
  create: PaymentCreateWithoutClientInput;
  where: PaymentWhereUniqueInput;
};

export type PaymentCreateOrConnectWithoutInterviewInput = {
  create: PaymentCreateWithoutInterviewInput;
  where: PaymentWhereUniqueInput;
};

export type PaymentCreateOrConnectWithoutOrderInput = {
  create: PaymentCreateWithoutOrderInput;
  where: PaymentWhereUniqueInput;
};

export type PaymentCreateWithoutClientInput = {
  amount: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  interview?: InputMaybe<InterviewCreateNestedOneWithoutPaymentsInput>;
  noonOrderId?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<OrderCreateNestedOneWithoutPaymentsInput>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  purpose?: InputMaybe<PaymentPurpose>;
  status?: InputMaybe<PaymentStatus>;
  transactionId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PaymentCreateWithoutInterviewInput = {
  amount: Scalars['Float']['input'];
  client?: InputMaybe<ClientCreateNestedOneWithoutPaymentsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  noonOrderId?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<OrderCreateNestedOneWithoutPaymentsInput>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  purpose?: InputMaybe<PaymentPurpose>;
  status?: InputMaybe<PaymentStatus>;
  transactionId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PaymentCreateWithoutOrderInput = {
  amount: Scalars['Float']['input'];
  client?: InputMaybe<ClientCreateNestedOneWithoutPaymentsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  interview?: InputMaybe<InterviewCreateNestedOneWithoutPaymentsInput>;
  noonOrderId?: InputMaybe<Scalars['String']['input']>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  purpose?: InputMaybe<PaymentPurpose>;
  status?: InputMaybe<PaymentStatus>;
  transactionId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PaymentListRelationFilter = {
  every?: InputMaybe<PaymentWhereInput>;
  none?: InputMaybe<PaymentWhereInput>;
  some?: InputMaybe<PaymentWhereInput>;
};

export type PaymentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum PaymentPurpose {
  FinalPayment = 'FINAL_PAYMENT',
  InitialPayment = 'INITIAL_PAYMENT'
}

export type PaymentScalarWhereInput = {
  AND?: InputMaybe<Array<PaymentScalarWhereInput>>;
  NOT?: InputMaybe<Array<PaymentScalarWhereInput>>;
  OR?: InputMaybe<Array<PaymentScalarWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  clientId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dateTime?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  interviewId?: InputMaybe<StringNullableFilter>;
  noonOrderId?: InputMaybe<StringNullableFilter>;
  orderId?: InputMaybe<StringNullableFilter>;
  paymentMethod?: InputMaybe<StringNullableFilter>;
  purpose?: InputMaybe<EnumPaymentPurposeNullableFilter>;
  status?: InputMaybe<EnumPaymentStatusFilter>;
  transactionId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum PaymentStatus {
  Cancelled = 'CANCELLED',
  Failed = 'FAILED',
  Paid = 'PAID',
  Pending = 'PENDING'
}

export type PaymentUpdateManyMutationInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dateTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  noonOrderId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  paymentMethod?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  purpose?: InputMaybe<NullableEnumPaymentPurposeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPaymentStatusFieldUpdateOperationsInput>;
  transactionId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PaymentUpdateManyWithWhereWithoutClientInput = {
  data: PaymentUpdateManyMutationInput;
  where: PaymentScalarWhereInput;
};

export type PaymentUpdateManyWithWhereWithoutInterviewInput = {
  data: PaymentUpdateManyMutationInput;
  where: PaymentScalarWhereInput;
};

export type PaymentUpdateManyWithWhereWithoutOrderInput = {
  data: PaymentUpdateManyMutationInput;
  where: PaymentScalarWhereInput;
};

export type PaymentUpdateManyWithoutClientNestedInput = {
  connect?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PaymentCreateOrConnectWithoutClientInput>>;
  create?: InputMaybe<Array<PaymentCreateWithoutClientInput>>;
  createMany?: InputMaybe<PaymentCreateManyClientInputEnvelope>;
  delete?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PaymentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  set?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  update?: InputMaybe<Array<PaymentUpdateWithWhereUniqueWithoutClientInput>>;
  updateMany?: InputMaybe<Array<PaymentUpdateManyWithWhereWithoutClientInput>>;
  upsert?: InputMaybe<Array<PaymentUpsertWithWhereUniqueWithoutClientInput>>;
};

export type PaymentUpdateManyWithoutInterviewNestedInput = {
  connect?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PaymentCreateOrConnectWithoutInterviewInput>>;
  create?: InputMaybe<Array<PaymentCreateWithoutInterviewInput>>;
  createMany?: InputMaybe<PaymentCreateManyInterviewInputEnvelope>;
  delete?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PaymentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  set?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  update?: InputMaybe<Array<PaymentUpdateWithWhereUniqueWithoutInterviewInput>>;
  updateMany?: InputMaybe<Array<PaymentUpdateManyWithWhereWithoutInterviewInput>>;
  upsert?: InputMaybe<Array<PaymentUpsertWithWhereUniqueWithoutInterviewInput>>;
};

export type PaymentUpdateManyWithoutOrderNestedInput = {
  connect?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PaymentCreateOrConnectWithoutOrderInput>>;
  create?: InputMaybe<Array<PaymentCreateWithoutOrderInput>>;
  createMany?: InputMaybe<PaymentCreateManyOrderInputEnvelope>;
  delete?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PaymentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  set?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  update?: InputMaybe<Array<PaymentUpdateWithWhereUniqueWithoutOrderInput>>;
  updateMany?: InputMaybe<Array<PaymentUpdateManyWithWhereWithoutOrderInput>>;
  upsert?: InputMaybe<Array<PaymentUpsertWithWhereUniqueWithoutOrderInput>>;
};

export type PaymentUpdateWithWhereUniqueWithoutClientInput = {
  data: PaymentUpdateWithoutClientInput;
  where: PaymentWhereUniqueInput;
};

export type PaymentUpdateWithWhereUniqueWithoutInterviewInput = {
  data: PaymentUpdateWithoutInterviewInput;
  where: PaymentWhereUniqueInput;
};

export type PaymentUpdateWithWhereUniqueWithoutOrderInput = {
  data: PaymentUpdateWithoutOrderInput;
  where: PaymentWhereUniqueInput;
};

export type PaymentUpdateWithoutClientInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dateTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  interview?: InputMaybe<InterviewUpdateOneWithoutPaymentsNestedInput>;
  noonOrderId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  order?: InputMaybe<OrderUpdateOneWithoutPaymentsNestedInput>;
  paymentMethod?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  purpose?: InputMaybe<NullableEnumPaymentPurposeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPaymentStatusFieldUpdateOperationsInput>;
  transactionId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PaymentUpdateWithoutInterviewInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  client?: InputMaybe<ClientUpdateOneWithoutPaymentsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dateTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  noonOrderId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  order?: InputMaybe<OrderUpdateOneWithoutPaymentsNestedInput>;
  paymentMethod?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  purpose?: InputMaybe<NullableEnumPaymentPurposeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPaymentStatusFieldUpdateOperationsInput>;
  transactionId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PaymentUpdateWithoutOrderInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  client?: InputMaybe<ClientUpdateOneWithoutPaymentsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dateTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  interview?: InputMaybe<InterviewUpdateOneWithoutPaymentsNestedInput>;
  noonOrderId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  paymentMethod?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  purpose?: InputMaybe<NullableEnumPaymentPurposeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPaymentStatusFieldUpdateOperationsInput>;
  transactionId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PaymentUpsertWithWhereUniqueWithoutClientInput = {
  create: PaymentCreateWithoutClientInput;
  update: PaymentUpdateWithoutClientInput;
  where: PaymentWhereUniqueInput;
};

export type PaymentUpsertWithWhereUniqueWithoutInterviewInput = {
  create: PaymentCreateWithoutInterviewInput;
  update: PaymentUpdateWithoutInterviewInput;
  where: PaymentWhereUniqueInput;
};

export type PaymentUpsertWithWhereUniqueWithoutOrderInput = {
  create: PaymentCreateWithoutOrderInput;
  update: PaymentUpdateWithoutOrderInput;
  where: PaymentWhereUniqueInput;
};

export type PaymentWhereInput = {
  AND?: InputMaybe<Array<PaymentWhereInput>>;
  NOT?: InputMaybe<Array<PaymentWhereInput>>;
  OR?: InputMaybe<Array<PaymentWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  client?: InputMaybe<ClientNullableScalarRelationFilter>;
  clientId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dateTime?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  interview?: InputMaybe<InterviewNullableScalarRelationFilter>;
  interviewId?: InputMaybe<StringNullableFilter>;
  noonOrderId?: InputMaybe<StringNullableFilter>;
  order?: InputMaybe<OrderNullableScalarRelationFilter>;
  orderId?: InputMaybe<StringNullableFilter>;
  paymentMethod?: InputMaybe<StringNullableFilter>;
  purpose?: InputMaybe<EnumPaymentPurposeNullableFilter>;
  status?: InputMaybe<EnumPaymentStatusFilter>;
  transactionId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PaymentWhereUniqueInput = {
  AND?: InputMaybe<Array<PaymentWhereInput>>;
  NOT?: InputMaybe<Array<PaymentWhereInput>>;
  OR?: InputMaybe<Array<PaymentWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  client?: InputMaybe<ClientNullableScalarRelationFilter>;
  clientId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dateTime?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  interview?: InputMaybe<InterviewNullableScalarRelationFilter>;
  interviewId?: InputMaybe<StringNullableFilter>;
  noonOrderId?: InputMaybe<StringNullableFilter>;
  order?: InputMaybe<OrderNullableScalarRelationFilter>;
  orderId?: InputMaybe<StringNullableFilter>;
  paymentMethod?: InputMaybe<StringNullableFilter>;
  purpose?: InputMaybe<EnumPaymentPurposeNullableFilter>;
  status?: InputMaybe<EnumPaymentStatusFilter>;
  transactionId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Position = {
  __typename?: 'Position';
  _count: PositionCount;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  orderRequirements?: Maybe<Array<OrderWorkerRequirement>>;
  pricings?: Maybe<Array<Pricing>>;
  workers?: Maybe<Array<Worker>>;
};

export type PositionCount = {
  __typename?: 'PositionCount';
  orderRequirements: Scalars['Int']['output'];
  pricings: Scalars['Int']['output'];
  workers: Scalars['Int']['output'];
};

export type PositionCreateNestedOneWithoutOrderRequirementsInput = {
  connect?: InputMaybe<PositionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PositionCreateOrConnectWithoutOrderRequirementsInput>;
  create?: InputMaybe<PositionCreateWithoutOrderRequirementsInput>;
};

export type PositionCreateNestedOneWithoutPricingsInput = {
  connect?: InputMaybe<PositionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PositionCreateOrConnectWithoutPricingsInput>;
  create?: InputMaybe<PositionCreateWithoutPricingsInput>;
};

export type PositionCreateNestedOneWithoutWorkersInput = {
  connect?: InputMaybe<PositionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PositionCreateOrConnectWithoutWorkersInput>;
  create?: InputMaybe<PositionCreateWithoutWorkersInput>;
};

export type PositionCreateOrConnectWithoutOrderRequirementsInput = {
  create: PositionCreateWithoutOrderRequirementsInput;
  where: PositionWhereUniqueInput;
};

export type PositionCreateOrConnectWithoutPricingsInput = {
  create: PositionCreateWithoutPricingsInput;
  where: PositionWhereUniqueInput;
};

export type PositionCreateOrConnectWithoutWorkersInput = {
  create: PositionCreateWithoutWorkersInput;
  where: PositionWhereUniqueInput;
};

export type PositionCreateWithoutOrderRequirementsInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  pricings?: InputMaybe<PricingCreateNestedManyWithoutPositionInput>;
  workers?: InputMaybe<WorkerCreateNestedManyWithoutPositionInput>;
};

export type PositionCreateWithoutPricingsInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  orderRequirements?: InputMaybe<OrderWorkerRequirementCreateNestedManyWithoutPositionInput>;
  workers?: InputMaybe<WorkerCreateNestedManyWithoutPositionInput>;
};

export type PositionCreateWithoutWorkersInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  orderRequirements?: InputMaybe<OrderWorkerRequirementCreateNestedManyWithoutPositionInput>;
  pricings?: InputMaybe<PricingCreateNestedManyWithoutPositionInput>;
};

export type PositionNullableScalarRelationFilter = {
  is?: InputMaybe<PositionWhereInput>;
  isNot?: InputMaybe<PositionWhereInput>;
};

export type PositionOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  orderRequirements?: InputMaybe<OrderWorkerRequirementOrderByRelationAggregateInput>;
  pricings?: InputMaybe<PricingOrderByRelationAggregateInput>;
  workers?: InputMaybe<WorkerOrderByRelationAggregateInput>;
};

export type PositionScalarRelationFilter = {
  is?: InputMaybe<PositionWhereInput>;
  isNot?: InputMaybe<PositionWhereInput>;
};

export type PositionUpdateOneRequiredWithoutPricingsNestedInput = {
  connect?: InputMaybe<PositionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PositionCreateOrConnectWithoutPricingsInput>;
  create?: InputMaybe<PositionCreateWithoutPricingsInput>;
  update?: InputMaybe<PositionUpdateToOneWithWhereWithoutPricingsInput>;
  upsert?: InputMaybe<PositionUpsertWithoutPricingsInput>;
};

export type PositionUpdateOneWithoutOrderRequirementsNestedInput = {
  connect?: InputMaybe<PositionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PositionCreateOrConnectWithoutOrderRequirementsInput>;
  create?: InputMaybe<PositionCreateWithoutOrderRequirementsInput>;
  delete?: InputMaybe<PositionWhereInput>;
  disconnect?: InputMaybe<PositionWhereInput>;
  update?: InputMaybe<PositionUpdateToOneWithWhereWithoutOrderRequirementsInput>;
  upsert?: InputMaybe<PositionUpsertWithoutOrderRequirementsInput>;
};

export type PositionUpdateOneWithoutWorkersNestedInput = {
  connect?: InputMaybe<PositionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PositionCreateOrConnectWithoutWorkersInput>;
  create?: InputMaybe<PositionCreateWithoutWorkersInput>;
  delete?: InputMaybe<PositionWhereInput>;
  disconnect?: InputMaybe<PositionWhereInput>;
  update?: InputMaybe<PositionUpdateToOneWithWhereWithoutWorkersInput>;
  upsert?: InputMaybe<PositionUpsertWithoutWorkersInput>;
};

export type PositionUpdateToOneWithWhereWithoutOrderRequirementsInput = {
  data: PositionUpdateWithoutOrderRequirementsInput;
  where?: InputMaybe<PositionWhereInput>;
};

export type PositionUpdateToOneWithWhereWithoutPricingsInput = {
  data: PositionUpdateWithoutPricingsInput;
  where?: InputMaybe<PositionWhereInput>;
};

export type PositionUpdateToOneWithWhereWithoutWorkersInput = {
  data: PositionUpdateWithoutWorkersInput;
  where?: InputMaybe<PositionWhereInput>;
};

export type PositionUpdateWithoutOrderRequirementsInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pricings?: InputMaybe<PricingUpdateManyWithoutPositionNestedInput>;
  workers?: InputMaybe<WorkerUpdateManyWithoutPositionNestedInput>;
};

export type PositionUpdateWithoutPricingsInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderRequirements?: InputMaybe<OrderWorkerRequirementUpdateManyWithoutPositionNestedInput>;
  workers?: InputMaybe<WorkerUpdateManyWithoutPositionNestedInput>;
};

export type PositionUpdateWithoutWorkersInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderRequirements?: InputMaybe<OrderWorkerRequirementUpdateManyWithoutPositionNestedInput>;
  pricings?: InputMaybe<PricingUpdateManyWithoutPositionNestedInput>;
};

export type PositionUpsertWithoutOrderRequirementsInput = {
  create: PositionCreateWithoutOrderRequirementsInput;
  update: PositionUpdateWithoutOrderRequirementsInput;
  where?: InputMaybe<PositionWhereInput>;
};

export type PositionUpsertWithoutPricingsInput = {
  create: PositionCreateWithoutPricingsInput;
  update: PositionUpdateWithoutPricingsInput;
  where?: InputMaybe<PositionWhereInput>;
};

export type PositionUpsertWithoutWorkersInput = {
  create: PositionCreateWithoutWorkersInput;
  update: PositionUpdateWithoutWorkersInput;
  where?: InputMaybe<PositionWhereInput>;
};

export type PositionWhereInput = {
  AND?: InputMaybe<Array<PositionWhereInput>>;
  NOT?: InputMaybe<Array<PositionWhereInput>>;
  OR?: InputMaybe<Array<PositionWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  orderRequirements?: InputMaybe<OrderWorkerRequirementListRelationFilter>;
  pricings?: InputMaybe<PricingListRelationFilter>;
  workers?: InputMaybe<WorkerListRelationFilter>;
};

export type PositionWhereUniqueInput = {
  AND?: InputMaybe<Array<PositionWhereInput>>;
  NOT?: InputMaybe<Array<PositionWhereInput>>;
  OR?: InputMaybe<Array<PositionWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orderRequirements?: InputMaybe<OrderWorkerRequirementListRelationFilter>;
  pricings?: InputMaybe<PricingListRelationFilter>;
  workers?: InputMaybe<WorkerListRelationFilter>;
};

export type Pricing = {
  __typename?: 'Pricing';
  activity: Activity;
  activityId: Scalars['String']['output'];
  adminCommission: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  maxWage: Scalars['Float']['output'];
  minWage: Scalars['Float']['output'];
  nationality: Nationality;
  nationalityId: Scalars['String']['output'];
  position: Position;
  positionId: Scalars['String']['output'];
  specialty: Specialty;
  specialtyId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PricingCreateManyActivityInput = {
  adminCommission: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxWage: Scalars['Float']['input'];
  minWage: Scalars['Float']['input'];
  nationalityId: Scalars['String']['input'];
  positionId: Scalars['String']['input'];
  specialtyId: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PricingCreateManyActivityInputEnvelope = {
  data: Array<PricingCreateManyActivityInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PricingCreateManyNationalityInput = {
  activityId: Scalars['String']['input'];
  adminCommission: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxWage: Scalars['Float']['input'];
  minWage: Scalars['Float']['input'];
  positionId: Scalars['String']['input'];
  specialtyId: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PricingCreateManyNationalityInputEnvelope = {
  data: Array<PricingCreateManyNationalityInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PricingCreateManyPositionInput = {
  activityId: Scalars['String']['input'];
  adminCommission: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxWage: Scalars['Float']['input'];
  minWage: Scalars['Float']['input'];
  nationalityId: Scalars['String']['input'];
  specialtyId: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PricingCreateManyPositionInputEnvelope = {
  data: Array<PricingCreateManyPositionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PricingCreateManySpecialtyInput = {
  activityId: Scalars['String']['input'];
  adminCommission: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxWage: Scalars['Float']['input'];
  minWage: Scalars['Float']['input'];
  nationalityId: Scalars['String']['input'];
  positionId: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PricingCreateManySpecialtyInputEnvelope = {
  data: Array<PricingCreateManySpecialtyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PricingCreateNestedManyWithoutActivityInput = {
  connect?: InputMaybe<Array<PricingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PricingCreateOrConnectWithoutActivityInput>>;
  create?: InputMaybe<Array<PricingCreateWithoutActivityInput>>;
  createMany?: InputMaybe<PricingCreateManyActivityInputEnvelope>;
};

export type PricingCreateNestedManyWithoutNationalityInput = {
  connect?: InputMaybe<Array<PricingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PricingCreateOrConnectWithoutNationalityInput>>;
  create?: InputMaybe<Array<PricingCreateWithoutNationalityInput>>;
  createMany?: InputMaybe<PricingCreateManyNationalityInputEnvelope>;
};

export type PricingCreateNestedManyWithoutPositionInput = {
  connect?: InputMaybe<Array<PricingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PricingCreateOrConnectWithoutPositionInput>>;
  create?: InputMaybe<Array<PricingCreateWithoutPositionInput>>;
  createMany?: InputMaybe<PricingCreateManyPositionInputEnvelope>;
};

export type PricingCreateNestedManyWithoutSpecialtyInput = {
  connect?: InputMaybe<Array<PricingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PricingCreateOrConnectWithoutSpecialtyInput>>;
  create?: InputMaybe<Array<PricingCreateWithoutSpecialtyInput>>;
  createMany?: InputMaybe<PricingCreateManySpecialtyInputEnvelope>;
};

export type PricingCreateOrConnectWithoutActivityInput = {
  create: PricingCreateWithoutActivityInput;
  where: PricingWhereUniqueInput;
};

export type PricingCreateOrConnectWithoutNationalityInput = {
  create: PricingCreateWithoutNationalityInput;
  where: PricingWhereUniqueInput;
};

export type PricingCreateOrConnectWithoutPositionInput = {
  create: PricingCreateWithoutPositionInput;
  where: PricingWhereUniqueInput;
};

export type PricingCreateOrConnectWithoutSpecialtyInput = {
  create: PricingCreateWithoutSpecialtyInput;
  where: PricingWhereUniqueInput;
};

export type PricingCreateWithoutActivityInput = {
  adminCommission: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxWage: Scalars['Float']['input'];
  minWage: Scalars['Float']['input'];
  nationality: NationalityCreateNestedOneWithoutPricingsInput;
  position: PositionCreateNestedOneWithoutPricingsInput;
  specialty: SpecialtyCreateNestedOneWithoutPricingsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PricingCreateWithoutNationalityInput = {
  activity: ActivityCreateNestedOneWithoutPricingsInput;
  adminCommission: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxWage: Scalars['Float']['input'];
  minWage: Scalars['Float']['input'];
  position: PositionCreateNestedOneWithoutPricingsInput;
  specialty: SpecialtyCreateNestedOneWithoutPricingsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PricingCreateWithoutPositionInput = {
  activity: ActivityCreateNestedOneWithoutPricingsInput;
  adminCommission: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxWage: Scalars['Float']['input'];
  minWage: Scalars['Float']['input'];
  nationality: NationalityCreateNestedOneWithoutPricingsInput;
  specialty: SpecialtyCreateNestedOneWithoutPricingsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PricingCreateWithoutSpecialtyInput = {
  activity: ActivityCreateNestedOneWithoutPricingsInput;
  adminCommission: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxWage: Scalars['Float']['input'];
  minWage: Scalars['Float']['input'];
  nationality: NationalityCreateNestedOneWithoutPricingsInput;
  position: PositionCreateNestedOneWithoutPricingsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PricingFilterInput = {
  activityId?: InputMaybe<Scalars['String']['input']>;
  nationalityId?: InputMaybe<Scalars['String']['input']>;
  positionId?: InputMaybe<Scalars['String']['input']>;
  specialtyId?: InputMaybe<Scalars['String']['input']>;
};

export type PricingListRelationFilter = {
  every?: InputMaybe<PricingWhereInput>;
  none?: InputMaybe<PricingWhereInput>;
  some?: InputMaybe<PricingWhereInput>;
};

export type PricingNationalityIdSpecialtyIdActivityIdPositionIdCompoundUniqueInput = {
  activityId: Scalars['String']['input'];
  nationalityId: Scalars['String']['input'];
  positionId: Scalars['String']['input'];
  specialtyId: Scalars['String']['input'];
};

export type PricingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PricingScalarWhereInput = {
  AND?: InputMaybe<Array<PricingScalarWhereInput>>;
  NOT?: InputMaybe<Array<PricingScalarWhereInput>>;
  OR?: InputMaybe<Array<PricingScalarWhereInput>>;
  activityId?: InputMaybe<StringFilter>;
  adminCommission?: InputMaybe<FloatFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  maxWage?: InputMaybe<FloatFilter>;
  minWage?: InputMaybe<FloatFilter>;
  nationalityId?: InputMaybe<StringFilter>;
  positionId?: InputMaybe<StringFilter>;
  specialtyId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PricingUpdateManyMutationInput = {
  adminCommission?: InputMaybe<FloatFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  maxWage?: InputMaybe<FloatFieldUpdateOperationsInput>;
  minWage?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PricingUpdateManyWithWhereWithoutActivityInput = {
  data: PricingUpdateManyMutationInput;
  where: PricingScalarWhereInput;
};

export type PricingUpdateManyWithWhereWithoutNationalityInput = {
  data: PricingUpdateManyMutationInput;
  where: PricingScalarWhereInput;
};

export type PricingUpdateManyWithWhereWithoutPositionInput = {
  data: PricingUpdateManyMutationInput;
  where: PricingScalarWhereInput;
};

export type PricingUpdateManyWithWhereWithoutSpecialtyInput = {
  data: PricingUpdateManyMutationInput;
  where: PricingScalarWhereInput;
};

export type PricingUpdateManyWithoutActivityNestedInput = {
  connect?: InputMaybe<Array<PricingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PricingCreateOrConnectWithoutActivityInput>>;
  create?: InputMaybe<Array<PricingCreateWithoutActivityInput>>;
  createMany?: InputMaybe<PricingCreateManyActivityInputEnvelope>;
  delete?: InputMaybe<Array<PricingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PricingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PricingWhereUniqueInput>>;
  set?: InputMaybe<Array<PricingWhereUniqueInput>>;
  update?: InputMaybe<Array<PricingUpdateWithWhereUniqueWithoutActivityInput>>;
  updateMany?: InputMaybe<Array<PricingUpdateManyWithWhereWithoutActivityInput>>;
  upsert?: InputMaybe<Array<PricingUpsertWithWhereUniqueWithoutActivityInput>>;
};

export type PricingUpdateManyWithoutNationalityNestedInput = {
  connect?: InputMaybe<Array<PricingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PricingCreateOrConnectWithoutNationalityInput>>;
  create?: InputMaybe<Array<PricingCreateWithoutNationalityInput>>;
  createMany?: InputMaybe<PricingCreateManyNationalityInputEnvelope>;
  delete?: InputMaybe<Array<PricingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PricingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PricingWhereUniqueInput>>;
  set?: InputMaybe<Array<PricingWhereUniqueInput>>;
  update?: InputMaybe<Array<PricingUpdateWithWhereUniqueWithoutNationalityInput>>;
  updateMany?: InputMaybe<Array<PricingUpdateManyWithWhereWithoutNationalityInput>>;
  upsert?: InputMaybe<Array<PricingUpsertWithWhereUniqueWithoutNationalityInput>>;
};

export type PricingUpdateManyWithoutPositionNestedInput = {
  connect?: InputMaybe<Array<PricingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PricingCreateOrConnectWithoutPositionInput>>;
  create?: InputMaybe<Array<PricingCreateWithoutPositionInput>>;
  createMany?: InputMaybe<PricingCreateManyPositionInputEnvelope>;
  delete?: InputMaybe<Array<PricingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PricingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PricingWhereUniqueInput>>;
  set?: InputMaybe<Array<PricingWhereUniqueInput>>;
  update?: InputMaybe<Array<PricingUpdateWithWhereUniqueWithoutPositionInput>>;
  updateMany?: InputMaybe<Array<PricingUpdateManyWithWhereWithoutPositionInput>>;
  upsert?: InputMaybe<Array<PricingUpsertWithWhereUniqueWithoutPositionInput>>;
};

export type PricingUpdateManyWithoutSpecialtyNestedInput = {
  connect?: InputMaybe<Array<PricingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PricingCreateOrConnectWithoutSpecialtyInput>>;
  create?: InputMaybe<Array<PricingCreateWithoutSpecialtyInput>>;
  createMany?: InputMaybe<PricingCreateManySpecialtyInputEnvelope>;
  delete?: InputMaybe<Array<PricingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PricingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PricingWhereUniqueInput>>;
  set?: InputMaybe<Array<PricingWhereUniqueInput>>;
  update?: InputMaybe<Array<PricingUpdateWithWhereUniqueWithoutSpecialtyInput>>;
  updateMany?: InputMaybe<Array<PricingUpdateManyWithWhereWithoutSpecialtyInput>>;
  upsert?: InputMaybe<Array<PricingUpsertWithWhereUniqueWithoutSpecialtyInput>>;
};

export type PricingUpdateWithWhereUniqueWithoutActivityInput = {
  data: PricingUpdateWithoutActivityInput;
  where: PricingWhereUniqueInput;
};

export type PricingUpdateWithWhereUniqueWithoutNationalityInput = {
  data: PricingUpdateWithoutNationalityInput;
  where: PricingWhereUniqueInput;
};

export type PricingUpdateWithWhereUniqueWithoutPositionInput = {
  data: PricingUpdateWithoutPositionInput;
  where: PricingWhereUniqueInput;
};

export type PricingUpdateWithWhereUniqueWithoutSpecialtyInput = {
  data: PricingUpdateWithoutSpecialtyInput;
  where: PricingWhereUniqueInput;
};

export type PricingUpdateWithoutActivityInput = {
  adminCommission?: InputMaybe<FloatFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  maxWage?: InputMaybe<FloatFieldUpdateOperationsInput>;
  minWage?: InputMaybe<FloatFieldUpdateOperationsInput>;
  nationality?: InputMaybe<NationalityUpdateOneRequiredWithoutPricingsNestedInput>;
  position?: InputMaybe<PositionUpdateOneRequiredWithoutPricingsNestedInput>;
  specialty?: InputMaybe<SpecialtyUpdateOneRequiredWithoutPricingsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PricingUpdateWithoutNationalityInput = {
  activity?: InputMaybe<ActivityUpdateOneRequiredWithoutPricingsNestedInput>;
  adminCommission?: InputMaybe<FloatFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  maxWage?: InputMaybe<FloatFieldUpdateOperationsInput>;
  minWage?: InputMaybe<FloatFieldUpdateOperationsInput>;
  position?: InputMaybe<PositionUpdateOneRequiredWithoutPricingsNestedInput>;
  specialty?: InputMaybe<SpecialtyUpdateOneRequiredWithoutPricingsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PricingUpdateWithoutPositionInput = {
  activity?: InputMaybe<ActivityUpdateOneRequiredWithoutPricingsNestedInput>;
  adminCommission?: InputMaybe<FloatFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  maxWage?: InputMaybe<FloatFieldUpdateOperationsInput>;
  minWage?: InputMaybe<FloatFieldUpdateOperationsInput>;
  nationality?: InputMaybe<NationalityUpdateOneRequiredWithoutPricingsNestedInput>;
  specialty?: InputMaybe<SpecialtyUpdateOneRequiredWithoutPricingsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PricingUpdateWithoutSpecialtyInput = {
  activity?: InputMaybe<ActivityUpdateOneRequiredWithoutPricingsNestedInput>;
  adminCommission?: InputMaybe<FloatFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  maxWage?: InputMaybe<FloatFieldUpdateOperationsInput>;
  minWage?: InputMaybe<FloatFieldUpdateOperationsInput>;
  nationality?: InputMaybe<NationalityUpdateOneRequiredWithoutPricingsNestedInput>;
  position?: InputMaybe<PositionUpdateOneRequiredWithoutPricingsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PricingUpsertWithWhereUniqueWithoutActivityInput = {
  create: PricingCreateWithoutActivityInput;
  update: PricingUpdateWithoutActivityInput;
  where: PricingWhereUniqueInput;
};

export type PricingUpsertWithWhereUniqueWithoutNationalityInput = {
  create: PricingCreateWithoutNationalityInput;
  update: PricingUpdateWithoutNationalityInput;
  where: PricingWhereUniqueInput;
};

export type PricingUpsertWithWhereUniqueWithoutPositionInput = {
  create: PricingCreateWithoutPositionInput;
  update: PricingUpdateWithoutPositionInput;
  where: PricingWhereUniqueInput;
};

export type PricingUpsertWithWhereUniqueWithoutSpecialtyInput = {
  create: PricingCreateWithoutSpecialtyInput;
  update: PricingUpdateWithoutSpecialtyInput;
  where: PricingWhereUniqueInput;
};

export type PricingWhereInput = {
  AND?: InputMaybe<Array<PricingWhereInput>>;
  NOT?: InputMaybe<Array<PricingWhereInput>>;
  OR?: InputMaybe<Array<PricingWhereInput>>;
  activity?: InputMaybe<ActivityScalarRelationFilter>;
  activityId?: InputMaybe<StringFilter>;
  adminCommission?: InputMaybe<FloatFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  maxWage?: InputMaybe<FloatFilter>;
  minWage?: InputMaybe<FloatFilter>;
  nationality?: InputMaybe<NationalityScalarRelationFilter>;
  nationalityId?: InputMaybe<StringFilter>;
  position?: InputMaybe<PositionScalarRelationFilter>;
  positionId?: InputMaybe<StringFilter>;
  specialty?: InputMaybe<SpecialtyScalarRelationFilter>;
  specialtyId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PricingWhereUniqueInput = {
  AND?: InputMaybe<Array<PricingWhereInput>>;
  NOT?: InputMaybe<Array<PricingWhereInput>>;
  OR?: InputMaybe<Array<PricingWhereInput>>;
  activity?: InputMaybe<ActivityScalarRelationFilter>;
  activityId?: InputMaybe<StringFilter>;
  adminCommission?: InputMaybe<FloatFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxWage?: InputMaybe<FloatFilter>;
  minWage?: InputMaybe<FloatFilter>;
  nationality?: InputMaybe<NationalityScalarRelationFilter>;
  nationalityId?: InputMaybe<StringFilter>;
  nationalityId_specialtyId_activityId_positionId?: InputMaybe<PricingNationalityIdSpecialtyIdActivityIdPositionIdCompoundUniqueInput>;
  position?: InputMaybe<PositionScalarRelationFilter>;
  positionId?: InputMaybe<StringFilter>;
  specialty?: InputMaybe<SpecialtyScalarRelationFilter>;
  specialtyId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Query = {
  __typename?: 'Query';
  /** Find all clients */
  findAllClients: Array<User>;
  interview?: Maybe<Interview>;
  interviews: Array<Interview>;
  myClientInterviews: Array<Interview>;
  myWorkerInterviews: Array<Interview>;
  order: Order;
  orders: Array<Order>;
  pricing: Pricing;
  pricingByAttributes?: Maybe<Pricing>;
  pricingList: Array<Pricing>;
  user: User;
  userGreetings: Scalars['String']['output'];
  users: Array<User>;
  worker: Worker;
  workerStats: WorkerStats;
  workers: WorkerPaginatedResponse;
};


export type QueryInterviewArgs = {
  where: InterviewWhereUniqueInput;
};


export type QueryInterviewsArgs = {
  cursor?: InputMaybe<InterviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<InterviewScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InterviewOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<InterviewWhereInput>;
};


export type QueryMyClientInterviewsArgs = {
  status?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMyWorkerInterviewsArgs = {
  status?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrdersArgs = {
  pagination?: InputMaybe<PaginationDto>;
  where?: InputMaybe<OrderWhereInput>;
};


export type QueryPricingArgs = {
  id: Scalars['String']['input'];
};


export type QueryPricingByAttributesArgs = {
  activityId: Scalars['String']['input'];
  nationalityId: Scalars['String']['input'];
  positionId: Scalars['String']['input'];
  specialtyId: Scalars['String']['input'];
};


export type QueryPricingListArgs = {
  filter?: InputMaybe<PricingFilterInput>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryWorkerArgs = {
  id: Scalars['String']['input'];
};


export type QueryWorkersArgs = {
  filter?: InputMaybe<WorkerFilterInput>;
  pagination?: InputMaybe<PaginationDto>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type ResetPasswordInput = {
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type ScheduleInterviewInput = {
  clientId: Scalars['String']['input'];
  dateTime: Scalars['DateTime']['input'];
  duration?: InputMaybe<Scalars['Float']['input']>;
  meetingType?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['String']['input'];
  workerId: Scalars['String']['input'];
};

export type SignupInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type Specialty = {
  __typename?: 'Specialty';
  _count: SpecialtyCount;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  orderRequirements?: Maybe<Array<OrderWorkerRequirement>>;
  pricings?: Maybe<Array<Pricing>>;
  workers?: Maybe<Array<Worker>>;
};

export type SpecialtyCount = {
  __typename?: 'SpecialtyCount';
  orderRequirements: Scalars['Int']['output'];
  pricings: Scalars['Int']['output'];
  workers: Scalars['Int']['output'];
};

export type SpecialtyCreateNestedOneWithoutOrderRequirementsInput = {
  connect?: InputMaybe<SpecialtyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SpecialtyCreateOrConnectWithoutOrderRequirementsInput>;
  create?: InputMaybe<SpecialtyCreateWithoutOrderRequirementsInput>;
};

export type SpecialtyCreateNestedOneWithoutPricingsInput = {
  connect?: InputMaybe<SpecialtyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SpecialtyCreateOrConnectWithoutPricingsInput>;
  create?: InputMaybe<SpecialtyCreateWithoutPricingsInput>;
};

export type SpecialtyCreateNestedOneWithoutWorkersInput = {
  connect?: InputMaybe<SpecialtyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SpecialtyCreateOrConnectWithoutWorkersInput>;
  create?: InputMaybe<SpecialtyCreateWithoutWorkersInput>;
};

export type SpecialtyCreateOrConnectWithoutOrderRequirementsInput = {
  create: SpecialtyCreateWithoutOrderRequirementsInput;
  where: SpecialtyWhereUniqueInput;
};

export type SpecialtyCreateOrConnectWithoutPricingsInput = {
  create: SpecialtyCreateWithoutPricingsInput;
  where: SpecialtyWhereUniqueInput;
};

export type SpecialtyCreateOrConnectWithoutWorkersInput = {
  create: SpecialtyCreateWithoutWorkersInput;
  where: SpecialtyWhereUniqueInput;
};

export type SpecialtyCreateWithoutOrderRequirementsInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  pricings?: InputMaybe<PricingCreateNestedManyWithoutSpecialtyInput>;
  workers?: InputMaybe<WorkerCreateNestedManyWithoutSpecialtyInput>;
};

export type SpecialtyCreateWithoutPricingsInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  orderRequirements?: InputMaybe<OrderWorkerRequirementCreateNestedManyWithoutSpecialtyInput>;
  workers?: InputMaybe<WorkerCreateNestedManyWithoutSpecialtyInput>;
};

export type SpecialtyCreateWithoutWorkersInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  orderRequirements?: InputMaybe<OrderWorkerRequirementCreateNestedManyWithoutSpecialtyInput>;
  pricings?: InputMaybe<PricingCreateNestedManyWithoutSpecialtyInput>;
};

export type SpecialtyNullableScalarRelationFilter = {
  is?: InputMaybe<SpecialtyWhereInput>;
  isNot?: InputMaybe<SpecialtyWhereInput>;
};

export type SpecialtyOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  orderRequirements?: InputMaybe<OrderWorkerRequirementOrderByRelationAggregateInput>;
  pricings?: InputMaybe<PricingOrderByRelationAggregateInput>;
  workers?: InputMaybe<WorkerOrderByRelationAggregateInput>;
};

export type SpecialtyScalarRelationFilter = {
  is?: InputMaybe<SpecialtyWhereInput>;
  isNot?: InputMaybe<SpecialtyWhereInput>;
};

export type SpecialtyUpdateOneRequiredWithoutPricingsNestedInput = {
  connect?: InputMaybe<SpecialtyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SpecialtyCreateOrConnectWithoutPricingsInput>;
  create?: InputMaybe<SpecialtyCreateWithoutPricingsInput>;
  update?: InputMaybe<SpecialtyUpdateToOneWithWhereWithoutPricingsInput>;
  upsert?: InputMaybe<SpecialtyUpsertWithoutPricingsInput>;
};

export type SpecialtyUpdateOneWithoutOrderRequirementsNestedInput = {
  connect?: InputMaybe<SpecialtyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SpecialtyCreateOrConnectWithoutOrderRequirementsInput>;
  create?: InputMaybe<SpecialtyCreateWithoutOrderRequirementsInput>;
  delete?: InputMaybe<SpecialtyWhereInput>;
  disconnect?: InputMaybe<SpecialtyWhereInput>;
  update?: InputMaybe<SpecialtyUpdateToOneWithWhereWithoutOrderRequirementsInput>;
  upsert?: InputMaybe<SpecialtyUpsertWithoutOrderRequirementsInput>;
};

export type SpecialtyUpdateOneWithoutWorkersNestedInput = {
  connect?: InputMaybe<SpecialtyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SpecialtyCreateOrConnectWithoutWorkersInput>;
  create?: InputMaybe<SpecialtyCreateWithoutWorkersInput>;
  delete?: InputMaybe<SpecialtyWhereInput>;
  disconnect?: InputMaybe<SpecialtyWhereInput>;
  update?: InputMaybe<SpecialtyUpdateToOneWithWhereWithoutWorkersInput>;
  upsert?: InputMaybe<SpecialtyUpsertWithoutWorkersInput>;
};

export type SpecialtyUpdateToOneWithWhereWithoutOrderRequirementsInput = {
  data: SpecialtyUpdateWithoutOrderRequirementsInput;
  where?: InputMaybe<SpecialtyWhereInput>;
};

export type SpecialtyUpdateToOneWithWhereWithoutPricingsInput = {
  data: SpecialtyUpdateWithoutPricingsInput;
  where?: InputMaybe<SpecialtyWhereInput>;
};

export type SpecialtyUpdateToOneWithWhereWithoutWorkersInput = {
  data: SpecialtyUpdateWithoutWorkersInput;
  where?: InputMaybe<SpecialtyWhereInput>;
};

export type SpecialtyUpdateWithoutOrderRequirementsInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pricings?: InputMaybe<PricingUpdateManyWithoutSpecialtyNestedInput>;
  workers?: InputMaybe<WorkerUpdateManyWithoutSpecialtyNestedInput>;
};

export type SpecialtyUpdateWithoutPricingsInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderRequirements?: InputMaybe<OrderWorkerRequirementUpdateManyWithoutSpecialtyNestedInput>;
  workers?: InputMaybe<WorkerUpdateManyWithoutSpecialtyNestedInput>;
};

export type SpecialtyUpdateWithoutWorkersInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderRequirements?: InputMaybe<OrderWorkerRequirementUpdateManyWithoutSpecialtyNestedInput>;
  pricings?: InputMaybe<PricingUpdateManyWithoutSpecialtyNestedInput>;
};

export type SpecialtyUpsertWithoutOrderRequirementsInput = {
  create: SpecialtyCreateWithoutOrderRequirementsInput;
  update: SpecialtyUpdateWithoutOrderRequirementsInput;
  where?: InputMaybe<SpecialtyWhereInput>;
};

export type SpecialtyUpsertWithoutPricingsInput = {
  create: SpecialtyCreateWithoutPricingsInput;
  update: SpecialtyUpdateWithoutPricingsInput;
  where?: InputMaybe<SpecialtyWhereInput>;
};

export type SpecialtyUpsertWithoutWorkersInput = {
  create: SpecialtyCreateWithoutWorkersInput;
  update: SpecialtyUpdateWithoutWorkersInput;
  where?: InputMaybe<SpecialtyWhereInput>;
};

export type SpecialtyWhereInput = {
  AND?: InputMaybe<Array<SpecialtyWhereInput>>;
  NOT?: InputMaybe<Array<SpecialtyWhereInput>>;
  OR?: InputMaybe<Array<SpecialtyWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  orderRequirements?: InputMaybe<OrderWorkerRequirementListRelationFilter>;
  pricings?: InputMaybe<PricingListRelationFilter>;
  workers?: InputMaybe<WorkerListRelationFilter>;
};

export type SpecialtyWhereUniqueInput = {
  AND?: InputMaybe<Array<SpecialtyWhereInput>>;
  NOT?: InputMaybe<Array<SpecialtyWhereInput>>;
  OR?: InputMaybe<Array<SpecialtyWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orderRequirements?: InputMaybe<OrderWorkerRequirementListRelationFilter>;
  pricings?: InputMaybe<PricingListRelationFilter>;
  workers?: InputMaybe<WorkerListRelationFilter>;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateInterviewStatusInput = {
  id: Scalars['String']['input'];
  status: Scalars['String']['input'];
};

export type UpdatePricingInput = {
  activityId?: InputMaybe<Scalars['String']['input']>;
  adminCommission?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['String']['input'];
  maxWage?: InputMaybe<Scalars['Float']['input']>;
  minWage?: InputMaybe<Scalars['Float']['input']>;
  nationalityId?: InputMaybe<Scalars['String']['input']>;
  positionId?: InputMaybe<Scalars['String']['input']>;
  specialtyId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateWorkerInput = {
  accommodationType?: InputMaybe<Scalars['String']['input']>;
  activityId?: InputMaybe<Scalars['String']['input']>;
  currentCity?: InputMaybe<Scalars['String']['input']>;
  currentSalary?: InputMaybe<Scalars['Float']['input']>;
  currentWorkplace?: InputMaybe<Scalars['String']['input']>;
  cvFile?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  expectedSalary?: InputMaybe<Scalars['Float']['input']>;
  experience?: InputMaybe<Scalars['String']['input']>;
  expiryDate?: InputMaybe<Scalars['DateTime']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  hourlyRate?: InputMaybe<Scalars['Float']['input']>;
  iban?: InputMaybe<Scalars['String']['input']>;
  iqamaImage?: InputMaybe<Scalars['String']['input']>;
  iqamaNumber?: InputMaybe<Scalars['String']['input']>;
  nationalityId?: InputMaybe<Scalars['String']['input']>;
  portfolioFiles?: InputMaybe<Scalars['String']['input']>;
  positionId?: InputMaybe<Scalars['String']['input']>;
  profilePicture?: InputMaybe<Scalars['String']['input']>;
  referralSource?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Scalars['String']['input']>;
  specialtyId?: InputMaybe<Scalars['String']['input']>;
  transferCount?: InputMaybe<Scalars['Int']['input']>;
};

export type User = {
  __typename?: 'User';
  admin?: Maybe<Admin>;
  client?: Maybe<Client>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  loginAttempts: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  passwordHash: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  role: Scalars['String']['output'];
  username: Scalars['String']['output'];
  worker?: Maybe<Worker>;
};

export type UserCreateNestedOneWithoutAdminInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAdminInput>;
  create?: InputMaybe<UserCreateWithoutAdminInput>;
};

export type UserCreateNestedOneWithoutClientInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutClientInput>;
  create?: InputMaybe<UserCreateWithoutClientInput>;
};

export type UserCreateNestedOneWithoutWorkerInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutWorkerInput>;
  create?: InputMaybe<UserCreateWithoutWorkerInput>;
};

export type UserCreateOrConnectWithoutAdminInput = {
  create: UserCreateWithoutAdminInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutClientInput = {
  create: UserCreateWithoutClientInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutWorkerInput = {
  create: UserCreateWithoutWorkerInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAdminInput = {
  client?: InputMaybe<ClientCreateNestedOneWithoutUserInput>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lastLogin?: InputMaybe<Scalars['DateTime']['input']>;
  loginAttempts?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  passwordHash: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
  worker?: InputMaybe<WorkerCreateNestedOneWithoutUserInput>;
};

export type UserCreateWithoutClientInput = {
  admin?: InputMaybe<AdminCreateNestedOneWithoutUserInput>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lastLogin?: InputMaybe<Scalars['DateTime']['input']>;
  loginAttempts?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  passwordHash: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
  worker?: InputMaybe<WorkerCreateNestedOneWithoutUserInput>;
};

export type UserCreateWithoutWorkerInput = {
  admin?: InputMaybe<AdminCreateNestedOneWithoutUserInput>;
  client?: InputMaybe<ClientCreateNestedOneWithoutUserInput>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lastLogin?: InputMaybe<Scalars['DateTime']['input']>;
  loginAttempts?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  passwordHash: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};

export type UserOrderByWithRelationInput = {
  admin?: InputMaybe<AdminOrderByWithRelationInput>;
  client?: InputMaybe<ClientOrderByWithRelationInput>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastLogin?: InputMaybe<SortOrderInput>;
  loginAttempts?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  passwordHash?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrderInput>;
  role?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  worker?: InputMaybe<WorkerOrderByWithRelationInput>;
};

export type UserScalarRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserUpdateOneRequiredWithoutAdminNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAdminInput>;
  create?: InputMaybe<UserCreateWithoutAdminInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutAdminInput>;
  upsert?: InputMaybe<UserUpsertWithoutAdminInput>;
};

export type UserUpdateOneRequiredWithoutClientNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutClientInput>;
  create?: InputMaybe<UserCreateWithoutClientInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutClientInput>;
  upsert?: InputMaybe<UserUpsertWithoutClientInput>;
};

export type UserUpdateOneRequiredWithoutWorkerNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutWorkerInput>;
  create?: InputMaybe<UserCreateWithoutWorkerInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutWorkerInput>;
  upsert?: InputMaybe<UserUpsertWithoutWorkerInput>;
};

export type UserUpdateToOneWithWhereWithoutAdminInput = {
  data: UserUpdateWithoutAdminInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutClientInput = {
  data: UserUpdateWithoutClientInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutWorkerInput = {
  data: UserUpdateWithoutWorkerInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutAdminInput = {
  client?: InputMaybe<ClientUpdateOneWithoutUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastLogin?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  loginAttempts?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  passwordHash?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<StringFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  worker?: InputMaybe<WorkerUpdateOneWithoutUserNestedInput>;
};

export type UserUpdateWithoutClientInput = {
  admin?: InputMaybe<AdminUpdateOneWithoutUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastLogin?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  loginAttempts?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  passwordHash?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<StringFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  worker?: InputMaybe<WorkerUpdateOneWithoutUserNestedInput>;
};

export type UserUpdateWithoutWorkerInput = {
  admin?: InputMaybe<AdminUpdateOneWithoutUserNestedInput>;
  client?: InputMaybe<ClientUpdateOneWithoutUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastLogin?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  loginAttempts?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  passwordHash?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<StringFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutAdminInput = {
  create: UserCreateWithoutAdminInput;
  update: UserUpdateWithoutAdminInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutClientInput = {
  create: UserCreateWithoutClientInput;
  update: UserUpdateWithoutClientInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutWorkerInput = {
  create: UserCreateWithoutWorkerInput;
  update: UserUpdateWithoutWorkerInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  admin?: InputMaybe<AdminNullableScalarRelationFilter>;
  client?: InputMaybe<ClientNullableScalarRelationFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  lastLogin?: InputMaybe<DateTimeNullableFilter>;
  loginAttempts?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  passwordHash?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  role?: InputMaybe<StringFilter>;
  username?: InputMaybe<StringFilter>;
  worker?: InputMaybe<WorkerNullableScalarRelationFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  admin?: InputMaybe<AdminNullableScalarRelationFilter>;
  client?: InputMaybe<ClientNullableScalarRelationFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastLogin?: InputMaybe<DateTimeNullableFilter>;
  loginAttempts?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  passwordHash?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  role?: InputMaybe<StringFilter>;
  username?: InputMaybe<Scalars['String']['input']>;
  worker?: InputMaybe<WorkerNullableScalarRelationFilter>;
};

export type WhatsAppMessage = {
  __typename?: 'WhatsAppMessage';
  client?: Maybe<Client>;
  clientId?: Maybe<Scalars['String']['output']>;
  content: Scalars['String']['output'];
  direction: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  phoneNumber: Scalars['String']['output'];
  status: Scalars['String']['output'];
  timestamp: Scalars['DateTime']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  worker?: Maybe<Worker>;
  workerId?: Maybe<Scalars['String']['output']>;
};

export type WhatsAppMessageCreateManyClientInput = {
  content: Scalars['String']['input'];
  direction: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  phoneNumber: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
  type: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workerId?: InputMaybe<Scalars['String']['input']>;
};

export type WhatsAppMessageCreateManyClientInputEnvelope = {
  data: Array<WhatsAppMessageCreateManyClientInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WhatsAppMessageCreateManyWorkerInput = {
  clientId?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  direction: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  phoneNumber: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
  type: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type WhatsAppMessageCreateManyWorkerInputEnvelope = {
  data: Array<WhatsAppMessageCreateManyWorkerInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WhatsAppMessageCreateNestedManyWithoutClientInput = {
  connect?: InputMaybe<Array<WhatsAppMessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WhatsAppMessageCreateOrConnectWithoutClientInput>>;
  create?: InputMaybe<Array<WhatsAppMessageCreateWithoutClientInput>>;
  createMany?: InputMaybe<WhatsAppMessageCreateManyClientInputEnvelope>;
};

export type WhatsAppMessageCreateNestedManyWithoutWorkerInput = {
  connect?: InputMaybe<Array<WhatsAppMessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WhatsAppMessageCreateOrConnectWithoutWorkerInput>>;
  create?: InputMaybe<Array<WhatsAppMessageCreateWithoutWorkerInput>>;
  createMany?: InputMaybe<WhatsAppMessageCreateManyWorkerInputEnvelope>;
};

export type WhatsAppMessageCreateOrConnectWithoutClientInput = {
  create: WhatsAppMessageCreateWithoutClientInput;
  where: WhatsAppMessageWhereUniqueInput;
};

export type WhatsAppMessageCreateOrConnectWithoutWorkerInput = {
  create: WhatsAppMessageCreateWithoutWorkerInput;
  where: WhatsAppMessageWhereUniqueInput;
};

export type WhatsAppMessageCreateWithoutClientInput = {
  content: Scalars['String']['input'];
  direction: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  phoneNumber: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
  type: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  worker?: InputMaybe<WorkerCreateNestedOneWithoutWhatsAppMessagesInput>;
};

export type WhatsAppMessageCreateWithoutWorkerInput = {
  client?: InputMaybe<ClientCreateNestedOneWithoutWhatsAppMessagesInput>;
  content: Scalars['String']['input'];
  direction: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  phoneNumber: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
  type: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type WhatsAppMessageListRelationFilter = {
  every?: InputMaybe<WhatsAppMessageWhereInput>;
  none?: InputMaybe<WhatsAppMessageWhereInput>;
  some?: InputMaybe<WhatsAppMessageWhereInput>;
};

export type WhatsAppMessageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type WhatsAppMessageScalarWhereInput = {
  AND?: InputMaybe<Array<WhatsAppMessageScalarWhereInput>>;
  NOT?: InputMaybe<Array<WhatsAppMessageScalarWhereInput>>;
  OR?: InputMaybe<Array<WhatsAppMessageScalarWhereInput>>;
  clientId?: InputMaybe<StringNullableFilter>;
  content?: InputMaybe<StringFilter>;
  direction?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  phoneNumber?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  timestamp?: InputMaybe<DateTimeFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  workerId?: InputMaybe<StringNullableFilter>;
};

export type WhatsAppMessageUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  direction?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  timestamp?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type WhatsAppMessageUpdateManyWithWhereWithoutClientInput = {
  data: WhatsAppMessageUpdateManyMutationInput;
  where: WhatsAppMessageScalarWhereInput;
};

export type WhatsAppMessageUpdateManyWithWhereWithoutWorkerInput = {
  data: WhatsAppMessageUpdateManyMutationInput;
  where: WhatsAppMessageScalarWhereInput;
};

export type WhatsAppMessageUpdateManyWithoutClientNestedInput = {
  connect?: InputMaybe<Array<WhatsAppMessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WhatsAppMessageCreateOrConnectWithoutClientInput>>;
  create?: InputMaybe<Array<WhatsAppMessageCreateWithoutClientInput>>;
  createMany?: InputMaybe<WhatsAppMessageCreateManyClientInputEnvelope>;
  delete?: InputMaybe<Array<WhatsAppMessageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<WhatsAppMessageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<WhatsAppMessageWhereUniqueInput>>;
  set?: InputMaybe<Array<WhatsAppMessageWhereUniqueInput>>;
  update?: InputMaybe<Array<WhatsAppMessageUpdateWithWhereUniqueWithoutClientInput>>;
  updateMany?: InputMaybe<Array<WhatsAppMessageUpdateManyWithWhereWithoutClientInput>>;
  upsert?: InputMaybe<Array<WhatsAppMessageUpsertWithWhereUniqueWithoutClientInput>>;
};

export type WhatsAppMessageUpdateManyWithoutWorkerNestedInput = {
  connect?: InputMaybe<Array<WhatsAppMessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WhatsAppMessageCreateOrConnectWithoutWorkerInput>>;
  create?: InputMaybe<Array<WhatsAppMessageCreateWithoutWorkerInput>>;
  createMany?: InputMaybe<WhatsAppMessageCreateManyWorkerInputEnvelope>;
  delete?: InputMaybe<Array<WhatsAppMessageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<WhatsAppMessageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<WhatsAppMessageWhereUniqueInput>>;
  set?: InputMaybe<Array<WhatsAppMessageWhereUniqueInput>>;
  update?: InputMaybe<Array<WhatsAppMessageUpdateWithWhereUniqueWithoutWorkerInput>>;
  updateMany?: InputMaybe<Array<WhatsAppMessageUpdateManyWithWhereWithoutWorkerInput>>;
  upsert?: InputMaybe<Array<WhatsAppMessageUpsertWithWhereUniqueWithoutWorkerInput>>;
};

export type WhatsAppMessageUpdateWithWhereUniqueWithoutClientInput = {
  data: WhatsAppMessageUpdateWithoutClientInput;
  where: WhatsAppMessageWhereUniqueInput;
};

export type WhatsAppMessageUpdateWithWhereUniqueWithoutWorkerInput = {
  data: WhatsAppMessageUpdateWithoutWorkerInput;
  where: WhatsAppMessageWhereUniqueInput;
};

export type WhatsAppMessageUpdateWithoutClientInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  direction?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  timestamp?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  worker?: InputMaybe<WorkerUpdateOneWithoutWhatsAppMessagesNestedInput>;
};

export type WhatsAppMessageUpdateWithoutWorkerInput = {
  client?: InputMaybe<ClientUpdateOneWithoutWhatsAppMessagesNestedInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  direction?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  timestamp?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type WhatsAppMessageUpsertWithWhereUniqueWithoutClientInput = {
  create: WhatsAppMessageCreateWithoutClientInput;
  update: WhatsAppMessageUpdateWithoutClientInput;
  where: WhatsAppMessageWhereUniqueInput;
};

export type WhatsAppMessageUpsertWithWhereUniqueWithoutWorkerInput = {
  create: WhatsAppMessageCreateWithoutWorkerInput;
  update: WhatsAppMessageUpdateWithoutWorkerInput;
  where: WhatsAppMessageWhereUniqueInput;
};

export type WhatsAppMessageWhereInput = {
  AND?: InputMaybe<Array<WhatsAppMessageWhereInput>>;
  NOT?: InputMaybe<Array<WhatsAppMessageWhereInput>>;
  OR?: InputMaybe<Array<WhatsAppMessageWhereInput>>;
  client?: InputMaybe<ClientNullableScalarRelationFilter>;
  clientId?: InputMaybe<StringNullableFilter>;
  content?: InputMaybe<StringFilter>;
  direction?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  phoneNumber?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  timestamp?: InputMaybe<DateTimeFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  worker?: InputMaybe<WorkerNullableScalarRelationFilter>;
  workerId?: InputMaybe<StringNullableFilter>;
};

export type WhatsAppMessageWhereUniqueInput = {
  AND?: InputMaybe<Array<WhatsAppMessageWhereInput>>;
  NOT?: InputMaybe<Array<WhatsAppMessageWhereInput>>;
  OR?: InputMaybe<Array<WhatsAppMessageWhereInput>>;
  client?: InputMaybe<ClientNullableScalarRelationFilter>;
  clientId?: InputMaybe<StringNullableFilter>;
  content?: InputMaybe<StringFilter>;
  direction?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  timestamp?: InputMaybe<DateTimeFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  worker?: InputMaybe<WorkerNullableScalarRelationFilter>;
  workerId?: InputMaybe<StringNullableFilter>;
};

export type Worker = {
  __typename?: 'Worker';
  _count: WorkerCount;
  accommodationType?: Maybe<Scalars['String']['output']>;
  activity?: Maybe<Activity>;
  activityId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  currentCity?: Maybe<Scalars['String']['output']>;
  currentSalary?: Maybe<Scalars['Float']['output']>;
  currentWorkplace?: Maybe<Scalars['String']['output']>;
  cvFile?: Maybe<Scalars['String']['output']>;
  dateOfBirth?: Maybe<Scalars['DateTime']['output']>;
  expectedSalary?: Maybe<Scalars['Float']['output']>;
  experience?: Maybe<Scalars['String']['output']>;
  expiryDate?: Maybe<Scalars['DateTime']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  hourlyRate: Scalars['Float']['output'];
  iban?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  interviews?: Maybe<Array<Interview>>;
  iqamaImage?: Maybe<Scalars['String']['output']>;
  iqamaNumber?: Maybe<Scalars['String']['output']>;
  nationality?: Maybe<Nationality>;
  nationalityId?: Maybe<Scalars['String']['output']>;
  portfolioFiles?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Position>;
  positionId?: Maybe<Scalars['String']['output']>;
  profilePicture?: Maybe<Scalars['String']['output']>;
  referralSource?: Maybe<Scalars['String']['output']>;
  skills?: Maybe<Scalars['String']['output']>;
  specialty?: Maybe<Specialty>;
  specialtyId?: Maybe<Scalars['String']['output']>;
  transferCount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
  whatsAppMessages?: Maybe<Array<WhatsAppMessage>>;
};

export type WorkerCount = {
  __typename?: 'WorkerCount';
  interviews: Scalars['Int']['output'];
  whatsAppMessages: Scalars['Int']['output'];
};

export type WorkerCreateManyActivityInput = {
  accommodationType?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentCity?: InputMaybe<Scalars['String']['input']>;
  currentSalary?: InputMaybe<Scalars['Float']['input']>;
  currentWorkplace?: InputMaybe<Scalars['String']['input']>;
  cvFile?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  expectedSalary?: InputMaybe<Scalars['Float']['input']>;
  experience?: InputMaybe<Scalars['String']['input']>;
  expiryDate?: InputMaybe<Scalars['DateTime']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  hourlyRate?: InputMaybe<Scalars['Float']['input']>;
  iban?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  iqamaImage?: InputMaybe<Scalars['String']['input']>;
  iqamaNumber?: InputMaybe<Scalars['String']['input']>;
  nationalityId?: InputMaybe<Scalars['String']['input']>;
  portfolioFiles?: InputMaybe<Scalars['String']['input']>;
  positionId?: InputMaybe<Scalars['String']['input']>;
  profilePicture?: InputMaybe<Scalars['String']['input']>;
  referralSource?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Scalars['String']['input']>;
  specialtyId?: InputMaybe<Scalars['String']['input']>;
  transferCount?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type WorkerCreateManyActivityInputEnvelope = {
  data: Array<WorkerCreateManyActivityInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WorkerCreateManyNationalityInput = {
  accommodationType?: InputMaybe<Scalars['String']['input']>;
  activityId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentCity?: InputMaybe<Scalars['String']['input']>;
  currentSalary?: InputMaybe<Scalars['Float']['input']>;
  currentWorkplace?: InputMaybe<Scalars['String']['input']>;
  cvFile?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  expectedSalary?: InputMaybe<Scalars['Float']['input']>;
  experience?: InputMaybe<Scalars['String']['input']>;
  expiryDate?: InputMaybe<Scalars['DateTime']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  hourlyRate?: InputMaybe<Scalars['Float']['input']>;
  iban?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  iqamaImage?: InputMaybe<Scalars['String']['input']>;
  iqamaNumber?: InputMaybe<Scalars['String']['input']>;
  portfolioFiles?: InputMaybe<Scalars['String']['input']>;
  positionId?: InputMaybe<Scalars['String']['input']>;
  profilePicture?: InputMaybe<Scalars['String']['input']>;
  referralSource?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Scalars['String']['input']>;
  specialtyId?: InputMaybe<Scalars['String']['input']>;
  transferCount?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type WorkerCreateManyNationalityInputEnvelope = {
  data: Array<WorkerCreateManyNationalityInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WorkerCreateManyPositionInput = {
  accommodationType?: InputMaybe<Scalars['String']['input']>;
  activityId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentCity?: InputMaybe<Scalars['String']['input']>;
  currentSalary?: InputMaybe<Scalars['Float']['input']>;
  currentWorkplace?: InputMaybe<Scalars['String']['input']>;
  cvFile?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  expectedSalary?: InputMaybe<Scalars['Float']['input']>;
  experience?: InputMaybe<Scalars['String']['input']>;
  expiryDate?: InputMaybe<Scalars['DateTime']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  hourlyRate?: InputMaybe<Scalars['Float']['input']>;
  iban?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  iqamaImage?: InputMaybe<Scalars['String']['input']>;
  iqamaNumber?: InputMaybe<Scalars['String']['input']>;
  nationalityId?: InputMaybe<Scalars['String']['input']>;
  portfolioFiles?: InputMaybe<Scalars['String']['input']>;
  profilePicture?: InputMaybe<Scalars['String']['input']>;
  referralSource?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Scalars['String']['input']>;
  specialtyId?: InputMaybe<Scalars['String']['input']>;
  transferCount?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type WorkerCreateManyPositionInputEnvelope = {
  data: Array<WorkerCreateManyPositionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WorkerCreateManySpecialtyInput = {
  accommodationType?: InputMaybe<Scalars['String']['input']>;
  activityId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentCity?: InputMaybe<Scalars['String']['input']>;
  currentSalary?: InputMaybe<Scalars['Float']['input']>;
  currentWorkplace?: InputMaybe<Scalars['String']['input']>;
  cvFile?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  expectedSalary?: InputMaybe<Scalars['Float']['input']>;
  experience?: InputMaybe<Scalars['String']['input']>;
  expiryDate?: InputMaybe<Scalars['DateTime']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  hourlyRate?: InputMaybe<Scalars['Float']['input']>;
  iban?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  iqamaImage?: InputMaybe<Scalars['String']['input']>;
  iqamaNumber?: InputMaybe<Scalars['String']['input']>;
  nationalityId?: InputMaybe<Scalars['String']['input']>;
  portfolioFiles?: InputMaybe<Scalars['String']['input']>;
  positionId?: InputMaybe<Scalars['String']['input']>;
  profilePicture?: InputMaybe<Scalars['String']['input']>;
  referralSource?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Scalars['String']['input']>;
  transferCount?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type WorkerCreateManySpecialtyInputEnvelope = {
  data: Array<WorkerCreateManySpecialtyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WorkerCreateNestedManyWithoutActivityInput = {
  connect?: InputMaybe<Array<WorkerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WorkerCreateOrConnectWithoutActivityInput>>;
  create?: InputMaybe<Array<WorkerCreateWithoutActivityInput>>;
  createMany?: InputMaybe<WorkerCreateManyActivityInputEnvelope>;
};

export type WorkerCreateNestedManyWithoutNationalityInput = {
  connect?: InputMaybe<Array<WorkerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WorkerCreateOrConnectWithoutNationalityInput>>;
  create?: InputMaybe<Array<WorkerCreateWithoutNationalityInput>>;
  createMany?: InputMaybe<WorkerCreateManyNationalityInputEnvelope>;
};

export type WorkerCreateNestedManyWithoutPositionInput = {
  connect?: InputMaybe<Array<WorkerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WorkerCreateOrConnectWithoutPositionInput>>;
  create?: InputMaybe<Array<WorkerCreateWithoutPositionInput>>;
  createMany?: InputMaybe<WorkerCreateManyPositionInputEnvelope>;
};

export type WorkerCreateNestedManyWithoutSpecialtyInput = {
  connect?: InputMaybe<Array<WorkerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WorkerCreateOrConnectWithoutSpecialtyInput>>;
  create?: InputMaybe<Array<WorkerCreateWithoutSpecialtyInput>>;
  createMany?: InputMaybe<WorkerCreateManySpecialtyInputEnvelope>;
};

export type WorkerCreateNestedOneWithoutInterviewsInput = {
  connect?: InputMaybe<WorkerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<WorkerCreateOrConnectWithoutInterviewsInput>;
  create?: InputMaybe<WorkerCreateWithoutInterviewsInput>;
};

export type WorkerCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<WorkerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<WorkerCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<WorkerCreateWithoutUserInput>;
};

export type WorkerCreateNestedOneWithoutWhatsAppMessagesInput = {
  connect?: InputMaybe<WorkerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<WorkerCreateOrConnectWithoutWhatsAppMessagesInput>;
  create?: InputMaybe<WorkerCreateWithoutWhatsAppMessagesInput>;
};

export type WorkerCreateOrConnectWithoutActivityInput = {
  create: WorkerCreateWithoutActivityInput;
  where: WorkerWhereUniqueInput;
};

export type WorkerCreateOrConnectWithoutInterviewsInput = {
  create: WorkerCreateWithoutInterviewsInput;
  where: WorkerWhereUniqueInput;
};

export type WorkerCreateOrConnectWithoutNationalityInput = {
  create: WorkerCreateWithoutNationalityInput;
  where: WorkerWhereUniqueInput;
};

export type WorkerCreateOrConnectWithoutPositionInput = {
  create: WorkerCreateWithoutPositionInput;
  where: WorkerWhereUniqueInput;
};

export type WorkerCreateOrConnectWithoutSpecialtyInput = {
  create: WorkerCreateWithoutSpecialtyInput;
  where: WorkerWhereUniqueInput;
};

export type WorkerCreateOrConnectWithoutUserInput = {
  create: WorkerCreateWithoutUserInput;
  where: WorkerWhereUniqueInput;
};

export type WorkerCreateOrConnectWithoutWhatsAppMessagesInput = {
  create: WorkerCreateWithoutWhatsAppMessagesInput;
  where: WorkerWhereUniqueInput;
};

export type WorkerCreateWithoutActivityInput = {
  accommodationType?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentCity?: InputMaybe<Scalars['String']['input']>;
  currentSalary?: InputMaybe<Scalars['Float']['input']>;
  currentWorkplace?: InputMaybe<Scalars['String']['input']>;
  cvFile?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  expectedSalary?: InputMaybe<Scalars['Float']['input']>;
  experience?: InputMaybe<Scalars['String']['input']>;
  expiryDate?: InputMaybe<Scalars['DateTime']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  hourlyRate?: InputMaybe<Scalars['Float']['input']>;
  iban?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  interviews?: InputMaybe<InterviewCreateNestedManyWithoutWorkerInput>;
  iqamaImage?: InputMaybe<Scalars['String']['input']>;
  iqamaNumber?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<NationalityCreateNestedOneWithoutWorkersInput>;
  portfolioFiles?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<PositionCreateNestedOneWithoutWorkersInput>;
  profilePicture?: InputMaybe<Scalars['String']['input']>;
  referralSource?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Scalars['String']['input']>;
  specialty?: InputMaybe<SpecialtyCreateNestedOneWithoutWorkersInput>;
  transferCount?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutWorkerInput;
  whatsAppMessages?: InputMaybe<WhatsAppMessageCreateNestedManyWithoutWorkerInput>;
};

export type WorkerCreateWithoutInterviewsInput = {
  accommodationType?: InputMaybe<Scalars['String']['input']>;
  activity?: InputMaybe<ActivityCreateNestedOneWithoutWorkersInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentCity?: InputMaybe<Scalars['String']['input']>;
  currentSalary?: InputMaybe<Scalars['Float']['input']>;
  currentWorkplace?: InputMaybe<Scalars['String']['input']>;
  cvFile?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  expectedSalary?: InputMaybe<Scalars['Float']['input']>;
  experience?: InputMaybe<Scalars['String']['input']>;
  expiryDate?: InputMaybe<Scalars['DateTime']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  hourlyRate?: InputMaybe<Scalars['Float']['input']>;
  iban?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  iqamaImage?: InputMaybe<Scalars['String']['input']>;
  iqamaNumber?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<NationalityCreateNestedOneWithoutWorkersInput>;
  portfolioFiles?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<PositionCreateNestedOneWithoutWorkersInput>;
  profilePicture?: InputMaybe<Scalars['String']['input']>;
  referralSource?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Scalars['String']['input']>;
  specialty?: InputMaybe<SpecialtyCreateNestedOneWithoutWorkersInput>;
  transferCount?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutWorkerInput;
  whatsAppMessages?: InputMaybe<WhatsAppMessageCreateNestedManyWithoutWorkerInput>;
};

export type WorkerCreateWithoutNationalityInput = {
  accommodationType?: InputMaybe<Scalars['String']['input']>;
  activity?: InputMaybe<ActivityCreateNestedOneWithoutWorkersInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentCity?: InputMaybe<Scalars['String']['input']>;
  currentSalary?: InputMaybe<Scalars['Float']['input']>;
  currentWorkplace?: InputMaybe<Scalars['String']['input']>;
  cvFile?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  expectedSalary?: InputMaybe<Scalars['Float']['input']>;
  experience?: InputMaybe<Scalars['String']['input']>;
  expiryDate?: InputMaybe<Scalars['DateTime']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  hourlyRate?: InputMaybe<Scalars['Float']['input']>;
  iban?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  interviews?: InputMaybe<InterviewCreateNestedManyWithoutWorkerInput>;
  iqamaImage?: InputMaybe<Scalars['String']['input']>;
  iqamaNumber?: InputMaybe<Scalars['String']['input']>;
  portfolioFiles?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<PositionCreateNestedOneWithoutWorkersInput>;
  profilePicture?: InputMaybe<Scalars['String']['input']>;
  referralSource?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Scalars['String']['input']>;
  specialty?: InputMaybe<SpecialtyCreateNestedOneWithoutWorkersInput>;
  transferCount?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutWorkerInput;
  whatsAppMessages?: InputMaybe<WhatsAppMessageCreateNestedManyWithoutWorkerInput>;
};

export type WorkerCreateWithoutPositionInput = {
  accommodationType?: InputMaybe<Scalars['String']['input']>;
  activity?: InputMaybe<ActivityCreateNestedOneWithoutWorkersInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentCity?: InputMaybe<Scalars['String']['input']>;
  currentSalary?: InputMaybe<Scalars['Float']['input']>;
  currentWorkplace?: InputMaybe<Scalars['String']['input']>;
  cvFile?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  expectedSalary?: InputMaybe<Scalars['Float']['input']>;
  experience?: InputMaybe<Scalars['String']['input']>;
  expiryDate?: InputMaybe<Scalars['DateTime']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  hourlyRate?: InputMaybe<Scalars['Float']['input']>;
  iban?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  interviews?: InputMaybe<InterviewCreateNestedManyWithoutWorkerInput>;
  iqamaImage?: InputMaybe<Scalars['String']['input']>;
  iqamaNumber?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<NationalityCreateNestedOneWithoutWorkersInput>;
  portfolioFiles?: InputMaybe<Scalars['String']['input']>;
  profilePicture?: InputMaybe<Scalars['String']['input']>;
  referralSource?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Scalars['String']['input']>;
  specialty?: InputMaybe<SpecialtyCreateNestedOneWithoutWorkersInput>;
  transferCount?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutWorkerInput;
  whatsAppMessages?: InputMaybe<WhatsAppMessageCreateNestedManyWithoutWorkerInput>;
};

export type WorkerCreateWithoutSpecialtyInput = {
  accommodationType?: InputMaybe<Scalars['String']['input']>;
  activity?: InputMaybe<ActivityCreateNestedOneWithoutWorkersInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentCity?: InputMaybe<Scalars['String']['input']>;
  currentSalary?: InputMaybe<Scalars['Float']['input']>;
  currentWorkplace?: InputMaybe<Scalars['String']['input']>;
  cvFile?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  expectedSalary?: InputMaybe<Scalars['Float']['input']>;
  experience?: InputMaybe<Scalars['String']['input']>;
  expiryDate?: InputMaybe<Scalars['DateTime']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  hourlyRate?: InputMaybe<Scalars['Float']['input']>;
  iban?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  interviews?: InputMaybe<InterviewCreateNestedManyWithoutWorkerInput>;
  iqamaImage?: InputMaybe<Scalars['String']['input']>;
  iqamaNumber?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<NationalityCreateNestedOneWithoutWorkersInput>;
  portfolioFiles?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<PositionCreateNestedOneWithoutWorkersInput>;
  profilePicture?: InputMaybe<Scalars['String']['input']>;
  referralSource?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Scalars['String']['input']>;
  transferCount?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutWorkerInput;
  whatsAppMessages?: InputMaybe<WhatsAppMessageCreateNestedManyWithoutWorkerInput>;
};

export type WorkerCreateWithoutUserInput = {
  accommodationType?: InputMaybe<Scalars['String']['input']>;
  activity?: InputMaybe<ActivityCreateNestedOneWithoutWorkersInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentCity?: InputMaybe<Scalars['String']['input']>;
  currentSalary?: InputMaybe<Scalars['Float']['input']>;
  currentWorkplace?: InputMaybe<Scalars['String']['input']>;
  cvFile?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  expectedSalary?: InputMaybe<Scalars['Float']['input']>;
  experience?: InputMaybe<Scalars['String']['input']>;
  expiryDate?: InputMaybe<Scalars['DateTime']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  hourlyRate?: InputMaybe<Scalars['Float']['input']>;
  iban?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  interviews?: InputMaybe<InterviewCreateNestedManyWithoutWorkerInput>;
  iqamaImage?: InputMaybe<Scalars['String']['input']>;
  iqamaNumber?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<NationalityCreateNestedOneWithoutWorkersInput>;
  portfolioFiles?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<PositionCreateNestedOneWithoutWorkersInput>;
  profilePicture?: InputMaybe<Scalars['String']['input']>;
  referralSource?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Scalars['String']['input']>;
  specialty?: InputMaybe<SpecialtyCreateNestedOneWithoutWorkersInput>;
  transferCount?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  whatsAppMessages?: InputMaybe<WhatsAppMessageCreateNestedManyWithoutWorkerInput>;
};

export type WorkerCreateWithoutWhatsAppMessagesInput = {
  accommodationType?: InputMaybe<Scalars['String']['input']>;
  activity?: InputMaybe<ActivityCreateNestedOneWithoutWorkersInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentCity?: InputMaybe<Scalars['String']['input']>;
  currentSalary?: InputMaybe<Scalars['Float']['input']>;
  currentWorkplace?: InputMaybe<Scalars['String']['input']>;
  cvFile?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  expectedSalary?: InputMaybe<Scalars['Float']['input']>;
  experience?: InputMaybe<Scalars['String']['input']>;
  expiryDate?: InputMaybe<Scalars['DateTime']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  hourlyRate?: InputMaybe<Scalars['Float']['input']>;
  iban?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  interviews?: InputMaybe<InterviewCreateNestedManyWithoutWorkerInput>;
  iqamaImage?: InputMaybe<Scalars['String']['input']>;
  iqamaNumber?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<NationalityCreateNestedOneWithoutWorkersInput>;
  portfolioFiles?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<PositionCreateNestedOneWithoutWorkersInput>;
  profilePicture?: InputMaybe<Scalars['String']['input']>;
  referralSource?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Scalars['String']['input']>;
  specialty?: InputMaybe<SpecialtyCreateNestedOneWithoutWorkersInput>;
  transferCount?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutWorkerInput;
};

export type WorkerFilterInput = {
  activityId?: InputMaybe<Scalars['String']['input']>;
  experience?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  hourlyRateMax?: InputMaybe<Scalars['Float']['input']>;
  hourlyRateMin?: InputMaybe<Scalars['Float']['input']>;
  nationalityId?: InputMaybe<Scalars['String']['input']>;
  positionId?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Scalars['String']['input']>;
  specialtyId?: InputMaybe<Scalars['String']['input']>;
};

export type WorkerListRelationFilter = {
  every?: InputMaybe<WorkerWhereInput>;
  none?: InputMaybe<WorkerWhereInput>;
  some?: InputMaybe<WorkerWhereInput>;
};

export type WorkerNullableScalarRelationFilter = {
  is?: InputMaybe<WorkerWhereInput>;
  isNot?: InputMaybe<WorkerWhereInput>;
};

export type WorkerOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type WorkerOrderByWithRelationInput = {
  accommodationType?: InputMaybe<SortOrderInput>;
  activity?: InputMaybe<ActivityOrderByWithRelationInput>;
  activityId?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  currentCity?: InputMaybe<SortOrderInput>;
  currentSalary?: InputMaybe<SortOrderInput>;
  currentWorkplace?: InputMaybe<SortOrderInput>;
  cvFile?: InputMaybe<SortOrderInput>;
  dateOfBirth?: InputMaybe<SortOrderInput>;
  expectedSalary?: InputMaybe<SortOrderInput>;
  experience?: InputMaybe<SortOrderInput>;
  expiryDate?: InputMaybe<SortOrderInput>;
  gender?: InputMaybe<SortOrderInput>;
  hourlyRate?: InputMaybe<SortOrder>;
  iban?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  interviews?: InputMaybe<InterviewOrderByRelationAggregateInput>;
  iqamaImage?: InputMaybe<SortOrderInput>;
  iqamaNumber?: InputMaybe<SortOrderInput>;
  nationality?: InputMaybe<NationalityOrderByWithRelationInput>;
  nationalityId?: InputMaybe<SortOrderInput>;
  portfolioFiles?: InputMaybe<SortOrderInput>;
  position?: InputMaybe<PositionOrderByWithRelationInput>;
  positionId?: InputMaybe<SortOrderInput>;
  profilePicture?: InputMaybe<SortOrderInput>;
  referralSource?: InputMaybe<SortOrderInput>;
  skills?: InputMaybe<SortOrderInput>;
  specialty?: InputMaybe<SpecialtyOrderByWithRelationInput>;
  specialtyId?: InputMaybe<SortOrderInput>;
  transferCount?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
  whatsAppMessages?: InputMaybe<WhatsAppMessageOrderByRelationAggregateInput>;
};

export type WorkerPaginatedResponse = {
  __typename?: 'WorkerPaginatedResponse';
  data: Array<Worker>;
  pagination: PaginationMeta;
};

export type WorkerScalarRelationFilter = {
  is?: InputMaybe<WorkerWhereInput>;
  isNot?: InputMaybe<WorkerWhereInput>;
};

export type WorkerScalarWhereInput = {
  AND?: InputMaybe<Array<WorkerScalarWhereInput>>;
  NOT?: InputMaybe<Array<WorkerScalarWhereInput>>;
  OR?: InputMaybe<Array<WorkerScalarWhereInput>>;
  accommodationType?: InputMaybe<StringNullableFilter>;
  activityId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  currentCity?: InputMaybe<StringNullableFilter>;
  currentSalary?: InputMaybe<FloatNullableFilter>;
  currentWorkplace?: InputMaybe<StringNullableFilter>;
  cvFile?: InputMaybe<StringNullableFilter>;
  dateOfBirth?: InputMaybe<DateTimeNullableFilter>;
  expectedSalary?: InputMaybe<FloatNullableFilter>;
  experience?: InputMaybe<StringNullableFilter>;
  expiryDate?: InputMaybe<DateTimeNullableFilter>;
  gender?: InputMaybe<StringNullableFilter>;
  hourlyRate?: InputMaybe<FloatFilter>;
  iban?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  iqamaImage?: InputMaybe<StringNullableFilter>;
  iqamaNumber?: InputMaybe<StringNullableFilter>;
  nationalityId?: InputMaybe<StringNullableFilter>;
  portfolioFiles?: InputMaybe<StringNullableFilter>;
  positionId?: InputMaybe<StringNullableFilter>;
  profilePicture?: InputMaybe<StringNullableFilter>;
  referralSource?: InputMaybe<StringNullableFilter>;
  skills?: InputMaybe<StringNullableFilter>;
  specialtyId?: InputMaybe<StringNullableFilter>;
  transferCount?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type WorkerStats = {
  __typename?: 'WorkerStats';
  totalWorkers: Scalars['Int']['output'];
  workersByActivity: Array<ActivityCount>;
  workersByNationality: Array<NationalityCount>;
  workersBySpecialty: Array<SpecialtyCount>;
};

export type WorkerUpdateManyMutationInput = {
  accommodationType?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currentCity?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  currentSalary?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  currentWorkplace?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  cvFile?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  dateOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  expectedSalary?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  experience?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expiryDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  hourlyRate?: InputMaybe<FloatFieldUpdateOperationsInput>;
  iban?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  iqamaImage?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  iqamaNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  portfolioFiles?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  referralSource?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  skills?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  transferCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type WorkerUpdateManyWithWhereWithoutActivityInput = {
  data: WorkerUpdateManyMutationInput;
  where: WorkerScalarWhereInput;
};

export type WorkerUpdateManyWithWhereWithoutNationalityInput = {
  data: WorkerUpdateManyMutationInput;
  where: WorkerScalarWhereInput;
};

export type WorkerUpdateManyWithWhereWithoutPositionInput = {
  data: WorkerUpdateManyMutationInput;
  where: WorkerScalarWhereInput;
};

export type WorkerUpdateManyWithWhereWithoutSpecialtyInput = {
  data: WorkerUpdateManyMutationInput;
  where: WorkerScalarWhereInput;
};

export type WorkerUpdateManyWithoutActivityNestedInput = {
  connect?: InputMaybe<Array<WorkerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WorkerCreateOrConnectWithoutActivityInput>>;
  create?: InputMaybe<Array<WorkerCreateWithoutActivityInput>>;
  createMany?: InputMaybe<WorkerCreateManyActivityInputEnvelope>;
  delete?: InputMaybe<Array<WorkerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<WorkerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<WorkerWhereUniqueInput>>;
  set?: InputMaybe<Array<WorkerWhereUniqueInput>>;
  update?: InputMaybe<Array<WorkerUpdateWithWhereUniqueWithoutActivityInput>>;
  updateMany?: InputMaybe<Array<WorkerUpdateManyWithWhereWithoutActivityInput>>;
  upsert?: InputMaybe<Array<WorkerUpsertWithWhereUniqueWithoutActivityInput>>;
};

export type WorkerUpdateManyWithoutNationalityNestedInput = {
  connect?: InputMaybe<Array<WorkerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WorkerCreateOrConnectWithoutNationalityInput>>;
  create?: InputMaybe<Array<WorkerCreateWithoutNationalityInput>>;
  createMany?: InputMaybe<WorkerCreateManyNationalityInputEnvelope>;
  delete?: InputMaybe<Array<WorkerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<WorkerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<WorkerWhereUniqueInput>>;
  set?: InputMaybe<Array<WorkerWhereUniqueInput>>;
  update?: InputMaybe<Array<WorkerUpdateWithWhereUniqueWithoutNationalityInput>>;
  updateMany?: InputMaybe<Array<WorkerUpdateManyWithWhereWithoutNationalityInput>>;
  upsert?: InputMaybe<Array<WorkerUpsertWithWhereUniqueWithoutNationalityInput>>;
};

export type WorkerUpdateManyWithoutPositionNestedInput = {
  connect?: InputMaybe<Array<WorkerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WorkerCreateOrConnectWithoutPositionInput>>;
  create?: InputMaybe<Array<WorkerCreateWithoutPositionInput>>;
  createMany?: InputMaybe<WorkerCreateManyPositionInputEnvelope>;
  delete?: InputMaybe<Array<WorkerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<WorkerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<WorkerWhereUniqueInput>>;
  set?: InputMaybe<Array<WorkerWhereUniqueInput>>;
  update?: InputMaybe<Array<WorkerUpdateWithWhereUniqueWithoutPositionInput>>;
  updateMany?: InputMaybe<Array<WorkerUpdateManyWithWhereWithoutPositionInput>>;
  upsert?: InputMaybe<Array<WorkerUpsertWithWhereUniqueWithoutPositionInput>>;
};

export type WorkerUpdateManyWithoutSpecialtyNestedInput = {
  connect?: InputMaybe<Array<WorkerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WorkerCreateOrConnectWithoutSpecialtyInput>>;
  create?: InputMaybe<Array<WorkerCreateWithoutSpecialtyInput>>;
  createMany?: InputMaybe<WorkerCreateManySpecialtyInputEnvelope>;
  delete?: InputMaybe<Array<WorkerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<WorkerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<WorkerWhereUniqueInput>>;
  set?: InputMaybe<Array<WorkerWhereUniqueInput>>;
  update?: InputMaybe<Array<WorkerUpdateWithWhereUniqueWithoutSpecialtyInput>>;
  updateMany?: InputMaybe<Array<WorkerUpdateManyWithWhereWithoutSpecialtyInput>>;
  upsert?: InputMaybe<Array<WorkerUpsertWithWhereUniqueWithoutSpecialtyInput>>;
};

export type WorkerUpdateOneRequiredWithoutInterviewsNestedInput = {
  connect?: InputMaybe<WorkerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<WorkerCreateOrConnectWithoutInterviewsInput>;
  create?: InputMaybe<WorkerCreateWithoutInterviewsInput>;
  update?: InputMaybe<WorkerUpdateToOneWithWhereWithoutInterviewsInput>;
  upsert?: InputMaybe<WorkerUpsertWithoutInterviewsInput>;
};

export type WorkerUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<WorkerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<WorkerCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<WorkerCreateWithoutUserInput>;
  delete?: InputMaybe<WorkerWhereInput>;
  disconnect?: InputMaybe<WorkerWhereInput>;
  update?: InputMaybe<WorkerUpdateToOneWithWhereWithoutUserInput>;
  upsert?: InputMaybe<WorkerUpsertWithoutUserInput>;
};

export type WorkerUpdateOneWithoutWhatsAppMessagesNestedInput = {
  connect?: InputMaybe<WorkerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<WorkerCreateOrConnectWithoutWhatsAppMessagesInput>;
  create?: InputMaybe<WorkerCreateWithoutWhatsAppMessagesInput>;
  delete?: InputMaybe<WorkerWhereInput>;
  disconnect?: InputMaybe<WorkerWhereInput>;
  update?: InputMaybe<WorkerUpdateToOneWithWhereWithoutWhatsAppMessagesInput>;
  upsert?: InputMaybe<WorkerUpsertWithoutWhatsAppMessagesInput>;
};

export type WorkerUpdateToOneWithWhereWithoutInterviewsInput = {
  data: WorkerUpdateWithoutInterviewsInput;
  where?: InputMaybe<WorkerWhereInput>;
};

export type WorkerUpdateToOneWithWhereWithoutUserInput = {
  data: WorkerUpdateWithoutUserInput;
  where?: InputMaybe<WorkerWhereInput>;
};

export type WorkerUpdateToOneWithWhereWithoutWhatsAppMessagesInput = {
  data: WorkerUpdateWithoutWhatsAppMessagesInput;
  where?: InputMaybe<WorkerWhereInput>;
};

export type WorkerUpdateWithWhereUniqueWithoutActivityInput = {
  data: WorkerUpdateWithoutActivityInput;
  where: WorkerWhereUniqueInput;
};

export type WorkerUpdateWithWhereUniqueWithoutNationalityInput = {
  data: WorkerUpdateWithoutNationalityInput;
  where: WorkerWhereUniqueInput;
};

export type WorkerUpdateWithWhereUniqueWithoutPositionInput = {
  data: WorkerUpdateWithoutPositionInput;
  where: WorkerWhereUniqueInput;
};

export type WorkerUpdateWithWhereUniqueWithoutSpecialtyInput = {
  data: WorkerUpdateWithoutSpecialtyInput;
  where: WorkerWhereUniqueInput;
};

export type WorkerUpdateWithoutActivityInput = {
  accommodationType?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currentCity?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  currentSalary?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  currentWorkplace?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  cvFile?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  dateOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  expectedSalary?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  experience?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expiryDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  hourlyRate?: InputMaybe<FloatFieldUpdateOperationsInput>;
  iban?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  interviews?: InputMaybe<InterviewUpdateManyWithoutWorkerNestedInput>;
  iqamaImage?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  iqamaNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nationality?: InputMaybe<NationalityUpdateOneWithoutWorkersNestedInput>;
  portfolioFiles?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  position?: InputMaybe<PositionUpdateOneWithoutWorkersNestedInput>;
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  referralSource?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  skills?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  specialty?: InputMaybe<SpecialtyUpdateOneWithoutWorkersNestedInput>;
  transferCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutWorkerNestedInput>;
  whatsAppMessages?: InputMaybe<WhatsAppMessageUpdateManyWithoutWorkerNestedInput>;
};

export type WorkerUpdateWithoutInterviewsInput = {
  accommodationType?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  activity?: InputMaybe<ActivityUpdateOneWithoutWorkersNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currentCity?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  currentSalary?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  currentWorkplace?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  cvFile?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  dateOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  expectedSalary?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  experience?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expiryDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  hourlyRate?: InputMaybe<FloatFieldUpdateOperationsInput>;
  iban?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  iqamaImage?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  iqamaNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nationality?: InputMaybe<NationalityUpdateOneWithoutWorkersNestedInput>;
  portfolioFiles?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  position?: InputMaybe<PositionUpdateOneWithoutWorkersNestedInput>;
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  referralSource?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  skills?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  specialty?: InputMaybe<SpecialtyUpdateOneWithoutWorkersNestedInput>;
  transferCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutWorkerNestedInput>;
  whatsAppMessages?: InputMaybe<WhatsAppMessageUpdateManyWithoutWorkerNestedInput>;
};

export type WorkerUpdateWithoutNationalityInput = {
  accommodationType?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  activity?: InputMaybe<ActivityUpdateOneWithoutWorkersNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currentCity?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  currentSalary?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  currentWorkplace?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  cvFile?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  dateOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  expectedSalary?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  experience?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expiryDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  hourlyRate?: InputMaybe<FloatFieldUpdateOperationsInput>;
  iban?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  interviews?: InputMaybe<InterviewUpdateManyWithoutWorkerNestedInput>;
  iqamaImage?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  iqamaNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  portfolioFiles?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  position?: InputMaybe<PositionUpdateOneWithoutWorkersNestedInput>;
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  referralSource?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  skills?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  specialty?: InputMaybe<SpecialtyUpdateOneWithoutWorkersNestedInput>;
  transferCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutWorkerNestedInput>;
  whatsAppMessages?: InputMaybe<WhatsAppMessageUpdateManyWithoutWorkerNestedInput>;
};

export type WorkerUpdateWithoutPositionInput = {
  accommodationType?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  activity?: InputMaybe<ActivityUpdateOneWithoutWorkersNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currentCity?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  currentSalary?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  currentWorkplace?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  cvFile?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  dateOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  expectedSalary?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  experience?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expiryDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  hourlyRate?: InputMaybe<FloatFieldUpdateOperationsInput>;
  iban?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  interviews?: InputMaybe<InterviewUpdateManyWithoutWorkerNestedInput>;
  iqamaImage?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  iqamaNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nationality?: InputMaybe<NationalityUpdateOneWithoutWorkersNestedInput>;
  portfolioFiles?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  referralSource?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  skills?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  specialty?: InputMaybe<SpecialtyUpdateOneWithoutWorkersNestedInput>;
  transferCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutWorkerNestedInput>;
  whatsAppMessages?: InputMaybe<WhatsAppMessageUpdateManyWithoutWorkerNestedInput>;
};

export type WorkerUpdateWithoutSpecialtyInput = {
  accommodationType?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  activity?: InputMaybe<ActivityUpdateOneWithoutWorkersNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currentCity?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  currentSalary?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  currentWorkplace?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  cvFile?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  dateOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  expectedSalary?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  experience?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expiryDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  hourlyRate?: InputMaybe<FloatFieldUpdateOperationsInput>;
  iban?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  interviews?: InputMaybe<InterviewUpdateManyWithoutWorkerNestedInput>;
  iqamaImage?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  iqamaNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nationality?: InputMaybe<NationalityUpdateOneWithoutWorkersNestedInput>;
  portfolioFiles?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  position?: InputMaybe<PositionUpdateOneWithoutWorkersNestedInput>;
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  referralSource?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  skills?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  transferCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutWorkerNestedInput>;
  whatsAppMessages?: InputMaybe<WhatsAppMessageUpdateManyWithoutWorkerNestedInput>;
};

export type WorkerUpdateWithoutUserInput = {
  accommodationType?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  activity?: InputMaybe<ActivityUpdateOneWithoutWorkersNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currentCity?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  currentSalary?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  currentWorkplace?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  cvFile?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  dateOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  expectedSalary?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  experience?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expiryDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  hourlyRate?: InputMaybe<FloatFieldUpdateOperationsInput>;
  iban?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  interviews?: InputMaybe<InterviewUpdateManyWithoutWorkerNestedInput>;
  iqamaImage?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  iqamaNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nationality?: InputMaybe<NationalityUpdateOneWithoutWorkersNestedInput>;
  portfolioFiles?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  position?: InputMaybe<PositionUpdateOneWithoutWorkersNestedInput>;
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  referralSource?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  skills?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  specialty?: InputMaybe<SpecialtyUpdateOneWithoutWorkersNestedInput>;
  transferCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  whatsAppMessages?: InputMaybe<WhatsAppMessageUpdateManyWithoutWorkerNestedInput>;
};

export type WorkerUpdateWithoutWhatsAppMessagesInput = {
  accommodationType?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  activity?: InputMaybe<ActivityUpdateOneWithoutWorkersNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currentCity?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  currentSalary?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  currentWorkplace?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  cvFile?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  dateOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  expectedSalary?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  experience?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expiryDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  hourlyRate?: InputMaybe<FloatFieldUpdateOperationsInput>;
  iban?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  interviews?: InputMaybe<InterviewUpdateManyWithoutWorkerNestedInput>;
  iqamaImage?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  iqamaNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nationality?: InputMaybe<NationalityUpdateOneWithoutWorkersNestedInput>;
  portfolioFiles?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  position?: InputMaybe<PositionUpdateOneWithoutWorkersNestedInput>;
  profilePicture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  referralSource?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  skills?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  specialty?: InputMaybe<SpecialtyUpdateOneWithoutWorkersNestedInput>;
  transferCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutWorkerNestedInput>;
};

export type WorkerUpsertWithWhereUniqueWithoutActivityInput = {
  create: WorkerCreateWithoutActivityInput;
  update: WorkerUpdateWithoutActivityInput;
  where: WorkerWhereUniqueInput;
};

export type WorkerUpsertWithWhereUniqueWithoutNationalityInput = {
  create: WorkerCreateWithoutNationalityInput;
  update: WorkerUpdateWithoutNationalityInput;
  where: WorkerWhereUniqueInput;
};

export type WorkerUpsertWithWhereUniqueWithoutPositionInput = {
  create: WorkerCreateWithoutPositionInput;
  update: WorkerUpdateWithoutPositionInput;
  where: WorkerWhereUniqueInput;
};

export type WorkerUpsertWithWhereUniqueWithoutSpecialtyInput = {
  create: WorkerCreateWithoutSpecialtyInput;
  update: WorkerUpdateWithoutSpecialtyInput;
  where: WorkerWhereUniqueInput;
};

export type WorkerUpsertWithoutInterviewsInput = {
  create: WorkerCreateWithoutInterviewsInput;
  update: WorkerUpdateWithoutInterviewsInput;
  where?: InputMaybe<WorkerWhereInput>;
};

export type WorkerUpsertWithoutUserInput = {
  create: WorkerCreateWithoutUserInput;
  update: WorkerUpdateWithoutUserInput;
  where?: InputMaybe<WorkerWhereInput>;
};

export type WorkerUpsertWithoutWhatsAppMessagesInput = {
  create: WorkerCreateWithoutWhatsAppMessagesInput;
  update: WorkerUpdateWithoutWhatsAppMessagesInput;
  where?: InputMaybe<WorkerWhereInput>;
};

export type WorkerWhereInput = {
  AND?: InputMaybe<Array<WorkerWhereInput>>;
  NOT?: InputMaybe<Array<WorkerWhereInput>>;
  OR?: InputMaybe<Array<WorkerWhereInput>>;
  accommodationType?: InputMaybe<StringNullableFilter>;
  activity?: InputMaybe<ActivityNullableScalarRelationFilter>;
  activityId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  currentCity?: InputMaybe<StringNullableFilter>;
  currentSalary?: InputMaybe<FloatNullableFilter>;
  currentWorkplace?: InputMaybe<StringNullableFilter>;
  cvFile?: InputMaybe<StringNullableFilter>;
  dateOfBirth?: InputMaybe<DateTimeNullableFilter>;
  expectedSalary?: InputMaybe<FloatNullableFilter>;
  experience?: InputMaybe<StringNullableFilter>;
  expiryDate?: InputMaybe<DateTimeNullableFilter>;
  gender?: InputMaybe<StringNullableFilter>;
  hourlyRate?: InputMaybe<FloatFilter>;
  iban?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  interviews?: InputMaybe<InterviewListRelationFilter>;
  iqamaImage?: InputMaybe<StringNullableFilter>;
  iqamaNumber?: InputMaybe<StringNullableFilter>;
  nationality?: InputMaybe<NationalityNullableScalarRelationFilter>;
  nationalityId?: InputMaybe<StringNullableFilter>;
  portfolioFiles?: InputMaybe<StringNullableFilter>;
  position?: InputMaybe<PositionNullableScalarRelationFilter>;
  positionId?: InputMaybe<StringNullableFilter>;
  profilePicture?: InputMaybe<StringNullableFilter>;
  referralSource?: InputMaybe<StringNullableFilter>;
  skills?: InputMaybe<StringNullableFilter>;
  specialty?: InputMaybe<SpecialtyNullableScalarRelationFilter>;
  specialtyId?: InputMaybe<StringNullableFilter>;
  transferCount?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  whatsAppMessages?: InputMaybe<WhatsAppMessageListRelationFilter>;
};

export type WorkerWhereUniqueInput = {
  AND?: InputMaybe<Array<WorkerWhereInput>>;
  NOT?: InputMaybe<Array<WorkerWhereInput>>;
  OR?: InputMaybe<Array<WorkerWhereInput>>;
  accommodationType?: InputMaybe<StringNullableFilter>;
  activity?: InputMaybe<ActivityNullableScalarRelationFilter>;
  activityId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  currentCity?: InputMaybe<StringNullableFilter>;
  currentSalary?: InputMaybe<FloatNullableFilter>;
  currentWorkplace?: InputMaybe<StringNullableFilter>;
  cvFile?: InputMaybe<StringNullableFilter>;
  dateOfBirth?: InputMaybe<DateTimeNullableFilter>;
  expectedSalary?: InputMaybe<FloatNullableFilter>;
  experience?: InputMaybe<StringNullableFilter>;
  expiryDate?: InputMaybe<DateTimeNullableFilter>;
  gender?: InputMaybe<StringNullableFilter>;
  hourlyRate?: InputMaybe<FloatFilter>;
  iban?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  interviews?: InputMaybe<InterviewListRelationFilter>;
  iqamaImage?: InputMaybe<StringNullableFilter>;
  iqamaNumber?: InputMaybe<StringNullableFilter>;
  nationality?: InputMaybe<NationalityNullableScalarRelationFilter>;
  nationalityId?: InputMaybe<StringNullableFilter>;
  portfolioFiles?: InputMaybe<StringNullableFilter>;
  position?: InputMaybe<PositionNullableScalarRelationFilter>;
  positionId?: InputMaybe<StringNullableFilter>;
  profilePicture?: InputMaybe<StringNullableFilter>;
  referralSource?: InputMaybe<StringNullableFilter>;
  skills?: InputMaybe<StringNullableFilter>;
  specialty?: InputMaybe<SpecialtyNullableScalarRelationFilter>;
  specialtyId?: InputMaybe<StringNullableFilter>;
  transferCount?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<Scalars['String']['input']>;
  whatsAppMessages?: InputMaybe<WhatsAppMessageListRelationFilter>;
};

export type ZoomMeeting = {
  __typename?: 'ZoomMeeting';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  interview?: Maybe<Interview>;
  interviewId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  zoomHostKey?: Maybe<Scalars['String']['output']>;
  zoomJoinUrl?: Maybe<Scalars['String']['output']>;
  zoomMeetingId?: Maybe<Scalars['String']['output']>;
  zoomMeetingPassword?: Maybe<Scalars['String']['output']>;
  zoomStartUrl?: Maybe<Scalars['String']['output']>;
};

export type ZoomMeetingCreateNestedOneWithoutInterviewInput = {
  connect?: InputMaybe<ZoomMeetingWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ZoomMeetingCreateOrConnectWithoutInterviewInput>;
  create?: InputMaybe<ZoomMeetingCreateWithoutInterviewInput>;
};

export type ZoomMeetingCreateOrConnectWithoutInterviewInput = {
  create: ZoomMeetingCreateWithoutInterviewInput;
  where: ZoomMeetingWhereUniqueInput;
};

export type ZoomMeetingCreateWithoutInterviewInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  zoomHostKey?: InputMaybe<Scalars['String']['input']>;
  zoomJoinUrl?: InputMaybe<Scalars['String']['input']>;
  zoomMeetingId?: InputMaybe<Scalars['String']['input']>;
  zoomMeetingPassword?: InputMaybe<Scalars['String']['input']>;
  zoomStartUrl?: InputMaybe<Scalars['String']['input']>;
};

export type ZoomMeetingNullableScalarRelationFilter = {
  is?: InputMaybe<ZoomMeetingWhereInput>;
  isNot?: InputMaybe<ZoomMeetingWhereInput>;
};

export type ZoomMeetingOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  interview?: InputMaybe<InterviewOrderByWithRelationInput>;
  interviewId?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
  zoomHostKey?: InputMaybe<SortOrderInput>;
  zoomJoinUrl?: InputMaybe<SortOrderInput>;
  zoomMeetingId?: InputMaybe<SortOrderInput>;
  zoomMeetingPassword?: InputMaybe<SortOrderInput>;
  zoomStartUrl?: InputMaybe<SortOrderInput>;
};

export type ZoomMeetingUpdateOneWithoutInterviewNestedInput = {
  connect?: InputMaybe<ZoomMeetingWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ZoomMeetingCreateOrConnectWithoutInterviewInput>;
  create?: InputMaybe<ZoomMeetingCreateWithoutInterviewInput>;
  delete?: InputMaybe<ZoomMeetingWhereInput>;
  disconnect?: InputMaybe<ZoomMeetingWhereInput>;
  update?: InputMaybe<ZoomMeetingUpdateToOneWithWhereWithoutInterviewInput>;
  upsert?: InputMaybe<ZoomMeetingUpsertWithoutInterviewInput>;
};

export type ZoomMeetingUpdateToOneWithWhereWithoutInterviewInput = {
  data: ZoomMeetingUpdateWithoutInterviewInput;
  where?: InputMaybe<ZoomMeetingWhereInput>;
};

export type ZoomMeetingUpdateWithoutInterviewInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  zoomHostKey?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  zoomJoinUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  zoomMeetingId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  zoomMeetingPassword?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  zoomStartUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ZoomMeetingUpsertWithoutInterviewInput = {
  create: ZoomMeetingCreateWithoutInterviewInput;
  update: ZoomMeetingUpdateWithoutInterviewInput;
  where?: InputMaybe<ZoomMeetingWhereInput>;
};

export type ZoomMeetingWhereInput = {
  AND?: InputMaybe<Array<ZoomMeetingWhereInput>>;
  NOT?: InputMaybe<Array<ZoomMeetingWhereInput>>;
  OR?: InputMaybe<Array<ZoomMeetingWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  interview?: InputMaybe<InterviewNullableScalarRelationFilter>;
  interviewId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  zoomHostKey?: InputMaybe<StringNullableFilter>;
  zoomJoinUrl?: InputMaybe<StringNullableFilter>;
  zoomMeetingId?: InputMaybe<StringNullableFilter>;
  zoomMeetingPassword?: InputMaybe<StringNullableFilter>;
  zoomStartUrl?: InputMaybe<StringNullableFilter>;
};

export type ZoomMeetingWhereUniqueInput = {
  AND?: InputMaybe<Array<ZoomMeetingWhereInput>>;
  NOT?: InputMaybe<Array<ZoomMeetingWhereInput>>;
  OR?: InputMaybe<Array<ZoomMeetingWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  interview?: InputMaybe<InterviewNullableScalarRelationFilter>;
  interviewId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  zoomHostKey?: InputMaybe<StringNullableFilter>;
  zoomJoinUrl?: InputMaybe<StringNullableFilter>;
  zoomMeetingId?: InputMaybe<StringNullableFilter>;
  zoomMeetingPassword?: InputMaybe<StringNullableFilter>;
  zoomStartUrl?: InputMaybe<StringNullableFilter>;
};

export type CreateNoonCheckoutMutationVariables = Exact<{
  orderId: Scalars['String']['input'];
  purpose?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateNoonCheckoutMutation = { __typename?: 'Mutation', createNoonCheckout: { __typename?: 'CreateCheckoutOutput', checkoutId: string, paymentId: string, redirectUrl: string } };

export type CreateOrderMutationVariables = Exact<{
  createOrderInput: OrderCreateInput;
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', createOrder: { __typename?: 'Order', amount: number, id: string } };

export type RemoveOrderMutationVariables = Exact<{
  removeOrderId: Scalars['ID']['input'];
}>;


export type RemoveOrderMutation = { __typename?: 'Mutation', removeOrder: { __typename?: 'Order', id: string } };

export type OrderQueryVariables = Exact<{
  orderId: Scalars['ID']['input'];
}>;


export type OrderQuery = { __typename?: 'Query', order: { __typename?: 'Order', amount: number, id: string, description?: string | null, initialPayment?: number | null, finalPayment?: number | null, title: string, status: string, isApproved: boolean, createdAt: any, client: { __typename?: 'Client', id: string, user: { __typename?: 'User', id: string, name: string } } } };

export type FindAllClientsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllClientsQuery = { __typename?: 'Query', findAllClients: Array<{ __typename?: 'User', id: string, name: string, email: string, client?: { __typename?: 'Client', id: string } | null }> };

export type OrdersQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationDto>;
  where?: InputMaybe<OrderWhereInput>;
}>;


export type OrdersQuery = { __typename?: 'Query', orders: Array<{ __typename?: 'Order', amount: number, id: string, createdAt: any, title: string, status: string, isApproved: boolean, finalPayment?: number | null, paymentStatus: PaymentStatus, client: { __typename?: 'Client', user: { __typename?: 'User', username: string } } }> };

export type UpdateOrderMutationVariables = Exact<{
  updateOrderId: Scalars['String']['input'];
  updateOrderInput: OrderUpdateInput;
}>;


export type UpdateOrderMutation = { __typename?: 'Mutation', updateOrder: { __typename?: 'Order', id: string } };

export type PricingListQueryVariables = Exact<{ [key: string]: never; }>;


export type PricingListQuery = { __typename?: 'Query', pricingList: Array<{ __typename?: 'Pricing', adminCommission: number, maxWage: number, minWage: number, id: string, specialty: { __typename?: 'Specialty', name: string, id: string }, nationality: { __typename?: 'Nationality', id: string, name: string }, activity: { __typename?: 'Activity', name: string, id: string } }> };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthToken', accessToken: string } };

export type SignupMutationVariables = Exact<{
  signupInput: SignupInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'AuthToken', accessToken: string } };


export const CreateNoonCheckoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateNoonCheckout"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"purpose"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createNoonCheckout"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}}},{"kind":"Argument","name":{"kind":"Name","value":"purpose"},"value":{"kind":"Variable","name":{"kind":"Name","value":"purpose"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkoutId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentId"}},{"kind":"Field","name":{"kind":"Name","value":"redirectUrl"}}]}}]}}]} as unknown as DocumentNode<CreateNoonCheckoutMutation, CreateNoonCheckoutMutationVariables>;
export const CreateOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createOrderInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createOrderInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createOrderInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateOrderMutation, CreateOrderMutationVariables>;
export const RemoveOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removeOrderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removeOrderId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<RemoveOrderMutation, RemoveOrderMutationVariables>;
export const OrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Order"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"order"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"initialPayment"}},{"kind":"Field","name":{"kind":"Name","value":"finalPayment"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"isApproved"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<OrderQuery, OrderQueryVariables>;
export const FindAllClientsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindAllClients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findAllClients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<FindAllClientsQuery, FindAllClientsQueryVariables>;
export const OrdersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Orders"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationDto"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orders"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"isApproved"}},{"kind":"Field","name":{"kind":"Name","value":"finalPayment"}},{"kind":"Field","name":{"kind":"Name","value":"paymentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}}]} as unknown as DocumentNode<OrdersQuery, OrdersQueryVariables>;
export const UpdateOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateOrderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateOrderInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateOrderId"}}},{"kind":"Argument","name":{"kind":"Name","value":"updateOrderInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateOrderInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateOrderMutation, UpdateOrderMutationVariables>;
export const PricingListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PricingList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pricingList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"specialty"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"adminCommission"}},{"kind":"Field","name":{"kind":"Name","value":"nationality"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"activity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"maxWage"}},{"kind":"Field","name":{"kind":"Name","value":"minWage"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<PricingListQuery, PricingListQueryVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const SignupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Signup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signupInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignupInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signupInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signupInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<SignupMutation, SignupMutationVariables>;