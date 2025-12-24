"use client";
import { motion } from "framer-motion";

export default function Brands() {
  const Brands = [
    {
      name: "Hubr",
      description: "Happiness Under Budget Pvt Ltd",
      logo: "/hubr.png",
    },
    {
      name: "OneWholesale",
      description: "Empowering Rural India with Smart Agri Solutions",
      logo: "/onewholesale.png",
    },
    {
      name: "Brand 3",
      description: "Your Third Brand Here",
      logo: "/brand3.png",
    },
  ];

  return (
    <section
      id="brands"
      className="bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] bg-cover bg-no-repeat bg-center w-full py-24 px-4 md:px-20"
    >
      <div className="text-center mb-16">
        <motion.p
          className="text-xl font-medium text-slate-100/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Trusted Brands
        </motion.p>
        <motion.h2
          className="text-4xl md:text-5xl font-semibold text-white mt-2 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Collaborating with innovative partners
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {brands.map((brand, index) => (
          <motion.div
            key={brand.name}
            className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(0,0,0,0.3)" }}
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-24 h-24 object-contain mb-4"
            />
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
              {brand.name}
            </h3>
            <p className="text-sm md:text-base text-white/80">{brand.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
