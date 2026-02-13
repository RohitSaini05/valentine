"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";

export const Spotify = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ ease: "easeInOut", duration: 6.75 }}
    className="absolute bottom-10"
  >
    <Link
      href="/spotify"
      className="flex items-center gap-2 rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600"
    >
      <FaSpotify className="text-xl" />
      <span>Click here</span>
    </Link>
  </motion.div>
);
