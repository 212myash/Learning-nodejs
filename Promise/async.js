function fatchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data fetched successfully!");
            console.log("Processing data...");
            const data = { id: 1, name: "Yash Raj" };
            resolve(data);
        }, 2000);
    });
}

async function getData() {
    console.log("Fetching data...");
    try {
        const result = await fatchData();
        console.log("Data received:", result);
    } catch (error) {
        console.error("Error fetching data:", error);
    } finally {
        console.log("Data fetching process completed.");
    }
}

getData();