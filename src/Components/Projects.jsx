import React from "react";
import GitHubCalendar from "react-github-calendar";
import ProjectCard from "./ProjectCard";
import "../Style/projects.css";
const Projects = () => {
  let dataarr = [
    {
      imgarr: [
        {
          img: "https://i.postimg.cc/wj5CMv94/Screenshot-from-2023-01-10-01-42-55.png",
        },
        {
          img: "https://i.postimg.cc/c1C5kkD7/Screenshot-from-2023-01-12-02-10-04.png",
        },
        {
          img: "https://i.postimg.cc/CKv9d3P1/Screenshot-from-2023-01-12-02-10-36.png",
        },
        {
          img: "https://i.postimg.cc/QxbmXpnN/Screenshot-from-2023-01-12-02-12-41.png",
        },
        {
          img: "https://i.postimg.cc/BvWXkzcj/Screenshot-from-2023-01-12-02-11-10.png",
        },
      ],
      des: `RentoMojo is rental platform where a person can use the products
      according to there needs by paying rent for the products on monthly
      Subscription based model`,
      title: "RentoMojo-Clone",
      techstack: ` HTML CSS Java Script React Chakra UI`,
      live:`https://rent-do-maja-lo-hanumat-sharan.vercel.app/`,
      github:`https://github.com/HANUMAT-SHARAN/filthy-range-8205`
    },
  ];
  let grow=[
    {
      imgarr: [
        {
          img: "https://i.postimg.cc/bNYqdstT/Screenshot-from-2023-01-12-02-50-09.png",
        },
        {
          img: "https://i.postimg.cc/P59H6yF3/Screenshot-from-2023-01-12-02-50-36.png",
        },
        {
          img: "https://i.postimg.cc/nhQgLJ02/Screenshot-from-2023-01-12-02-51-57.png",
        },
        {
          img:"https://i.postimg.cc/zBqcpR52/Screenshot-from-2023-01-12-02-53-13.png",
        },
        {
          img: "https://i.postimg.cc/kGLrjXTV/Screenshot-from-2023-01-12-03-00-47.png",
        },
        {
          img: "https://i.postimg.cc/02zHtvRv/Screenshot-from-2023-01-12-02-53-22.png",
        },
      ],
      des: `
      Chargebee is the subscription billing and revenue management platform that lets you solve for your today, and scale for your tomorrow`,
      title: "ChargeBee-Clone",
      techstack: ` HTML CSS Java Script`,
      live:`https://dazzling-buttercream-31808d.netlify.app/index.html`,
      github:`https://github.com/HANUMAT-SHARAN/wicked-edge-6587`
    },
  ]
  let optimizely=[
    {
      imgarr: [
        {
          img: "https://i.postimg.cc/fyWzmLJY/Screenshot-from-2023-01-12-03-07-22.png",
        },
        {
          img: "https://i.postimg.cc/J08ygMth/Screenshot-from-2023-01-12-03-07-00.png",
        },
        {
          img: "https://i.postimg.cc/t4pKgfnV/Screenshot-from-2023-01-12-03-08-26.png",
        },
        {
          img:"https://i.postimg.cc/JnDggCvS/Screenshot-from-2023-01-12-03-07-51.png",
        },
        
      ],
      des: `
      Chargebee is the subscription billing and revenue management platform that lets you solve for your today, and scale for your tomorrow`,
      title: "Optimizely-Clone",
      techstack: ` HTML CSS Java Script`,
      live:`https://effulgent-cobbler-698112.netlify.app/`,
      github:`https://github.com/HANUMAT-SHARAN/-main-insurance-1276`
    },
  ]
  console.log(dataarr);
  return (
    <section id="projects">
      <div
        id="tech"
        data-aos="fade-down-right"
        data-aos-duration="2000"
        data-aos-delay="300"
        margin={"auto"}
        justifyContent={"space-around"}
      >
        <h1 style={{ color: "var(--color-font)" }}>Projects </h1>
      </div>
      <div id="procard">
        <div
          data-aos="zoom-in-down"
          data-aos-duration="2000"
          data-aos-offset="100"
          data-aos-anchor-placement="top-center"
        >
          <ProjectCard arr={dataarr} />
        </div>
        <div
          data-aos="zoom-in-down"
          data-aos-duration="2000"
          data-aos-offset="100"
          data-aos-anchor-placement="top-center"
        >
          <ProjectCard arr={grow} />
        </div>
        <div
          data-aos="zoom-in-down"
          data-aos-duration="2000"
          data-aos-offset="100"
          data-aos-anchor-placement="top-center"
        >
          <ProjectCard arr={optimizely} />
        </div>
      </div>
      <div
        id="tech"
        data-aos="fade-down-right"
        data-aos-duration="2000"
        data-aos-delay="300"
        margin={"auto"}
        justifyContent={"space-around"}
      >
        <h1 style={{ color: "var(--color-font)" }}>
          Github Contributon Calender{" "}
        </h1>
      </div>
      <div id="calendar">
        <GitHubCalendar
          fontSize={10}
          color="#850db4"
          blockRadius={1}
          blockMargin={5}
          username="hanumat-sharan"
        />
      </div>
      <div
        id="tech"
        data-aos="fade-down-right"
        data-aos-duration="2000"
        data-aos-delay="300"
        margin={"auto"}
        justifyContent={"space-around"}
      >
        <h1 style={{ color: "var(--color-font)" }}>Github Stats </h1>
      </div>
      <div id="gitstats">
        <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-offset="100"
          alt="most used languages"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=HANUMAT-SHARAN&count_private=true&theme=algolia&bg_color=0,000000,130F40&layout=compact&border_radius=8&langs_count=20&hide=hack,swift,kotlin,objective-c"
        />

        <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-offset="100"
          alt="status github, commits, etc..."
          src="https://github-readme-streak-stats.herokuapp.com/?user=HANUMAT-SHARAN&count_private=true&show_icons=true&custom_title=Github&theme=algolia&bg_color=0,000000,130F40&layout=compact&border_radius=8"
        />

        <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-offset="100"
          alt="7oSkaaa's Github Stats"
          src="https://github-readme-stats.vercel.app/api?username=HANUMAT-SHARAN&show_icons=true&count_private=true&theme=algolia&bg_color=0,000000,130F40&layout=compact&border_radius=10"
        />
        <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-offset="100"
         
         
          alt="Hanumat Activity Graph"
          src="https://github-readme-activity-graph.cyclic.app/graph?username=HANUMAT-SHARAN&theme=react-dark&hide_border=false"
        />
      </div>
    </section>
  );
};

export default Projects;
