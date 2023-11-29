// Bucle con timeout
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    setTimeout(() => {
      console.log(j, i);
    }, (j - 1) * 1000 + i * 100);
  }
}
