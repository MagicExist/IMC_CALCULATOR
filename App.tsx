import { StatusBar } from 'expo-status-bar';

import { useImcPresenter } from './src/presenters/useImcPresenter';
import { ImcCalculatorView } from './src/views/ImcCalculatorView';

export default function App() {
  // The app only wires the presenter to the view.
  const presenter = useImcPresenter();

  return (
    <>
      <StatusBar style="dark" />
      <ImcCalculatorView {...presenter} />
    </>
  );
}
