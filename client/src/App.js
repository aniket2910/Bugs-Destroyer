import Login from './pages/signup/Login'
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import SignupCard from './pages/signup/Signup';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })


function App() {
  return(
  <ChakraProvider theme={theme}>
  <div>

    <Login/>
    <SignupCard/>
  </div>
  </ChakraProvider>
  );
}

export default App;
