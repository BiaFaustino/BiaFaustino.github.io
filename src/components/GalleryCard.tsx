import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GalleryCardProps {
  src: string | StaticImageData;
  alt: string;
  title?: string;
  className?: string;
}

export function GalleryCard({ src, alt, title, className }: GalleryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "relative overflow-hidden group rounded-xl transition-all duration-300 w-full bg-transparent",
        className
      )}
    >
      <motion.div
        whileHover={{
          scale: 1.03,
          boxShadow: "0 6px 40px rgba(0, 0, 0, 0.2)",
        }}
        transition={{ duration: 0.4 }}
        className="relative w-full rounded-2xl overflow-hidden cursor-pointer"
      >
        <Image
          src={src}
          alt={alt}
          layout="responsive"
          width={800}
          height={600}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 border-4 border-transparent group-hover:border-accent transition-colors duration-400 rounded-2xl pointer-events-none" />

        {title && (
          <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white font-bold text-xl tracking-wide font-heading">
              {title}
            </h3>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
