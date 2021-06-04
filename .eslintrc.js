module.exports = {
  extends: ['airbnb-typescript-prettier'],
  settings: {
    'import/resolver': {
      node: {
        extension: ['.js', '.ts', '.jsx', '.tsx', '.json'],
        paths: ['./src'],
      },
    },
  },
  rules: {
   "react/react-in-jsx-scope": "off",
   "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
   "import/prefer-default-export": 0,
   "react/jsx-props-no-spreading": 0,
   "@typescript-eslint/ban-ts-comment": 0,
   "no-underscore-dangle": 0,
   "import/no-named-as-default": 0,
   "@typescript-eslint/explicit-module-boundary-types": 0,
  }
};
