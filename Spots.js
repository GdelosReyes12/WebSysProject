document.addEventListener('DOMContentLoaded', () => {

  const destinationList = document.getElementById("destinationList");
  const destinationTotal = document.getElementById("destinationTotal");
  const clearBtn = document.getElementById("clearCart");
  const saveBtn = document.getElementById("save");
  const emptyMessage = document.getElementById("emptyMessage");
  const popup = document.getElementById("popup");

  let destinations = [];

  function addDestination(name) {
    if (destinations.includes(name)) {
      alert("This location is already added!");
      return;
    }

    destinations.push(name);
    updateDestinations();

    if(popup) {
      popup.classList.add("show");
      setTimeout(() => popup.classList.remove("show"), 1500);
    }
  }

  function updateDestinations() {
    if (!destinationList) return;
    
    destinationList.innerHTML = "";

    if (destinations.length === 0) {
      if(emptyMessage) emptyMessage.style.display = "block";
      if(clearBtn) clearBtn.disabled = true;
      if(saveBtn) saveBtn.disabled = true;
    } else {
      if(emptyMessage) emptyMessage.style.display = "none";
      if(clearBtn) clearBtn.disabled = false;
      if(saveBtn) saveBtn.disabled = false;

      destinations.forEach((place, i) => {
        const li = document.createElement("li");
        li.textContent = place;

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.classList.add("delete-btn");
        delBtn.addEventListener("click", () => removeDestination(i));

        li.appendChild(delBtn);
        destinationList.appendChild(li);
      });
    }

    if(destinationTotal) {
      destinationTotal.textContent = destinations.length;
    }
  }

  function removeDestination(index) {
    destinations.splice(index, 1);
    updateDestinations();
  }

  if(clearBtn) {
    clearBtn.addEventListener("click", function () {
      destinations = [];
      updateDestinations();
    });
  }

  if(saveBtn) {
    saveBtn.addEventListener("click", function () {
        alert("Location has been added to the destinations! Amping!");
        destinations = [];
        updateDestinations();
      
    });
  }

  const buttons = [
    { id: "dahilayanBtn", name: "Dahilayan Park" },
    { id: "lakeApoBtn", name: "Lake Apo View Deck" },
    { id: "luanLuanBtn", name: "Luan Luan Spring Resort" },
    { id: "hamugawayBtn", name: "Hamugaway Ridge" },
    { id: "woodsPoolBtn", name: "Woods Private Pool" },
    { id: "balabaFarmBtn", name: "Balaba Farm Resort" },
    { id: "lakePinamaloyBtn", name: "Lake Pinamaloy" },
    { id: "malungonSpringBtn", name: "Malungon Cold Spring" },
    { id: "overviewParkBtn", name: "Overview Park" },
    { id: "greekHillsBtn", name: "Greek Hills" },
    { id: "mtAnhawaonBtn", name: "Mt. Anhawaon" },
    { id: "cedarBtn", name: "Cedar" },
    { id: "abbeyBtn", name: "Abbey of the Transfiguration" },
    { id: "communalRanchBtn", name: "Communal Ranch" },
    { id: "sabanganBtn", name: "Sabangan Camping Site" }
  ];

  buttons.forEach(button => {
    const btnElement = document.getElementById(button.id);
    if (btnElement) {
      btnElement.addEventListener("click", () => addDestination(button.name));
    }
  });

  updateDestinations();
});
