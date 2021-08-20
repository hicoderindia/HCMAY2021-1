const main = document.getElementById("main");
console.log(main);

const imageContent = `<img src="ex" onerror="alert('Error from JS')">`;

main.innerHTML = imageContent;
