const express = require('express');
const router = express.Router();




const productos = [
    {
                    id: 1,
                    nombre: "Jogger Trust",
                    imagen: process.env.IMAGES_URL + "trust-rosa.jpg",
                    precio: "$1320"
    },
    {

                    id: "2",
                    nombre: "Jogger Dubai",
                    imagen: process.env.IMAGES_URL + "dubai-colores.jpg",
                    precio: "$1430"
    },
    {
                    id:"3",
                    nombre: "Conjunto Ambar",
                    imagen: process.env.IMAGES_URL + "ambar-colores.jpg",
                    precio: "$2650"
    },
]

router.get('/', (req, res) =>{
    res.json(productos);
});

router.get('/:id', (req,res) =>{
   
        let producto = productos.filter( producto => producto.id == req.params.id);

        if (producto.length == 1){
            producto = producto[0];}

        res.json(producto);


    
})

module.exports = router;