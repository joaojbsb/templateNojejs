import express from "express";

const app = express();

app.get("/", (request, response) => {
    return response.json({ message: "Olá Mundo" });
});

app.listen(3333, () => console.log("Server is running in port 3333"));
