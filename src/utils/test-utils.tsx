import { ReactNode, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/store/store';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';

type CustomWrapperProps = {
  children: ReactNode;
  mocks?: ReadonlyArray<MockedResponse>;
};

function CustomWrapper({ children, mocks = [] }: CustomWrapperProps) {
  return (
    <ReduxProvider store={store}>
      <MockedProvider mocks={mocks} addTypename={false}>
        {children}
      </MockedProvider>
    </ReduxProvider>
  );
}

export function renderWithProviders(
  ui: ReactElement,
  { mocks, ...options }: { mocks?: MockedResponse[] } & RenderOptions = {}
) {
  return render(ui, {
    wrapper: (props) => <CustomWrapper {...props} mocks={mocks} />,
    ...options,
  });
}
