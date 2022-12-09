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
            img:"/images/persons/person5.png",
        },
        progress:50,
        img:"/images/projects/dropbox.png",
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
            img:"/images/persons/person3.png",
        },
        progress:75,
        img:"/images/projects/gitlab.png",
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
            img:"/images/persons/person3.png",
        },
        progress:100,
        img:"/images/projects/bitbucket.png",
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
            img:"/images/persons/person5.png",
        },
        progress:50,
        img:"/images/projects/python.png",
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
            img:"/images/persons/person5.png",
        },
        progress:50,
        img:"/images/projects/slack.png",
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
            img:"/images/persons/person4.png",
        },
        progress:25,
        img:"/images/projects/firebase.png",
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
            img:"/images/persons/person5.png",
        },
        progress:25,
        img:"/images/projects/angular.png",
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
            img:"/images/persons/person1.png",
        },
        progress:100,
        img:"/images/projects/vue.png",
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
            img:"/images/persons/person4.png",
        },
        progress:50,
        img:"/images/projects/messenger.png",
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
            img:"/images/persons/person5.png",
        },
        progress:75,
        img:"/images/projects/leader.png",
        deadline: getnextweek(1),
    },

]
