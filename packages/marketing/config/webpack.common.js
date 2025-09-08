module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/, // Handle both .js and .mjs files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: "babel-loader", // Use Babel loader for transpiling
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"], // Preset for modern JavaScript
            plugins: ["@babel/plugin-transform-runtime"], // Plugin for optimizing helper code
          },
        },
      },
    ],
  },
};
