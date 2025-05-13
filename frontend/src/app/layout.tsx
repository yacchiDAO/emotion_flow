'use client';

import { useEffect } from 'react';
import { createClient, Provider } from "urql";

const client = createClient({
  url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
  exchanges: [],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log("Environment Variables:", process.env);
  }, []);

  return (
    <html lang="en">
      <body>
        <Provider value={client}>{children}</Provider>
      </body>
    </html>
  );
}