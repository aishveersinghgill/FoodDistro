fetch("buttons/buttons.html")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Failed to load navigation buttons: ${response.status} ${response.statusText}`);
        }
        return response.text();
    })
    .then((html) => {
        const container = document.getElementById("dashboard-buttons");
        container.innerHTML = html;

        const views = {
            dashboard: ["Dashboard", "Your distribution activity at a glance."],
            overview: ["Overview", "A summary of your food distribution operations."],
            events: ["Distribution Events", "View upcoming food distribution events."],
            supply: ["Supply", "Track supplies for your distribution events."],
            volunteers: ["Volunteers", "Coordinate volunteers for your events."],
            centers: ["Distribution Centers", "Manage your distribution locations."]
        };

        function showView(viewName) {
            if (!views[viewName]) {
                return;
            }

            document.querySelectorAll(".view-panel").forEach((panel) => {
                const active = panel.id === `view-${viewName}`;
                panel.hidden = !active;
                panel.classList.toggle("active", active);
            });

            container.querySelectorAll(".buttons").forEach((button) => {
                const active = button.dataset.view === viewName;
                button.classList.toggle("buttons--active", active);
                if (active) {
                    button.setAttribute("aria-current", "page");
                } else {
                    button.removeAttribute("aria-current");
                }
            });

            document.getElementById("pageTitle").textContent = views[viewName][0];
            document.getElementById("pageSubtitle").textContent = views[viewName][1];
        }

        container.addEventListener("click", (event) => {
            const button = event.target.closest("button[data-view]");
            if (button && container.contains(button)) {
                showView(button.dataset.view);
            }
        });

        showView("dashboard");
    })
    .catch((error) => {
        console.error("There was a problem loading the navigation buttons:", error);
    });