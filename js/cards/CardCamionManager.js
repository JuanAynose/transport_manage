import CardCamion from "./CardCamion.js";

const CardCamionManager = (data, containerCamion) => {
  for (const employeData of data) {
    containerCamion.innerHTML += CardCamion(employeData);
  }
};

export default CardCamionManager;