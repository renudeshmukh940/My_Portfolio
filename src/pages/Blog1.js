import React from "react";
import  { useState } from "react";

export default function AIAgentsArticle() {
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([
    { text: "This is such an insightful article! The examples of AI agents really helped me understand how they work in practice.", date: "2025-09-16 10:15 AM" },
    { text: "I love the multi-step agent example in JavaScript. It clearly shows how to break goals into actions using GPT!", date: "2025-09-16 10:20 AM" },
    { text: "Can't wait to try building my own AI agent after reading this!", date: "2025-09-16 10:25 AM" },
    { text: "Very detailed explanation on perception and planning. Thanks!", date: "2025-09-16 10:30 AM" },
    { text: "Great blog! The code editor styling looks professional.", date: "2025-09-16 10:35 AM" },
    { text: "Would love to see a full working multi-agent example next.", date: "2025-09-16 10:40 AM" }
  ]);
  const [visibleCount, setVisibleCount] = useState(5);

  const handleSubmit = () => {
    if (comment.trim() === "") return alert("Please write something!");
    setCommentsList([{ text: comment, date: new Date().toLocaleString() }, ...commentsList]);
    setComment("");
    setVisibleCount(prev => prev + 1);
  };

  return (
    <div className="px-4 sm:px-8 py-12 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-300">

      {/* Title */}
      <h1 className="text-5xl sm:text-6xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
        AI Agents: The Future of Automation and Intelligence
      </h1>

      {/* Meta Info */}
      <p className="text-center text-gray-700 dark:text-gray-300 mb-8 text-sm sm:text-base">
        ✍️ <strong>Author:</strong> Renu Deshmukh | 📅 <strong>Date:</strong> 2025-09-14
      </p>

      {/* Intro */}
      <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-8">
        💡 <strong>A deep dive into AI Agents</strong> — exploring their architecture, workflows, technologies, code examples, and future trends.
      </p>
<h2 className="text-2xl sm:text-3xl font-semibold text-center mb-4 text-gray-900 dark:text-gray-100">
  What are AI Agents

</h2>



      {/* Info Box with Image */}
<div className="max-w-3xl mx-auto mb-10 p-6 border-l-4 border-indigo-500 bg-indigo-50 dark:bg-gray-800 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-6 min-h-[200px]">
  {/* Text Section */}
  <div className="flex-1 text-gray-900 dark:text-gray-100 text-lg">
    AI agents are <strong className="text-indigo-600 dark:text-indigo-400">autonomous systems that sense, reason, plan, act, and learn</strong>. 
    They combine LLMs, ML, vector databases, and APIs to accomplish multi-step tasks with minimal human input.
  </div>

  
</div>
{/* Image Section */}
   <div className="flex justify-center md:justify-end flex-shrink-0">
    <img 
      src="/images/AIAgentWorkFlow.png" 
      alt="AI Agent Diagram" 
      className="rounded-2xl shadow-lg max-w-md h-auto object-cover"
    />
  </div>

      {/* Sections */}
      <h2 className="text-3xl sm:text-4xl text-center font-bold mt-10 mb-4">🤖 How to Build a Basic AI Agent</h2>
      <p className="text-lg max-w-3xl mx-auto mb-6 leading-relaxed">
        AI agents are software programs that <strong>observe, decide, and act</strong> to achieve goals. Here's a step-by-step guide to creating a simple AI agent using Python.
      </p>

      <h3 className="text-2xl text-center font-semibold mt-6 mb-2">1. Tools & Requirements</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6 max-w-3xl mx-auto">
        <li>Python 3.8+ installed</li>
        <li>Optional: Libraries like <code>numpy</code> for calculations</li>
        <li>Advanced: <code>TensorFlow</code>, <code>PyTorch</code>, or APIs for more complex agents</li>
      </ul>

      {/* Code Block Style */}
      <div className="max-w-4xl mx-auto my-6 bg-gray-900 dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-700">
        <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          <span className="ml-2 text-gray-300 font-mono text-sm">chat_agent.py</span>
        </div>
        <pre className="p-6 overflow-x-auto text-sm text-green-400 font-mono">
{`# Simple Chatbot AI Agent
import random

class ChatAgent:
    def __init__(self):
        self.knowledge = {
            "hello": "Hi there! How can I help you today?",
            "how are you": "I'm an AI agent, so I don't have feelings, but thanks for asking!",
            "bye": "Goodbye! Have a great day!"
        }

    def observe(self, user_input):
        return user_input.lower()

    def decide(self, observation):
        for key in self.knowledge:
            if key in observation:
                return self.knowledge[key]
        return "Sorry, I don't understand. Can you rephrase?"

    def act(self, response):
        print(response)

agent = ChatAgent()
print("🤖 ChatAgent is ready! Type 'bye' to exit.")

while True:
    user_input = input("You: ")
    observation = agent.observe(user_input)
    response = agent.decide(observation)
    agent.act(response)
    if "bye" in observation:
        break`}
        </pre>
      </div>
      <h3 className="text-2xl text-center font-semibold mt-6 mb-2">2. How It Works</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6 max-w-3xl mx-auto">
        <li><strong>observe():</strong> Receives input from the environment.</li>
        <li><strong>decide():</strong> Determines next action using logic.</li>
        <li><strong>act():</strong> Executes action and adjusts based on feedback.</li>
      </ul>

      <div className="max-w-3xl mx-auto p-6 mb-8 border-l-4 border-indigo-500 bg-indigo-50 dark:bg-gray-700 rounded-lg shadow-md">
        <strong>Key takeaway:</strong> Even simple programs can be AI agents if they observe, decide, and act. Start small and gradually build more advanced autonomous systems.
      </div>

      {/* Multi-step AI Agent */}
      <h2 className="text-3xl text-center font-bold mt-10 mb-4">🏗 Multi-step AI Agent Example (JavaScript)</h2>
      <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-4">
        This example shows a **goal-driven AI agent** using OpenAI GPT API. The agent breaks a goal into steps, executes tasks like web searches, and stores results in memory.
      </p>

      {/* Multi-step JS Code Block */}
      <div className="max-w-4xl mx-auto my-6 bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-700">
        <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          <span className="ml-2 text-gray-300 font-mono text-sm">multi_step_agent.js</span>
        </div>
        <pre className="p-6 overflow-x-auto text-sm text-green-400 font-mono">
{`import OpenAI from "openai";
import fetch from "node-fetch";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const memory = [];

async function webSearch(query) {
  const res = await fetch(\`https://api.duckduckgo.com/?q=\${encodeURIComponent(query)}&format=json\`);
  const data = await res.json();
  return data.AbstractText || "No result found";
}

async function runAgent(goal) {
  const resp = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: "Break the goal into steps and solve it:\\n" + goal }]
  });

  const steps = JSON.parse(resp.choices[0].message.content);
  for (const step of steps) {
    if (step.tool === "webSearch") {
      const result = await webSearch(step.input);
      memory.push({ step, result });
    }
  }
  return memory;
}

runAgent("Find AI news today").then(console.log);`}
        </pre>
      </div>

      <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8">
        <strong>Summary:</strong> Demonstrates a goal-driven AI agent workflow. The agent observes a goal, plans steps via GPT, acts by executing tasks, and stores results. This is similar to how autonomous agents like AutoGPT or BabyAGI function.
      </p>

      {/* Core Components */}
      <h2 className="text-3xl text-center font-bold mt-10 mb-4">🔍 Core Components</h2>
      <ul className="list-disc pl-6 space-y-3 max-w-3xl mx-auto mb-8">
        <li><strong>Perception:</strong> Ingest input (text, images, APIs, sensors)</li>
        <li><strong>Reasoning & Planning:</strong> Decompose goals into steps using LLMs or planners</li>
        <li><strong>Action:</strong> Execute API calls, control devices, or update data</li>
        <li><strong>Memory:</strong> Maintain context & long-term knowledge</li>
        <li><strong>Learning:</strong> Improve from feedback & reinforcement</li>
      </ul>

      {/* Technologies */}
      <h2 className="text-3xl text-center font-bold mt-10 mb-4">🛠️ Technologies Powering Agents</h2>
      <ul className="list-disc pl-6 space-y-2 max-w-3xl mx-auto mb-8">
        <li>Large Language Models (GPT-4, Claude, Gemini)</li>
        <li>Vector Databases (Pinecone, Weaviate, FAISS)</li>
        <li>Frameworks (LangChain, CrewAI, LlamaIndex)</li>
        <li>Reinforcement Learning & Planning Algorithms</li>
        <li>Safety & Human-in-the-Loop Oversight</li>
      </ul>

      {/* Future of AI Agents */}
      <h2 className="text-3xl text-center font-bold mt-10 mb-4">🔮 The Future of AI Agents</h2>
      <ul className="list-disc pl-6 space-y-2 max-w-3xl mx-auto mb-8">
        <li>Multi-agent systems collaborating on cross-domain problems</li>
        <li>Hyper-personalized user experiences</li>
        <li>Emotion-aware, empathetic voice interfaces</li>
        <li>AI + Robotics for real-world automation</li>
        <li>Human-in-the-loop training & oversight</li>
      </ul>

      {/* Benefits & Challenges */}
      <h2 className="text-3xl text-center font-bold mt-10 mb-4">✅ Benefits & ⚠️ Challenges</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
        <div>
          <h4 className=" font-semibold mb-2">Benefits</h4>
          <ul className="  list-disc pl-6 space-y-2">
            <li>24/7 scalability & automation</li>
            <li>Reduced manual errors</li>
            <li>Faster decision-making</li>
            <li>Personalized outputs</li>
          </ul>
        </div>
        <div>
          <h4 className=" font-semibold mb-2">Challenges</h4>
          <ul className=" list-disc pl-6 space-y-2">
            <li>Safety & reliability concerns</li>
            <li>Privacy & compliance</li>
            <li>Reward design in RL</li>
            <li>Monitoring & observability</li>
          </ul>
        </div>
      </div>

      {/* Conclusion */}
      <h2 className="text-3xl text-center font-bold mt-10 mb-4">🚀 Conclusion</h2>
      <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8">
        AI Agents are the next evolution of automation — capable of autonomous reasoning, planning, action, and continuous improvement. When combined with ethical design, they can revolutionize industries, enhance productivity, and act as reliable collaborators for humans.
      </p>

     {/* Stylish Author Info Box */}
<div className="max-w-3xl mx-auto mb-8 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white relative overflow-hidden">
  {/* Optional glow effect */}
  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-400 opacity-20 blur-xl pointer-events-none"></div>
  
  <div className="relative">
    ✍️ <strong className="text-white text-lg">Author:</strong> Renu Deshmukh <br /><br />
    💼 <span className="text-white/90 text-base">
      This article provides a business and technical overview of AI agents, workflows, tools, and best practices for adoption in 2025.
    </span>
  </div>
</div>
{/* Comment Section */}
      <div className="mt-10 max-w-3xl mx-auto text-center">
        <p className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          🤔 What do you think about the future of AI agents? Share your thoughts below!
        </p>

        <button
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition mb-4"
          onClick={() => setShowCommentBox(!showCommentBox)}
        >
          {showCommentBox ? "Close Comment Box" : "Share Your Thoughts"}
        </button>

        {showCommentBox && (
          <div className="mb-6 text-left">
            <textarea
              className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows={4}
              placeholder="Write your comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              className="mt-2 px-5 py-2 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        )}

        {/* Show comments */}
        <div className="space-y-3">
          {commentsList.length === 0 && (
            <p className="text-gray-500 dark:text-gray-400">No comments yet. Be the first to share your thoughts!</p>
          )}
          {commentsList.slice(0, visibleCount).map((c, i) => (
            <div key={i} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-sm text-left">
              <p className="text-gray-900 dark:text-gray-100">{c.text}</p>
              <span className="text-xs text-gray-500">{c.date}</span>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleCount < commentsList.length && (
          <button
            className="mt-3 px-5 py-2 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
            onClick={() => setVisibleCount(visibleCount + 5)}
          >
            Read More Comments
          </button>
        )}
      </div>

      
    </div>
  );
}
