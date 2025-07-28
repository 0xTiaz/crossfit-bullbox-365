import React, { useRef, useState } from "react";
import TextInput from "../ui/TextInput";
import TextArea from "../ui/TextArea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef(null);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const SERVICE_ID = "service_xltuyy7";
  const TEMPLATE_ID = "template_j3qgmnf";
  const PUBLIC_KEY = "UAK-QvV225MpjdfCi";

  const handleSubmit = async (e) => {
    e.preventDefault();

    await emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        toast({
          title: "Mensaje Enviado!",
          description:
            "Gracias por tu mensaje! Nos pondremos en contacto contigo.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() =>
        toast({
          title: "Error al enviar el mensaje",
          description: "Por favor, intenta nuevamente mas tarde",
        })
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-semibold mb-6 text-center text-orange-500">
        Tienes dudas o sugerencias?
      </h3>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-black/30 p-6 rounded-lg shadow-xl border border-orange-500"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <TextInput
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <TextInput
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <TextInput
          name="subject"
          placeholder="Asunto (opcional)"
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
        />
        <TextArea
          name="message"
          placeholder="Tu mensaje"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
        />
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 transition-all duration-200 text-white font-semibold py-3 px-6 rounded-lg"
        >
          {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
