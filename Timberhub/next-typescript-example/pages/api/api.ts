import { Projects } from "../../model/projects";
function getnextweek(weeks: number)
{
    var today = new Date();
    var nextWeek = new Date(today.getTime() + weeks * 7 * 24 * 60 * 60 * 1000);
    return nextWeek;
}



export default [
    {
        id: 0,
        title: "App Development",
        hasCompany: {
            id:0,
            name:"Dropbox,Inc",
        },
        creator: {
            id:0,
            name:"Shane Black",
            occupation:"Project Manager",
        },
        progress:50,
        img:"",
        deadline: getnextweek(1),
    },
    {
        id: 1,
        title: "Website Redesign",
        hasCompany: {
            id:1,
            name:"GitLab Inc",
        },
        creator: {
            id:1,
            name:"Jane Wilson",
            occupation:"Project Manager",
        },
        progress:75,
        img:"",
        deadline: getnextweek(1),
    },
    {
        id: 2,
        title: "Landing Page",
        hasCompany: {
            id:2,
            name:"Bitbucket, Inc.",
        },
        creator: {
            id:0,
            name:"Jane Wilson",
            occupation:"Project Manager",
        },
        progress:100,
        img:"",
        deadline: getnextweek(1),
    },
    {
        id: 3,
        title: "Parser Development",
        hasCompany: {
            id:3,
            name:"Drivewat, Inc.",
        },
        creator: {
            id:3,
            name:"Jacob Hawkings",
            occupation:"Project Manager",
        },
        progress:50,
        img:"",
        deadline: getnextweek(1*5/7),
    },
    {
        id: 4,
        title: "App Development",
        hasCompany: {
            id:4,
            name:"Slack Technologies, Inc.",
        },
        creator: {
            id:3,
            name:"Jacob Hawkings",
            occupation:"Project Manager",
        },
        progress:50,
        img:"",
        deadline: getnextweek(1*5/7),
    },
    {
        id: 5,
        title: "App Development",
        hasCompany: {
            id:5,
            name:"Google, Inc.",
        },
        creator: {
            id:4,
            name:"Ronald Robertson",
            occupation:"Project Manager",
        },
        progress:25,
        img:"",
        deadline: getnextweek(1),
    },
    {
        id: 6,
        title: "Admin Dashboard",
        hasCompany: {
            id:6,
            name:"ArtTemplate, Inc.",
        },
        creator: {
            id:0,
            name:"Shane Black",
            occupation:"Project Manager",
        },
        progress:25,
        img:"",
        deadline: getnextweek(1),
    },
    {
        id: 7,
        title: "Web App on Vue.js",
        hasCompany: {
            id:6,
            name:"ArtTemplate, Inc.",
        },
        creator: {
            id:4,
            name:"Robert Edwards",
            occupation:"Project Manager",
        },
        progress:100,
        img:"",
        deadline: getnextweek(1),
    },
    {
        id: 8,
        title: "App Development",
        hasCompany: {
            id:7,
            name:"Facebook, Inc.",
        },
        creator: {
            id:3,
            name:"Ronald Roberson",
            occupation:"Project Manager",
        },
        progress:50,
        img:"",
        deadline: getnextweek(1),
    },
    {
        id: 9,
        title: "App Development",
        hasCompany: {
            id:7,
            name:"Leader, Inc.",
        },
        creator: {
            id:0,
            name:"Shane Black",
            occupation:"Project Manager",
        },
        progress:75,
        img:"",
        deadline: getnextweek(1),
    },

]
