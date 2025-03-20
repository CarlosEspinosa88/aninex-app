"use client";

import { useQuery } from '@apollo/client';
import { GET_ANIMES } from '@/lib/queries';

export default function Home() {
  const { data, loading, error} = useQuery(GET_ANIMES, {
    variables: {
      page: 1,
      perPage: 5
    }
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  console.log(data);
  
  return (
      <div>
        <main>
          Home
        </main>
      </div>
  );
}
