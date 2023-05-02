function factorial(n) {
  if (0 == n || 1 == n) return 1;
  if (n < 0) return;

  let result = n;
  for (i = 1; i < n; i++) {
    result *= n - i;
  }

  return result;
}
