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
            <div className="w-1/2 lg:w-full flex items-center justify-center relative lg:mt-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative w-full max-w-lg flex items-center justify-center"
              >
                {/* Floating Profile Image */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative z-10 w-full"
                >
                  <img 
                    src="/images/profile/portfilio_img.png" 
                    alt="Renu Deshmukh" 
                    className="w-full h-auto drop-shadow-[0_20px_50px_rgba(245,158,11,0.3)]"
                  />
                </motion.div>

                {/* Decorative Premium Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10">
                   <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-amber-200/30 to-orange-200/30 blur-[80px] rounded-full animate-pulse" />
                </div>
              </motion.div>
            </div>

          </div>
        </Layout>
      </main>
    </>
  );
}