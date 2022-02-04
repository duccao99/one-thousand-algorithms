/**
 * Problem: LetLee'ss transform matrix by replacing
 * values by their closest value
 * 
 * Understanding the problem
 * - Because of the stupidity so we cannot understand the problem
 * 
 * 
 * 
 * 
 * - Closest value: view from matrix index
 * + left value
 * + right value
 * + top value
 * + bottom value
 * 
 * - shift left rotate
 * - shift right rotate
 * - shift top rotate
 * - shift bottom rotate
 * 
 * *****************************************************************
 * *              Shift left rotate transform                      *
 * *****************************************************************
 * 
 * - matrix                Result 
 * -- 0 1                  -- 0 1 
 * 0| 1 2                  0| 4 1  
 * 1| 4 3                  1| 3 2
 * 
 * 
 * - matrix                Result 
 * -- 0 1 2               -- 0 1 2
 * 0| 1 2 3               0| 8 1 2
 * 1| 8 9 4               1| 7 9 3
 * 2| 7 6 5               2| 6 5 4
 * 
 * - matrix
 * -- 0 1 2 3
 * 0| 1 2 3 4
 * 1| 3 4 5 5  
 * 2| 2 7 6 6
 * 3| 1 9 8 7  
 * 
 * 
 * 
 *
 * 
 * - Closest value: view from calculate space
 * 
 * 
 *  
 * - matrix                Result 
 * -- 0 1                  -- 0 1 
 * 0| 1 2                  0| 2 3  
 * 1| 4 3                  1|   4
 * 
 * 
 * - matrix                Result 
 * -- 0 1 2               -- 0 1 2
 * 0| 1 2 3               0| 8 1 2
 * 1| 8 9 4               1| 7 9 3
 * 2| 7 6 5               2| 6 5 4
 * 
 * - matrix
 * -- 0 1 2 3
 * 0| 1 2 3 4
 * 1| 3 4 5 5  
 * 2| 2 7 6 6
 * 3| 1 9 8 7  
 * 
 * 
 * 
 * 
 * 
  const a1 = [[1,2,-3],[4,-5,6],[-7,8,9]];
  const a2 = [[-1,2,3,4],[5,-6,7,8],[9,10,-11,12],[13,14,15,-16]];  
  const a3 = [[1,-2],[-3,4]];  // 
  const a4 = [[-2]];  //

 * 
 */

/**
 *
 * @param {Array<Array>} matrix
 *
 */
function E330(matrix) {}

function test1() {
  const a1 = [
    [1, 2, -3],
    [4, -5, 6],
    [-7, 8, 9],
  ];
  const a2 = [
    [-1, 2, 3, 4],
    [5, -6, 7, 8],
    [9, 10, -11, 12],
    [13, 14, 15, -16],
  ];
  const a3 = [
    [1, -2],
    [-3, 4],
  ]; //
  const a4 = [[-2]]; //
  console.log(E330(a1));
  console.log(E330(a2));
  console.log(E330(a3));
  console.log(E330(a4));
}

{
  test1();
}
