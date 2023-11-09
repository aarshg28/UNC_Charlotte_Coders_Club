import React, { Component } from "react";
import MenuBar from "../components/menubar";
import Footer from "../components/footer";
import ContactForm from "../components/contact";

class Contact extends Component {
  render() {
    return (
      <div className="flex flex-col gap-2 underline-offset-8">
        {/* MENU */}
        <div className="flex w-full sticky top-0 z-50">
          <MenuBar />
        </div>
        {/* CONTENT */}
        <div className="flex flex-col mx-auto px-4 w-full md:w-3/5">
          <ContactForm />
        </div>
        <div className="flex flex-row min-w-full">
          <Footer key="1" />
        </div>
      </div>
    );
  }
}

export default Contact;
