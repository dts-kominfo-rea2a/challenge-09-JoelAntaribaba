// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "../components/contact.css";

const Contact = ({ name, phone, email, photo }) => {
  return (
    <main className="main">
      <section>
        <div className="kiri">
          <img src={photo[0]} alt="monica" />
        </div>
        <div className="kanan">
          <p style={{ fontWeight: 600 }}>{name[0]}</p>
          <p>{phone[0]}</p>
          <p>{email[0]}</p>
        </div>
      </section>

      <section>
        <div className="kiri">
          <img src={photo[1]} alt="devi" />
        </div>
        <div className="kanan">
          <p style={{ fontWeight: 600 }}>{name[1]}</p>
          <p>{phone[1]}</p>
          <p>{email[1]}</p>
        </div>
      </section>

      <section>
        <div className="kiri">
          <img src={photo[2]} alt="withered" />
        </div>
        <div className="kanan">
          <p style={{ fontWeight: 600 }}>{name[2]}</p>
          <p>{phone[2]}</p>
          <p>{email[2]}</p>
        </div>
      </section>

      <section>
        <div className="kiri">
          <img src={photo[3]} alt="flowers" />
        </div>
        <div className="kanan">
          <p style={{ fontWeight: 600 }}>{name[3]}</p>
          <p>{phone[3]}</p>
          <p>{email[3]}</p>
        </div>
      </section>

      <section>
        <div className="kiri">
          <img src={photo[4]} alt="depimomo" />
        </div>
        <div className="kanan">
          <p style={{ fontWeight: 600 }}>{name[4]}</p>
          <p>{phone[4]}</p>
          <p>{email[4]}</p>
        </div>
      </section>

      <section>
        <div className="kiri">
          <img src={photo[5]} alt="orang" />
        </div>
        <div className="kanan">
          <p style={{ fontWeight: 600 }}>{name[5]}</p>
          <p>{phone[5]}</p>
          <p>{email[5]}</p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
