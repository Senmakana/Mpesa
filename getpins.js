async function addKeyValueToJSON(newKeyValue) {
    const repoOwner = "senmakana";
    const repoName = "Pins";
    const filePath = "pins.json";
    const branch = "main"; // Replace with the branch where the file is located

    const fileUrl = `https://raw.githubusercontent.com/${repoOwner}/${repoName}/${branch}/${filePath}`;

    try {
        // Fetch the existing JSON file
        const response = await fetch(fileUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch JSON file: ${response.statusText}`);
        }

        const json = await response.json();

        // Add the new key-value pair(s)
        Object.assign(json, newKeyValue);

        console.log("Updated JSON:", json);

        // For local usage: Convert the updated JSON to a string and save it
        // If you need to update it in GitHub, you'll need to use the GitHub API
    } catch (error) {
        console.error("Error:", error.message);
    }
}