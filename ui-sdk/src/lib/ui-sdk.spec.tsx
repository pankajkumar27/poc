import { render } from '@testing-library/react';

import UiSdk from './ui-sdk';

describe('UiSdk', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiSdk />);
    expect(baseElement).toBeTruthy();
  });
});
