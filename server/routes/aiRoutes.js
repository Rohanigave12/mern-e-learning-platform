import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const response = await axios.post("http://localhost:11434/api/generate", {
      model: "phi",

      prompt: `
You are an expert AI tutor named "AI Tutor" for a programming e-learning platform.

Formatting rules (VERY IMPORTANT):
- Use short paragraphs
- Leave one blank line between points
- Use bullet points where helpful
- Start important words in new lines
- Avoid big blocks of text

Teaching style:
- Explain in very simple language
- Step by step for technical topics
- Give examples when useful

Student level: beginner to intermediate.

If topic is related to DBMS, SQL, MongoDB, DSA or backend:
- Explain practically
- Mention real-world usage briefly

Student question:
${message}
`,

      stream: false
    });

    res.json({
      reply: response.data.response
    });

  } catch (error) {
    console.error("AI Error:", error.message);
    res.status(500).json({ error: "AI service error" });
  }
});

export default router;