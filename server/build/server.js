import express from "express";
const app = express();
app.get('/ads', (request, response) => {
    console.log('Acessou Ads!');
    return response.json([
        { id: 1, anuncio: 'Anuncio 1' },
        { id: 1, anuncio: 'Anuncio 1' },
        { id: 1, anuncio: 'Anuncio 1' },
    ]);
});
const PORT = 3333;
app.listen(PORT, () => console.log('Server is running on PORT', PORT));
