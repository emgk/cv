import React from 'react';

export default function Error({ error }: { error: Error & { digest: string } }) {
  return <div>{error.message ?? error ?? 'Something went wrong!'}</div>;
}
