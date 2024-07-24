import React, { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import axios from 'axios';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const token = process.env.REACT_APP_GITHUB_TOKEN; // Your GitHub token
    const username = 'dmimar382'; // Your GitHub username

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://api.github.com/user/repos', {
                    headers: {
                        Authorization: `token ${token}`,
                    },
                });

                // Filter for public repositories and the "IOTEA" private repository owned by you
                const filteredProjects = response.data.filter(repo => 
                    (repo.owner.login === username && !repo.private) || repo.name === 'IOTEA'
                );

                // Sort projects by last updated date
                const sortedProjects = filteredProjects.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
                setProjects(sortedProjects);
            } catch (error) {
                console.error("Error fetching GitHub projects:", error);
            }
        };

        fetchProjects();
    }, [token, username]);

    return (
        <div className="portfolio-section">
            <div className="section-heading text-center">
                <h2>Portfolio</h2>
            </div>
            <div className="calendar">
                <GitHubCalendar 
                    username={username}
                    theme={{
                        light: [
                            '#ebedf0', // No contributions
                            '#d4a6e0', // Lightest purple
                            '#c375d6', // Light purple
                            '#a14abb', // Medium purple
                            '#8211a2', // Darkest purple (most contributions)
                        ],
                        dark: [
                            '#ebedf0', // No contributions
                            '#d4a6e0', // Lightest purple
                            '#c375d6', // Light purple
                            '#a14abb', // Medium purple
                            '#8211a2', // Darkest purple (most contributions)
                        ],
                    }}
                />
            </div>

            <div className="projects-list">
                <h2 className="section-heading">Projects</h2>
                {projects.map(project => (
                    <div key={project.id} className="project-card">
                        <h3>
                            <a 
                                href={project.html_url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ color: project.private ? 'grey' : 'purple' }}
                            >
                                {project.name}{project.private && ' (Private)'}
                            </a>
                        </h3>
                        <p>{project.description || "No description available"}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
