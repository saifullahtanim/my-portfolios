import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import FadeRight from "@/animation/fade-right";

import heroProfileImg from "@/public/images/heroProfile.png";

export default function AboutHero() {
  return (
    <section className="flex min-h-fit w-full items-center overflow-hidden">
      <div
        className="
        mx-auto
        flex
        max-w-7xl
        flex-col
        items-center
        gap-8
        px-4
        pb-1 pt-0

        sm:px-8
        md:px-10
        lg:flex-row
        lg:gap-12
        lg:pb-4 lg:pt-2
        "
      >
        <div className="flex w-full justify-center lg:w-1/2">
          <AnimatePresence>
            <FadeUp key="hero-image" duration={0.5}>
              <Image
                src={heroProfileImg}
                alt="Saifulla Tanim portrait"
                priority
                placeholder="blur"
                quality={100}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="
                  h-auto
                  w-[85%]
                  max-w-md
                  sm:w-[75%]
                  md:w-[65%]
                  lg:w-full
                "
              />
            </FadeUp>
          </AnimatePresence>
        </div>

        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <AnimatePresence>
            <FadeUp duration={0.5}>
              <h1
                className="
                text-3xl
                font-bold
                text-accent
                sm:text-5xl
                md:text-6xl
                xl:text-7xl
              "
              >
                Hi, I&apos;m Saifulla Tanim
              </h1>
            </FadeUp>

            <FadeUp duration={0.5} delay={0.2}>
              <p
                className="
                mt-5
                text-sm
                font-medium
                text-zinc-900
                dark:text-zinc-300
                sm:text-base
                md:text-lg
              "
              >
                I turn vision into reality with clean and efficient code. As a
                Frontend Developer, I focus on building responsive,
                user-friendly, and visually polished web applications.
              </p>
            </FadeUp>

            <FadeUp duration={0.5} delay={0.4}>
              <p
                className="
                mt-5
                text-sm
                font-medium
                text-zinc-900
                dark:text-zinc-300
                sm:text-base
                md:text-lg
              "
              >
                Explore my latest{" "}
                <Link
                  href="/projects"
                  className="text-accent underline underline-offset-4"
                >
                  projects
                </Link>{" "}
                showcasing my expertise in modern frontend development.
              </p>
            </FadeUp>

            <FadeRight
              duration={0.5}
              delay={0.6}
              className="
                mt-6
                flex
                items-center
                justify-center
                gap-2
                lg:justify-end
              "
            >
              <div className="relative flex w-12 overflow-hidden rounded-md">
                <Image
                  className="h-full w-full bg-cover bg-no-repeat"
                  src="https://flagcdn.com/bd.svg"
                  alt="Bangladesh Flag"
                  width={15}
                  height={15}
                />
              </div>

              <span className="text-sm font-semibold text-accent sm:text-base">
                Dhaka, Bangladesh
              </span>
            </FadeRight>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
