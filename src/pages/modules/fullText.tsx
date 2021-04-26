import React, { ReactElement } from 'react';

import './../../styles/style/modules/fullText.scss';

function FullText(): ReactElement {
    return (
        <section id={'fullText'} className={'text-light'}>
            <div className='container fullText-inner'>
                <div className='row'>
                    <h2 className='title col-12'>Introduction</h2>

                    <div className='offset-md-1 col-md-10'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nibh libero quisque maecenas
                            justo. Sit eget vitae id at tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Id nibh libero quisque maecenas justo. Sit eget vitae id at tellus.Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit. Id nibh libero quisque maecenas justo. Sit eget vitae id
                            at tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nibh libero quisque
                            maecenas justo. Sit eget vitae id at tellus.Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Id nibh libero quisque maecenas justo. Sit eget vitae id at tellus.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FullText;
