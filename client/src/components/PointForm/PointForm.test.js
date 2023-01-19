import { render, screen } from '@testing-library/react';
import ItemForm from './PointForm';

test('renders learn react link', () => {
  render(<ItemForm />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
