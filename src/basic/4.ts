// 1
function showMessage(message: string): void {
  console.log(message);
}

// 2
function calc(num1: number, num2: number): number {
  return num1 + num2;
}

// 3 (never)
function customError(): never {
  throw new Error("Error");
}
