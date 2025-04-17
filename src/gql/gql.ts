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
    "mutation CreateNoonCheckout($input: CreateNoonCheckoutInput!) {\n  createNoonCheckout(input: $input) {\n    checkoutId\n    redirectUrl\n  }\n}": typeof types.CreateNoonCheckoutDocument,
    "mutation CreateOrder($createOrderInput: OrderCreateInput!) {\n  createOrder(createOrderInput: $createOrderInput) {\n    amount\n    id\n  }\n}": typeof types.CreateOrderDocument,
    "query Order($orderId: ID!) {\n  order(id: $orderId) {\n    amount\n    id\n    description\n    initialPayment\n    finalPayment\n    title\n    status\n    isApproved\n    createdAt\n    client {\n      id\n      user {\n        id\n        name\n      }\n    }\n  }\n}": typeof types.OrderDocument,
    "query FindAllClients {\n  findAllClients {\n    id\n    name\n    email\n    client {\n      id\n    }\n  }\n}": typeof types.FindAllClientsDocument,
    "query PricingList {\n  pricingList {\n    specialty {\n      name\n      id\n    }\n    adminCommission\n    nationality {\n      id\n      name\n    }\n    activity {\n      name\n      id\n    }\n    maxWage\n    minWage\n    id\n  }\n}": typeof types.PricingListDocument,
    "mutation Login($loginInput: LoginInput!) {\n  login(loginInput: $loginInput) {\n    accessToken\n  }\n}": typeof types.LoginDocument,
    "mutation Signup($signupInput: SignupInput!) {\n  signup(signupInput: $signupInput) {\n    accessToken\n  }\n}": typeof types.SignupDocument,
};
const documents: Documents = {
    "mutation CreateNoonCheckout($input: CreateNoonCheckoutInput!) {\n  createNoonCheckout(input: $input) {\n    checkoutId\n    redirectUrl\n  }\n}": types.CreateNoonCheckoutDocument,
    "mutation CreateOrder($createOrderInput: OrderCreateInput!) {\n  createOrder(createOrderInput: $createOrderInput) {\n    amount\n    id\n  }\n}": types.CreateOrderDocument,
    "query Order($orderId: ID!) {\n  order(id: $orderId) {\n    amount\n    id\n    description\n    initialPayment\n    finalPayment\n    title\n    status\n    isApproved\n    createdAt\n    client {\n      id\n      user {\n        id\n        name\n      }\n    }\n  }\n}": types.OrderDocument,
    "query FindAllClients {\n  findAllClients {\n    id\n    name\n    email\n    client {\n      id\n    }\n  }\n}": types.FindAllClientsDocument,
    "query PricingList {\n  pricingList {\n    specialty {\n      name\n      id\n    }\n    adminCommission\n    nationality {\n      id\n      name\n    }\n    activity {\n      name\n      id\n    }\n    maxWage\n    minWage\n    id\n  }\n}": types.PricingListDocument,
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
export function graphql(source: "mutation CreateNoonCheckout($input: CreateNoonCheckoutInput!) {\n  createNoonCheckout(input: $input) {\n    checkoutId\n    redirectUrl\n  }\n}"): (typeof documents)["mutation CreateNoonCheckout($input: CreateNoonCheckoutInput!) {\n  createNoonCheckout(input: $input) {\n    checkoutId\n    redirectUrl\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateOrder($createOrderInput: OrderCreateInput!) {\n  createOrder(createOrderInput: $createOrderInput) {\n    amount\n    id\n  }\n}"): (typeof documents)["mutation CreateOrder($createOrderInput: OrderCreateInput!) {\n  createOrder(createOrderInput: $createOrderInput) {\n    amount\n    id\n  }\n}"];
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
export function graphql(source: "query PricingList {\n  pricingList {\n    specialty {\n      name\n      id\n    }\n    adminCommission\n    nationality {\n      id\n      name\n    }\n    activity {\n      name\n      id\n    }\n    maxWage\n    minWage\n    id\n  }\n}"): (typeof documents)["query PricingList {\n  pricingList {\n    specialty {\n      name\n      id\n    }\n    adminCommission\n    nationality {\n      id\n      name\n    }\n    activity {\n      name\n      id\n    }\n    maxWage\n    minWage\n    id\n  }\n}"];
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