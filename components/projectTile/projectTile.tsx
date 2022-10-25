import React, {FC} from 'react';
import {IProject} from "../../content/home";
import Link from "next/link";

interface IProjectTileProps {
    project: IProject;
    index: number;
}

const ProjectTile: FC<IProjectTileProps> = ({project, index}) => {
    return (
        <div className="py-2 flex items-center border-b-[0.01em] border-lumino-2 border-solid">
            <div className="relative w-[210px] grow-0 shrink-0 mr-4 border-r-[0.01em] border-lumino-2
            border-solid min-h-[50px]">
                <h3 className="p-0 m-0 absolute top-[-70px] text-[100px] text-lumino-1 font-bold font-archivo">
                    0{index}
                </h3>
                <h3 className="text-3xl text-center relative">{project.title}</h3>
            </div>
            <div className="text-justify relative">

                <p>{project.body}</p>

                <div className="flex items-end flex-col pt-4">
                    <Link href={project.link} passHref>
                        <a target="_blank" rel="noopener noreferrer">
                            <div className="min-w-[150px] p-1 bg-archen text-center rounded-full cursor-pointer block">
                                Visit Site
                            </div>
                        </a>
                    </Link>

                    <ul className="flex mt-4 border-t-[0.01em] border-lumino-2 border-solid pt-1">
                        {
                            (project.stack).map((_stack, idx) =>
                                <li
                                    key={idx}
                                    className="rounded-full bg-lumino-2 min-w-[70px] px-2 text-center m-1 text-sm
                                    text-lumino"
                                >
                                    {_stack}
                                </li>
                            )
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default ProjectTile;
