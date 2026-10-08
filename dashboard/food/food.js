fetch("dashboard/food/food.html")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Failed to load the food widget: ${response.status} ${response.statusText}`);
        }
        return response.text();
    })
    .then((html) => {
        document.getElementById("food-widget").innerHTML = html;
    })
    .catch((error) => {
        console.error("There was a problem loading the food widget:", error);
    });
