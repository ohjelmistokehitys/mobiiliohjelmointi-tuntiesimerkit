const keyword = encodeURIComponent('react');
const url = `https://api.github.com/search/repositories?q=${keyword}&per_page=10`;

async function main() {
    let response = await fetch(url);

    if (!response.ok) {
        throw new Error(response.status);
    }

    let json = await response.json();

    const fullNames = json.items.map(item => item.full_name);
    console.log(fullNames);
}

console.log("starting")
main();
console.log("stopping")
