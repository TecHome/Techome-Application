import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Home from './components/Home/Home';
import Products from './components/Product/Products';
import Product from './components/Product/Product';
import Items from './components/Product/Items';
import PCs from './components/PC/PCs';
import PC from './components/PC/PC';
import Consoles from './components/Console/Consoles';
import Console from './components/Console/Console';
import Support from './components/Support/Support';
import Profile from './components/Profile/Profile';
import Orders from './components/Profile/Orders';
import Footer from './layouts/Footer';

import FrequentQuestions from './components/Support/FrequentQuestions';
import Ubication from './components/Support/Ubication';
import Checkout from './components/Checkout/Checkout';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#A9A9A9',
      main: '#151515',
      dark: '#464646'
    },
    secondary: {
      light: '#EB8D70',
      main: '#E5704B',
      dark: '#C7522D'
    },
    divider: 'rgb(171, 171, 171)',
    background: {
      paper: '#EBEBEB',
      default: '#151515',
    },
    text: {
      primary: '#EBEBEB',
      secondary: '#ABABAB',
    },
    action: {
      disabled: '#D1D1D1',
    }
  },
  typography: {
    fontFamily: 'Open+Sans',
    fontWeightLight: 200,
    fontWeightRegular: 300,
    fontWeightMedium: 400,
  }
})

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route
            exact
            path="/"
          >
            <Redirect
              to="/home"
            />
          </Route>
          <Route
            exact
            path="/home"
            component={Home}
          />
          <Route
            exact
            path="/products"
            component={Products}
          />
          <Route
            exact
            path="/products/:id"
            component={Product}
          />
          <Route
            exact
            path="/product/:id"
            component={Items}
          />
          <Route
            exact
            path="/pcs"
            component={PCs}
          />
          <Route
            exact
            path="/pcs/:id"
            component={PC}
          />
          <Route
            exact
            path="/consoles"
            component={Consoles}
          />
          <Route
            exact
            path="/consoles/:id"
            component={Console}
          />
          <Route
            exact
            path="/support"
            component={Support}
          />
          <Route
            exact
            path="/support/frequentquestions"
            component={FrequentQuestions}
          />
          <Route
            exact
            path="/support/ubication"
            component={Ubication}
          />
          <Route
            exact
            path="/checkout/:id/:quantity"
            component={Checkout}
          />
          <Route
            exact
            path="/profile"
            component={Profile}
          />
          <Route
            exact
            path="/orders"
            component={Orders}
          />
        </Switch>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
