const sentence = (statement) => {
  for (const char of statement) {
    setTimeout(() => {
      process.stdout.write(char); // print the char here

    }, 0) // <= 1s delay to make it noticeable. Can dial it down later.
  }
  process.stdout.write('\n'); 
};
const statement = "hello there from lighthouse labs";

sentence(statement);

