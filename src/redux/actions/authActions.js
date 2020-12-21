export const fakeAuth = {
  isAuthenticated: false,
  role: "Admin",
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
};
