const commonSymbols = new Map<string, string>([
  ["<", "&lt;"],
  [">", "&gt;"],
  ["!", "&excl;"],
  ["@", "&commat;"],
  ["#", "&num;"],
  ["$", "&dollar;"],
  ["%", "&percnt;"],
  ["^", "&Hat;"],
  ["&", "&amp;"],
  ["*", "&ast;"],
  ["(", "&lpar;"],
  [")", "&rpar;"],
  ["_", "&lowbar;"],
  ["+", "&plus;"],
  ["{", "&lcub;"],
  ["}", "&rcub;"],
  ["\\", "&bsol;"],
  [":", "&colon;"],
  [";", "&semi;"],
  ["-", "&hyphen;"],
  ["\`", "&DiacriticalGrave;"],
  ["“", "&OpenCurlyDoubleQuote;"],
  ["”", "&CloseCurlyDoubleQuote;"],
  ["\"", "&quot;"],
])

export function encode(value: string): string {
  return value.replaceAll(/./g, (char) => {
    return commonSymbols.get(char) ?? char
  })
}