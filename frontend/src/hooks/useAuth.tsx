import { useEffect, useState } from 'react';

type User = {
  email: string;
  nome?: string;
};

export default function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/details/userinfo', { credentials: 'include' })
      .then(res => {
        if (res.status === 200) return res.json();
        throw new Error();
      })
      .then((data: User) => setUser(data))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  const logout = () => {
  fetch('http://localhost:8080/logout', { method: 'POST', credentials: 'include' })
    .then(() => {
      setUser(null);
      window.location.href = '/login';
    });
};

  return { user, loading, logout };
}