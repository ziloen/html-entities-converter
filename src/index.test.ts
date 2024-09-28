import { expect, test } from "vitest"
import { encode } from './encode'

test("Encode common symbols", () => {
  expect(encode(`\`<>!@#$%^&*()_+{}\\:;-“”`))
    .toMatchInlineSnapshot(`"&DiacriticalGrave;&lt;&gt;&excl;&commat;&num;&dollar;&percnt;&Hat;&amp;&ast;&lpar;&rpar;&lowbar;&plus;&lcub;&rcub;&bsol;&colon;&semi;&hyphen;&OpenCurlyDoubleQuote;&CloseCurlyDoubleQuote;"`)
})

test("Do not encode ordinary language text", () => {
  expect(encode("abc")).toMatchInlineSnapshot(`"abc"`)
  expect(encode("123")).toMatchInlineSnapshot(`"123"`)
  // #52
  expect(encode("< 이것은 인코딩의 예 입니다. !@#$%^&*() >")).toMatchInlineSnapshot(`"&lt; 이것은 인코딩의 예 입니다. &excl;&commat;&num;&dollar;&percnt;&Hat;&amp;&ast;&lpar;&rpar; &gt;"`)
})