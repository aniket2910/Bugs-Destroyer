import Login from './pages/signup/Login'
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import Footer from './pages/footer/Footer';
import UserProfileEdit from './pages/userProfile/Userprofile';
import Loading from './pages/loading/Loading';
import Contact from './pages/contact/Contact';
import Deshboard from './pages/AdminDashboard/Deshboard';
import { Logout } from './Logout/Logout';

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
  <div >

    {/* <Login/> */}
{/* <UserProfileEdit/> */}
{/* <Loading/> */}

{/* <Contact/> */}

{/* <Deshboard/> */}

  {/* <Footer/> */}

{/* <Deshboard/> */}

<Logout/>
  </div>
  </ChakraProvider>
  );
}

export default App;
