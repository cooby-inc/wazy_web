import Router from '@/router';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import './index.css';

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Router />
    </ChakraProvider>
  );
}

export default App;
