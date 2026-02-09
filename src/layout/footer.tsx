import ContactButton from "@/components/contact-form/contact-button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-transparent px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-accent/20 bg-accent px-8 py-20 text-center text-white shadow-xl sm:px-12 sm:py-17">
          <div className="flex justify-center">
            <span className="inline-flex items-center rounded-full bg-white px-16 py-5 text-base font-bold uppercase tracking-[0.3em] text-accent shadow-sm">
              Contact me
            </span>
          </div>
          <h2 className="mt-8 text-3xl font-bold leading-snug sm:text-4xl lg:text-5xl">
            Want to hire me for your next project ?
          </h2>
          <div className="mt-10 flex justify-center">
            <ContactButton />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-[1500px] flex-col items-center justify-between gap-6 border-t border-accent/20 pt-6 text-center md:flex-row">
        <p className="text-sm text-foreground/70">
          ©2026 Saifulla Tanim. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/saifullahtanim"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 transition hover:bg-accent/10"
          >
            <GithubIcon className="h-6 w-6 text-accent hover:text-accent-foreground" />
          </a>
          <a
            href="https://www.facebook.com/iam.saifullatanim02"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 transition hover:bg-accent/10"
          >
            <FaFacebookF className="h-6 w-6 text-accent hover:text-accent-foreground" />
          </a>
          <a
            href="https://www.linkedin.com/in/saifullatanim/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 transition hover:bg-accent/10"
          >
            <LinkedinIcon className="h-6 w-6 text-accent hover:text-accent-foreground" />
          </a>
          <a
            href="https://wa.me/8801756095371"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 transition hover:bg-accent/10"
          >
            <FaWhatsapp className="h-7 w-7 text-accent transition-transform hover:text-accent-foreground hover:scale-105" />
          </a>
        </div>
      </div>
    </footer>
  );
}
