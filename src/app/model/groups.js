export const Groups = [
    {
        id: 1,
        name: 'group1',
        publicGroup: true,
        about: "",
        image: 'https://picsum.photos/id/237/200/300',
        interests: ['frontend'], //list of strings
        members: [1, 2, 3], //user id
        ownerId: 1,
        upcomingEvents: [],  //event id list
    },
    {
        id: 2,
        name: 'group2',
        publicGroup: true,
        about: "",
        image: 'https://picsum.photos/id/237/200/300',
        interests: ['frontend'], //list of strings
        members: [], //user id
        ownerId: 1,
        upcomingEvents: [],  //event id list
    },
    {
        id: 3,
        name: 'group3',
        publicGroup: false,
        about: "",
        image: 'https://picsum.photos/id/237/200/300',
        interests: ['frontend'], //list of strings
        members: [1], //user id
        ownerId: 3,
        upcomingEvents: [],  //event id list
    },
];