import axios from "axios";

const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    resolve(data);
  });
};

const getPost = (id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/posts/" + id
    );
    resolve(data);
  });
};

(async () => {
  try {
    const users = await getUsers();
    const post = await getPost(1);

    console.log("users: ", users);
    console.log("post: ", post);
  } catch (e) {
    console.log(e);
  }
})();

Promise.all([getUsers(), getPost(1)])
  .then(console.log)
  .catch(console.log);
