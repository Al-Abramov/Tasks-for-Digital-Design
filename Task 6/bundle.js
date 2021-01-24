let model = [
    {
        id: 0,
        title: 'Title text 1',
        text: 'Some text 1',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 1,
        title: 'Title text 2',
        text: 'Some text 2',
        user: {
            id: 1,
            name: 'user 2',
        },
    }, {
        id: 2,
        title: 'Title text 3',
        text: 'Some text 3',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 3,
        title: 'Title text 4',
        text: 'Some text 4',
        user: {
            id: 2,
            name: 'user 3',
        },
    }, {
        id: 4,
        title: 'Title text 5',
        text: 'Some text 5',
        user: {
            id: 0,
            name: 'user 1',
        },
    }
]



function mapPostsToUsers(model) {
let tempUsers = model.map(i => ({
    ...i.user,
     posts: [] 
}));

const uniqUsers = new Map();

tempUsers.forEach(user => uniqUsers.set(user.id, user));


model.forEach(post => {           
   const user = uniqUsers.get(post.user.id);

   const newUser = {
       ...user,    
       posts: [
        ...user.posts,  
        
        {
            id: post.id,        
            title: post.title, 
            text: post.text,  
        }
    ]}

   uniqUsers.set(user.id, newUser);
})

    let users = [...uniqUsers.values()]

return users;
}
console.log(mapPostsToUsers(model));
