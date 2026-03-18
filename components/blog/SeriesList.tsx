"use client";

import { motion } from "framer-motion";
import type { BlogSeries } from "@/lib/blog-data";
import SeriesCard from "@/components/blog/SeriesCard";

interface SeriesListProps {
  series: Array<BlogSeries & { postCount: number }>;
}

export default function SeriesList({ series }: SeriesListProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {series.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, delay: index * 0.06 }}
        >
          <SeriesCard {...item} postCount={item.postCount} />
        </motion.div>
      ))}
    </div>
  );
}
