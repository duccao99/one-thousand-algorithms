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
  // 3. Use array index as element

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

function arrayLoopBetterWay() {
  // 3. array Loop Better Way

  const a = [1, 2, 3, 4, 5];
  const aLength = a.length;

  // a.length will not be calculated each loop
  for (let i = 0; i < aLength; ++i) {}
}

function arrayLoopMoreBetterWay() {
  // 4. array Loop more better Way
  const a = [1, 2, 3, 4, 5];

  // because we have to write const aLength = a.length
  // write this way is better
  // a.length is still be calculated once time
  for (let i = a.length; i >= 0; --i) {}
}

function traverseToMidCompareTwoSides() {
  // 5. traverse to mid, compare two sides
  const a = [1, 2, 3, 2, 1];

  const mid = Math.round(a.length / 2);
  const aLength = a.length;

  for (let i = aLength - 1; i >= mid; --i) {
    if (a[i] === a[aLength - i - 1]) {
      // do something
    }
  }
}

{
  // arrayTraverseLinear();
  // arrayReverseTraverse();

  useArrayIndexAsElement();
}
