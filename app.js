function add(a, b) {
  return a + b;
}

add(1, 2);

const add = (a, b) => a + b;

add(3, 4);

const addNumbers = (a, b) => {
  return a + b;
};

const getPosts = async () => {
  const results = await fetch("https://jsonplaceholder.typicode.com/posts");
  const response = await results.json();
  return response;
};

async function main() {
  const posts = await getPosts;
  console.log("Posts:", posts);
}
main();
