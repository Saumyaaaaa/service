import { useEffect, useRef } from "react";

const TechnologyStack = () => {
  const technologies = [
    { icon: "/expressjs-icon.svg", name: "express" },
    { icon: "/html.png", name: "html" },
    { icon: "/aws.png", name: "AWS" },
    { icon: "/mongoDB.png", name: "mongoDB" },
    { icon: "/vue.png", name: "Vue" },
    { icon: "/java.png", name: "Java" },
    { icon: "/sql.png", name: "SQL" },
    { icon: "/python.png", name: "Python" },
    { icon: "/typescript.png", name: "Typescript" },
    { icon: "/js.png", name: "Javascript" },
    { icon: "/nextjs.png", name: "NextJs" },
    { icon: "/react.png", name: "ReactJs" },
    { icon: "/Docker.png", name: "Docker" },
    { icon: "/flutter.png", name: "Flutter" },
    { icon: "/linux.png", name: "Linux" },
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    const scroll = () => {
      let scrollPos = 0;
      const loop = setInterval(() => {
        container.scrollLeft = scrollPos;
        scrollPos++;

        if (scrollPos >= scrollWidth - clientWidth) {
          scrollPos = 0;
        }
      }, 50);

      return () => clearInterval(loop);
    };

    if (container) {
      scroll();
    }
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden scroll-smooth py-10">
      <div className="flex flex-wrap justify-center gap-8">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2"
          >
            <img src={tech.icon} alt={tech.name} className="h-12 w-12" />
            <span className="text-sm font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyStack;
