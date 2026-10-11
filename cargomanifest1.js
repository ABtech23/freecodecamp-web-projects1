let cargo = {
  containerId: 1,
  destination: "Monterey, California, USA",
  weight: 831,
  unit: "lb",
  hazmat: false
};

function normalizeUnits(manifest) {
  let copy = { ...manifest };

  if (copy.unit === "lb") {
    copy.weight = 0.45 * copy.weight;
  }

  copy.unit = "kg";

  return copy;
}

function validateManifest(manifest) {
  let errors = {};

  if (!("containerId" in manifest)) {
    errors.containerId = "Missing";
  } else if (
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    errors.containerId = "Invalid";
  }

  if (!("destination" in manifest)) {
    errors.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    errors.destination = "Invalid";
  }

  if (!("weight" in manifest)) {
    errors.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0 ||
    !Number.isFinite(manifest.weight)
  ) {
    errors.weight = "Invalid";
  }

  if (!("unit" in manifest)) {
    errors.unit = "Missing";
  } else if (
    manifest.unit !== "kg" &&
    manifest.unit !== "lb"
  ) {
    errors.unit = "Invalid";
  }

  if (!("hazmat" in manifest)) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

function processManifest(manifest) {
  let errors = validateManifest(manifest);

  if (Object.keys(errors).length === 0) {
    let normalized = normalizeUnits(manifest);

    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errors);
  }
}

console.log(normalizeUnits(cargo));
console.log(validateManifest(cargo));
processManifest(cargo);