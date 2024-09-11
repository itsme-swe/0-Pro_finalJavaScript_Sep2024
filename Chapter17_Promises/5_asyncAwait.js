//🔸 Aub 'async await' use karenge with the help of naming function

const newPromise = new Promise(function (res, rej) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      res({ username: "war05", pass: "shuru" });
    } else {
      rej("Error: Something went wrong");
    }
  }, 1000);
});

async function consumeNewPromise() {
  try {
    const response = await newPromise;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumeNewPromise();
