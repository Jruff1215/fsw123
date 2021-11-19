import { uuid } from "uuidv4"

const BountyInfo = [
    { firstName: "Darth",  lastName: "Bandon", living: "Deceased", bounty: "5000 Credits", type: "Sith",
id: uuid() },
    { firstName: "Bill",  lastName: "Erso", living: "Alive", bounty: "5000 Credits", type: "Jedi",
id: uuid() },
    { firstName: "Darth",  lastName: "Malak", living: "Deceased", bounty: "15000 Credits", type: "Sith",
id: uuid() },
    { firstName: "Visas",  lastName:"Marr", living: "Alive", bounty: "10000 Credits", type: "Jedi",
id: uuid() },
    { firstName: "Noab",  lastName: "Hulis", living: "Deceased", bounty: "2500 Credits", type: "Jedi",
id: uuid() },
    { firstName: "Darth",  lastName: "Nihilus", living: "Alive", bounty: "20000 Credits", type: "Sith",
id: uuid() },
    { firstName: "Revan", lastName: "Unknown", living: "Deceased", bounty: "50000 Credits", type: "Jedi",
id: uuid() },
    { firstName: "Meetra",  lastName: "Surik", living: "Deceased", bounty: "25000 Credits", type: "Jedi",
id: uuid() },
];

export default BountyInfo;