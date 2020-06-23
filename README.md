# Node.js with TDD example
## Installation
1. Install Node
try: `brew install node`

1. Check if you have 'npm'
try: `npm -v`
    1. if not installed:
    ```bash
   echo prefix=~/.npm-packages >> ~/.npmrc
   curl -L https://www.npmjs.com/install.sh | sh
    ```
   
   Then update your .zshrc with:
   ```bash
   export PATH="$HOME/.npm-packages/bin:$PATH"
   ```

1. Install Node.js and Node Interpreter
See: https://www.jetbrains.com/help/idea/developing-node-js-applications.html

1. `npm install`

1. Install express
try: `npm install express --save`

## Run the server
try ` node src/helloWorld.js `
