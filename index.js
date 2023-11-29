// Bucle con timeout
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    setTimeout(() => {
      console.log(j, i);
    }, (j - 1) * 1000 + i * 100);
  }
}
// 1 1
// 1 2
// 1 3
// ...
// 10 1
// 10 2
// 10 3
// ...
// 10 10

// Todos los console.log se ejecutan después del período de tiempo especificado en: '(j - 1) * 1000 + i * 100'
