import React, { lazy, Suspense } from 'react';

const LazyTimeline = lazy(() => import('./Timeline'));

const Timeline = props => (
  <Suspense fallback={null}>
    <LazyTimeline {...props} />
  </Suspense>
);

export default Timeline;
