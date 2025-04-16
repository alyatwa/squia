/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
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

export type Admin = {
  __typename?: 'Admin';
  _count: AdminCount;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  interviews?: Maybe<Array<Interview>>;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type AdminCount = {
  __typename?: 'AdminCount';
  interviews: Scalars['Int']['output'];
};

export type AuthToken = {
  __typename?: 'AuthToken';
  accessToken: Scalars['String']['output'];
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

export type CreateOrderInput = {
  amount: Scalars['Float']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  finalPayment?: InputMaybe<Scalars['Float']['input']>;
  hoursDuty?: InputMaybe<Scalars['String']['input']>;
  initialPayment?: InputMaybe<Scalars['Float']['input']>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  paymentPercentage?: InputMaybe<Scalars['Float']['input']>;
  title: Scalars['String']['input'];
  workerRequirements?: InputMaybe<Array<CreateOrderWorkerRequirementInput>>;
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

export type ForgotPasswordInput = {
  email: Scalars['String']['input'];
};

export type Interview = {
  __typename?: 'Interview';
  _count: InterviewCount;
  admin?: Maybe<Admin>;
  adminAttended: Scalars['Boolean']['output'];
  adminId: Scalars['String']['output'];
  adminName?: Maybe<Scalars['String']['output']>;
  availableTimes?: Maybe<Scalars['String']['output']>;
  client: Client;
  clientAttended: Scalars['Boolean']['output'];
  clientConfirmationTime?: Maybe<Scalars['DateTime']['output']>;
  clientConfirmed: Scalars['Boolean']['output'];
  clientId: Scalars['String']['output'];
  clientNotificationTime?: Maybe<Scalars['DateTime']['output']>;
  clientNotified: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  dateTime: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  meetingType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  payments?: Maybe<Array<Payment>>;
  rating?: Maybe<Scalars['String']['output']>;
  rejectionReason?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Scalars['String']['output']>;
  resultNotes?: Maybe<Scalars['String']['output']>;
  scheduledAt?: Maybe<Scalars['DateTime']['output']>;
  status: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  worker: Worker;
  workerAttended: Scalars['Boolean']['output'];
  workerConfirmationTime?: Maybe<Scalars['DateTime']['output']>;
  workerConfirmed: Scalars['Boolean']['output'];
  workerId: Scalars['String']['output'];
  workerNotificationTime?: Maybe<Scalars['DateTime']['output']>;
  workerNotified: Scalars['Boolean']['output'];
  workerRequirements?: Maybe<Array<OrderWorkerRequirement>>;
};

export type InterviewCount = {
  __typename?: 'InterviewCount';
  payments: Scalars['Int']['output'];
  workerRequirements: Scalars['Int']['output'];
};

export type LoginInput = {
  password: Scalars['String']['input'];
  usernameOrEmail: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addOrderWorkerRequirement: Order;
  approveOrder: Order;
  createOrder: Order;
  createPricing: Pricing;
  createUser: User;
  forgotPassword: Scalars['Boolean']['output'];
  login: AuthToken;
  removeOrder: Order;
  removeOrderWorkerRequirement: Order;
  removePricing: Pricing;
  removeUser: User;
  resetPassword: Scalars['Boolean']['output'];
  signup: AuthToken;
  updateOrder: Order;
  updateOrderPaymentStatus: Order;
  updatePricing: Pricing;
  updateUser: User;
};


export type MutationAddOrderWorkerRequirementArgs = {
  orderId: Scalars['ID']['input'];
  requirementInput: CreateOrderWorkerRequirementInput;
};


export type MutationApproveOrderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCreateOrderArgs = {
  createOrderInput: CreateOrderInput;
};


export type MutationCreatePricingArgs = {
  input: CreatePricingInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
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


export type MutationResetPasswordArgs = {
  resetPasswordInput: ResetPasswordInput;
};


export type MutationSignupArgs = {
  signupInput: SignupInput;
};


export type MutationUpdateOrderArgs = {
  updateOrderInput: UpdateOrderInput;
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

export type Order = {
  __typename?: 'Order';
  Worker?: Maybe<Worker>;
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
  isApproved: Scalars['Boolean']['output'];
  paymentId?: Maybe<Scalars['String']['output']>;
  paymentMethod?: Maybe<Scalars['String']['output']>;
  paymentPercentage?: Maybe<Scalars['Float']['output']>;
  paymentProof?: Maybe<Scalars['String']['output']>;
  paymentStatus: Scalars['String']['output'];
  payments?: Maybe<Array<Payment>>;
  position?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  salaryPerPerson?: Maybe<Scalars['Float']['output']>;
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  workerId?: Maybe<Scalars['String']['output']>;
  workerRequirements?: Maybe<Array<OrderWorkerRequirement>>;
};

export type OrderCount = {
  __typename?: 'OrderCount';
  payments: Scalars['Int']['output'];
  workerRequirements: Scalars['Int']['output'];
};

export type OrderWorkerRequirement = {
  __typename?: 'OrderWorkerRequirement';
  activity?: Maybe<Activity>;
  activityId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  interview?: Maybe<Interview>;
  interviewId?: Maybe<Scalars['String']['output']>;
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
  order?: Maybe<Order>;
  orderId?: Maybe<Scalars['String']['output']>;
  paymentMethod?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  transactionId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
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

export type PricingFilterInput = {
  activityId?: InputMaybe<Scalars['String']['input']>;
  nationalityId?: InputMaybe<Scalars['String']['input']>;
  positionId?: InputMaybe<Scalars['String']['input']>;
  specialtyId?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  order: Order;
  orders: Array<Order>;
  pricing: Pricing;
  pricingByAttributes?: Maybe<Pricing>;
  pricingList: Array<Pricing>;
  user: User;
  userGreetings: Scalars['String']['output'];
  users: Array<User>;
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
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

export type ResetPasswordInput = {
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type SignupInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: Scalars['String']['input'];
  username: Scalars['String']['input'];
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

export type UpdateOrderInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  finalPayment?: InputMaybe<Scalars['Float']['input']>;
  hoursDuty?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  initialPayment?: InputMaybe<Scalars['Float']['input']>;
  isApproved?: InputMaybe<Scalars['Boolean']['input']>;
  paymentId?: InputMaybe<Scalars['String']['input']>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  paymentPercentage?: InputMaybe<Scalars['Float']['input']>;
  paymentProof?: InputMaybe<Scalars['String']['input']>;
  paymentStatus?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  workerId?: InputMaybe<Scalars['ID']['input']>;
  workerRequirements?: InputMaybe<Array<CreateOrderWorkerRequirementInput>>;
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

export type Worker = {
  __typename?: 'Worker';
  _count: WorkerCount;
  accommodationType?: Maybe<Scalars['String']['output']>;
  activity: Activity;
  activityId: Scalars['String']['output'];
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
  nationality: Nationality;
  nationalityId: Scalars['String']['output'];
  orders?: Maybe<Array<Order>>;
  portfolioFiles?: Maybe<Scalars['String']['output']>;
  position: Position;
  positionId: Scalars['String']['output'];
  profilePicture?: Maybe<Scalars['String']['output']>;
  referralSource?: Maybe<Scalars['String']['output']>;
  skills?: Maybe<Scalars['String']['output']>;
  specialty: Specialty;
  specialtyId: Scalars['String']['output'];
  transferCount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
  whatsAppMessages?: Maybe<Array<WhatsAppMessage>>;
};

export type WorkerCount = {
  __typename?: 'WorkerCount';
  interviews: Scalars['Int']['output'];
  orders: Scalars['Int']['output'];
  whatsAppMessages: Scalars['Int']['output'];
};

export type CreateOrderMutationVariables = Exact<{
  createOrderInput: CreateOrderInput;
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', createOrder: { __typename?: 'Order', isApproved: boolean, amount: number } };

export type PricingListQueryVariables = Exact<{ [key: string]: never; }>;


export type PricingListQuery = { __typename?: 'Query', pricingList: Array<{ __typename?: 'Pricing', minWage: number, maxWage: number, specialty?: { __typename?: 'Specialty', id: string, name: string } | null, nationality?: { __typename?: 'Nationality', id: string, name: string } | null, activity?: { __typename?: 'Activity', id: string, name: string } | null }> };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthToken', accessToken: string } };

export type SignupMutationVariables = Exact<{
  signupInput: SignupInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'AuthToken', accessToken: string } };


export const CreateOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createOrderInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateOrderInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createOrderInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createOrderInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isApproved"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]} as unknown as DocumentNode<CreateOrderMutation, CreateOrderMutationVariables>;
export const PricingListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PricingList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pricingList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"specialty"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nationality"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"activity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"maxWage"}},{"kind":"Field","name":{"kind":"Name","value":"minWage"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<PricingListQuery, PricingListQueryVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const SignupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Signup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signupInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignupInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signupInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signupInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<SignupMutation, SignupMutationVariables>;