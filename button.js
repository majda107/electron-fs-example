document.querySelector("#list-folder-button").addEventListener("click", async () => {
    const folderPath = document.querySelector("#list-folder-input").value
    const filesList = await electronFs.listFolder(folderPath);

    document.querySelector("#files-view").innerHTML = filesList.join("\n");
});