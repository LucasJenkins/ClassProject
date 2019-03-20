export const measure = (lambda, mesg) => {
  let t0 = performance.now()
  lambda()
  let t1 = performance.now()
  console.log(`${mesg}:${t1 - t0}ms`)
}
