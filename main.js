let questions = document.querySelectorAll(".hi");

questions.forEach(q => {
  q.addEventListener("click", () => {
    let answer = q.nextElementSibling;

    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});