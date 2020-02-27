import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Timeline from './Timeline';

describe('<Timeline />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Timeline />);
    const timeline = getByTestId('Timeline');

    expect(timeline).toBeInTheDocument();
  });
});