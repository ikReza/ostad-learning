**AJAX** - a way to call an API.

How to know an API works or not - **CURL**

How to use:

1. Go to Axios official website. https://axios-http.com/docs/intro
2. Look for _Using jsDelivr CDN_ and copy the `src` link and follow the link.
   ```js
   <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
   ```
3. Download the file using `save as` and then move the file in your project.
4. Use the file inside the `html` file. Suppose the file is in `js` folder inside your project then import/use it as follows -
   ```js
   <body>
     <script src="js/axios.min.js"></script>
   </body>
   ```

```js
async function getList() {
  const res = await axios.get(API);
  console.log(res.data.results);
}

async function getList() {
  const { data } = await axios.get(API);
  console.log(data.results);
}

async function getList() {
  const {
    data: { results },
  } = await axios.get(API);
  console.log(results);
}
```

**Difference between `id`, `name`, and `placeholder` attributes**

The `id` attribute is used to uniquely identify an element on a web page. This is useful for styling the element with CSS or manipulating it with JavaScript.

The `name` attribute is used to identify form data after it has been submitted to the server. This is important for processing the form data on the server side.

The `placeholder` attribute is used to provide a hint to the user about what should be entered in an input field. This is useful for providing context or examples of what should be entered.

```js
<label for="qty">Quantity:</label>
<input type="number" id="qty" name="qty" placeholder="Quantity" />
```

<label for="qty">Quantity:</label>
<input type="number" id="qty" name="qty" placeholder="Quantity" />

**hoisting**
