function authenticate(login, password) {
  if (login === 'login' && password === 'password') {
    return 'You were lodded in';
  } else {
    return 'Login is incorrect';
  }
}