export const registerUser = (req, res) => {
  // const username = req.body.username;
  // const password = req.body.password;
  // const fullname = req.body.fullname;
  // const email = req.body.email;

  const { username, password, fullname, email } = req.body;

  res.json({
    message: "Register User",
    data: {
      username,
      password,
      fullname,
      email,
    },
  });
};

export const loginUser = (req, res) => {
  res.json({
    message: "Login User",
  });
};
