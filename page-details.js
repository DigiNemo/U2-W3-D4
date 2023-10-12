fetch("https://api.pexels.com/v1/search?query=landscape", {
  method: "POST",
  body: JSON.stringify(newEvent),
  headers: {
    Authorization: "qowN5buSfq5pG8xy1PVNbINYUf4ReG5Hs3NdBAeUeAvtazKfd5SvZ1YY",
    "Content-Type": "application/json",
  },
})
  .then((res) => {
    console.log("OGGETTO RESPONSE DELLA NOSTRA CHIAMATA POST", res);
    if (res.ok) {
      alert("EVENTO SALVATO CORRETTAMENTE!");
    } else {
      alert("ERRORE NEL SALVATAGGIO DELL'EVENTO");
      throw new Error("Errore nella POST");
    }
  })
  .catch((err) => {
    console.log("Si è verificato un errore:", err);
  });
