
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import contactRouter from "./routes/ContactRoutes.js";

const app = express();
app.use(express.json({ limit: "50mb" }));

app.use(cors({
  credentials:true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  origin:['http://localhost:5173']
}
));

app.use("/api/support",contactRouter);

mongoose
.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("Database Connected");
    app.listen(process.env.PORT,console.log(`Server is running on http://localhost:${process.env.PORT}`))
})
.catch((error)=>{
    console.log(error)
});


