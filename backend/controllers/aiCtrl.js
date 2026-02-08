// const { GoogleGenAI } = require("@google/genai");

// // create AI client
// const ai = new GoogleGenAI({
//   apiKey: process.env.GEMINI_API_KEY,
// });

// // 1️⃣ Generate new React component
// exports.generateComponent = async (req, res) => {
//   const { prompt } = req.body;

//   const response = await ai.models.generateContent({
//     model: "gemini-3-flash-preview",
//     contents: `Generate a clean React functional component only.\n${prompt}`,
//   });

//   const text =
//     response.candidates[0].content.parts[0].text;

//   res.json({ code: text });
// };

// // 2️⃣ Customize existing component
// exports.customizeComponent = async (req, res) => {
//   const { code, prompt } = req.body;

//   const response = await ai.models.generateContent({
//     model: "gemini-3-flash-preview",
//     contents: `
// Modify this React component only.
// Component:
// ${code}

// Instruction:
// ${prompt}
// `,
//   });

//   const text =
//     response.candidates[0].content.parts[0].text;

//   res.json({ code: text });
// };


// // 3️⃣ Explain component
// exports.explainComponent = async (req, res) => {
//   const { code } = req.body;

//   const response = await ai.models.generateContent({
//     model: "gemini-3-flash-preview",
//     contents: `Explain this React component in simple words:\n${code}`,
//   });

//   const text =
//     response.candidates[0].content.parts[0].text;

//   res.json({ explanation: text });
// };







const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

/**
 * Safely extract text from Gemini response
 */
const extractText = (response) => {
  // New SDK shortcut
  if (response?.text) return response.text;

  // Fallback for structured responses
  if (
    response?.candidates?.[0]?.content?.parts?.[0]?.text
  ) {
    return response.candidates[0].content.parts[0].text;
  }

  console.error("❌ AI RAW RESPONSE:", JSON.stringify(response, null, 2));
  throw new Error("AI response format changed");
};

/**
 * 🔧 Customize component code
 */
exports.customizeComponent = async (req, res) => {
  try {
    const { code, prompt } = req.body;

    if (!code || !prompt) {
      return res.status(400).json({ msg: "Code and prompt required" });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `
Modify ONLY the React component code.

STRICT RULES:
- Keep the component structure the same
- Do NOT wrap the component in another function
- Do NOT return a function
- Do NOT change register(ComponentName)
- Return ONLY valid React code
- No explanation, no markdown

Component:
${code}

Instruction:
${prompt}

Component:
${code}

Instruction:
${prompt}
`,
    });

    const text = extractText(response);
    res.json({ code: text });
  } catch (err) {
    console.error("❌ Customize AI Error:", err.message);
    res.status(500).json({ msg: "AI customization failed" });
  }
};

/**
 * 📘 Explain component code
 */
exports.explainComponent = async (req, res) => {
  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({ msg: "Code required" });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `
Explain this React component in simple terms.
Do NOT return code.

${code}
`,
    });

    const text = extractText(response);
    res.json({ explanation: text });
  } catch (err) {
    console.error("❌ Explain AI Error:", err.message);
    res.status(500).json({ msg: "AI explanation failed" });
  }
};


/**
 * 🧠 Generate React component from prompt
 */
exports.generateComponent = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ msg: "Prompt required" });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `
Generate a SIMPLE React functional component.

STRICT RULES:
- Do NOT return a function that returns another function
- Do NOT wrap the component in another function
- Do NOT use register(() => ...)
- Define the component normally
- At the END, call register(ComponentName)
- Return ONLY valid React code
- No explanations, no markdown

Example FORMAT (FOLLOW EXACTLY):

function Button() {
  return <button>Click</button>;
}

register(Button);


Prompt:
${prompt}
`,
    });

    const text = extractText(response);
    res.json({ code: text });
  } catch (err) {
    console.error("❌ Generate AI Error:", err.message);

    // Handle quota error cleanly
    if (err.message.includes("quota")) {
      return res.status(429).json({
        msg: "AI quota exceeded. Please try again later.",
      });
    }

    res.status(500).json({ msg: "AI generation failed" });
  }
};



// const { GoogleGenAI } = require("@google/genai");

// const ai = new GoogleGenAI({
//   apiKey: process.env.GEMINI_API_KEY,
// });

// const extractText = (response) => {
//   if (response.text) return response.text;

//   if (
//     response.candidates &&
//     response.candidates[0] &&
//     response.candidates[0].content &&
//     response.candidates[0].content.parts &&
//     response.candidates[0].content.parts[0]
//   ) {
//     return response.candidates[0].content.parts[0].text;
//   }

//   throw new Error("AI response format changed");
// };

// // ✅ Customize
// exports.customizeComponent = async (req, res) => {
//   const { code, prompt } = req.body;

//   const response = await ai.models.generateContent({
//     model: "gemini-3-flash-preview",
//     contents: `
// Modify ONLY the React component code.

// Component:
// ${code}

// Instruction:
// ${prompt}
// `,
//   });

//   const text = extractText(response);
//   res.json({ code: text });
// };

// // ✅ Explain
// exports.explainComponent = async (req, res) => {
//   const { code } = req.body;

//   const response = await ai.models.generateContent({
//     model: "gemini-3-flash-preview",
//     contents: `Explain this React component simply:\n${code}`,
//   });

//   const text = extractText(response);
//   res.json({ explanation: text });
// };
