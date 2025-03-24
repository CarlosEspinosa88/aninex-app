"use client"

import { ApolloError } from '@apollo/client';

type ErrorMessageProps = {
  error: ApolloError;
};

export default function ErrorMessage({ error }: ErrorMessageProps) {
  const graphQLErrors = error?.graphQLErrors;
  const networkError = error?.networkError;

  return (
    <div className="p-4 border border-red-300 bg-red-50 rounded text-red-600">
      <p className="font-bold mb-1 font-(family-name:--font-montserrat)">Error: {error.message}</p>

      {graphQLErrors?.length > 0 && (
        <ul className="list-disc ml-6 mb-2 font-(family-name:--font-montserrat)">
          {graphQLErrors.map((gqlErr, index) => (
            <li key={index}>{gqlErr.message}</li>
          ))}
        </ul>
      )}

      {networkError && (
        <p className="mt-2 text-sm text-red-700 font-(family-name:--font-montserrat)">
          <strong>Network Error:</strong> {networkError.message}
        </p>
      )}
    </div>
  );
}
