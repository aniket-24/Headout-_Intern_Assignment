const express = require("express");
const fs = require("fs").promises; // Use fs.promises for async file operations

const app = express();
const port = 8080;

app.get("/data", async (req, res) => {
  try {
    const fileName = req.query.n;
    const lineNumber = req.query.m;

    if (!fileName) {
      throw new Error("Invalid request: Missing file name (n).");
    }

    const filePath = `./tmp/data/${fileName}.txt`;

    if (lineNumber) {
      // Read specific line from file
      const line = await getLine(filePath, lineNumber);
      res.send(line);
    } else {
      // Read entire file
      const content = await readFile(filePath);
      res.send(content);
    }
  } catch (error) {
    console.error(error.message);
    res.status(400).send(error.message);
  }
});

async function getLine(filePath, lineNumber) {
  const data = await readFile(filePath);
  const lines = data.split("\n");
  return lines[lineNumber - 1] || "Line not found";
}

async function readFile(filePath) {
  const content = await fs.readFile(filePath, "utf8");
  return content;
}

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
