export const Groups = [
    {
        id: 1,
        name: 'UNSW Engineering Society',
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
        name: 'Software Engineering Society',
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
        name: 'Discussion Group - SENG',
        publicGroup: false,
        about: "",
        image: 'https://picsum.photos/id/237/200/300',
        interests: ['frontend'], //list of strings
        members: [1], //user id
        ownerId: 3,
        upcomingEvents: [],  //event id list
    },
];