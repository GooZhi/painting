function printScaledHalfCircle(scaleFactor) {
  let numOfRows = 11;  // 半圆的行数
  let charToUse = "a";  // 用于组成半圆的字符

  for (let row = 0; row < numOfRows; row++) {
    let numOfChars = Math.round(2 * Math.sqrt(row * (numOfRows - row)) * scaleFactor); // 根据行号计算当前行需要输出字符的个数，并乘以比例因子
    let numOfSpaces = Math.round((numOfRows - numOfChars) / 2 * scaleFactor);  // 根据当前行需要输出字符的个数和比例因子计算当前行需要输出空格的个数

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
