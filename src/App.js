import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Explore from './Pages/Explore/Explore';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard';
import Product from './Pages/Admin/Product/Product';
import PrivateRoute from './PrivateRoute/PrivateRoute'
import { ToastProvider } from 'react-toast-notifications';
import PropertyDetails from './Pages/PropertyDetails/PropertyDetails';
import Pay from './Pages/User/Pay/Pay';
import MyOrder from './Pages/User/MyOrder/MyOrder';
import Review from './Pages/User/Review/Review';
import AllOrder from './Pages/Admin/AllOrder/AllOrder';
import AllProduct from './Pages/Admin/AllProduct/AllProduct';
import MakeAdmin from './Pages/Admin/MakeAdmin/MakeAdmin';

function App() {
  return (
    <div className="App">
      <ToastProvider>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/explore">
              <Explore></Explore>
            </Route>

            <PrivateRoute path="/purchase/:id">
              <PropertyDetails></PropertyDetails>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <PrivateRoute path="/add-product">
              <Product></Product>
            </PrivateRoute>

            <PrivateRoute path="/pay">
              <Pay></Pay>
            </PrivateRoute>

            <PrivateRoute path="/my-orders">
              <MyOrder></MyOrder>
            </PrivateRoute>

            <PrivateRoute path="/all-orders">
              <AllOrder></AllOrder>
            </PrivateRoute>

            <PrivateRoute path="/all-products">
              <AllProduct></AllProduct>
            </PrivateRoute>

            <PrivateRoute path="/make-admin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>

            <PrivateRoute path="/add-reviews">
              <Review></Review>
            </PrivateRoute>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
      </ToastProvider>
    </div>
  );
}

export default App;
