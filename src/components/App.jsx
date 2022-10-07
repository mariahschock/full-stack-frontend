import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import AuthForm from './Auth/AuthForm';
import Auth from './Auth/Auth';
import UserProvider from '../state/UserContext';
import ProtectedRoute from './Auth/ProtectedRoute';
import Layout from './Page/Layout';
import Dashboard from './Dashboard/Dashboard';
import ListsProvider from '../state/ListsContext';
import { Lists } from './Lists/Lists';
import { ShoppingList } from './Lists/ShoppingList';

export default function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="auth" element={<Auth />}>
            <Route index element={<AuthForm mode="signin" />} />
            <Route path="signup" element={<AuthForm mode="signup" />}/>
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route element={<ListsProvider />}>
                <Route path="lists">
                  <Route index element={<Lists />} />
                  <Route path=":id" element={<ShoppingList />} />
                </Route>
              </Route>
            </Route>
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}
