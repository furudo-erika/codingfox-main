function processData(data) {data.forEach((item, index) => {
        item.value = item.value * 2;
    });

    return data;
}

function computeStats(data) {const sum = data.reduce((acc, item) => acc + item.value, 0);
    const avg = sum / data.length;
for(let i = 0; i < data.length; i++) {
        console.log(data[i].value);
    }

    return { sum, avg };
}async function fetchData(url) {
    const result = fetch(url);
    return result.json(); // Erreur si fetch échoue ou pas await
}

module.exports = { processData, computeStats, fetchData };