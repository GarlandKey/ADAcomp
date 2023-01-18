import { render, screen } from '@testing-library/react';
import ItemForm from './TakePhoto';

test('renders learn react link', () => {
  render(<TakePhoto />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
