const express = require("express");
const snacks = express.Router();
const { getAllSnacks, getSnack, createSnack, deleteSnack, updateSnack } = require("../queries/snack");


// INDEX
snacks.get("/", async (req, res) => {
    const allSongs = await getAllSnacks();
    console.log(allSongs)
    if (allSongs[0]) {
      res.status(200).json(allSongs);
    } else {
      res.status(500).json({ error: "server error" });
    }
  });

// SHOW
snacks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const snack = await getSnack(id);
  if (snack) {
    res.json(snack);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE
snacks.post("/", async (req, res) => {

  if (!req.body.image) {
    req.body.image =
      "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";
  }

  try {
    const snack = await createSnack(req.body);
    res.json(snack);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// DELETE
snacks.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSnack = await deleteSnack(id);
  if (deletedSnack.id) {
    res.status(200).json(deletedSnack);
  } else {
    res.status(404).json("Snack not found");
  }
});

// UPDATE
snacks.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedSnack = await updateSnack(id, req.body);
  res.status(200).json(updatedSnack);
});

module.exports = snacks;