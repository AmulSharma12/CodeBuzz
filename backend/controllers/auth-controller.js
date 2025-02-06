const signUp = async (req, res) => {
  res.json({ urlEndPoint: "signupend point" });
};

const login = async (req, res) => {
  return res.json({ urlEndPoint: "loginend point" });
};

const logout = async (req, res) => {
  return res.json({ urlEndPoint: "logoutend point" });
};

module.exports = { signUp, login, logout };
