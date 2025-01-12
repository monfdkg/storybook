export default () => {
  return {
    sourceType: 'unambiguous',
    presets: [
      [
        require.resolve('@babel/preset-env'),
        { shippedProposals: true, useBuiltIns: 'usage', corejs: '3' },
      ],
    ],
    plugins: [
      require.resolve('@babel/plugin-proposal-object-rest-spread'),
      require.resolve('@babel/plugin-proposal-class-properties'),
      require.resolve('@babel/plugin-syntax-dynamic-import'),
      [require.resolve('babel-plugin-emotion'), { sourceMap: true, autoLabel: true }],
      require.resolve('babel-plugin-macros'),
    ],
  };
};
