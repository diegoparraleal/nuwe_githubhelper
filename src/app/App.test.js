import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import UserContainer from './containers/user/user';

test('can getch user info', () => {
  const container = render(<UserContainer />);
  const userName = container.getByTestId(/userName/i);
  const userCard = container.getByTestId(/userCard/i);
  const button = container.getByTestId(/btnSearch/i);
  
  fireEvent.change(userName, { target: { value: 'diegoparraleal' } });
  fireEvent.click(button);

  expect(userCard).toBeInTheDocument();
});
