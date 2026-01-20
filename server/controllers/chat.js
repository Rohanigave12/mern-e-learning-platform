import dotenv from "dotenv";
dotenv.config();
import axios from "axios";

export const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // Call HuggingFace text-generation API
    const response = await axios.post(
      "https://api-inference.huggingface.co/models/gpt2",
      { inputs: message },
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // HuggingFace returns array with generated_text
    const reply = response.data[0].generated_text;

    res.json({ reply });
  } catch (error) {
    console.error("Chatbot Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Something went wrong with AI" });
  }
};