/**
 * Problem: How to make for loop faster
 * 
 * Understanding the problem
 * 
   - The log time is not fast enough
 * 
   Idea:
  + Log parallel, one start log index from 0, one start log index from mid

  --------------------------------------
  + Develope multiple parallel 
  + Develope sub parallel 
  + Develope sub multiple parallel 
 * 
 * 
 */

function parallelLogIFrom0To999999() {
  const mid = Math.round(999999 / 2);
  const sixNineDigits = 999999;

  async function asyncLogIfrom0ToMid() {
    for (let i = 0; i < mid; ++i) {
      await console.log(i);
    }
  }

  async function asyncLogIfromMidToEnd() {
    for (let i = mid; i < sixNineDigits; ++i) {
      await console.log(i);
    }
  }

  asyncLogIfrom0ToMid();
  asyncLogIfromMidToEnd();
}

{
  parallelLogIFrom0To999999();
}
