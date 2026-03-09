import { useState, useEffect } from "react";

const App = () => {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!userId) return;

    if (userId < 1 || userId > 10) {
      setError("khong tim thay user");
      setUser(null);
      return;
    }

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setError("");
      })
      .catch(() => {
        setError("khong tim thay user");
        setUser(null);
      });
  }, [userId]);

  return (
    <div>
      <input
        type="number"
        placeholder=""
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      {error && <p>{error}</p>}

      {user && (
        <div>
          <p>name: {user.name}</p>
          <p>phone: {user.phone}</p>
          <p>website: {user.website}</p>
        </div>
      )}
    </div>
  );
}

export default App