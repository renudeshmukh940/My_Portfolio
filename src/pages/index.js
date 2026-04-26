import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import { LinkArrow } from "@/components/Icons";
import AnimatedText from "@/components/AnimatedText";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const floatingAnim = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Renu Deshmukh | Data Visionary & AI Enthusiast</title>
        <meta name="description" content="Portfolio of Renu Deshmukh, Data Analyst and AI Engineer." />
      </Head>

      <TransitionEffect />

      <main className="relative min-h-screen bg-[#fdfaff] overflow-hidden selection:bg-amber-200">
        {/* ✨ DYNAMIC BACKGROUND LAYERS */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-10%] left-[-5%] w-[700px] h-[700px] bg-amber-200/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] bg-orange-200/20 rounded-full blur-[120px] animate-pulse" />
          
          {/* Subtle Mesh Grid */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <Layout className="pt-12 pb-32 xl:pt-16 md:pt-12">
          <div className="flex flex-row lg:flex-col items-center justify-between gap-20 lg:gap-16">
            
            {/* LEFT SIDE: CONTENT */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="w-1/2 lg:w-full flex flex-col items-start lg:items-center lg:text-center"
            >

              {/* Heading */}
              <div className="relative">
                <AnimatedText 
                  text="Decoding Data."
                  className="!text-6xl xl:!text-5xl lg:!text-4xl md:!text-3xl !text-left lg:!text-center !font-black !p-0"
                />
                <motion.div variants={fadeUp}>
                  <h1 className="text-6xl xl:text-5xl lg:text-4xl md:text-3xl font-black leading-tight tracking-tighter">
                    <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-amber-700 bg-clip-text text-transparent">
                      Driving Decisions.
                    </span>
                  </h1>
                </motion.div>
                <AnimatedText 
                  text="Delivering Impact."
                  className="!text-6xl xl:!text-5xl lg:!text-4xl md:!text-3xl !text-left lg:!text-center !font-black !p-0"
                />
              </div>

              {/* Description */}
              <motion.p
                variants={fadeUp}
                className="mt-6 text-lg xl:text-base md:text-sm text-slate-600 leading-relaxed max-w-xl font-medium"
              >
                Hi, I’m{" "}
                <span className="font-black text-slate-900 relative inline-block">
                  Renu Deshmukh
                  <span className="absolute left-0 bottom-1 w-full h-2 bg-amber-400/30 -z-10" />
                </span>{" "}
                — a Data Analyst evolving into an <span className="text-orange-600 font-bold">AI Engineer</span>. I architect systems that transform raw data into intelligent, scalable solutions.
              </motion.p>

              {/* CTA SECTION */}
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/RenuResume.pdf" target='_blank'
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg 
                  text-lg font-semibold hover:bg-light hover:text-dark border-2 border-soild 
                  border-transparent hover:border-dark lg:items md:p-2 md:px-4 md:text-base'
                  download={true} >Resume<LinkArrow className={'w-6 ml-1'} />
                </Link>
                <Link href="/contacts"
                  className='ml-4 text-lg font-medium capitalize text-dark underline md:text-base'>
                  Contact ME</Link>

              </div>
              
            </motion.div>

            {/* RIGHT SIDE: VISUALS */}
            <div className="w-1/2 lg:w-full relative h-[600px] xl:h-[500px] md:h-[400px] flex items-center justify-center lg:mt-8">
              
              {/* Central Neural Core */}
              <motion.div
                variants={floatingAnim}
                animate="animate"
                className="relative w-[320px] h-[320px] xl:w-[260px] xl:h-[260px] md:w-[200px] md:h-[200px] rounded-[3.5rem] bg-white/40 backdrop-blur-3xl border border-white/50 shadow-[0_30px_60px_rgba(245,158,11,0.15)] flex items-center justify-center group overflow-hidden"
              >
                {/* Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-orange-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 xl:w-16 xl:h-16 rounded-full bg-gradient-to-tr from-amber-500 to-orange-600 p-0.5 animate-spin-slow">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                       <span className="text-2xl xl:text-xl">📊</span>
                    </div>
                  </div>
                  <span className="mt-6 text-2xl xl:text-xl font-black text-slate-800 tracking-tighter">
                    DATA + AI
                  </span>
                  <div className="mt-2 h-1 w-12 bg-amber-500 rounded-full" />
                </div>

                {/* Decorative particles */}
                <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-amber-400/40" />
                <div className="absolute bottom-20 right-12 w-3 h-3 rounded-full bg-orange-400/40" />
              </motion.div>

              {/* Floating Data Nodes */}
              {[
                { text: "100K+ Insights", pos: "top-10 left-0 xl:left-4", icon: "📈", delay: 0 },
                { text: "SQL Master", pos: "top-40 -left-12 xl:-left-4 md:left-0", icon: "🗄️", delay: 1 },
                { text: "Predictive AI", pos: "bottom-20 -right-12 xl:-right-4 md:right-0", icon: "🧠", delay: 2 },
                { text: "Power BI", pos: "bottom-0 right-10 xl:right-16", icon: "🎨", delay: 3 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: [0, -20, 0],
                  }}
                  transition={{
                    y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: item.delay },
                    opacity: { duration: 1, delay: i * 0.2 },
                    scale: { duration: 1, delay: i * 0.2 }
                  }}
                  className={`absolute ${item.pos} px-6 py-4 xl:px-4 xl:py-3 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-100 shadow-xl flex items-center gap-3 z-20 hover:scale-110 hover:shadow-amber-500/10 transition-all cursor-default group`}
                >
                  <span className="text-xl xl:text-base group-hover:rotate-12 transition-transform">{item.icon}</span>
                  <span className="text-sm xl:text-xs font-black text-slate-700 tracking-tight whitespace-nowrap">{item.text}</span>
                </motion.div>
              ))}

              {/* Orbital Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-[450px] h-[450px] xl:w-[350px] xl:h-[350px] md:w-[280px] md:h-[280px] border border-amber-200/40 rounded-[4rem] -z-10"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-[550px] h-[550px] xl:w-[450px] xl:h-[450px] md:w-[350px] md:h-[350px] border border-slate-200/30 rounded-[5rem] -z-10"
              />
            </div>

          </div>
        </Layout>
      </main>
    </>
  );
}