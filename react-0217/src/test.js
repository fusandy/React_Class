console.log('a');

setTimeout(() => {
  console.log('b');
}, 0);

console.log('c');

// 執行結果 a -> c -> b
