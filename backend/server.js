import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import workerRouter from "./routes/workerRoute.js";
import userRouter from "./routes/userRoute.js";
import paymentRouter from "./routes/paymentRoute.js";
import axios from "axios";

//app config

const app = express();
const port = process.env.Port || 4000;
connectDB();
connectCloudinary();
// middlewares
app.use(express.json());
app.use(cors());

//api endpoints
app.use("/api/admin", adminRouter);
app.use("/api/worker", workerRouter);
app.use("/api/user", userRouter);
app.use("/api/payment", paymentRouter);
app.get("/", (req, res) => {
  res.send("Api working boom");
});

//ai ingreate
app.post("/chat", async (req, res) => {
  try {
    const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
    if (!OPENROUTER_API_KEY) {
      return res.status(500).json({ error: "API key is missing" });
    }

    const { message } = req.body;
    console.log("🔹 User message:", message); // ✅ طباعة رسالة المستخدم

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      },
      {
        headers: { Authorization: `Bearer ${OPENROUTER_API_KEY}` },
      }
    );

    console.log("🔹 OpenRouter Response:", response.data); // ✅ طباعة رد API

    res.json({ response: response.data.choices[0].message.content });
  } catch (error) {
    console.error(
      "❌ Error in chat API:",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({ error: "حدث خطأ، حاول مرة أخرى!" });
  }
});

app.listen(port, () => {
  console.log("server started ", port);
});
