// import dotenv from "dotenv";
// dotenv.config();
import { PORT } from "./env.js";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express(); 

// In newer versions of Node.js (14.8+), you can use top-level await without
// needing to wrap it in an async function. 
// const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
// const json = await response.json();
// console.log(json);


// console.log(import.meta.dirname);
// console.log(import.meta.filename);




// absolute path 
// const staticPath = path.join(import.meta.dirname,
//      "public")
// app.use(express.static(staticPath));
// app.use(express.urlencoded());

// Create __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files
const staticPath = path.join(__dirname, "public");
app.use(express.static(staticPath));
app.use(express.urlencoded({extended:true}));


// app.get("/contact", (req, res) => {
//   console.log(req.query);
//   res.redirect("/");
// });

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});
app.use((req, res) => {
  // return res.status(404).send("<h1> Page not found </h1>");
  return res.status(404).sendFile(path.join(import.meta.dirname, "views", "404.html"));
});
app.listen(PORT, () => {
    console.log("Server starting on port 3000");
});  

// Query parameters search.
// app.use("/product", (req, res) => {
//   console.log(req.query);
//   res.send(`<h1> user search for Product ${req.query.page} ${req.query.limit} mobile </h1>`)
  
// })

//  use route parameters. 
// app.get("/profile/:username", (req, res) => {
//   console.log(req.params);
//   res.send(`<h1> My username is ${req.params.username}</h1>`)
//   // console.log(__dirname);
//   // console.log(__filename);
//  // console.log(import.meta.url);
// //  const __filename = new URL(import.meta.url).pathname;
// //  console.log(__filename);
//   // const homePagePath = path.join(import.meta.dirname,
//   //    "public", "index.html")
  
//   //res.sendFile(homePagePath)
// });

//  use route parameters. 
// app.get("/profile/:username/article/:slug", (req, res) => {
//   console.log(req.params);
//   const formatedSlug = req.params.slug.replace(/-/g, " ")
//   res.send(`<h1> Article ${req.params.username} by ${formatedSlug}</h1>`)

// });

// app.listen(PORT, () => {
//     console.log("Server starting on port 3000");
// });  

// app.get("/", (req, res) => 
//     res.send("<h1>Hello World!</h1>"));
// app.get("/about", (req, res) => 
//     res.send("<h1>Hello About Page!</h1>"));

// app.get("/contact", (req, res) => {
//     return res.send(`<div class="container">
//        <h1>URL Shortener</h1>
//        <form id="shorten-form">
//           <div>
//             <label for="url">Enter URL</label>
//             <input type="url" name="url" id="url" required>
//           </div>
//           <div>
//             <label for="shortCode">Enter shortCode</label>
//             <input type="text" name="shortCode" id="shortCode" required>
//           </div>
//           <button type="submit">submit</button>
//        </form>
//        <h2>Shortened URLs</h2>
//        <ul id="shortened-urls"></ul>`)});

// // const PORT = 3000;
 //const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running at port: ${PORT}`);
    
// })

// app - This variable holds the created Express app,
// which you can use to:
// Define routes (app.get(), app.post(), etc.)
// Configure middleware (app.use())
// Start the Server (app.listen())

        // paste in package.json
// "dev": "node --env-file=.env --watch app.js"