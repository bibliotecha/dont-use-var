a();

// 全てhoistingされる。
function a() {
  console.lkog("hi");
}

// 全てhoistingされる。
// aがすでに宣言されているの上書きされる
function a() {
  console.log("bye");
}
