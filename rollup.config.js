import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'

export default {
    input: 'src/color.js',
    output: {
        file: 'index.js',
        format: 'umd',
        name: 'ColorFactory',
    },
    plugins: [
        babel({
            exclude: 'node_modules/**',
            babelrc: false,
            presets: [
                ["env", { "modules": false }]
            ]
        }),
        nodeResolve({
            jsnext: true,
            main: true,
            extensions: [ '.js', '.json' ]
        }),
        commonjs({
            include: 'node_modules/**'
        }),
        replace({
            'process.env.NODE_ENV': "'production'"
        })
    ]
}
