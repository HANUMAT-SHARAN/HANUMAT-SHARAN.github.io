import React from "react";
import GitHubCalendar from "react-github-calendar";
import ProjectCard from "./ProjectCard";
import "../Style/projects.css";

const Projects = () => {
  const html = `https://i.postimg.cc/fRbKFQ8X/Html.png`;

  const css = `https://i.postimg.cc/VNpDnZBt/Css.png`;
  const react = `https://i.postimg.cc/mkwYXmM8/react.png`;
  const redux = `https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png`;
  // const node=`https://seeklogo.com/images/N/node-node-js-logo-81A4CC16D2-seeklogo.com.png`
  const js = `https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png`;
  const git = `https://i.postimg.cc/hPcMLdx2/git.png`;
  const github = `https://i.postimg.cc/rySQRJdd/github.png`;
  const next = `https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png`;
  const typescript = `https://i.postimg.cc/4Nfb7TkM/typescript.png`;
  const cypress = `https://i.postimg.cc/sx9mFjFP/cypress1.webp`;
  const chakra = `https://i.postimg.cc/BnhhQnjM/chakra.png`;
  const express = `https://i.postimg.cc/G2DzQPq5/express.png`;
  const vs = `https://i.postimg.cc/CKqjThkZ/vscode.png`;
  // const npm=`https://i.postimg.cc/1tDc6mzx/npm-node-package-manager.png`
  const dsa = `https://i.postimg.cc/15BBJ3rs/Dsa.png`;
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
      title: "RentoMojo",
      techstack: [
        { src: html, name: "HTML" },
        { src: css, name: "CSS" },
        { src: js, name: "JavaScript" },
        { src: react, name: "React" },
        { src: chakra, name: "Chakra" },
      ],
      live: `https://rent-do-maja-lo-hanumat-sharan.vercel.app/`,
      github: `https://github.com/HANUMAT-SHARAN/filthy-range-8205`,
      dplink:
        "https://drive.google.com/file/d/19cCXUXLKvV7XoXyeLg0Csdp_SZkWFAol/view?usp=share_link",
    },
  ];
  let grow = [
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
          img: "https://i.postimg.cc/zBqcpR52/Screenshot-from-2023-01-12-02-53-13.png",
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
      title: "ChargeBee",
      techstack: [
        { src: html, name: "HTML" },
        { src: css, name: "CSS" },
        { src: js, name: "JavaScript" },
      ],
      live: `https://dazzling-buttercream-31808d.netlify.app/index.html`,
      github: `https://github.com/HANUMAT-SHARAN/wicked-edge-6587`,
      dplink:
        "https://drive.google.com/file/d/1lrT3GlRD15HrN0vNScwCMV_DQGgpFjML/view",
    },
  ];
  let optimizely = [
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
          img: "https://i.postimg.cc/JnDggCvS/Screenshot-from-2023-01-12-03-07-51.png",
        },
      ],
      des: `
      Optimizely is the website which helps the small companies to grow thier business exponentially by doing digital Marketing across diffrent platforms to reach more audience`,
      title: "Optimizely",
      techstack: [
        { src: html, name: "HTML" },
        { src: css, name: "CSS" },
        { src: js, name: "JavaScript" },
      ],
      live: `https://effulgent-cobbler-698112.netlify.app/`,
      github: `https://github.com/HANUMAT-SHARAN/-main-insurance-1276`,
    },
  ];
  let dailyneeds = [
    {
      imgarr: [
        {
          img: "https://i.postimg.cc/fb41zvP9/Screenshot-from-2023-01-30-20-50-48.png",
        },

        {
          img: "https://i.postimg.cc/8zfqgYZG/Screenshot-from-2023-01-30-20-51-28.png",
        },

        {
          img: "https://i.postimg.cc/vHBJ3T9c/Screenshot-from-2023-01-30-20-53-09.png",
        },
        {
          img: "https://i.postimg.cc/5047yKS6/Screenshot-from-2023-01-30-20-53-29.png",
        },
        {
          img: "https://i.postimg.cc/g0qtYbRC/Screenshot-from-2023-01-30-20-55-01.png",
        },
        {
          img: "https://i.postimg.cc/9XN8XpRQ/Screenshot-from-2023-01-30-20-56-53.png",
        },
        {
          img: "https://i.postimg.cc/NjXPzH0f/Screenshot-from-2023-01-30-20-54-33.png",
        },
        {
          img: "https://i.postimg.cc/HshfKm43/Screenshot-from-2023-01-30-20-52-23.png",
        },
        {
          img: "https://i.postimg.cc/gj5NMzFZ/Screenshot-from-2023-01-30-20-56-16.png",
        },
        {
          img: "https://i.postimg.cc/63fk1GYG/Screenshot-from-2023-01-30-20-50-23.png",
        },
        {
          img: "https://i.postimg.cc/yxWLXJ5K/Screenshot-from-2023-01-30-20-54-14.png",
        },
        {
          img: "https://i.postimg.cc/MG8r2pc0/Screenshot-from-2023-01-30-20-54-22.png",
        },
      ],
      des: `
      Daily Objects is a Lifestyle Accessories Brand that curates stunning designs and prints it on a wide range of personal accessories. We vision to bring the things you love on the things you use.`,
      title: "Daily Objects",
      techstack: [
        { src: typescript, name: "Type Script" },
        { src: react, name: "React" },
        { src: chakra, name: "Chakra" },
        { src: redux, name: "Redux" },
        { src: css, name: "CSS" },
      ],
      live: `https://daily-needs-hanumat-sharan.vercel.app/`,
      github: `https://github.com/HANUMAT-SHARAN/bright-noise-2667`,
      dplink:
        "https://drive.google.com/file/d/1fa9EIXXKuzb5tZTYs913GJgAksVvJJxB/view",
    },
  ];

  return (
    <section id="projects">
      <div id="tech" margin={"auto"} justifyContent={"space-around"}>
        <h1 style={{ color: "var(--color-font)" }}>Projects </h1>
      </div>
      <div id="procard">
        <div>
          <ProjectCard arr={dailyneeds} />
        </div>
        <div>
          <ProjectCard arr={dataarr} />
        </div>
        <div>
          <ProjectCard arr={grow} />
        </div>
        <div>
          <ProjectCard arr={optimizely} />
        </div>
      </div>
      <div id="gitname" margin={"auto"} justifyContent={"space-around"}>
        <h2 style={{ color: "var(--color-font)" }}>
          Github Contribution Calender{" "}
        </h2>
      </div>
      <div id="calendar">
        <GitHubCalendar
          fontSize={14}
          color="#850db4"
          blockRadius={1}
          blockMargin={6}
          blockSize={16}
          showWeekdayLabels
          username="hanumat-sharan"
        />
      </div>
      <div id="gitname" margin={"auto"} justifyContent={"space-around"}>
        <h2 style={{ color: "var(--color-font)" }}>Github Stats </h2>
      </div>
      <div id="gitstats">
        <img
          alt="most used languages"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=HANUMAT-SHARAN&count_private=true&theme=algolia&bg_color=0,000000,130F40&layout=compact&border_radius=8&langs_count=20&hide=hack,swift,kotlin,objective-c"
        />

        <img
          alt="status github, commits, etc..."
          src="https://github-readme-streak-stats.herokuapp.com/?user=HANUMAT-SHARAN&count_private=true&show_icons=true&custom_title=Github&theme=algolia&bg_color=0,000000,130F40&layout=compact&border_radius=8"
        />

        <img
          alt="7oSkaaa's Github Stats"
          src="https://github-readme-stats.vercel.app/api?username=HANUMAT-SHARAN&show_icons=true&count_private=true&theme=algolia&bg_color=0,000000,130F40&layout=compact&border_radius=10"
        />
        <img
          alt="Hanumat Activity Graph"
          src="https://github-readme-activity-graph.cyclic.app/graph?username=HANUMAT-SHARAN&theme=react-dark&hide_border=false"
        />
      </div>
    </section>
  );
};

export default Projects;
