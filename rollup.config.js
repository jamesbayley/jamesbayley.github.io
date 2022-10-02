import { terser } from 'rollup-plugin-terser';

export default {
    input: "build/main.js",
    output: {
        "file": "static/bundle.min.js",
        "format": "iife"
    },
    plugins: [ terser() ]
}