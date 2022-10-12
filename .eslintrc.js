const MAX_CONDITIONAL_BRANCHES = 3;
const MAX_BLOCK_DEPTH = 3;
const MAX_LINES_PER_FUNCTION = 20;

module.exports = {
    root: true,
    extends: [
		"eslint:recommended",
	],
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 2020,
    },
    env: {
        es2017: true,
        node: true,
    },
    rules: {
        // Whenever using an array mutation function, you must return a value
        "array-callback-return": "error",
        // An await in a loop is bad async practice
        "no-await-in-loop": "error",
        // If a binary expression short circuits
        "no-constant-binary-expression": "error",
        // While loops should always contain a condition modifier
        "no-unmodified-loop-condition": "error",
        // Bad form to reference variable declared below, in a line above
        "no-use-before-define": "error",
        // Functions should always use arrow-body-style when more than one line
        "arrow-body-style": ["error", "as-needed"],
        // Variables should only be accessed
        // from the block they're in (local scope)
        "block-scoped-var": "error",
        // If blocks should always use braces when multi-line
        curly: ["error", "multi"],
        // Default parameters in functions should always come last
        "default-param-last": "error",
        // Dot notation e.g. foo.bar rather
        // than foo["bar"] should always be favoured
        "dot-notation": "error",
        // Functions should be named by the variable they're assigned to
        "func-names": ["error", "never"],
        // Functions should always be declared as an expression
        "func-style": ["error", "expression"],
        // Block newer logic operator styles
        "logical-assignment-operators": ["error", "never"],
        // Don't allow alert statements
        "no-alert": "error",
        // Don't use an else if there's a return in the if
        "no-else-return": "error",
        // Why would you want to write it .5 or -.7?
        "no-floating-decimal": "error",
        // Own them or don't write them
        "no-implicit-globals": "error",
        // Dumb and unnecessary control flow syntax
        "no-labels": "error",
        // you don't need internal isolated context to an existing block
        // either function it, or write a condition
        "no-lone-blocks": "error",
        // This works in conjunction with the complexity rule to make sure
        // we don't have extraordinarily weird control flow
        "no-lonely-if": "error",
        // Constants should be declared and coded
        // in the case of accessing first index,
        // this should be done using a function call
        "no-magic-numbers": "error",
        // Even if you know operator precedence
        // off by heart, it's still nice to write
        // it in a form that someone can easily
        // decode without referring to op-pref docs
        "no-mixed-operators": "error",
        // Really no good reason to write this
        // without explanation, do two assignments
        // and make it clear. If it's a number,
        // it's trivial. If you're doing it with an
        // object you probably need a deep copy anyway
        "no-multi-assign": "error",
        // If you need multi-line strings,
        // you're writing your constants too long
        "no-multi-str": "error",
        // I write lots of these and they're
        // bad form really. Don't nest your ternaries
        "no-nested-ternary": "error",
        // literally the worst mutable behaviour
        // - changing function params in block? Blegh
        "no-param-reassign": "error",
        // I don't like a lack of assignment clarity
        // e.g. i++ is much more readable as i += 1 or i = i + 1
        "no-plusplus": "error",
        // The logic in this is sound. Essentially
        // we should just return the promise we're waiting on
        "no-return-await": "error",
        // I'm guilty of this one too
        "no-unneeded-ternary": "error",
        // Not an immutable behaviour
        "no-shadow": "error",
        // Unnecessary, doesn't contribute to readability
        "no-undef-init": "error",
        // I mean this one is just obvious
        "no-useless-concat": "error",
        // obvious ones
        "no-useless-rename": "error",
        "no-useless-return": "error",
        // Variables should always be block scoped
        "no-var": "error",
        // Object shorthand is clean and sensible
        "object-shorthand": ["error", "always"],
        // Consts should be used all the time
        "prefer-const": "error",
        // Use destructuring techniques for readability
        "prefer-destructuring": [
            "error",
            {
                object: true,
                array: true,
            },
        ],
        // ...args notation just makes more sense and is explicitly declarative
        "prefer-rest-params": "error",
        // spread notation is more intuitive and readable
        "prefer-spread": "error",
        // Always use template strings
        "prefer-template": "error",
        // quote props only as needed
        "quote-props": ["error", "as-needed"],
        // Async and generators - use it or lose it
        "require-await": "error",
        "require-yield": "error",
        // Bracket should never be spaced e.g. [ 1, 2 ] should be [1, 2]
        "array-bracket-spacing": ["error", "never"],
        // Arrow functions should always use parens
        "arrow-parens": ["error", "always"],
        "arrow-spacing": "error",
        // Always use Oxford commas
        "comma-dangle": ["error", "only-multiline"],
        "comma-spacing": "error",
        "comma-style": ["error", "last"],
        // The dot at the start indicates the
        // continuation of the previous line...
        // the absence of semi-colon at the end
        // indicates the continuation from the previous line perspective
        "dot-location": ["error", "property"],
        "eol-last": ["error", "always"],
        // There's absolutely no good reason to put a space
        // between a function name and it's invoking parameters. Period.
        "func-call-spacing": ["error", "never"],
        // Consistency is key
        "function-call-argument-newline": ["error", "consistent"],
        // If it's not short enough to fit, it's not short enough
        "implicit-arrow-linebreak": ["error", "beside"],
        // spacing for keys should always be hello: "world"
        "key-spacing": "error",
        // Lines should only be 80 characters long
        "max-len": ["error", {
            code: 100,
            comments: 120,
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreRegExpLiterals: true
        }],
        // One statement per line
        "max-statements-per-line": "error",
        // Always new line object declarations
        "object-curly-newline": [
            "error",
            {
                ObjectExpression: "always",
                ObjectPattern: {
                    consistent: true,
                },
                ImportDeclaration: "never",
                ExportDeclaration: {
                    minProperties: 3,
                },
            },
        ],
		semi: ["error", "always"],
		"no-trailing-spaces": "error",
        // Don't catch just to throw, just throw through
        // Might be the case that handling needed to be implemented that wasn't
        "no-useless-catch": "warn",
        // Functions shouldn't be empty
        "no-empty-function": "warn",
        // Comments should come before or after, not next to
        "no-inline-comments": "warn",
        // Functions should be small, sweet and singular
        "max-lines-per-function": ["warn", MAX_LINES_PER_FUNCTION],
        // Block depth should never go below 3
        "max-depth": ["warn", MAX_BLOCK_DEPTH],
        // Conditionals should not result in more than three paths
        complexity: ["warn", MAX_CONDITIONAL_BRANCHES],
        // Warn about console.logs and console.errors
        "no-console": "warn",
        // detect "this string does not interpolate correctly ${var}"
        "no-template-curly-in-string": "warn",
        // I think TODO and FIXME are solid code tools
        "no-warning-comments": "warn",
        // Always use triple equals
        eqeqeq: "error",
    },
};
