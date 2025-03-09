import React from "react";
import { motion } from "framer-motion";
import JsIcon from "../../assets/icons/JsIcon";
import TsIcon from "../../assets/icons/TsIcon";
import MongoDBIcon from "../../assets/icons/MongoDBIcon";
import MySQLIcon from "../../assets/icons/MySQLIcon";
import NodeIcon from "../../assets/icons/NodejsIcon";
import ReactIcon from "../../assets/icons/ReactIcon";
import TailwindCSSIcon from "../../assets/icons/TailwindCSSIcon";
import SupabaseIcon from "../../assets/icons/SupabaseIcon";
import HtmlICon from "../../assets/icons/HtmlIcon";
import RailWayIcon from "../../assets/icons/RailWayIcon";
import ViteIcon from "../../assets/icons/ViteIcon";
import PostgreSQLIcon from "../../assets/icons/PostgreSQLIcon";

const icons = [
  JsIcon,
  TsIcon,
  ReactIcon,
  HtmlICon,
  NodeIcon,
  MongoDBIcon,
  MySQLIcon,
  PostgreSQLIcon,
  TailwindCSSIcon,
  SupabaseIcon,
  RailWayIcon,
  ViteIcon,
];

const getRandomPosition = () => ({
  x: Math.random() * 20 - 10, 
  y: Math.random() * 20 - 10, 
});

const AboutSkills = () => {
  return (
    <div className="relative w-full col-span-4 grid grid-cols-4 row-span-3 gap-10 bg-[#ffffff85] rounded-2xl p-10 overflow-hidden">
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          className="flex justify-center items-center"
          animate={{
            x: [0, getRandomPosition().x, 0],
            y: [0, getRandomPosition().y, 0],
          }}
          transition={{
            duration: 3, 
            repeat: Infinity, 
            repeatType: "mirror", 
            ease: "easeInOut",
          }}
        >
          <Icon className="md:h-15 md:w-15 h-10 w-10" />
        </motion.div>
      ))}
    </div>
  );
};

export default AboutSkills;
