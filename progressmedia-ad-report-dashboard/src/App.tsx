import { useState } from 'react';
import { authService } from './services/authService';
import { clientService } from './services/clientService';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';
import { DashboardPage } from './components/DashboardPage';

export default function App() {
  const [page, setPage] = useState<'login' | 'register' | 'dashboard'>(
    authService.getSession() ? 'dashboard' : 'login',
  );
  const [session, setSession] = useState(authService.getSession());

  if (page === 'login') {
    return (
      <LoginPage
        onGoRegister={() => setPage('register')}
        onLogin={(v) => {
          try {
            const next = authService.login(v.id, v.pw, v.admin, v.adminPw);
            setSession(next);
            setPage('dashboard');
          } catch (e: any) {
            alert(e.message);
          }
        }}
      />
    );
  }

  if (page === 'register') {
    return (
      <RegisterPage
        onBack={() => setPage('login')}
        onSubmit={(v) => {
          try {
            clientService.register(v);
            alert('가입 완료');
            setPage('login');
          } catch (e: any) {
            alert(e.message);
          }
        }}
      />
    );
  }

  if (!session) return null;

  return (
    <DashboardPage
      session={session}
      onLogout={() => {
        authService.logout();
        setSession(null);
        setPage('login');
      }}
    />
  );
}
