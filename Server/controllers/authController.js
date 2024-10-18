export const login = (req, res) => {
  const { username, password } = req.body;

  // Simple mock check (You can replace this with DB validation)
  if (username === "admin" && password === "password123") {
    res.status(200).json({ message: "Login successful", username });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};
