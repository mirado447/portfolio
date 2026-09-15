import java from "../assets/stack/java.png";
import spring from "../assets/stack/spring.png";
import python from "../assets/stack/python.png";
import fastapi from "../assets/stack/fastapi.png";
import js from "../assets/stack/js.png";
import html5 from "../assets/stack/html.png";
import css3 from "../assets/stack/css.png";
import react from "../assets/stack/react.png";
import tailwind from "../assets/stack/tailwind.png";
import postgresql from "../assets/stack/postgresql.png";
import docker from "../assets/stack/docker.png";
import github from "../assets/stack/github.png";

const stack = [
  { name: "Java", icon: java },
  { name: "Spring Boot", icon: spring },
  { name: "Python", icon: python },
  { name: "Fastapi", icon: fastapi },
  { name: "JavaScript", icon: js },
  { name: "HTML5", icon: html5 },
  { name: "CSS3", icon: css3 },
  { name: "React", icon: react },
  { name: "Tailwind", icon: tailwind },
  { name: "PostgreSQL", icon: postgresql },
  { name: "Docker", icon: docker },
  { name: "GitHub", icon: github },
];

function Stack() {
  return (
    <section id="stack" className="pt-10 pb-10 md:pt-16">
      <h2 className="font-khand text-4xl font-normal text-brown mb-6 text-center">Stack</h2>
      <div className="bg-tan py-3">
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 items-center gap-y-4 px-6">
          {stack.map((item) => (
            <div key={item.name} className="flex justify-center">
              <img
                src={item.icon}
                alt={item.name}
                title={item.name}
                className="w-12 h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stack;