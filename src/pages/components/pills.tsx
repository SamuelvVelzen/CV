import React, { MouseEvent, ReactElement, useEffect, useState } from 'react';

import './../../styles/style/components/pills.scss';
import Pill from './pill';

interface PropsInterface {
    projects: Array<Record<string, any>>;
}

function Pills(props: PropsInterface): ReactElement {
    const { projects } = props;

    function calculateTags(): Record<string, number> {
        const tags: { [key: string]: number } = {};

        projects.forEach((value) => {
            for (const tagIndex in value.tags) {
                const tag = value.tags[tagIndex];

                if (filter.every(((i) => (v: string) => (i = value.tags.indexOf(v, i) + 1))(0))) {
                    if (tags[tag]) {
                        tags[tag] += 1;
                    } else {
                        tags[tag] = 1;
                    }
                } else {
                    if (!tags[tag]) {
                        tags[tag] = 0;
                    }
                }
            }
        });
        return tags;
    }

    const generatePills = (): ReactElement[] => {
        const html: ReactElement[] = [],
            tags = calculateTags();

        for (const tagIndex in tags) {
            html.push(
                <Pill
                    key={tagIndex}
                    label={tagIndex}
                    amount={tags[tagIndex]}
                    active={filter.includes(tagIndex) ? true : false}
                />,
            );
        }

        html.unshift(
            <Pill key={'All'} label={'All'} amount={projects.length} active={filter.length == 0 ? true : false} />,
        );

        return html;
    };

    //1. filter
    const [filter, setFilter] = useState<string[]>([]);

    //2. pills
    const [pills, setPills] = useState<ReactElement[]>([]);

    function handleClick(event: MouseEvent<HTMLDivElement>) {
        const target = event.target as HTMLDivElement;
        const value = target.dataset.value;

        if (value && +value == 0) return;

        if (target.classList.contains('pill')) {
            const filterName = target.dataset.name as string;
            let tempArr = [...filter];

            if (filterName == 'All') {
                tempArr = [];
            } else {
                if (!filter.includes(filterName)) {
                    tempArr.push(filterName);
                } else {
                    const index = tempArr.indexOf(filterName);

                    if (index > -1) {
                        tempArr.splice(index, 1);
                    }
                }
            }

            setFilter(tempArr);
        }
    }

    useEffect(() => {
        setPills(generatePills());
    }, []);

    useEffect(() => {
        setPills(generatePills());
    }, [filter]);

    return (
        <div
            className={'pills mb-4'}
            onClick={(event: MouseEvent<HTMLDivElement>) => {
                handleClick(event);
            }}
        >
            {pills}
        </div>
    );
}

export default Pills;
