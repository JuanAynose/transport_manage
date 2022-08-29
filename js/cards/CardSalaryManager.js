import CardEmploye from "./CardEmploye.js";

const CardSalaryManager = (data, containerSalario) => {
  for (const employeData of data) {
    containerSalario.innerHTML += CardEmploye(employeData);
  }
};

export default CardSalaryManager;
