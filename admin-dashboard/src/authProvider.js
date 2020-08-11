const authProvider = {
  login: ({ username, password }) => {
    const request = new Request("http://localhost:4000/v1/auth/login", {
      method: "POST",
      body: JSON.stringify({ email: username, password }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(({ token }) => {
        localStorage.setItem("token", token);
      });
  },
  logout: () => {
    localStorage.removeItem("token");
    return Promise.resolve();
  },
  checkAuth: () =>
    localStorage.getItem("token")
      ? Promise.resolve()
      : Promise.reject({ redirectTo: "/login" }),
  getPermissions: () => Promise.resolve(),
};

export default authProvider;
