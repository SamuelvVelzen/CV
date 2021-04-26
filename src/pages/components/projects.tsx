import React, { ReactElement, useState } from 'react';

import './../../styles/style/components/projects.scss';
import Pills from './pills';
import JSONProjects from './../../config/projects.json';
import Project from './project';

function Projects(): ReactElement {
    const [projects, setProjects] = useState(JSONProjects);

    return (
        <section id={'projects'}>
            <div className='container'>
                <div className='row hero-inner'>
                    <h2 className='title col-12'>Projects</h2>

                    <div className='offset-md-1 col-md-10'>
                        <Pills projects={JSONProjects} />

                        <Project />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
