import React from 'react';
import { motion } from 'framer-motion';

function About_us() {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <section>
        {/* Container */}
        <div className="bg-black text-white mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Title */}
          <motion.h2
            className="mb-8 text-3xl font-bold md:text-5xl lg:mb-14"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            Meet Flowspark
          </motion.h2>
          <motion.p
            className="mb-8 max-w-lg text-sm text-gray-400 sm:text-base lg:mb-24"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis viverra
            ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </motion.p>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Image */}
            <motion.img
              src="public/Aboutus.jpeg"
              alt=""
              className="inline-block h-full w-full rounded-2xl object-cover"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
            />
            {/* Mission Section */}
            <motion.div
              className="flex flex-col gap-5 rounded-2xl border border-solid border-white p-10 sm:p-20"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.7 }}
            >
              <h2 className="text-3xl font-bold md:text-5xl">Our Mission</h2>
              <p className="text-sm text-gray-400 sm:text-base">
                Aliquet risus feugiat in ante metus. Arcu dui vivamus arcu felis
                bibendum ut. Vestibulum lorem sed risus ultricies tristique nulla.
                Vitae et leo duis ut diam quam. Bibendum arcu vitae elementum
                curabitur vitae nunc. Dictumst vestibulum rhoncus est
                pellentesque. Lectus proin nibh nisl condimentum id. Ullamcorper
                dignissim cras tincidunt lobortis feugiat vivamus.
                <br />
                <br />
                Massa id neque aliquam vestibulum morbi blandit. Nulla
                pellentesque dignissim enim sit amet venenatis.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About_us;
