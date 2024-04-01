import { setupDropDownSystem } from "drop-down-system";
import "./style.css";

const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
  if (tab.classList.contains("categories")) return;
  tab.addEventListener("click", () => {
    tabs.forEach(otherTab => otherTab.classList.remove("active"));
    tab.classList.add("active");
  })
})

const categoriesTab = document.querySelector(".tab.categories");

setupDropDownSystem([categoriesTab], "drop-down", "visible");