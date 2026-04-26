import React, { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import { motion } from "framer-motion";
import TransitionEffect from '@/components/TransitionEffect';

const CodeBlock = ({ title, code }) => (
  <div className="max-w-4xl mx-auto my-10 bg-gray-900 dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-700/50">
    <div className="flex items-center justify-between bg-gray-800/50 px-6 py-3 border-b border-gray-700/50">
      <div className="flex space-x-2">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>
      <span className="text-gray-400 font-mono text-xs uppercase tracking-widest">{title}</span>
    </div>
    <pre className="p-8 overflow-x-auto text-sm text-green-400 font-mono leading-relaxed bg-black/20">
      <code>{code}</code>
    </pre>
  </div>
);

const InfoCard = ({ icon, title, description }) => (
  <div className="p-8 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 group">
    <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{icon}</div>
    <h4 className="text-xl font-black text-gray-900 dark:text-gray-100 mb-3 tracking-tight">{title}</h4>
    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-medium">{description}</p>
  </div>
);

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
    <>
      <Head>
        <title>AI Agents: Future of Automation | Renu Deshmukh</title>
        <meta name="description" content="A deep dive into AI Agents — exploring their architecture, workflows, and code examples." />
      </Head>
      <TransitionEffect />
      
      <main className="w-full flex flex-col items-center justify-center bg-[#fafafa] dark:bg-dark relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-100/20 rounded-full blur-[120px] -z-10" />

        <Layout className="!pt-20 pb-32">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex flex-col items-center text-center mb-24">
              <span className="px-5 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-blue-100/50">
                   Trending in AI
              </span>
              <AnimatedText 
                text="AI Agents: The Future of Automation" 
                className="!text-7xl lg:!text-6xl md:!text-5xl sm:!text-4xl !text-center mb-10 tracking-tighter" 
              />
              <div className="flex items-center gap-6 text-slate-400 font-bold text-xs uppercase tracking-widest">
                <span>Renu Deshmukh</span>
                <span className="w-1 h-1 bg-slate-200 rounded-full" />
                <span>Sept 14, 2025</span>
              </div>
            </div>

            {/* Intro Card */}
            <div className="grid grid-cols-1 gap-12 items-center mb-32">
                <div className="p-12 bg-white dark:bg-gray-800 rounded-[3rem] shadow-2xl border border-slate-100 flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">What are AI Agents?</h2>
                        <p className="text-lg text-slate-600 leading-relaxed font-medium">
                            AI agents are <strong className="text-blue-600">autonomous systems that sense, reason, plan, act, and learn</strong>. 
                            They combine LLMs, Machine Learning, vector databases, and APIs to accomplish multi-step tasks with minimal human input.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 aspect-square rounded-[2rem] overflow-hidden shadow-xl">
                        <img src="/images/AIAgentWorkFlow.png" alt="AI Agent" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-32">
                <section>
                    <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">🤖 How to Build a Basic AI Agent</h2>
                    <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10">
                        AI agents are software programs that <strong>observe, decide, and act</strong> to achieve goals. Follow this guide to create a simple agent using Python.
                    </p>
                    
                    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm mb-12">
                        <h3 className="text-sm font-black uppercase tracking-widest text-blue-600 mb-6">Tools & Requirements</h3>
                        <ul className="grid grid-cols-2 sm:grid-cols-1 gap-4">
                            {["Python 3.8+", "Numpy Library", "TensorFlow / PyTorch", "OpenAI APIs"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl text-slate-700 font-bold text-sm">
                                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <CodeBlock 
                        title="chat_agent.py"
                        code={`# Simple Chatbot AI Agent
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
                    />
                </section>

                <section>
                    <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">🏗 Multi-step AI Agent Example (JS)</h2>
                    <div className="grid grid-cols-3 md:grid-cols-1 gap-12 mb-12">
                        <InfoCard icon="👁️" title="Observe" description="Receives input from the environment or user." />
                        <InfoCard icon="🧠" title="Decide" description="Determines next action using deep reasoning logic." />
                        <InfoCard icon="🚀" title="Act" description="Executes action and adjusts based on feedback loops." />
                    </div>

                    <CodeBlock 
                        title="multi_step_agent.js"
                        code={`import OpenAI from "openai";
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
                    />
                </section>

                <section className="bg-slate-900 rounded-[3rem] p-16 text-white text-center">
                    <h2 className="text-4xl font-black mb-8 tracking-tight">🔍 Future Directions</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-1 gap-6 text-left">
                        {[
                            { t: "Multi-agent systems", d: "Collaborating on cross-domain problems." },
                            { t: "Hyper-personalized", d: "Experiences tailored to individual needs." },
                            { t: "Emotion-aware", d: "Empathetic voice and video interfaces." },
                            { t: "AI + Robotics", d: "Bringing digital intelligence to real-world automation." }
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                <h4 className="text-lg font-black mb-2 text-blue-400">{item.t}</h4>
                                <p className="text-slate-400 text-sm font-medium">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-4xl font-black text-slate-900 mb-12 text-center tracking-tight">Discussion & Community</h2>
                    <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-2xl">
                        <div className="text-center mb-12">
                            <button
                                className="px-10 py-5 bg-gradient-to-r from-blue-600 to-pink-600 text-white rounded-full font-black uppercase tracking-widest text-xs shadow-xl hover:scale-105 transition-all"
                                onClick={() => setShowCommentBox(!showCommentBox)}
                            >
                                {showCommentBox ? "Close Discussion" : "Post Your Thought"}
                            </button>
                        </div>

                        {showCommentBox && (
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
                                <textarea
                                    className="w-full p-8 rounded-3xl border border-slate-200 bg-slate-50 text-slate-900 font-medium focus:ring-2 focus:ring-blue-500 outline-none mb-4"
                                    rows={4}
                                    placeholder="Write your insight..."
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />
                                <button className="px-8 py-3 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px]" onClick={handleSubmit}>
                                    Submit Insight
                                </button>
                            </motion.div>
                        )}

                        <div className="space-y-6">
                            {commentsList.slice(0, visibleCount).map((c, i) => (
                                <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 transition-all hover:bg-white hover:shadow-xl">
                                    <p className="text-slate-700 font-medium mb-3 leading-relaxed">{c.text}</p>
                                    <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                                        <span>User Insight</span>
                                        <span className="w-1 h-1 bg-slate-200 rounded-full" />
                                        <span>{c.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {visibleCount < commentsList.length && (
                            <button className="mt-12 w-full py-4 border-2 border-dashed border-slate-200 rounded-3xl text-slate-400 font-black uppercase tracking-widest text-xs hover:bg-slate-50 transition-all" onClick={() => setVisibleCount(v => v + 5)}>
                                Load More Discussions
                            </button>
                        )}
                    </div>
                </section>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}



