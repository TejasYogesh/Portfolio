import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export const Graphic = () => {
    const images = [
        { src: "ill3.png", alt: "Illustrator" },
        { src: "photoshop.png", alt: "Photoshop" },
        { src: "ae.png", alt: "After Effects" },
        { src: "pr.webp", alt: "Premiere" },
        { src: "fig2.webp", alt: "Figma" },
        { src: "blender2.png", alt: "Blender" },
        { src: "davinci.png", alt: "daVinci" },
        { src: "canva.png", alt: "Canva" },
        { src: "ppt2.webp" , alt: "Powerpoint"}
    ];

    const gridRef = useRef(null);
    const isInView = useInView(gridRef, { once: true, margin: '-50px' });

    return (
        <motion.div
            ref={gridRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
        >
            <div className="grid grid-cols-9 gap-1 p-4">
                {images.map((img, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.12, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)" }}
                        className="flex items-center justify-center w-24 h-24 bg-black rounded shadow-lg transition-all duration-300 hover:scale-180"
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="max-w-full max-h-full object-contain"
                            style={{ width: '100%', height: '100%' }}
                        />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}