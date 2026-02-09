import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Loader2Icon } from "lucide-react";

import CustomInput from "@/components/utility/custom-input";
import CustomTextarea from "@/components/utility/custom-textarea";
import { type FormiKInputFieldProps } from "@/utility/types";

export const mailValidationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email required"),
  name: Yup.string().required("Name required"),
  subject: Yup.string().required("Subject required"),
  message: Yup.string().required("Message required"),
});

export type ContactFormValues = Yup.InferType<typeof mailValidationSchema>;

export type FormFields = {
  name: keyof ContactFormValues;
  label: string;
  type: "text";
  fieldType: "text" | "textarea";
  placeholder: string;
};

const FormFieldsData: FormFields[] = [
  {
    name: "email",
    label: "Email",
    type: "text",
    fieldType: "text",
    placeholder: "Email",
  },
  {
    name: "name",
    label: "Name",
    type: "text",
    fieldType: "text",
    placeholder: "Name",
  },
  {
    name: "subject",
    label: "Subject",
    type: "text",
    fieldType: "text",
    placeholder: "Subject",
  },
  {
    name: "message",
    label: "Message",
    type: "text",
    fieldType: "textarea",
    placeholder: "Message",
  },
];

const initialFormValues: ContactFormValues = {
  email: "",
  name: "",
  message: "",
  subject: "",
};

export interface ContactFormProps {
  isSubmitting: boolean;
  // eslint-disable-next-line
  handleSubmit: (values: ContactFormValues) => Promise<void>;
}

export default function ContactForm({
  isSubmitting,
  handleSubmit,
}: ContactFormProps) {
  return (
    <>
      <Formik
        initialValues={initialFormValues}
        validationSchema={mailValidationSchema}
        onSubmit={handleSubmit}
        validateOnChange
      >
        <Form className="mt-4 flex flex-col gap-3.5">
          {FormFieldsData.map((form) => (
            <div key={form.name} className="flex flex-col gap-1">
              <div>
                <label
                  htmlFor={form.name}
                  className="inline text-[11px] font-semibold text-white/90"
                >
                  {form.label}
                </label>
              </div>
              <div className="relative">
                <Field name={form.name}>
                  {({ field, meta }: FormiKInputFieldProps<string>) =>
                    form.fieldType === "text" ? (
                      <>
                        <CustomInput
                          id={form.name}
                          {...field}
                          type={form.type}
                          placeholder={form.placeholder}
                          autoComplete="off"
                          className="rounded-xl bg-white/95 px-4 py-2 text-sm text-accent shadow-sm ring-1 ring-white/30 placeholder:text-zinc-400 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-accent/30"
                        />
                        {Boolean(meta.touched && meta.error) && (
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-red-400 md:text-sm">
                            {meta.error}
                          </span>
                        )}
                      </>
                    ) : (
                      <>
                        <CustomTextarea
                          id={form.name}
                          {...field}
                          placeholder={form.placeholder}
                          rows={2}
                          className="rounded-xl bg-white/95 px-4 py-2 text-sm text-accent shadow-sm ring-1 ring-white/30 placeholder:text-zinc-400 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-accent/30"
                        />
                        {Boolean(meta.touched && meta.error) && (
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-red-400 md:text-sm">
                            {meta.error}
                          </span>
                        )}
                      </>
                    )
                  }
                </Field>
              </div>
            </div>
          ))}
          <button
            aria-label="send email"
            type="submit"
            className="mt-2 w-full rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-accent shadow-lg shadow-black/20 transition-transform duration-150 hover:scale-[1.015] hover:bg-white/95 disabled:cursor-not-allowed disabled:opacity-80"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="inline-flex items-center space-x-2">
                <Loader2Icon className="animate-spin" size={16} />
                <span>Sending</span>
              </div>
            ) : (
              <span>Submit</span>
            )}
          </button>
        </Form>
      </Formik>
    </>
  );
}
