import React, { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import { motion } from "framer-motion";

const CodeBlock = ({ title, code }) => (
  <div className="max-w-4xl mx-auto my-6 bg-gray-900 dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-700">
    <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2">
      <div className="flex space-x-1.5">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>
      <span className="ml-2 text-gray-300 font-mono text-sm">{title}</span>
    </div>
    <pre className="p-6 overflow-x-auto text-sm text-green-400 font-mono">
      <code>{code}</code>
    </pre>
  </div>
);

const InfoCard = ({ icon, title, description }) => (
  <div className="p-6 bg-white dark:bg-gray-800 border-l-4 border-indigo-500 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="text-3xl mb-3">{icon}</div>
    <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">{title}</h4>
    <p className="text-black dark:text-gray-400 text-sm leading-relaxed font-semibold">{description}</p>
  </div>
);

const TransformersBlog = () => {
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([
    { text: "This is a masterpiece of an article! The attention formula explanation is so clear.", date: "2025-10-15 02:30 PM" },
    { text: "Transformers really did change everything in NLP and Vision. Great summary!", date: "2025-10-15 03:00 PM" }
  ]);

  const handleSubmit = () => {
    if (comment.trim() === "") return alert("Please write something!");
    setCommentsList([{ text: comment, date: new Date().toLocaleString() }, ...commentsList]);
    setComment("");
  };

  return (
    <>
      <Head>
        <title>Transformers in Deep Learning | RD Portfolio</title>
        <meta name="description" content="A comprehensive guide to the Transformer architecture that revolutionized AI." />
      </Head>
      
      <main className="flex flex-col items-center justify-center w-full min-h-screen bg-white dark:bg-dark py-20 px-8 sm:px-4">
        <Layout className="!pt-10">
          <div className="w-full max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="flex flex-col items-center text-center mb-16">
              <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold rounded-full uppercase tracking-wider">Deep Learning</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-bold rounded-full uppercase tracking-wider">NLP</span>
              </div>
              
              <AnimatedText 
                text="Transformers in Deep Learning" 
                className="!text-6xl lg:!text-5xl md:!text-4xl sm:!text-3xl !text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500" 
              />
              
              <p className="text-black dark:text-gray-400 text-lg mb-8 max-w-2xl leading-relaxed font-semibold">
                From the seminal <em>&quot;Attention Is All You Need&quot;</em> to GPT-4 and Vision Transformers — 
                a complete guide to the architecture that changed everything.
              </p>

              <div className="flex items-center gap-10 md:gap-6 flex-wrap justify-center border-y border-gray-100 dark:border-gray-800 py-6 w-full">
                <div className="flex flex-col"><span className="text-2xl font-bold dark:text-light">2017</span><span className="text-xs text-gray-400 uppercase tracking-widest">Released</span></div>
                <div className="w-[1px] h-10 bg-gray-200 dark:bg-gray-800 md:hidden" />
                <div className="flex flex-col"><span className="text-2xl font-bold dark:text-light">175B</span><span className="text-xs text-gray-400 uppercase tracking-widest">GPT-3 Params</span></div>
                <div className="w-[1px] h-10 bg-gray-200 dark:bg-gray-800 md:hidden" />
                <div className="flex flex-col"><span className="text-2xl font-bold dark:text-light">~20 min</span><span className="text-xs text-gray-400 uppercase tracking-widest">Read Time</span></div>
              </div>
            </div>

            {/* Introduction Section */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-6 dark:text-light">01. Introduction</h2>
              <p className="text-lg text-black leading-relaxed mb-6 font-medium">
                In 2017, a Google research team published <strong>&quot;Attention Is All You Need&quot;</strong> — a paper that became the most influential work in modern AI. The <strong>Transformer</strong> architecture abandoned recurrence entirely, relying on <em>self-attention</em> to process sequences in parallel.
              </p>
              
              <blockquote className="border-l-4 border-indigo-500 pl-8 py-4 italic text-black/80 bg-indigo-50/50 dark:bg-indigo-900/10 rounded-r-2xl mb-10 font-medium">
                &quot;The dominant sequence transduction models are based on complex recurrent or convolutional neural networks. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms.&quot; — <strong>Vaswani et al., 2017</strong>
              </blockquote>

              <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
                <InfoCard 
                  icon="🧩" 
                  title="Self-Attention" 
                  description="Each token directly attends to every other token, capturing global context in one step." 
                />
                <InfoCard 
                  icon="⚡" 
                  title="Parallelization" 
                  description="Unlike RNNs, all positions are processed simultaneously — maximizing GPU efficiency." 
                />
                <InfoCard 
                  icon="📏" 
                  title="Scalability" 
                  description="More layers and parameters consistently improve performance, enabling massive models." 
                />
                <InfoCard 
                  icon="🌐" 
                  title="Generality" 
                  description="The same architecture works for text, images, audio, video, and biological sequences." 
                />
              </div>
            </section>

            {/* Architecture Section */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-6 dark:text-light">02. The Architecture</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                The Transformer follows an <strong>encoder-decoder</strong> structure. Both halves are composed of stacked identical layers containing multi-head self-attention and position-wise feed-forward networks.
              </p>

              <div className="bg-gray-50 dark:bg-gray-800/50 p-10 rounded-3xl border border-gray-100 dark:border-gray-800 mb-10">
                <h3 className="text-xl font-bold mb-8 text-center text-indigo-600 dark:text-indigo-400">Attention Formula</h3>
                <div className="flex justify-center items-center text-3xl sm:text-2xl font-serif dark:text-light py-8 bg-white dark:bg-dark rounded-2xl shadow-inner italic">
                  Attention(Q, K, V) = softmax( <div className="inline-flex flex-col items-center mx-2"><span className="border-b border-gray-400 px-2">QKᵀ</span><span className="text-lg font-sans">√dₖ</span></div> ) V
                </div>
              </div>

              <CodeBlock 
                title="multi_head_attention.py"
                code={`def scaled_dot_product_attention(Q, K, V, mask=None):
    # Calculate scores
    scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(d_k)
    
    if mask is not None:
        scores = scores.masked_fill(mask == 0, -1e9)
        
    # Apply softmax to get attention weights
    weights = torch.softmax(scores, dim=-1)
    
    # Return weighted values
    return torch.matmul(weights, V)`}
              />
            </section>

            {/* Variants Section */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-10 dark:text-light text-center">Evolution of Transformers</h2>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-8">
                {[
                  { name: "BERT", group: "Google", desc: "Bidirectional Encoder — pre-trained via MLM, revolutionized NLU." },
                  { name: "GPT-3", group: "OpenAI", desc: "175B params — demonstrated few-shot learning at scale." },
                  { name: "ViT", group: "Google", desc: "Vision Transformer — applied attention to image patches." },
                  { name: "DALL-E", group: "OpenAI", desc: "Connecting vision and language for image generation." }
                ].map((v, i) => (
                  <div key={i} className="p-8 bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-900/10 dark:to-dark border border-indigo-100 dark:border-indigo-800/30 rounded-3xl hover:border-indigo-400 transition-all group">
                    <div className="flex justify-between items-baseline mb-4">
                      <h4 className="text-2xl font-bold dark:text-light underline decoration-indigo-500/30 group-hover:decoration-indigo-500">{v.name}</h4>
                      <span className="text-xs font-mono text-gray-400">{v.group}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Comment Section */}
            <div className="mt-32 w-full pt-16 border-t border-gray-100 dark:border-gray-800">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold mb-4 dark:text-light">Discussion</h3>
                <p className="text-black dark:text-gray-400 font-semibold">🤔 What are your thoughts on Transformers? Share them below!</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800/50 p-10 sm:p-6 rounded-[2.5rem] mb-12">
                <button
                  className="w-full py-4 bg-dark dark:bg-light text-light dark:text-dark rounded-2xl font-bold hover:scale-[1.02] transition-transform mb-8"
                  onClick={() => setShowCommentBox(!showCommentBox)}
                >
                  {showCommentBox ? "Close Comment Box" : "Share Your Thoughts"}
                </button>

                {showCommentBox && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <textarea
                      className="w-full p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 outline-none"
                      rows={4}
                      placeholder="Write your insight..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                    <button
                      className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition"
                      onClick={handleSubmit}
                    >
                      Post Insight
                    </button>
                  </motion.div>
                )}

                <div className="space-y-4 mt-8">
                  {commentsList.map((c, i) => (
                    <div key={i} className="p-6 bg-white dark:bg-dark rounded-3xl shadow-sm border border-gray-50 dark:border-gray-800">
                      <p className="text-gray-900 dark:text-gray-100 mb-2">{c.text}</p>
                      <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">{c.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default TransformersBlog;






