const { sum } = require("../sum")

test("sum function should calculate the sum of two number",()=>{
   const result =  sum(2,4);
   // Assertion
   expect(result).toBe(6);
})