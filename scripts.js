document.getElementById("batteryForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const designCapacity = document.getElementById("designCapacity").value;
  const fullChargeCapacity =
    document.getElementById("fullChargeCapacity").value;

  const lightUsagePower = 12500;
  const mediumUsagePower = 25000;
  const heavyUsagePower = 50000;

  const lightUsageTime = (fullChargeCapacity / lightUsagePower).toFixed(2);
  const mediumUsageTime = (fullChargeCapacity / mediumUsagePower).toFixed(2);
  const heavyUsageTime = (fullChargeCapacity / heavyUsagePower).toFixed(2);

  document.getElementById(
    "lightUsage"
  ).textContent = `Light Usage ${lightUsageTime} hours`;
  document.getElementById(
    "mediumUsage"
  ).textContent = `Medium Usage ${mediumUsageTime} hours`;
  document.getElementById(
    "heavyUsage"
  ).textContent = `Heavy Usage ${heavyUsageTime} hours`;

  const modal = document.getElementById("resultModal");
  modal.classList.remove("hidden");
});

document.querySelector(".close-button").addEventListener("click", function () {
  const modal = document.getElementById("resultModal");
  modal.classList.add("hidden");
});

window.addEventListener("click", function (event) {
  const modal = document.getElementById("resultModal");
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
});
