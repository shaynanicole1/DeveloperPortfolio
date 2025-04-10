import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const sections = ["About Me", "Portfolio", "Contact", "Resume"];

const projects = [
  { title: "", image: "#", app: "https://app.com", repo: "https://github.com" },
  { title: "Weather App", image: "#", app: "https://app.com", repo: "https://github.com" },
  { title: "Task Manager", image: "#", app: "https://app.com", repo: "https://github.com" },
  { title: "E-commerce", image: "#", app: "https://app.com", repo: "https://github.com" },
  { title: "Portfolio Site", image: "#", app: "https://app.com", repo: "https://github.com" },
  { title: "Quiz Game", image: "#", app: "https://app.com", repo: "https://github.com" },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("About Me");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formErrors, setFormErrors] = useState({});

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  const validateField = (name, value) => {
    let error = "";
    if (!value.trim()) error = "This field is required";
    if (name === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = "Invalid email address";
    }
    setFormErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Header */}
      <header className="flex justify-between items-center py-4 border-b">
        <h1 className="text-2xl font-bold">John Doe</h1>
        <nav className="space-x-4">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => handleNavClick(section)}
              className={`font-medium ${activeSection === section ? "underline" : ""}`}
            >
              {section}
            </button>
          ))}
        </nav>
      </header>

      {/* Content Section */}
      <main className="mt-6">
        {activeSection === "About Me" && (
          <section>
            <img src="https://via.placeholder.com/150" alt="Developer" className="rounded-full mb-4" />
            <p>
              Hi, I’m John Doe, a passionate web developer specializing in building interactive and accessible web
              applications with React and modern JavaScript.
            </p>
          </section>
        )}

        {activeSection === "Portfolio" && (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, idx) => (
              <Card key={idx} className="rounded-2xl shadow p-4">
                <CardContent>
                  <img src={project.image} alt={project.title} className="mb-2" />
                  <h3 className="font-semibold">{project.title}</h3>
                  <div className="mt-2 space-x-2">
                    <Button asChild>
                      <a href={project.app} target="_blank" rel="noopener noreferrer">App</a>
                    </Button>
                    <Button asChild>
                      <a href={project.repo} target="_blank" rel="noopener noreferrer">Repo</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>
        )}

        {activeSection === "Contact" && (
          <section className="space-y-4 max-w-md">
            <Input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {formErrors.name && <p className="text-red-600 text-sm">{formErrors.name}</p>}

            <Input
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {formErrors.email && <p className="text-red-600 text-sm">{formErrors.email}</p>}

            <Textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {formErrors.message && <p className="text-red-600 text-sm">{formErrors.message}</p>}

            <Button>Submit</Button>
          </section>
        )}

        {activeSection === "Resume" && (
          <section>
            <a
              href="/resume.pdf"
              className="text-blue-600 underline"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
            <ul className="mt-4 list-disc pl-6">
              <li>JavaScript (ES6+)</li>
              <li>React & Next.js</li>
              <li>Node.js & Express</li>
              <li>HTML5 & CSS3</li>
              <li>Git & GitHub</li>
              <li>REST APIs</li>
            </ul>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t pt-4 flex justify-center space-x-4">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer">Stack Overflow</a>
      </footer>
    </div>
  );
}
