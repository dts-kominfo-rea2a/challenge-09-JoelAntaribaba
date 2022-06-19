import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";

// Uncomment untuk memuat daftar kontak
import contacts from "./data/contacts.json";

let getName = (val) => {
  let data = contacts.map((val) => {
    return val.name;
  });
  return data;
};

let getPhone = (val) => {
  let data = contacts.map((val) => {
    return val.phone;
  });
  return data;
};

let getEmail = (val) => {
  let data = contacts.map((val) => {
    return val.email;
  });
  return data;
};

let getPhoto = (val) => {
  let data = contacts.map((val) => {
    return val.photo;
  });
  return data;
};

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header text1="Call a Friend" text2="your friendly contact app" text3="**************************************************" />
      <Contact name={getName(contacts)} phone={getPhone(contacts)} email={getEmail(contacts)} photo={getPhoto(contacts)} />
    </div>
  );
};

export default App;
