let num = 10;
for (let i = 0; i < num; i++) {
    if (i % 2 == 0) {
        console.log('even number:', i);
    } else {
        console.log('odd number:', i);
    }
}
console.log("after");

setTimeout(
    () => {
        console.log("this is the first message")
    }, 5000);