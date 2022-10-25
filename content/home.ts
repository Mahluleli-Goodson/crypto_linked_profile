export interface IProject {
    title: string;
    stack: string[];
    link: string;
    body: string;
}

export const bio = "My name is Mahluleli Goodson. I am a Full Stack Developer with 9+ years experience in the industry, with exposure to mobile development, web\n" +
    "development, and DevOps.\n" +
    "I’m an active user and learner of modern technology stacks - with my current interest being in Web3 and\n" +
    "Blockchain-related tech.";

export const projects: IProject[] = [
    {
        title: "Netflix Clone",
        stack: ["React", "Tailwind", "TMDB API", "Netlify"],
        link: "https://extraordinary-hamster-47a797.netlify.app/",
        body: "This is a side project I'm working on, mostly for experimental features. I chose Netflix as a case study because I believe it has one of the most complex client sides/UI and if I can recreate some of it's features, then I can keep improving my skills. I'm also working on adding my own custom features which are not a 1:1 copy of the official site.",
    },
    {
        title: "PaperStreet",
        stack: ["React", "NodeJS API", "React Query", "Heroku"],
        link: "https://www.paperstreet.vc/",
        body: "I was contracted by Paperstreet to help them build their VC funding site. I worked on a feature for viewing current seed rounds of different projects, which was in React, and also on the API which used NodeJS (Express).",
    },
    {
        title: "Trixta",
        stack: ["React", "Theia-IDE", "GPT-3", "Redux", "Phoenix", "Google Cloud Platform"],
        link: "https://www.trixta.com/",
        body: "Trixta is still in development/beta at the moment. It's an IDE which helps build applications rapidly and beyond the traditional API driven approach. This IDE also implements GPT-3 in generating components and static content. The IDE is a fork Theia IDE. I work mostly on the client side of React and planning of helpful features for clients.",
    },
    {
        title: "Mentoring 4 Success",
        stack: ["NodeJS API", "JavaScript", "FFmpeg", "Azure"],
        link: "https://www.mentoring4success.co.za/",
        body: "I was contracted by M4S to build them an API for their media content of their mobile-apps. The API was done in NodeJS and deployed in Azure as a service. The scope was to get user uploaded content to load faster, compressed to smaller size while maintaining quality, and also to validate media length (not size) on upload. This involved a lot of FFmpeg usage.",
    },
    {
        title: "Jacaranda FM",
        stack: ["Python", "Django", "Django REST", "NodeJS API", "VMWare"],
        link: "https://jacarandafm.com/",
        body: "This is a radio station website which serves millions of users in South Africa. It's Django based, with the mobile apps in Swift and Java for Android, which are served by a Django-REST API. This application has a microservice architecture, with parts of it being NodeJS services, using sockets.",
    },
];
