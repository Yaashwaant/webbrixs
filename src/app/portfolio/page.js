import Link from "next/link";
import InteractiveCard from "../../components/InteractiveCard";
import ScrollReveal from "../../components/ScrollReveal";

export const metadata = {
  title: "Portfolio",
  description: "Browse through our portfolio of custom-built, responsive web design projects, enterprise software applications, and successful digital platforms.",
};

export default function PortfolioPage() {
  const projects = [
    {
      title: "LeatherCraft E-Store",
      category: "Web Design",
      desc: "Premium wallet & leather goods e-commerce marketplace.",
      img: "/images/projects/project11.png",
      gridClass: "md:col-span-8 row-span-2",
      badge: "Web Design",
    },
    {
      title: "FurniStudio Catalog",
      category: "Web Design",
      desc: "Minimalist catalog & customized furniture portal.",
      img: "/images/projects/project1.png",
      gridClass: "md:col-span-4 row-span-1",
      badge: null,
    },
    {
      title: "PixelStudio Portal",
      category: "Web Design",
      desc: "Image editing digital studio portal website.",
      img: "/images/projects/project2.png",
      gridClass: "md:col-span-4 row-span-1",
      badge: null,
    },
    {
      title: "Travelora App",
      category: "SaaS Platform",
      desc: "Immersive travel booking portal interface.",
      img: "/images/projects/project14.png",
      gridClass: "md:col-span-6 row-span-1",
      badge: "SaaS Platform",
    },
    {
      title: "FinTech Advisory Mobile",
      category: "Mobile App",
      desc: "Modern portfolio advisory and financial mobile application.",
      img: "/images/projects/project16.png",
      gridClass: "md:col-span-6 row-span-1",
      badge: "Mobile App",
    },
    {
      title: "PixelVibe Agency",
      category: "Web Design",
      desc: "Vibrant digital agency portfolio interface.",
      img: "/images/projects/project3.png",
      gridClass: "md:col-span-3 row-span-1",
      badge: null,
    },
    {
      title: "WildArch Studios",
      category: "Web Design",
      desc: "Minimalist architectural studio website portal.",
      img: "/images/projects/project4.png",
      gridClass: "md:col-span-3 row-span-1",
      badge: null,
    },
    {
      title: "FlexStore Market",
      category: "E-Commerce",
      desc: "End-to-end custom Shopify connector marketplace.",
      img: "/images/projects/project12.png",
      gridClass: "md:col-span-6 row-span-2",
      badge: "E-Commerce",
    },
    {
      title: "MediFlow Dashboard",
      category: "SaaS Platform",
      desc: "Healthcare patient portal and SaaS analytics dashboard.",
      img: "/images/projects/project5.png",
      gridClass: "md:col-span-4 row-span-1",
      badge: null,
    },
    {
      title: "EstateFlow Portal",
      category: "SaaS Platform",
      desc: "Real estate properties and brokerage listings manager.",
      img: "/images/projects/project6.png",
      gridClass: "md:col-span-4 row-span-1",
      badge: null,
    },
    // Decorative Grid Blocks
    {
      title: "",
      category: "",
      desc: "",
      img: "/images/projects/project7.png",
      gridClass: "md:col-span-3 row-span-1",
      badge: null,
    },
    {
      title: "",
      category: "",
      desc: "",
      img: "/images/projects/project8.png",
      gridClass: "md:col-span-3 row-span-1",
      badge: null,
    },
    {
      title: "",
      category: "",
      desc: "",
      img: "/images/projects/project9.png",
      gridClass: "md:col-span-3 row-span-1",
      badge: null,
    },
    {
      title: "",
      category: "",
      desc: "",
      img: "/images/projects/project10.png",
      gridClass: "md:col-span-3 row-span-1",
      badge: null,
    },
    {
      title: "LogiTrack Analytics",
      category: "SaaS Platform",
      desc: "Cloud logistics and metrics visual tracker.",
      img: "/images/projects/project17.png",
      gridClass: "md:col-span-6 row-span-1",
      badge: null,
    },
    {
      title: "VibeStream Platform",
      category: "SaaS Platform",
      desc: "High concurrency audio streaming application interface.",
      img: "https://lh3.googleusercontent.com/aida/AP1WRLusOBUknZjFKo0VsgOdqpdxefTuSUQnZ0nA3XohQwohP8AG6yfDSdZOS6kH3-0wlJEmtn2ORIeL0I0NY17X_GhcgnspSBznLD1LT2K0AOPWMMS4ZdOWatys-o8UfAPbSujYDz-8ONRqzImQ6CWoMvuXzq0vmFRqAKut_5uEAYE6tqthVLHoYBXPfKoAfty5jlV3aocwg936McMcqAKTaWS7K1MfqeRBAHKH0EuZIOFIKWB0jCU-MKuuwJON",
      gridClass: "md:col-span-6 row-span-1",
      badge: null,
    },
  ];

  return (
    <main className="flex-grow pt-32 pb-24 max-w-7xl mx-auto px-6 md:px-20">
      {/* Hero Section */}
      <section className="text-center mb-24 max-w-3xl mx-auto">
        <ScrollReveal delay={0} direction="up">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-on-surface mb-6">
            Explore Our <span className="text-gradient">Recent Projects</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={150} direction="up">
          <p className="text-base md:text-lg text-text-secondary leading-relaxed">
            Browse through our portfolio showcasing diverse, innovative web design projects and client successes. We build robust and scalable software solutions built for performance and growth.
          </p>
        </ScrollReveal>
      </section>

      {/* Project Bento Grid */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[300px]">
          {projects.map((project, index) => {
            const delay = (index % 3) * 100;
            return (
              <ScrollReveal 
                key={index}
                delay={delay}
                direction="up"
                className={project.gridClass}
              >
                <InteractiveCard
                  imgUrl={project.img}
                  title={project.title}
                  desc={project.desc}
                  badge={project.badge || project.category}
                  href={project.title ? "/portfolio" : undefined}
                  className="w-full h-full group"
                />
              </ScrollReveal>
            );
          })}
        </div>
      </section>
    </main>
  );
}
