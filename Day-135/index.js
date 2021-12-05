function counter() {
  for (var i = 1; i < 6; i++) {
    (function (count) {
      setTimeout(() => {
        console.log(count);
      }, count * 1000);
    })(i);
  }
}
counter();
