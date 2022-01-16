function arrayTraverseLinear() {
  // 1. Array linear traverse
  console.log(`Array linear traverse`);
  const s = [1, 2, 3, 4, 5];
  for (let i = 0; i < s.length; ++i) {
    console.log(s[i]);
  }
}

function arrayReverseTraverse() {
  // 2. Array reverse traverse
  console.log(`Array reverse traverse`);
  for (let i = s.length - 1; i >= 0; i--) {
    console.log(s[i]);
  }
}

function useArrayIndexAsElement() {
  const a = [1, 2, 3, 4, 3, 2, 5, 3, 2, 1, 5, 4]; // []
  const aMax = 5;
  const indexAsElement = [];

  for (let i = 0; i <= aMax; ++i) {
    indexAsElement.push(0);
  }

  for (let i = 0; i < a.length; ++i) {
    indexAsElement[a[i]] += 1;
  }

  console.log(indexAsElement);
}

{
  // arrayTraverseLinear();
  // arrayReverseTraverse();

  useArrayIndexAsElement();
}
