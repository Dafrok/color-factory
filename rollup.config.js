import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'

export default {
    entry: 'src/color.js',
    dest: 'index.js',
    format: 'umd',
    moduleName: 'ColorFactory',
    plugins: [
        babel({presets: ['es2015-rollup']}),
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
