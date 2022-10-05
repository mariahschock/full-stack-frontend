import { Navigate, Outlet } from 'react-router-dom';
import styles from './Auth.css';

export default function Auth() {
  const user = useUser();

  if (user) return <Navigate to="/" />;

  return (
    <main className={styles.Auth}>
      <h1>Shopping List</h1>
      <Outlet />
    </main>
  );
}
