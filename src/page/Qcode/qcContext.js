import { createContext } from 'react'
export const qcContext = createContext(null)

// const arr = [
//   [
//     null,
//     null,
//     null,
//     null,
//     null,
//     { id: 'ukolSMGNWxTFefn9kp', name: 'ncnot', connector: 2 },
//     { id: 'RwY2d3T7obNHD8qMR0', name: 'ncnot', connector: 1 },
//     { id: 'e1wMLIIRxHt0Zut2wT', name: 'ncnot', connector: 0 },
//     { id: 'JA2KXLUv9Clu1AJemN', name: 'ncnot', connector: 1 },
//     null,
//     null,
//     null,
//   ],
//   [
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     { id: 'ukolSMGNWxTFefn9kp', name: 'ncnot', connector: 1 },
//     { id: 'RwY2d3T7obNHD8qMR0', name: 'ncnot', connector: 0 },
//     { id: 'e1wMLIIRxHt0Zut2wT', name: 'ncnot', connector: 2 },
//     null,
//     { id: 'ZAq9mBNbwq5JOsYfhf', name: 'ncnot', connector: 1 },
//     { id: 'Xq2PTBebqABadtUxC0', name: 'ncnot', connector: 0 },
//     { id: 'AflbBIbNuCK4tQnZZW', name: 'ncnot', connector: 1 },
//   ],
//   [
//     null,
//     { id: 'UuO5a4LP71jE4erCdH', name: 'h', connector: 0 },
//     { id: 'tjUAdF9vfKCbz9dRiS', name: 'rz', connector: 0 },
//     null,
//     null,
//     null,
//     { id: 'ukolSMGNWxTFefn9kp', name: 'ncnot', connector: 0 },
//     { id: 'RwY2d3T7obNHD8qMR0', name: 'ncnot', connector: 3 },
//     null,
//     null,
//     { id: 'ZAq9mBNbwq5JOsYfhf', name: 'ncnot', connector: 0 },
//     { id: 'Xq2PTBebqABadtUxC0', name: 'ncnot', connector: 2 },
//     null,
//   ],
// ]
// //var arrList=arr.reduce(function(a,b){return a.concat(b)})
// var map = new Map()
// arr.forEach(function (itemList) {
//   itemList.forEach(function (item) {
//     if (item != null) {
//       if (map.get(item.id)) {
//         if (item.connector > map.get(item.id).connector) {
//           item.istrue = true
//           map.get(item.id).istrue = false
//           map.set(item.id, item)
//         } else {
//           item.istrue = false
//         }
//       } else {
//         map.set(item.id, item)
//         item.istrue = true
//       }
//     }
//   })
// })

// console.log(arr)
// const inputData = [
//   {
//     vars: ['a'],
//     bases: [{ id: 0, magnitude: 0, max_base_magn: 0, phases: 0, ratio: 0 }],
//   },
//   {
//     vars: ['a'],
//     bases: [{ id: 0, magnitude: 0, max_base_magn: 0, phases: 0, ratio: 0 }],
//   },
//   {
//     vars: ['a'],
//     bases: [{ id: 0, magnitude: 0, max_base_magn: 0, phases: 0, ratio: 0 }],
//   },
//   {
//     vars: ['a'],
//     bases: [{ id: 0, magnitude: 0, max_base_magn: 0, phases: 0, ratio: 0 }],
//   },
//   {
//     vars: ['a'],
//     bases: [{ id: 0, magnitude: 0, max_base_magn: 0, phases: 0, ratio: 0 }],
//   },
// ]
// const outputData = [
//   {
//     vars: ['a'],
//     bases: [{ id: 0, magnitude: 0, max_base_magn: 0, phases: 0, ratio: 0 }],
//   },
//   {
//     vars: ['a'],
//     bases: [{ id: 0, magnitude: 0, max_base_magn: 0, phases: 0, ratio: 0 }],
//   },
//   {
//     vars: ['a'],
//     bases: [{ id: 0, magnitude: 0, max_base_magn: 0, phases: 0, ratio: 0 }],
//   },
//   {
//     vars: ['a'],
//     bases: [{ id: 0, magnitude: 0, max_base_magn: 0, phases: 0, ratio: 0 }],
//   },
//   {
//     vars: ['a'],
//     bases: [{ id: 0, magnitude: 0, max_base_magn: 0, phases: 0, ratio: 0 }],
//   },
// ]

// const getEvoMatrixData = [
//   [
//     [
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//     ],
//     [
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//     ],
//     [
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//     ],
//     [
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//     ],
//     [
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//     ],
//     [
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//       {
//         magnitude: 0,
//         max: 0.7071067811865475,
//         phase: 0,
//         ratio: 0,
//         used: false,
//       },
//     ],
    
//   ],
// ]
