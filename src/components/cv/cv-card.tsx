import { FileText, Eye, Download } from "lucide-react";

export default function CVCard() {
  return (
    <section className="mb-6 flex w-full justify-center px-4 sm:px-0">

      <div className="w-full max-w-5xl text-center">
        {/* Section Heading */}
        <h2 className="mb-6 text-2xl font-bold text-teal-600 sm:text-3xl md:text-4xl">
          Curriculum Vitae
        </h2>

        {/* CV Box */}
        <div
          className="
            rounded-3xl
            border border-dashed border-teal-400
            bg-teal-50/60
            px-5 py-6
            sm:px-8 sm:py-8
          "
        >
          {/* Icon */}
          <div className="mb-4 flex justify-center">
            <div className="rounded-xl bg-teal-100 p-3">
              <FileText className="h-6 w-6 sm:h-7 sm:w-7 text-teal-600" />
            </div>
          </div>

          {/* Title */}
          <h3 className="mb-2 text-lg font-semibold text-teal-900 sm:text-xl md:text-2xl">
            Download My CV
          </h3>

          {/* Subtitle */}
          <p className="mb-6 text-sm text-teal-700/80 sm:text-base">
            Get the latest version of my academic and professional curriculum
            vitae
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            {/* View CV */}
            <a
              href="/cv/Saifulla-Tanim-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex w-full sm:w-auto
                items-center justify-center gap-2
                rounded-full border
                border-teal-300
                bg-white
                px-5 py-2.5
                text-sm
                font-medium
                text-teal-800
                transition hover:bg-teal-100
              "
            >
              <Eye size={16} />
              View CV
            </a>

            {/* Download CV */}
            <a
              href="/cv/Saifulla-Tanim-CV.pdf"
              download
              className="
                flex w-full sm:w-auto
                items-center justify-center gap-2
                rounded-full
                bg-teal-600
                px-5 py-2.5
                text-sm
                font-medium
                text-white
                transition hover:bg-teal-700
              "
            >
              <Download size={16} />
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
