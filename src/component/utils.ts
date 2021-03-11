/**
 * 字符串中某个字符出现的次数
 * @param str
 */
function countWord(str: string) {
  return str.split("").reduce((res, cur) => {
    res[cur] ? res[cur]++ : (res[cur] = 1);
    return res;
  }, {} as Record<string, any>);
}

/**
 *
 * @param arr reduce 数组去重
 */
function repetition(arr: number[]): number[] {
  return arr.reduce((pre, cur) => {
    if (!pre.includes(cur)) {
      return pre.concat(cur);
    } else {
      return pre;
    }
  }, [] as number[]);
}
function repetition1(arr: number[]): number[] {
  const arrTemp = (new Set(arr) as unknown) as number[];
  return [...arrTemp];
}

/**
 * reduce数组扁平化
 * @param arr
 */
function arrFlat(arr: number[]): number[] {
  return arr.reduce((pre, cur) => {
    return pre.concat(cur);
  }, [] as number[]);
}

// https://www.jianshu.com/p/09bd0ca51ef5  rem布局方案解析；

export { countWord, repetition, repetition1, arrFlat };
