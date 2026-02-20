import React, { useState } from 'react';
import Swal from "sweetalert2";
import * as api from '../middleware/apis'


const Contact = ({ theme }) => {
  const [prevEmail, setPrevEmail] = useState("");
  const [isEmailValidated, setIsEmailValidated] = useState(null);
  const [isMsgSendLoading, setIsMsgSendLoading] = useState(null);
  const [sentOtp, setSentOtp] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });


  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const contactInput = async (e) => {
    let sentOtp2;
    const { name, value } = e.target;
    // alert(name, value);

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'email' && value) {
      if (isEmailValidated) return;
      if (!isValidEmail(value)) {
        Swal.fire({
          toast: true,
          position: "center",
          icon: "error",
          title: "Enter a valid email address",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
        return;
      }

      Swal.fire({
        text: "OTP Verification",
        input: "text",
        inputPlaceholder: "XXXXXX",
        inputAttributes: {
          maxlength: 6,
          inputmode: "numeric",
          autocomplete: "one-time-code",
        },
        confirmButtonText: "OK",
        width: 300,
        customClass: {
          input: "otp-input-small",
          title: "otp-title-small",
          confirmButton: "otp-btn-small",
        },
        preConfirm: (otp) => {
          if (sentOtp2 === otp || sentOtp === otp) {
            setIsEmailValidated(true);
          } else {
            Swal.showValidationMessage("Invalid OTP");
            setIsEmailValidated(false);
            return false;
          }
          return otp;
        },
      });


      if (value !== prevEmail) { // !sentOtp && 
        setPrevEmail(value); // update for next blur
        const params = {
          "emailTo": value,
          "platformName": "Megha's Portfolio",
          "firstName": (formData?.name)?.split(" ")[0] || "Dear",
          "cc": "",
          "bcc": ""
        };

        const response = await api.sendMailOtp(params)

        const otpData = JSON.parse(atob(response.data));
        setSentOtp(otpData?.otp);
        sentOtp2 = otpData?.otp;
        // console.log("OTP: ", otpData?.otp);
      }
    }
  };


  const sendMessage = async (e) => {
    e.preventDefault(); // stop page reload

    try {
      if (!isEmailValidated) {
        if (!isValidEmail(formData?.email)) {
          Swal.fire({
            toast: true,
            position: "center",
            icon: "error",
            title: "Enter a valid email address",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
          return;
        }

        Swal.fire({
          text: "OTP Verification",
          input: "text",
          inputPlaceholder: "XXXXXX",
          inputAttributes: {
            maxlength: 6,
            inputmode: "numeric",
            autocomplete: "one-time-code",
          },
          confirmButtonText: "OK",
          width: 300,
          customClass: {
            input: "otp-input-small",
            title: "otp-title-small",
            confirmButton: "otp-btn-small",
          },
          preConfirm: async (otp) => {
            if (sentOtp === otp) {
              setIsEmailValidated(true);
              setIsMsgSendLoading(true);
              const { name, email, subject, message } = formData;
              const newMessage = message + "\n\nName: " + name + "\nFrom: " + email;
              const params = {
                emailTo: "meghadeshmukh1429@gmail.com",
                subject: subject,
                message: newMessage
              };

              const data = await api.sendMailService(params)

              if (data?.Status === 200) {
                // alert("Message sent!");
                Swal.fire({
                  toast: true,
                  position: "center",
                  icon: "success",
                  title: "Message sent!",
                  showConfirmButton: false,
                  timer: 2000,
                  timerProgressBar: true,
                });
                setTimeout(() => {
                  window.location.reload();
                }, 2500);
              } else {
                // alert("Send failed!");
                Swal.fire({
                  toast: true,
                  position: "center",
                  icon: "error",
                  title: "Message Send failed!",
                  showConfirmButton: false,
                  timer: 2000,
                  timerProgressBar: true,
                });
              }
              setIsMsgSendLoading(false);
              // console.log("Success:", data);

            } else {
              Swal.showValidationMessage("Invalid OTP");
              setIsEmailValidated(false);
              return false;
            }
            return otp;
          },
        });
        return;
      }

      setIsMsgSendLoading(true);
      const { name, email, subject, message } = formData;
      const newMessage = message + "\n\nName: " + name + "\nFrom: " + email;
      const params = {
        emailTo: "meghadeshmukh1429@gmail.com",
        subject: subject,
        message: newMessage
      };

      const data = await api.sendMailService(params)

      if (data?.Status === 200) {
        // alert("Message sent!");
        Swal.fire({
          toast: true,
          position: "center",
          icon: "success",
          title: "Message sent!",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
        setTimeout(() => {
          window.location.reload();
        }, 2500);
      } else {
        // alert("Send failed!");
        Swal.fire({
          toast: true,
          position: "center",
          icon: "error",
          title: "Message Send failed!",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
      }
      setIsMsgSendLoading(false);
      // console.log("Success:", data);
    } catch (error) {
      alert("Somthing went wrong!");
      console.error("Error:", error);
    }
  };


  return (
    <section id='contact' style={{ padding: '70px 16px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div className="fadeUp" style={{ textAlign: 'center', marginBottom: 40 }}>
          <p style={{ color: theme.accent2, fontSize: 12, fontWeight: 600, marginBottom: 6, textTransform: 'uppercase', letterSpacing: 2 }}>Get In Touch</p>
          <h2 style={{ fontSize: 'clamp(22px,5vw,32px)', fontWeight: 700, color: theme.text }}>Contact Me</h2>
        </div>
        <div className="fadeUp" style={{ padding: 28, borderRadius: 20, background: theme.card, border: `1px solid ${theme.cardBorder}`, backdropFilter: 'blur(10px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 30 }}>
            <div>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: theme.text, marginBottom: 12 }}>Let's Connect</h3>
              <p style={{ fontSize: 14, color: theme.textMuted, marginBottom: 20, lineHeight: 1.7 }}>Open to new opportunities and collaborations. Feel free to reach out!</p>
              {[['📧', 'Email', 'meghadeshmukh1429@gmail.com', 'mailto:meghadeshmukh1429@gmail.com'], ['📍', 'Location', 'Gurgaon, India']].map(([ic, l, v, link], i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 14, marginBottom: 10, borderRadius: 12, background: theme.inputBg, border: `1px solid ${theme.cardBorder}` }}>
                  <span style={{ fontSize: 22 }}>{ic}</span>
                  <div><p style={{ fontSize: 12, color: theme.textMuted }}>{l}</p><a href={link} style={{ fontSize: 14, color: theme.text, fontWeight: 500, textDecoration: 'none', }}>{v}</a></div>
                </div>
              ))}
              {/* <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
              {['LinkedIn', 'GitHub'].map((s, i) => <a key={i} style={{ padding: '10px 18px', borderRadius: 8, background: theme.accent2, color: '#fff', fontSize: 13, fontWeight: 600, textDecoration: 'none', cursor: 'pointer' }}>{s}</a>)}
            </div> */}
            </div>
            <form onSubmit={sendMessage}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <input name="name" onChange={contactInput} required placeholder="Your Name" style={{ padding: 14, borderRadius: 10, background: theme.inputBg, border: `1px solid ${theme.cardBorder}`, color: theme.text, fontSize: 14, outline: 'none' }} />
                {/* <input name="email" onBlur={contactInput} required placeholder="Your Email" type="email" style={{ padding: 14, borderRadius: 10, background: theme.inputBg, border: `1px solid ${theme.cardBorder}`, color: theme.text, fontSize: 14, outline: 'none' }} /> */}

                <div style={{ position: "relative" }}>
                  <input
                    name="email"
                    type="email"
                    disabled={isEmailValidated}
                    required
                    placeholder="Your Email"
                    // onChange={emailChange}
                    onBlur={contactInput}
                    style={{
                      padding: "14px 40px 14px 14px", // space for icon INSIDE
                      borderRadius: 10,
                      background: theme.inputBg,
                      border: `1px solid ${isEmailValidated === false ? "#ff4d4f" : theme.cardBorder}`,
                      color: theme.text,
                      fontSize: 14,
                      outline: "none",
                      width: "100%",          // ensures no size shift
                      boxSizing: "border-box" // key detail
                    }}
                  />

                  {isEmailValidated !== null && (
                    <span
                      style={{
                        position: "absolute",
                        right: 14,
                        top: "50%",
                        transform: "translateY(-50%)",
                        fontSize: 15,
                        fontWeight: "bold",
                        color: isEmailValidated ? "#52c41a" : "#ff4d4f",
                        pointerEvents: "none", // icon never blocks input
                        userSelect: "none",
                        transition: "opacity 0.2s ease"
                      }}
                    >
                      {isEmailValidated ? "✔" : "✖"}
                    </span>
                  )}
                </div>
                <input name="subject" onChange={contactInput} required placeholder="Subject" style={{ padding: 14, borderRadius: 10, background: theme.inputBg, border: `1px solid ${theme.cardBorder}`, color: theme.text, fontSize: 14, outline: 'none' }} />
                <textarea name="message" onChange={contactInput} required placeholder="Your Message" rows={4} style={{ padding: 14, borderRadius: 10, background: theme.inputBg, border: `1px solid ${theme.cardBorder}`, color: theme.text, fontSize: 14, resize: 'none', outline: 'none' }} />
                <button type="submit" style={{ padding: 14, borderRadius: 10, border: 'none', background: theme.accent2, color: '#fff', fontWeight: 600, cursor: 'pointer', fontSize: 15 }}>{isMsgSendLoading ? "Sending..." : "Send Message ✨"}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;