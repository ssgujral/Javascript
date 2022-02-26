# A simple counter

How to setup:
```
npm install -g esbuild
npm install
npm run build
```

How to run the tests:
```
jest
```

Open index.html in your browser to use the app.

Follow the flow of the code from the `index.js` file and do a quick diagram of
your understanding on how the different components interact together.

1. What happens when we call the method `display()`?
2. What happens when we click on the "Increment" button? Which part of the code
   is responsible for this?

## Going further — decrementing

Create a new button "Decrement", and make the necessary changes in the different
components to handle this behaviour. To keep the code clean, you'll need to make
sure that:
  * the counter value is correctly decremented on the model.
  * all code that modifies the web page content is kept on the view.