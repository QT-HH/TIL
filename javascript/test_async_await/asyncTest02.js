const promiseFn1 = Promise.resolve(1)
const promiseFn2 = Promise.resolve(2)
const promiseFn3 = Promise.resolve(3)
const promiseFn4 = Promise.resolve(4)
const promiseFn5 = Promise.resolve(5)

// // // no await
// // promiseFn1.then((res1) => {
// //   promiseFn2.then((res2) => {
// //     promiseFn3.then((res3) => {
// //       promiseFn4.then((res4) => {
// //         promiseFn5.then((res5) => {
// //           console.log("res5: ", res5)
// //         })
// //         console.log("res4: ", res4)
// //       })
// //       console.log("res3: ", res3)
// //     })
// //     console.log("res2: ", res2)
// //   })
// //   console.log("res1: ", res1)
// // })

// await 2
promiseFn1.then( async (res1) => {
  await promiseFn2.then((res2) => {
    promiseFn3.then((res3) => {
      promiseFn4.then((res4) => {
        promiseFn5.then((res5) => {
          console.log("res5: ", res5)
        })
        console.log("res4: ", res4)
      })
      console.log("res3: ", res3)
    })
    console.log("res2: ", res2)
  })
  console.log("res1: ", res1)
})

// const promiseFn1 = async () => { return "1" }
// const promiseFn2 = async () => { return "2" }
// const promiseFn3 = async () => { return "3" }
// const promiseFn4 = async () => { return "4" }
// const promiseFn5 = async () => { return "5" }

// // no await
// promiseFn1().then((res1) => {
//   promiseFn2().then((res2) => {
//     promiseFn3().then((res3) => {
//       promiseFn4().then((res4) => {
//         promiseFn5().then((res5) => {
//           console.log("res5: ", res5)
//         })
//         console.log("res4: ", res4)
//       })
//       console.log("res3: ", res3)
//     })
//     console.log("res2: ", res2)
//   })
//   console.log("res1: ", res1)
// })

// // await 2
// promiseFn1().then( async (res1) => {
//   await promiseFn2().then((res2) => {
//     promiseFn3().then((res3) => {
//       promiseFn4().then((res4) => {
//         promiseFn5().then((res5) => {
//           console.log("res5: ", res5)
//         })
//         console.log("res4: ", res4)
//       })
//       console.log("res3: ", res3)
//     })
//     console.log("res2: ", res2)
//   })
//   console.log("res1: ", res1)
// })

// // await 3
// promiseFn1().then((res1) => {
//   promiseFn2().then( async (res2) => {
//     await promiseFn3().then((res3) => {
//       promiseFn4().then((res4) => {
//         promiseFn5().then((res5) => {
//           console.log("res5: ", res5)
//         })
//         console.log("res4: ", res4)
//       })
//       console.log("res3: ", res3)
//     })
//     console.log("res2: ", res2)
//   })
//   console.log("res1: ", res1)
// })

// // await 2, 3
// promiseFn1().then( async (res1) => {
//   await promiseFn2().then( async (res2) => {
//     await promiseFn3().then((res3) => {
//       promiseFn4().then((res4) => {
//         promiseFn5().then((res5) => {
//           console.log("res5: ", res5)
//         })
//         console.log("res4: ", res4)
//       })
//       console.log("res3: ", res3)
//     })
//     console.log("res2: ", res2)
//   })
//   console.log("res1: ", res1)
// })

// // await all
// promiseFn1().then( async (res1) => {
//   await promiseFn2().then( async (res2) => {
//     await promiseFn3().then( async (res3) => {
//       await promiseFn4().then( async (res4) => {
//         await promiseFn5().then((res5) => {
//           console.log("res5: ", res5)
//         })
//         console.log("res4: ", res4)
//       })
//       console.log("res3: ", res3)
//     })
//     console.log("res2: ", res2)
//   })
//   console.log("res1: ", res1)
// })