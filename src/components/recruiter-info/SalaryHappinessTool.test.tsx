import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';

import {
  SalaryHappinessProps,
  SalaryHappinessTool,
} from '@/components/recruiter-info/SalaryHappinessTool';

describe('Salary', () => {
  const testRange = {
    min: 40000,
    median: 80000,
    max: 120000,
  };

  const config = {
    displayTitle: true,
    currency: 'EUR',
    forexMultiplier: 1.2,
  };

  const props: SalaryHappinessProps = {
    salaryData: testRange,
    config,
  };

  it('renders correctly', () => {
    const { container } = render(<SalaryHappinessTool {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('switches the emoji when changing the range', async () => {
    const { getByTestId } = render(<SalaryHappinessTool {...props} />);
    const rangeInput = getByTestId('salaryValue');
    const emoji = getByTestId('emoji');
    expect(emoji).toHaveAccessibleDescription('getting there');

    fireEvent.change(rangeInput, { target: { value: '40000' } });
    await waitFor(() => {
      expect(emoji).toHaveAccessibleDescription(/are you serious?/i);
    });

    fireEvent.change(rangeInput, { target: { value: '50000' } });
    expect(emoji).toHaveAccessibleDescription(/way too low/i);

    fireEvent.change(rangeInput, { target: { value: '60000' } });
    expect(emoji).toHaveAccessibleDescription(/too low/i);

    fireEvent.change(rangeInput, { target: { value: '70000' } });
    expect(emoji).toHaveAccessibleDescription(/getting there/i);

    fireEvent.change(rangeInput, { target: { value: '80000' } });
    expect(emoji).toHaveAccessibleDescription(/pretty good/i);

    fireEvent.change(rangeInput, { target: { value: '90000' } });
    expect(emoji).toHaveAccessibleDescription(/even better/i);

    fireEvent.change(rangeInput, { target: { value: '100000' } });
    expect(emoji).toHaveAccessibleDescription(/that's amazing/i);

    fireEvent.change(rangeInput, { target: { value: '110000' } });
    expect(emoji).toHaveAccessibleDescription(/make it rain!/i);
  });
});
