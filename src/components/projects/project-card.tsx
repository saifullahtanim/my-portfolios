import Image from "next/image";

import { motion } from "framer-motion";

import Corosel from "@/components/utility/corosel";
import { GithubIcon } from "@/components/icons";

export interface ProjectCardProps {
  name: string;
  favicon: string;
  imageUrl: string[];
  description: string;
  sourceCodeHref: string;
  liveWebsiteHref?: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        type: "spring",
        duration: 0.45,
      }}
      className="hover:shadow-accent/15 w-full overflow-hidden rounded-xl border border-accent/20 bg-background shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:bg-zinc-800"
    >
      <Corosel images={props.imageUrl} aspectRatio={2.1} />
      <div className="p-4 text-foreground sm:p-5">
        <div className="flex items-center gap-3">
          <span className="relative h-6 w-6 overflow-hidden rounded">
            <Image src={props.favicon} alt="logo" fill />
          </span>
          <h3 className="text-base font-semibold tracking-tight md:text-lg">
            {props.name}
          </h3>
        </div>
        <p className="mt-3 line-clamp-3 text-sm text-foreground/80">
          {props.description}
        </p>
        <div className="mt-5 flex items-center justify-end gap-3">
          <a
            href={props.sourceCodeHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-accent/25 px-4 py-2 text-xs font-medium transition-colors hover:bg-accent hover:text-background md:text-sm"
          >
            <GithubIcon className="h-4 w-4" />
            Source
          </a>
        </div>
      </div>
    </motion.div>
  );
}
