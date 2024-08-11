"use client";
import React from "react";
import { motion } from "framer-motion";
import BlurIn from "@/components/magicui/blur-in";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="mt-60 space-y-5 px-5 text-center">
      <div className="flex flex-col items-center justify-center">
        <BlurIn
          word="chores shouldn't be"
          className="text-6xl text-foreground/85"
        />
        <BlurIn
          word="complicated"
          duration={2}
          className="w-fit animate-pulse text-6xl text-primary underline"
        />
      </div>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ duration: 1.5, delay: 2.5 }}
        className="text-base"
      >
        Chore chase allows your kids to pick and choose what chores they wish{" "}
        <br className="hidden md:inline" />
        to do, for a fake currency, which they can spend in different ways.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ duration: 0.5, delay: 3 }}
      >
        <Button size={"lg"} className="w-96" asChild>
          <Link href={"/register"}>Get Started</Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default Hero;
