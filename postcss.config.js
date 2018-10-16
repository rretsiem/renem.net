// module.exports = {
//   plugins: {
//     autoprefixer: { browsers: ['last 2 versions', 'iOS >= 8'] }
//   }
// }
module.exports = {
  plugins: [
    require('postcss-responsive-type'),
    require('postcss-normalize')({ browserslist : ['last 2 versions'] }),
    require('postcss-preset-env'),
    require('autoprefixer')({ browsers: ['last 2 versions', 'iOS >= 10', 'ie >= 9'] })
  ]
}