function printHalfCircle() {
  let numOfRows = 11;  // 半圆的行数
  let charToUse = "a";  // 用于组成半圆的字符

  for (let row = 0; row < numOfRows; row++) {
    let numOfChars = 2 * row + 1;  // 当前行需要输出字符的个数
    let numOfSpaces = numOfRows - row - 1;  // 当前行需要输出空格的个数

    // 输出空格
    for (let i = 0; i < numOfSpaces; i++) {
      process.stdout.write(" ");
    }

    // 输出字符
    for (let i = 0; i < numOfChars; i++) {
      process.stdout.write(charToUse);
    }

    // 输出换行符
    process.stdout.write("\n");
  }
}
