import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	preflight: true,
	presets: ["@pandacss/preset-base", "@park-ui/panda-preset"],
	include: ["./src/**/*.ts{,x}"],
	exclude: [],
	jsxFramework: "react",
	outdir: "styled-system",
});
