import { Projects } from "../../model/projects";
function getnextweek(weeks: number)
{
    var today = new Date();
    var nextWeek = new Date(today.getTime() + weeks * 7 * 24 * 60 * 60 * 1000);
    return nextWeek;
}

export const Api: Projects[] = [{
    id: 0,
    name: "App Development",
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
]

  console.log(Api)