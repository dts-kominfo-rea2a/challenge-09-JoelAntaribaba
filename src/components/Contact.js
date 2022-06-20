// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "../components/contact.css";

const Contact = ({ data }) => {
  return (
    <main className="main">
      <section>
        <div className="kiri">
          <img src={data.photo} alt={data.name} />
        </div>
        <div className="kanan">
          <p style={{ fontWeight: 600 }}>{data.name}</p>
          <p>{data.phone}</p>
          <p>{data.email}</p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
