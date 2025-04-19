/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "mutation CreateInterview($data: InterviewCreateInput!) {\n  createInterview(data: $data) {\n    id\n  }\n}": typeof types.CreateInterviewDocument,
    "query Interviews($where: InterviewWhereInput) {\n  interviews(where: $where) {\n    duration\n    dateTime\n    meetingType\n    scheduledAt\n    status\n    worker {\n      id\n      user {\n        id\n        name\n      }\n    }\n    order {\n      id\n      title\n    }\n    Client {\n      companyType\n      id\n      user {\n        name\n      }\n    }\n  }\n}": typeof types.InterviewsDocument,
    "mutation DeleteInterview($where: InterviewWhereUniqueInput!) {\n  deleteInterview(where: $where) {\n    id\n  }\n}": typeof types.DeleteInterviewDocument,
    "mutation CreateNoonCheckout($orderId: String!, $purpose: String) {\n  createNoonCheckout(orderId: $orderId, purpose: $purpose) {\n    checkoutId\n    paymentId\n    redirectUrl\n  }\n}": typeof types.CreateNoonCheckoutDocument,
    "mutation CreateOrder($createOrderInput: OrderCreateInput!) {\n  createOrder(createOrderInput: $createOrderInput) {\n    amount\n    id\n  }\n}": typeof types.CreateOrderDocument,
    "mutation RemoveOrder($removeOrderId: ID!) {\n  removeOrder(id: $removeOrderId) {\n    id\n  }\n}": typeof types.RemoveOrderDocument,
    "query Order($orderId: ID!) {\n  order(id: $orderId) {\n    amount\n    id\n    description\n    initialPayment\n    finalPayment\n    title\n    status\n    isApproved\n    createdAt\n    client {\n      id\n      user {\n        id\n        name\n      }\n    }\n  }\n}": typeof types.OrderDocument,
    "query FindAllClients {\n  findAllClients {\n    id\n    name\n    email\n    client {\n      id\n    }\n  }\n}": typeof types.FindAllClientsDocument,
    "query Orders($pagination: PaginationDto, $where: OrderWhereInput) {\n  orders(pagination: $pagination, where: $where) {\n    amount\n    id\n    createdAt\n    title\n    amount\n    status\n    isApproved\n    finalPayment\n    paymentStatus\n    client {\n      user {\n        username\n      }\n    }\n  }\n}": typeof types.OrdersDocument,
    "mutation UpdateOrder($updateOrderId: String!, $updateOrderInput: OrderUpdateInput!) {\n  updateOrder(id: $updateOrderId, updateOrderInput: $updateOrderInput) {\n    id\n  }\n}": typeof types.UpdateOrderDocument,
    "query PricingList {\n  pricingList {\n    specialty {\n      name\n      id\n    }\n    adminCommission\n    nationality {\n      id\n      name\n    }\n    activity {\n      name\n      id\n    }\n    maxWage\n    minWage\n    id\n  }\n}": typeof types.PricingListDocument,
    "mutation CreateWorker($createWorkerInput: CreateWorkerInput!) {\n  createWorker(createWorkerInput: $createWorkerInput) {\n    userId\n    id\n    activityId\n    currentCity\n  }\n}": typeof types.CreateWorkerDocument,
    "query Workers($filter: WorkerFilterInput, $pagination: PaginationDto) {\n  workers(filter: $filter, pagination: $pagination) {\n    data {\n      id\n      user {\n        name\n        id\n        email\n      }\n    }\n  }\n}": typeof types.WorkersDocument,
    "mutation UpdateWorker($updateWorkerId: String!, $updateWorkerInput: UpdateWorkerInput!) {\n  updateWorker(id: $updateWorkerId, updateWorkerInput: $updateWorkerInput) {\n    id\n    createdAt\n    accommodationType\n  }\n}": typeof types.UpdateWorkerDocument,
    "query Worker($workerId: String!) {\n  worker(id: $workerId) {\n    createdAt\n    experience\n    id\n    currentCity\n    iqamaNumber\n    iban\n  }\n}": typeof types.WorkerDocument,
    "mutation RemoveWorker($removeWorkerId: String!) {\n  removeWorker(id: $removeWorkerId) {\n    id\n    gender\n    createdAt\n    updatedAt\n  }\n}": typeof types.RemoveWorkerDocument,
    "mutation Login($loginInput: LoginInput!) {\n  login(loginInput: $loginInput) {\n    accessToken\n  }\n}": typeof types.LoginDocument,
    "mutation Signup($signupInput: SignupInput!) {\n  signup(signupInput: $signupInput) {\n    accessToken\n  }\n}": typeof types.SignupDocument,
};
const documents: Documents = {
    "mutation CreateInterview($data: InterviewCreateInput!) {\n  createInterview(data: $data) {\n    id\n  }\n}": types.CreateInterviewDocument,
    "query Interviews($where: InterviewWhereInput) {\n  interviews(where: $where) {\n    duration\n    dateTime\n    meetingType\n    scheduledAt\n    status\n    worker {\n      id\n      user {\n        id\n        name\n      }\n    }\n    order {\n      id\n      title\n    }\n    Client {\n      companyType\n      id\n      user {\n        name\n      }\n    }\n  }\n}": types.InterviewsDocument,
    "mutation DeleteInterview($where: InterviewWhereUniqueInput!) {\n  deleteInterview(where: $where) {\n    id\n  }\n}": types.DeleteInterviewDocument,
    "mutation CreateNoonCheckout($orderId: String!, $purpose: String) {\n  createNoonCheckout(orderId: $orderId, purpose: $purpose) {\n    checkoutId\n    paymentId\n    redirectUrl\n  }\n}": types.CreateNoonCheckoutDocument,
    "mutation CreateOrder($createOrderInput: OrderCreateInput!) {\n  createOrder(createOrderInput: $createOrderInput) {\n    amount\n    id\n  }\n}": types.CreateOrderDocument,
    "mutation RemoveOrder($removeOrderId: ID!) {\n  removeOrder(id: $removeOrderId) {\n    id\n  }\n}": types.RemoveOrderDocument,
    "query Order($orderId: ID!) {\n  order(id: $orderId) {\n    amount\n    id\n    description\n    initialPayment\n    finalPayment\n    title\n    status\n    isApproved\n    createdAt\n    client {\n      id\n      user {\n        id\n        name\n      }\n    }\n  }\n}": types.OrderDocument,
    "query FindAllClients {\n  findAllClients {\n    id\n    name\n    email\n    client {\n      id\n    }\n  }\n}": types.FindAllClientsDocument,
    "query Orders($pagination: PaginationDto, $where: OrderWhereInput) {\n  orders(pagination: $pagination, where: $where) {\n    amount\n    id\n    createdAt\n    title\n    amount\n    status\n    isApproved\n    finalPayment\n    paymentStatus\n    client {\n      user {\n        username\n      }\n    }\n  }\n}": types.OrdersDocument,
    "mutation UpdateOrder($updateOrderId: String!, $updateOrderInput: OrderUpdateInput!) {\n  updateOrder(id: $updateOrderId, updateOrderInput: $updateOrderInput) {\n    id\n  }\n}": types.UpdateOrderDocument,
    "query PricingList {\n  pricingList {\n    specialty {\n      name\n      id\n    }\n    adminCommission\n    nationality {\n      id\n      name\n    }\n    activity {\n      name\n      id\n    }\n    maxWage\n    minWage\n    id\n  }\n}": types.PricingListDocument,
    "mutation CreateWorker($createWorkerInput: CreateWorkerInput!) {\n  createWorker(createWorkerInput: $createWorkerInput) {\n    userId\n    id\n    activityId\n    currentCity\n  }\n}": types.CreateWorkerDocument,
    "query Workers($filter: WorkerFilterInput, $pagination: PaginationDto) {\n  workers(filter: $filter, pagination: $pagination) {\n    data {\n      id\n      user {\n        name\n        id\n        email\n      }\n    }\n  }\n}": types.WorkersDocument,
    "mutation UpdateWorker($updateWorkerId: String!, $updateWorkerInput: UpdateWorkerInput!) {\n  updateWorker(id: $updateWorkerId, updateWorkerInput: $updateWorkerInput) {\n    id\n    createdAt\n    accommodationType\n  }\n}": types.UpdateWorkerDocument,
    "query Worker($workerId: String!) {\n  worker(id: $workerId) {\n    createdAt\n    experience\n    id\n    currentCity\n    iqamaNumber\n    iban\n  }\n}": types.WorkerDocument,
    "mutation RemoveWorker($removeWorkerId: String!) {\n  removeWorker(id: $removeWorkerId) {\n    id\n    gender\n    createdAt\n    updatedAt\n  }\n}": types.RemoveWorkerDocument,
    "mutation Login($loginInput: LoginInput!) {\n  login(loginInput: $loginInput) {\n    accessToken\n  }\n}": types.LoginDocument,
    "mutation Signup($signupInput: SignupInput!) {\n  signup(signupInput: $signupInput) {\n    accessToken\n  }\n}": types.SignupDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateInterview($data: InterviewCreateInput!) {\n  createInterview(data: $data) {\n    id\n  }\n}"): (typeof documents)["mutation CreateInterview($data: InterviewCreateInput!) {\n  createInterview(data: $data) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Interviews($where: InterviewWhereInput) {\n  interviews(where: $where) {\n    duration\n    dateTime\n    meetingType\n    scheduledAt\n    status\n    worker {\n      id\n      user {\n        id\n        name\n      }\n    }\n    order {\n      id\n      title\n    }\n    Client {\n      companyType\n      id\n      user {\n        name\n      }\n    }\n  }\n}"): (typeof documents)["query Interviews($where: InterviewWhereInput) {\n  interviews(where: $where) {\n    duration\n    dateTime\n    meetingType\n    scheduledAt\n    status\n    worker {\n      id\n      user {\n        id\n        name\n      }\n    }\n    order {\n      id\n      title\n    }\n    Client {\n      companyType\n      id\n      user {\n        name\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DeleteInterview($where: InterviewWhereUniqueInput!) {\n  deleteInterview(where: $where) {\n    id\n  }\n}"): (typeof documents)["mutation DeleteInterview($where: InterviewWhereUniqueInput!) {\n  deleteInterview(where: $where) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateNoonCheckout($orderId: String!, $purpose: String) {\n  createNoonCheckout(orderId: $orderId, purpose: $purpose) {\n    checkoutId\n    paymentId\n    redirectUrl\n  }\n}"): (typeof documents)["mutation CreateNoonCheckout($orderId: String!, $purpose: String) {\n  createNoonCheckout(orderId: $orderId, purpose: $purpose) {\n    checkoutId\n    paymentId\n    redirectUrl\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateOrder($createOrderInput: OrderCreateInput!) {\n  createOrder(createOrderInput: $createOrderInput) {\n    amount\n    id\n  }\n}"): (typeof documents)["mutation CreateOrder($createOrderInput: OrderCreateInput!) {\n  createOrder(createOrderInput: $createOrderInput) {\n    amount\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation RemoveOrder($removeOrderId: ID!) {\n  removeOrder(id: $removeOrderId) {\n    id\n  }\n}"): (typeof documents)["mutation RemoveOrder($removeOrderId: ID!) {\n  removeOrder(id: $removeOrderId) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Order($orderId: ID!) {\n  order(id: $orderId) {\n    amount\n    id\n    description\n    initialPayment\n    finalPayment\n    title\n    status\n    isApproved\n    createdAt\n    client {\n      id\n      user {\n        id\n        name\n      }\n    }\n  }\n}"): (typeof documents)["query Order($orderId: ID!) {\n  order(id: $orderId) {\n    amount\n    id\n    description\n    initialPayment\n    finalPayment\n    title\n    status\n    isApproved\n    createdAt\n    client {\n      id\n      user {\n        id\n        name\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FindAllClients {\n  findAllClients {\n    id\n    name\n    email\n    client {\n      id\n    }\n  }\n}"): (typeof documents)["query FindAllClients {\n  findAllClients {\n    id\n    name\n    email\n    client {\n      id\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Orders($pagination: PaginationDto, $where: OrderWhereInput) {\n  orders(pagination: $pagination, where: $where) {\n    amount\n    id\n    createdAt\n    title\n    amount\n    status\n    isApproved\n    finalPayment\n    paymentStatus\n    client {\n      user {\n        username\n      }\n    }\n  }\n}"): (typeof documents)["query Orders($pagination: PaginationDto, $where: OrderWhereInput) {\n  orders(pagination: $pagination, where: $where) {\n    amount\n    id\n    createdAt\n    title\n    amount\n    status\n    isApproved\n    finalPayment\n    paymentStatus\n    client {\n      user {\n        username\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateOrder($updateOrderId: String!, $updateOrderInput: OrderUpdateInput!) {\n  updateOrder(id: $updateOrderId, updateOrderInput: $updateOrderInput) {\n    id\n  }\n}"): (typeof documents)["mutation UpdateOrder($updateOrderId: String!, $updateOrderInput: OrderUpdateInput!) {\n  updateOrder(id: $updateOrderId, updateOrderInput: $updateOrderInput) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query PricingList {\n  pricingList {\n    specialty {\n      name\n      id\n    }\n    adminCommission\n    nationality {\n      id\n      name\n    }\n    activity {\n      name\n      id\n    }\n    maxWage\n    minWage\n    id\n  }\n}"): (typeof documents)["query PricingList {\n  pricingList {\n    specialty {\n      name\n      id\n    }\n    adminCommission\n    nationality {\n      id\n      name\n    }\n    activity {\n      name\n      id\n    }\n    maxWage\n    minWage\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateWorker($createWorkerInput: CreateWorkerInput!) {\n  createWorker(createWorkerInput: $createWorkerInput) {\n    userId\n    id\n    activityId\n    currentCity\n  }\n}"): (typeof documents)["mutation CreateWorker($createWorkerInput: CreateWorkerInput!) {\n  createWorker(createWorkerInput: $createWorkerInput) {\n    userId\n    id\n    activityId\n    currentCity\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Workers($filter: WorkerFilterInput, $pagination: PaginationDto) {\n  workers(filter: $filter, pagination: $pagination) {\n    data {\n      id\n      user {\n        name\n        id\n        email\n      }\n    }\n  }\n}"): (typeof documents)["query Workers($filter: WorkerFilterInput, $pagination: PaginationDto) {\n  workers(filter: $filter, pagination: $pagination) {\n    data {\n      id\n      user {\n        name\n        id\n        email\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateWorker($updateWorkerId: String!, $updateWorkerInput: UpdateWorkerInput!) {\n  updateWorker(id: $updateWorkerId, updateWorkerInput: $updateWorkerInput) {\n    id\n    createdAt\n    accommodationType\n  }\n}"): (typeof documents)["mutation UpdateWorker($updateWorkerId: String!, $updateWorkerInput: UpdateWorkerInput!) {\n  updateWorker(id: $updateWorkerId, updateWorkerInput: $updateWorkerInput) {\n    id\n    createdAt\n    accommodationType\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Worker($workerId: String!) {\n  worker(id: $workerId) {\n    createdAt\n    experience\n    id\n    currentCity\n    iqamaNumber\n    iban\n  }\n}"): (typeof documents)["query Worker($workerId: String!) {\n  worker(id: $workerId) {\n    createdAt\n    experience\n    id\n    currentCity\n    iqamaNumber\n    iban\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation RemoveWorker($removeWorkerId: String!) {\n  removeWorker(id: $removeWorkerId) {\n    id\n    gender\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["mutation RemoveWorker($removeWorkerId: String!) {\n  removeWorker(id: $removeWorkerId) {\n    id\n    gender\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Login($loginInput: LoginInput!) {\n  login(loginInput: $loginInput) {\n    accessToken\n  }\n}"): (typeof documents)["mutation Login($loginInput: LoginInput!) {\n  login(loginInput: $loginInput) {\n    accessToken\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Signup($signupInput: SignupInput!) {\n  signup(signupInput: $signupInput) {\n    accessToken\n  }\n}"): (typeof documents)["mutation Signup($signupInput: SignupInput!) {\n  signup(signupInput: $signupInput) {\n    accessToken\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;