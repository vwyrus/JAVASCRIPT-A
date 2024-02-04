// objects literal
// const blogs = [
//   { title: 'why mac & cheese rules', likes: 30 },
//   { title: '10 things to make with marmite', likes: 50 }
// ];
// console.log(blogs)

let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  blogs: [
    { title: 'why mac & cheese rules', likes: 30 },
    { title: '10 things to make with marmite', likes: 50 }
  ],
  // ['why mac & cheese rules', '10 things tomake with marmite'],
  login() {
    console.log('the user is logged in');
  },
  logout() {
    console.log('the user is logged out');
  },
  logBLogs() {
    console.log('this user has writtten the following blogs:');
    this.blogs.forEach(blog => {
      console.log(blog.title, blog.likes);
    });
  }
};
user.login();
user.logout();

user.logBLogs();
// console.log(this)
// console.log(user);
// console.log(user.name)

// console.log(user['email']);
// user['name'] = 'yoma'
// console.log(user['name']);


// Math Object

console.log(Math)