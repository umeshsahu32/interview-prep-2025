// Given a string s, which may contain duplicate characters, your task is to generate and return an array of all unique permutations of the string. You can return your answer in any order.

// Input: s = "ABC"
// Output: ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"]
// Explanation: Given string ABC has 6 unique permutations.

// Input: s = "ABSG"
// Output: ["ABGS", "ABSG", "AGBS", "AGSB", "ASBG", "ASGB", "BAGS", "BASG", "BGAS", "BGSA", "BSAG", "BSGA", "GABS", "GASB", "GBAS", "GBSA", "GSAB", "GSBA", "SABG", "SAGB", "SBAG", "SBGA", "SGAB", "SGBA"]
// Explanation: Given string ABSG has 24 unique permutations.

// Input: s = "AAA"
// Output: ["AAA"]
// Explanation: No other unique permutations can be formed as all the characters are same.

const findPermutationOfString = (str) => {
  const result = [];

  const generate = (path, remaining) => {
    console.log("path", path, "remaining", remaining);
    if (remaining.length === 0) {
      result.push(path);
      return;
    }

    const seen = new Set(); // to avoid duplicates at the same depth

    for (let i = 0; i < remaining.length; i++) {
      const char = remaining[i];

      if (seen.has(char)) continue; // skip duplicate chars at same level
      seen.add(char);
      const nextRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
      generate(path + char, nextRemaining);
    }
  };

  generate("", str);
  return result;
};

console.log(findPermutationOfString("ABC"));
