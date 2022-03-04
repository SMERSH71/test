function getData(url, num = 3) {
    return new Promise(async (resolve, reject) => {
        for (let i = 0; i < num; i++) {
            try {
                console.log(`attempt ${i + 1}`);
                const result = await fetch(url);
                if (result.ok) {
                    resolve(result);
                    break;
                }
            } catch (err) {
                console.log(err);
            }
        }
        reject('Number of attempts exhausted');
    })
}

getData('https://catfact.ninja/fact', 4)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err));