import express, { Request, Response } from "express";

const app = express()

app.get('/ads', (request: Request, response: Response) => {
  console.log('Acessou Ads!')
  return response.json([
    {id: 1, anuncio: 'Anuncio 1'},
    {id: 2, anuncio: 'Anuncio 2'},
    {id: 3, anuncio: 'Anuncio 3'},
    {id: 4, anuncio: 'Anuncio 4'},
    {id: 5, anuncio: 'Anuncio 5'},
    {id: 6, anuncio: 'Anuncio 6'},
  ])
})

const PORT = 3333;
app.listen(PORT, () => console.log('Server is running on PORT', PORT))

process.on('uncaughtException', (err) => console.log(err.message))