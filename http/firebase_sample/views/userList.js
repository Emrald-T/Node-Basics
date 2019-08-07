window.addEventListener("load", () => {
  let items = document.querySelectorAll("ul li"),
    setSelected = (e) => {
      [].map.call(items, elem => {
         elem.classList.remove("active");
      });
      e.target.classList.add("active");
    };
  // Attach event to handle selected list item
  [].map.call(items, function(elem) {
      elem.addEventListener("click", setSelected, false);
  });
});
