const db = require("../db/dbConfig.js");

const getAllSnacks = async () => {
    try {
      const allSnacks = await db.any("SELECT * FROM snacks");
      return allSnacks;
    } catch (error) {
      return error;
    }
  };

  // ONE Snack
  const getSnack = async (id) => {
    try {
      const oneSnack = await db.one("SELECT * FROM snacks WHERE id=$1", id);
      return oneSnack;
    } catch (error) {
      return error;
    }
  };

const createSnack = async (snack) => {
  try {
    const newSnack = await db.one(
      "INSERT INTO snacks (name, image, serving, protein, sugar, sodium, fat, type, is_favorite) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [snack.name, snack.image, snack.serving, snack.protein, snack.sodium, snack.fat, snack.type, snack.is_favorite]
    );
    return newSnack;
  } catch (error) {
    return error;
  }
};

const deleteSnack = async (id) => {
  try {
    const deletedSnack = await db.one(
      "DELETE FROM snacks WHERE id = $1 RETURNING *",
      id
    );
    return deletedSnack;
  } catch (error) {
    return error;
  }
};

const updateSnack = async (id, snack) => {
  try {
    const updatedSnack = await db.one(
      "UPDATE snacks SET name=$1, image=$2, serving=$3, protein=$4, sugar=$5, sodium=$6, fat=$7, type=$8, is_favorite=$9 where id=$10 RETURNING *",
      [snack.name, snack.image, snack.serving, snack.protein, snack.sodium, snack.fat, snack.type, snack.is_favorite, id]
    );
    return updatedSnack;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSnacks,
  getSnack,
  createSnack,
  deleteSnack,
  updateSnack,
};