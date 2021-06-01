import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Home from './components/Home/Home';
import Products from './components/Product/Products';
import PCs from './components/PC/PCs';
import Consoles from './components/Console/Consoles';
import Support from './components/Support/Support';
import Footer from './layouts/Footer';

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
            path="/pcs"
            component={PCs}
          />
          <Route
            exact
            path="/consoles"
            component={Consoles}
          />
          <Route
            exact
            path="/support"
            component={Support}
          />
        </Switch>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
