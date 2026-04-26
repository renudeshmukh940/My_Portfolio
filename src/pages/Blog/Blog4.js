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

const GenerativeAIBlog = () => {
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([
    { text: "Generative AI is truly the most exciting field right now. Diffusion models are magic!", date: "2025-11-20 10:15 AM" },
    { text: "Great breakdown of GANs vs Diffusion. Really helped my understanding.", date: "2025-11-20 11:30 AM" }
  ]);

  const handleSubmit = () => {
    if (comment.trim() === "") return alert("Please write something!");
    setCommentsList([{ text: comment, date: new Date().toLocaleString() }, ...commentsList]);
    setComment("");
  };

  return (
    <>
      <Head>
        <title>Generative AI in Deep Learning | Renu Deshmukh</title>
        <meta name="description" content="Exploring the frontier of Generative AI: From GANs to Diffusion Models and Large Language Models." />
      </Head>
      <TransitionEffect />
      
      <main className="w-full flex flex-col items-center justify-center bg-[#fafafa] dark:bg-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-100/20 rounded-full blur-[120px] -z-10" />

        <Layout className="!pt-20 pb-40">
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="flex flex-col items-center text-center mb-24">
              <div className="flex gap-2 mb-8">
                <span className="px-4 py-1.5 bg-pink-50 text-pink-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-pink-100/50">Generative AI</span>
                <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100/50">Creative AI</span>
              </div>
              
              <AnimatedText 
                text="Generative AI: The New Frontier" 
                className="!text-7xl lg:!text-6xl md:!text-5xl sm:!text-4xl !text-center mb-10 tracking-tighter" 
              />
              
              <div className="flex items-center gap-6 text-slate-400 font-bold text-xs uppercase tracking-widest">
                <span className="flex items-center gap-2 underline decoration-pink-600 underline-offset-4">Renu Deshmukh</span>
                <span className="w-1 h-1 bg-slate-200 rounded-full" />
                <span>25 min Read Time</span>
              </div>
            </div>

            {/* Concepts Summary */}
            <div className="grid grid-cols-3 md:grid-cols-1 gap-6 mb-32">
                {[
                    { l: "GAN Output", v: "High Fidelity" },
                    { l: "Diffusion", v: "Stability" },
                    { l: "LLMs", v: "Reasoning" }
                ].map((s, i) => (
                    <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center">
                        <div className="text-2xl font-black text-slate-900 mb-2 tracking-tighter uppercase">{s.v}</div>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{s.l}</div>
                    </div>
                ))}
            </div>

            {/* Content sections */}
            <section className="mb-32">
              <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">01. What is Generative AI?</h2>
              <p className="text-lg text-slate-600 leading-relaxed font-semibold mb-12">
                Unlike Discriminative AI, which classifies or predicts labels for existing data, <strong>Generative AI</strong> focuses on creating <em>new, original content</em> that resembles the training data. From photorealistic images to human-like text, it leverages deep neural networks to model the underlying distribution of data.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-1 gap-8">
                <InfoCard icon="🎨" title="Image Generation" description="Creating stunning visuals from text prompts using Diffusion and GANs." />
                <InfoCard icon="✍️" title="Text Synthesis" description="Generating coherent, context-aware content via Large Language Models (LLMs)." />
                <InfoCard icon="🎵" title="Audio & Music" description="Composing entire symphonies or cloning voices with high precision." />
                <InfoCard icon="🧬" title="Data Augmentation" description="Creating synthetic datasets for training other AI models in medicine and robotics." />
              </div>
            </section>

            <section className="mb-32">
              <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">02. GANs: The Battle of Networks</h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
                Generative Adversarial Networks (GANs) consist of two models: a <strong>Generator</strong> that creates fake data and a <strong>Discriminator</strong> that tries to spot the fakes. They compete until the Generator becomes indistinguishable from reality.
              </p>

              <CodeBlock 
                title="simple_gan.py"
                code={`# Pseudo-code for GAN Training Loop
for epoch in range(epochs):
    # 1. Train Discriminator
    real_data = get_real_batch()
    fake_data = generator(noise)
    d_loss = loss(discriminator(real_data), 1) + loss(discriminator(fake_data), 0)
    d_optimizer.step(d_loss)

    # 2. Train Generator
    fake_data = generator(noise)
    g_loss = loss(discriminator(fake_data), 1) # Generator wants D to think it's real
    g_optimizer.step(g_loss)`}
              />
            </section>

            <section className="mb-32 text-center bg-slate-900 rounded-[4rem] p-20 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-600/30 via-indigo-600/20 to-transparent blur-[80px]" />
              <h2 className="text-3xl font-black mb-10 tracking-tight relative">03. The Magic of Diffusion</h2>
              <p className="text-slate-400 font-medium text-lg leading-relaxed mb-12 relative">
                Diffusion models work by slowly adding Gaussian noise to an image until it&apos;s unrecognizable, and then learning to <strong>reverse the process</strong> to reconstruct the original image from pure noise.
              </p>
              <div className="inline-flex gap-8 items-center bg-white/5 p-8 rounded-3xl backdrop-blur-md border border-white/10 relative">
                 <div className="flex flex-col"><span className="text-pink-400 font-black">X₀</span><span className="text-[10px] uppercase opacity-50">Original</span></div>
                 <span className="text-2xl">➔</span>
                 <div className="flex flex-col"><span className="text-white font-black">Noise Added</span><span className="text-[10px] uppercase opacity-50">Forward</span></div>
                 <span className="text-2xl">➔</span>
                 <div className="flex flex-col"><span className="text-blue-400 font-black">X_t</span><span className="text-[10px] uppercase opacity-50">Pure Noise</span></div>
              </div>
            </section>

            <section className="mb-32">
              <h2 className="text-4xl font-black text-slate-900 mb-12 tracking-tight">Major Applications</h2>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { name: "LLMs", desc: "GPT-4, Claude, and Gemini powering next-gen reasoning." },
                  { name: "Stable Diffusion", desc: "Open-source high-fidelity image generation for everyone." },
                  { name: "GitHub Copilot", desc: "Generative AI writing billions of lines of code daily." },
                  { name: "AlphaFold", desc: "Predicting protein structures to accelerate drug discovery." }
                ].map((app, i) => (
                  <div key={i} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl group hover:border-pink-400 transition-all">
                    <h4 className="text-xl font-black mb-2 text-slate-900 group-hover:text-pink-600 transition-colors">{app.name}</h4>
                    <p className="text-slate-500 font-semibold">{app.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Comment Section */}
            <section>
              <h2 className="text-4xl font-black text-slate-900 mb-12 text-center tracking-tight">Community Insights</h2>
              <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-2xl">
                <div className="text-center mb-16">
                    <button
                        className="px-12 py-5 bg-gradient-to-r from-pink-600 to-indigo-600 text-white rounded-full font-black uppercase tracking-[0.2em] text-xs shadow-2xl hover:scale-105 transition-all"
                        onClick={() => setShowCommentBox(!showCommentBox)}
                    >
                        {showCommentBox ? "Close Thought Box" : "Share Your Prediction"}
                    </button>
                </div>

                {showCommentBox && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
                        <textarea
                            className="w-full p-10 rounded-[2.5rem] border border-slate-100 bg-slate-50 text-slate-900 font-medium focus:ring-2 focus:ring-pink-500 outline-none mb-6 shadow-inner"
                            rows={4}
                            placeholder="Where is GenAI headed next?..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <button className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs" onClick={handleSubmit}>
                            Post Insight
                        </button>
                    </motion.div>
                )}

                <div className="space-y-6">
                    {commentsList.map((c, i) => (
                        <div key={i} className="p-10 bg-slate-50/50 rounded-[2.5rem] border border-slate-100 transition-all hover:bg-white hover:shadow-xl">
                            <p className="text-slate-700 font-semibold text-lg mb-4 leading-relaxed">{c.text}</p>
                            <div className="flex items-center gap-3 text-[10px] text-slate-400 font-black uppercase tracking-widest">
                                <span>AI Enthusiast</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                                <span>{c.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
              </div>
            </section>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default GenerativeAIBlog;






