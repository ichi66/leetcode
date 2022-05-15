let executeCount = 0;
const targetFn = async (nums) => {
  console.log(nums);
  executeCount++;
  return nums.map((num) => 2 * num + 1);
};

const batcher = (fn, arg) => {
  let nums = fn(arg);
  if(nums[0] == 1){
    return Promise.resolve;
  }
  return Promise.reject;
};



const main = async () => {
  const [result1, result2, result3] = await Promise.all([
    batcher(targetFn,[1, 2, 3]),
    batcher(targetFn, [4, 5]),
    batcher(targetFn, [6, 7]),
  ]);

  console.log(result1, result2, result3); //
  console.log(executeCount); // 预期为 1
};

main();