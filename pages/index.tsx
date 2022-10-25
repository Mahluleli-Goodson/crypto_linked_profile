import React from 'react';
import {NextPage} from "next";
import AnimatedImage from "../components/animatedImage/animatedImage";
import {bio, projects} from "../content/home";
import Spotlight from "../components/spotLight/spotlight";
import ProjectTile from "../components/projectTile/projectTile";

const HomePage: NextPage = () => {

    return (
        <div className="mx-10 pb-10">

            <Spotlight/>

            <div className="py-10 flex items-top relative">
                <div className="">
                    <h1 className="text-[70px] font-bold">Learn a bit <br/> about me</h1>
                    <section className="w-[700px] p-5 bg-lumino-1 rounded text-xl leading-8">
                        <p>{bio}</p>
                    </section>
                </div>
                <AnimatedImage className="w-[500px] ml-20"/>
            </div>

            <div className="relative flex justify-center">
                <h2 className="text-[70px] font-bold inline-block m-0 font-archivo absolute top-[-60px] left-[40px]
                text-lumino-3">
                    PROJECTS
                </h2>
                <div className="w-[1000px] p-5 relative bg-gray-600 rounded-md bg-clip-padding backdrop-filter
                    backdrop-blur-sm bg-opacity-20 border border-gray-100">

                    {
                        projects.map((_project, idx) =>
                            <ProjectTile key={idx} project={_project} index={++idx}/>
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default HomePage;
