/*
  IMPORTANT: This file is auto-generated, do not edit directly!
*/
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Information about the AI being used */
export type Ai = {
  __typename?: 'AI';
  id?: Maybe<Scalars['ID']>;
  models?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Get the bot's move relative to your current game state */
  move?: Maybe<Scalars['String']>;
  v?: Maybe<Scalars['Int']>;
};


/** Information about the AI being used */
export type AiMoveArgs = {
  boardState: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** Get underlying AI information */
  aiData?: Maybe<Ai>;
};

export type GetBotMoveQueryVariables = Exact<{
  boardState: Scalars['String'];
}>;


export type GetBotMoveQuery = { __typename?: 'Query', aiData?: { __typename?: 'AI', id?: string | null, move?: string | null } | null };


export const GetBotMoveDocument = gql`
    query GetBotMove($boardState: String!) {
  aiData {
    id
    move(boardState: $boardState)
  }
}
    `;

/**
 * __useGetBotMoveQuery__
 *
 * To run a query within a React component, call `useGetBotMoveQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBotMoveQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBotMoveQuery({
 *   variables: {
 *      boardState: // value for 'boardState'
 *   },
 * });
 */
export function useGetBotMoveQuery(baseOptions: Apollo.QueryHookOptions<GetBotMoveQuery, GetBotMoveQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBotMoveQuery, GetBotMoveQueryVariables>(GetBotMoveDocument, options);
      }
export function useGetBotMoveLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBotMoveQuery, GetBotMoveQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBotMoveQuery, GetBotMoveQueryVariables>(GetBotMoveDocument, options);
        }
export type GetBotMoveQueryHookResult = ReturnType<typeof useGetBotMoveQuery>;
export type GetBotMoveLazyQueryHookResult = ReturnType<typeof useGetBotMoveLazyQuery>;
export type GetBotMoveQueryResult = Apollo.QueryResult<GetBotMoveQuery, GetBotMoveQueryVariables>;