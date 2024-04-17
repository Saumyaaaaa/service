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
    { icon: "/nodeJs.png", name: "NodeJs" },
    { icon: "/cloudfare.png", name: "Cloudfare" },
    { icon: "/kubernetes.png", name: "Kubernetes" },
    { icon: "/saas.png", name: "Saas" },
    { icon: "/swift.png", name: "Swift" },
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    let scrollPos = 0;

    const loop = setInterval(() => {
      container.scrollLeft = scrollPos;
      scrollPos += 1; // Adjust the scroll speed by changing the increment value

      if (scrollPos >= scrollWidth - clientWidth) {
        // Start from the beginning if reached the end
        scrollPos = 0;
      }
    }, 10); // Adjust the interval for smoother scrolling

    return () => clearInterval(loop);
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden scroll-smooth py-10">
      <div className="flex items-center justify-center gap-24 animate-marquee whitespace-nowrap">
        {technologies.map((tech, index) => (
          <div key={index} className="flex items-center justify-center gap-8">
            <img src={tech.icon} alt={tech.name} className="h-12 w-12" />
            <span className="text-sm font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyStack;
