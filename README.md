1. Install node.js and npm 
https://nodejs.org/en/download/current

2. git clone this repository

3. Run `npm install`

4. Run `node app.js`

5. Documentation is available at `localhost:3000/api-docs`

6. Use postman to verify the following route 
POST: `localhost:3000/orders`
Example Request body:
`{
"components": ["I", "A", "D", "F", "K"]
}`

7. Run `npx jest` to run unit tests
