document.addEventListener('DOMContentLoaded', () => {
    const skillsData = {
        technical: [
            { name: 'Java', level: 90 },
            { name: 'C', level: 85 },
            { name: 'JavaScript', level: 85 },
            { name: 'Python', level: 85 },
            { name: 'C++', level: 80 },
            { name: 'HTML', level: 85 },
            { name: 'CSS', level: 80 },
            { name: 'React.js', level: 75 },
            { name: 'Node.js', level: 70 },
            { name: 'Express.js', level: 70 },
            { name: 'Koa.js', level: 65 },
            { name: 'SQL', level: 80 },
            { name: 'MongoDB', level: 75 }
        ],
        tools: ['Git', 'GitHub', 'Web Development', 'Linux', 'Windows', 'Object-Oriented Programming', 'System Analysis & Design']
    };

    const truncateText = (text, maxWords) => {
        const words = text.split(' ');
        return words.length > maxWords ? 
            words.slice(0, maxWords).join(' ') + '...' : 
            text;
    };

    const projectsData = [
        {
            title: 'Autonomous Obstacle-Avoidance Vehicle',
            badge: '🏆 1st Place',
            techs: ['C++', 'Python', 'Arduino'],
            preview: 'Led a 3-person team to design and assemble a 3-wheeled autonomous vehicle using Arduino components...',
            description: 'Led a 3-person team to design and assemble a 3-wheeled autonomous vehicle using Arduino components, enhancing team collaboration and leadership skills. Integrated infrared, ultrasonic, and basic vision recognition for real-time navigation. Programmed robot control algorithms in C++ and Python, implementing key-based encryption. Successfully defended our project in front of faculty and judges, improving public speaking and problem-solving abilities. Won first place in the university robotics competition.'
        },
        {
            title: 'Smart Door Lock System',
            badge: 'IoT',
            techs: ['3D Printing', 'Facial Recognition', 'Mobile IoT'],
            preview: 'Collaborated with a teammate to design a smart door lock, utilizing 3D-printed components for assembly...',
            description: 'Collaborated with a teammate to design a smart door lock, utilizing 3D-printed components for assembly. Developed and fine-tuned the vision recognition system for facial authentication. Integrated Arduino-based control mechanisms to enhance security and access management.'
        },
        {
            title: 'Google Software Development Internship',
            badge: 'Internship',
            techs: ['Node.js', 'Express', 'Koa.js', 'MongoDB', 'Axios'],
            preview: 'Developed and optimized web applications using Node.js, Express, and Koa.js. Built RESTful APIs for...',
            description: 'Developed and optimized web applications using Node.js, Express, and Koa.js. Built RESTful APIs for a music streaming service, implementing user authentication, playlist management, and track streaming. Implemented a MongoDB-based database structure for music metadata storage and optimized query performance. Integrated third-party music APIs using Axios for real-time data retrieval. Implemented file streaming for handling audio playback. Gained hands-on experience with Git version control, Agile workflows, and API debugging.'
        }
    ];

    const renderSkills = () => {
        const skillsGrid = document.querySelector('.skills-grid');
        if (!skillsGrid) return; // 确保元素存在

        skillsGrid.innerHTML = `
            <div class="skill-category">
                <h3>Core Technologies</h3>
                ${skillsData.technical.map(skill => `
                    <div class="skill-item">
                        <div class="skill-label">
                            <span>${skill.name}</span>
                            <span>${skill.level}%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress" style="width: ${skill.level}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="skill-category">
                <h3>Development Toolkit</h3>
                <div class="tools-container">
                    ${skillsData.tools.map(tool => `
                        <div class="tool-tag">${tool}</div>
                    `).join('')}
                </div>
            </div>
        `;
    };

    const renderProjects = () => {
        const projectsGrid = document.querySelector('.projects-grid');
        if (!projectsGrid) return; // 确保元素存在

        projectsGrid.innerHTML = projectsData.map(project => `
            <div class="project-card">
                <div class="project-header">
                    <h3>${project.title}</h3>
                    <span class="project-badge">${project.badge}</span>
                </div>
                <div class="tech-stack">
                    ${project.techs.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <p class="project-preview">${truncateText(project.description, 20)}</p>
                <button class="view-details">View Details</button>
                <p class="project-description" style="display: none;">${project.description}</p>
            </div>
        `).join('');
        bindDetailsButtons();
    };

    const bindDetailsButtons = () => {
        document.querySelectorAll('.view-details').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const details = button.nextElementSibling;
                details.style.display = details.style.display === 'none' ? 'block' : 'none';
                button.textContent = details.style.display === 'none' ? 'View Details' : 'Hide Details';
            });
        });
    };

    const educationData = [
        {
            school: 'NSCC IT Programming Diploma',
            period: '2024.9 - 2026.5',
            courses: ['Web Development', 'Linux Administration']
        },
        {
            school: 'Google Internship',
            period: 'March 2024',
            courses: ['Software Development']
        },
        {
            school: 'University Transfer Program',
            period: '2019 - 2024',
            courses: ['Ningbo — Dalhousie — NSCC']
        }
    ];

    const renderEducationTimeline = () => {
        const timeline = document.querySelector('.timeline');
        if (!timeline) return; // 确保元素存在

        timeline.innerHTML = educationData.map(edu => `
            <div class="timeline-item">
                <div class="timeline-header">
                    <h3>${edu.school}</h3>
                    <span class="timeline-period">${edu.period}</span>
                </div>
                <div class="timeline-courses">
                    <p>${edu.courses.join(', ')}</p>
                </div>
            </div>
        `).join('');
    };

    const init = () => {
        renderSkills();
        renderProjects();
        renderEducationTimeline();

        // 进度条动画（通过 CSS 过渡实现）
        document.querySelectorAll('.progress').forEach(progress => {
            const width = progress.style.width;
            progress.style.width = width; // 直接设置宽度，CSS 过渡会自动处理动画
        });

        // 导航栏平滑滚动
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                const target = document.querySelector(item.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    };

    init();
});