import React from 'react';
import Project from '../components/Project';

const projects = [
  { title: 'Project 1', image: '/assets/images/project1.png', deployedLink: 'http://example.com', repoLink: 'http://github.com' },
  // Add more projects here
];

const Portfolio = () => (
  <section id="portfolio">
    <h2>Portfolio</h2>
    {projects.map(project => <Project key={project.title} {...project} />)}
  </section>
);

export default Portfolio;
