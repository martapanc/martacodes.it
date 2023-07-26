import { fireEvent, render, screen } from '@testing-library/react';

import { SalaryHappinessTool } from './SalaryHappinessTool';

describe('SalaryHappinessTool', () => {
  const salaryData = {
    min: 40000,
    median: 80000,
    max: 120000,
  };

  const config = {
    displayTitle: true,
    currency: 'EUR',
    forexMultiplier: 1,
  };

  test('renders with title when displayTitle is true', () => {
    render(<SalaryHappinessTool salaryData={salaryData} config={config} />);
    const titleElement = screen.getByText('Salary Happiness Tool');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders without title when displayTitle is false', () => {
    const configWithoutTitle = { ...config, displayTitle: false };
    render(
      <SalaryHappinessTool
        salaryData={salaryData}
        config={configWithoutTitle}
      />
    );
    const titleElement = screen.queryByText('Salary Happiness Tool');
    expect(titleElement).toBeNull();
  });

  test('displays correct emoji and title for selected salary', () => {
    render(<SalaryHappinessTool salaryData={salaryData} config={config} />);
    const sliderElement = screen.getByLabelText('Salary');
    fireEvent.change(sliderElement, { target: { value: '95000' } });
    const emojiElement = screen.getByTestId('emoji');
    expect(emojiElement.textContent).toBe(' 😀');
    expect(emojiElement.getAttribute('title')).toBe('Even better');

    fireEvent.change(sliderElement, { target: { value: '70000' } });
    expect(emojiElement).toHaveAccessibleDescription(/getting there/i);

    fireEvent.change(sliderElement, { target: { value: '60000' } });
    expect(emojiElement).toHaveAccessibleDescription(/still low/i);

    fireEvent.change(sliderElement, { target: { value: '50000' } });
    expect(emojiElement).toHaveAccessibleDescription(/way too low/i);
  });
});
