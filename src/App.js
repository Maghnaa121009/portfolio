import React, { useState } from "react";
import Sidebar from "./components/Sidebar";

import Home from "./components/Home";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Tools from "./components/Tools";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Organizations from "./components/StudentOrganization";
import Blog from "./components/BlogSection";
import Contact from "./components/ContactSection";
import Footer from "./components/Footer";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen">
      <Sidebar onCollapseChange={setCollapsed} />

      <main
        className={[
          "px-6 md:px-10 py-10 space-y-28 transition-all duration-300",
          collapsed ? "md:ml-[84px]" : "md:ml-64",
        ].join(" ")}
      >
        <Home />
        <About />
        <Expertise />
        <Tools />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Organizations />
        <Blog />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;