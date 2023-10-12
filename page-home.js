const renderimg = function (imgs) {
  imgs.photos.forEach((img) => {
    const newCol = document.createElement("div");
    newCol.classList.add("col", "col-12", "col-sm-6", "col-md-4", "col-lg-3");
    const newCard = document.createElement("div");
    newCard.classList.add("card", "m-1");
    newCard.style.height = "450px";
    newCard.innerHTML = `
            <img src="${img.src.landscape}" class="card-img-top" alt="${img.alt}">
            <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">${img.alt}</h5>
                <p class="card-text flex-grow-1">${img.photographer}</p>
                <div class="d-flex flex-row">
                  <button class="btn btn-primary m-2" onclick="deleteMe(event)">Hide</button>
                  <a class="btn btn-success m-2" href="./page-details.html">Details</a>
                </div>
            </div>
        `;
    newCol.appendChild(newCard);
    const row = document.getElementById("imgs-wall");
    row.appendChild(newCol);
  });
};

const deleteMe = function (e) {
  console.log("elimino!", e.target.closest(".col"));
  e.target.closest(".col").remove();
};

const getEvents = function () {
  fetch("https://api.pexels.com/v1/search?query=landscape", {
    headers: {
      Authorization: "qowN5buSfq5pG8xy1PVNbINYUf4ReG5Hs3NdBAeUeAvtazKfd5SvZ1YY",
    },
  })
    .then((res) => {
      console.log("Response ottenuta dalla GET", res);
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nel contattare il server");
      }
    })
    .then((events) => {
      console.log("EVENTS", events);
      renderimg(events);
    })
    .catch((err) => {
      console.log("Si è verificato un errore:", err);
    });
};

const getEvents1 = function () {
  fetch("https://api.pexels.com/v1/search?query=boat", {
    headers: {
      Authorization: "qowN5buSfq5pG8xy1PVNbINYUf4ReG5Hs3NdBAeUeAvtazKfd5SvZ1YY",
    },
  })
    .then((res) => {
      console.log("Response ottenuta dalla GET", res);
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nel contattare il server");
      }
    })
    .then((events) => {
      console.log("EVENTS", events);
      renderimg(events);
    })
    .catch((err) => {
      console.log("Si è verificato un errore:", err);
    });
};
