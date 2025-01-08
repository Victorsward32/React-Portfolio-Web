import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const ContactForm = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const serviceKey = "service_mpitabk";
  const templateId = "template_f9y2p9c";
  const publicKey = "7oiFYDmaoMMqQPsSR";

  console.log("serviceKey", serviceKey, "templateId", templateId, "publicKey", publicKey);

  const sendEmail = async (formData) => {
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone_number: formData.phone,
        service_type: formData.service,
        timeline: formData.timeline,
        message: `
Project Details:
${formData.details}

Timeline: ${formData.timeline}
Phone: ${formData.phone}
Service Requested: ${formData.service}
`,
      };

      await emailjs.send(serviceKey, templateId, templateParams, publicKey);
      
      // Show success toast notification
      toast.success("Message sent successfully! We'll get back to you soon.");
      reset(); // Clear form after successful submission
    } catch (error) {
      console.log("FAILED...", error.text);
      // Show error toast notification
      toast.error("Something went wrong. Please try again later.");
    }
  };

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    sendEmail(data);
  });

  return (
    <div style={styles.container}>
      <p style={styles.subtitle}>
        Cultivating Connections: Reach Out And Connect With Me
      </p>

      <form ref={form} onSubmit={onSubmit} style={styles.form}>
        <div style={styles.column}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            style={styles.input}
            {...register("name", { required: "Name is required." })}
          />
          {errors.name && <span style={styles.error}>{errors.name.message}</span>}

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            style={styles.input}
            {...register("phone", {
              required: "Phone number is required.",
              pattern: {
                value: /^\d{10}$/,
                message: "Please enter a valid phone number (10 digits).",
              },
            })}
          />
          {errors.phone && <span style={styles.error}>{errors.phone.message}</span>}
        </div>

        <div style={styles.column}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            style={styles.input}
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address.",
              },
            })}
          />
          {errors.email && <span style={styles.error}>{errors.email.message}</span>}

          <select
            name="service"
            style={styles.input}
            {...register("service", { required: "Please select a service." })}
          >
            <option value="">Service Of Interest</option>
            <option value="web">Web Development</option>
            <option value="app">App Development</option>
            <option value="backend">Backend Services</option>
            <option value="cloud">Cloud Services</option>
          </select>
          {errors.service && <span style={styles.error}>{errors.service.message}</span>}
        </div>

        <div style={styles.column}>
          <input
            type="text"
            name="timeline"
            placeholder="Timeline"
            style={styles.input}
            {...register("timeline", { required: "Timeline is required." })}
          />
          {errors.timeline && <span style={styles.error}>{errors.timeline.message}</span>}
        </div>

        <textarea
          name="details"
          placeholder="Project Details..."
          style={styles.textarea}
          {...register("details", { required: "Project details are required." })}
        />
        {errors.details && <span style={styles.error}>{errors.details.message}</span>}

        <button type="submit" style={styles.button}>
          Send
        </button>
      </form>

      {/* ToastContainer component to display the toasts */}
      <ToastContainer />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "2rem",
    backgroundColor: "#1a1a1a",
    color: "white",
  },
  subtitle: {
    textAlign: "center",
    color: "#888",
    marginBottom: "32px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    width: "100%",
  },
  input: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#2a2a2a",
    border: "1px solid transparent",
    borderRadius: "4px",
    color: "white",
    fontSize: "16px",
  },
  textarea: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#2a2a2a",
    border: "1px solid transparent",
    borderRadius: "4px",
    color: "white",
    fontSize: "16px",
    minHeight: "120px",
    resize: "vertical",
  },
  button: {
    alignSelf: "flex-end",
    padding: "8px 24px",
    backgroundColor: "#2a2a2a",
    border: "none",
    borderRadius: "4px",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
  },
  error: {
    color: "red",
    fontSize: "12px",
  },
};

export default ContactForm;
