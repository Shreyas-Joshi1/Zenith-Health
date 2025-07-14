import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRouter from "./routes/user.routes.js"
import receiptionistRouter from "./routes/receiptionist.routes.js"
import doctorRouter from "./routes/doctor.routes.js"
import path from "path";
import { fileURLToPath } from "url";

import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import postmanToOpenApi from "postman-to-openapi";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()

import { openapi } from "../openapi.js" 

const allowedOrigins = [
  'http://localhost:5173',
  'https://zenhealth.netlify.app'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // allow tools like Postman
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
};

app.use(cors(corsOptions));

app.options('*', cors(corsOptions));


app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.use(cookieParser());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/users/receptionist", receiptionistRouter);
app.use("/api/v1/users/doctor", doctorRouter);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapi));

app.get('/swagger-json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(openapi);
});

app.get('/generate-yml', async (req, res) => {
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Postman Collection Path
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const postmanCollection = 'collection.json'
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Output OpenAPI Path
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const outputFile = 'collection.yml'
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Async/await
    ////++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    try {
        const result = await postmanToOpenApi(postmanCollection, outputFile, {
            defaultTag: 'General'
        })
        //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // Without save the result in a file
        //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        const result2 = await postmanToOpenApi(postmanCollection, null, {
            defaultTag: 'General'
        })
        console.log(`OpenAPI specs: ${result}`)
    } catch (err) {
        console.log(err)
    }
});
app.get('/' , (req,res)=>{ 
    res.send("Welcome to backend of clinic management system developed by --Syed Waseem(Code Surgery Squad)");  
 }) 
export { app }

// app.use(express.static(path.join(__dirname, "../dist"))); // adjust path if needed

// // Catch-all handler to serve index.html for React Router
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../dist", "index.html"));
// });

