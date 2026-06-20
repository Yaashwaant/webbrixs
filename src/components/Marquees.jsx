export function ProjectMarquee() {
  const row1 = [
    "/images/projects/project1.png",
    "/images/projects/project2.png",
    "/images/projects/project3.png",
    "/images/projects/project4.png",
    "/images/projects/project5.png",
  ];
  
  const row2 = [
    "/images/projects/project6.png",
    "/images/projects/project7.png",
    "/images/projects/project8.png",
    "/images/projects/project9.png",
    "/images/projects/project10.png",
  ];
  
  const row3 = [
    "/images/projects/project11.png",
    "/images/projects/project12.png",
    "/images/projects/project14.png",
    "/images/projects/project16.png",
    "/images/projects/project17.png",
  ];

  const renderRow = (images, isReverse = false) => {
    const list = [...images, ...images, ...images];
    return (
      <div className="w-full overflow-hidden flex relative py-2">
        <div className={`flex gap-4 w-max ${isReverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
          {list.map((img, idx) => (
            <div 
              key={idx} 
              className="w-48 h-32 md:w-80 md:h-56 rounded-2xl overflow-hidden relative border border-white/10 flex-shrink-0 group hover:border-accent/40 transition-colors duration-300"
            >
              <img 
                src={img} 
                alt="Webbrixs work item preview"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full py-10 flex flex-col gap-4 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
      
      {renderRow(row1, false)}
      {renderRow(row2, true)}
      {renderRow(row3, false)}
    </div>
  );
}
