const isLogin = (username) => {
  if (username === "/") {
    return true;
  }
  return false;
};

export { isLogin };
