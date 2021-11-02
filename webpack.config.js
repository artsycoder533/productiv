const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.(sc|c)ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					MiniCssExtractPlugin.loader,
					// Translates CSS into CommonJS
					"css-loader",
					{
						loader: "sass-loader",
						options: {
							// Prefer `dart-sass`
							implementation: require.resolve("sass"),
						},
					},
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
	devtool: "inline-source-map",
	devServer: {
		static: "./dist",
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Productiv",
		}),
		new MiniCssExtractPlugin({
			linkType: false,
		}),
	],
};


