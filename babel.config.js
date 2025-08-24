module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};

// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ["babel-preset-expo"],
//     plugins: [
//       [
//         "module-resolver",
//         {
//           root: ["."],
//           alias: { "@": "./application" },   // <— maps @ to /application
//           extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
//         }
//       ]
//     ]
//   };
// };
