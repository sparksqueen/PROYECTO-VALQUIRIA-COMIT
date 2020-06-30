const express = require('express');
const router = express.Router();

router.post('/', (req, res) =>{
      
    if ( req.body.user === 'pepe' && req.body.password === '123456'){
;        req.session.user = 'pepe'
         res.json(
            {
                status: 'ok',
                message: 'sesión iniciada',
                loggedUser: {
                    id: 125,
                    nombre: 'admin',
                }
            }
        )
    }
else{
    res.json({
        status : 'error',
        message : "not valid",
    }

    )

}

})

router.delete('/', (req, res) =>{ 
    req.session.destroy(err =>{
        if (err){
            res.json(
                {
                    status : 'error',
                    message: 'Error al cerrar la sesión'
                }
            )
        }else{
            res.clearCookie('valquiria');
            res.json(
                {
                    status : 'ok',
                    message : 'Sesión cerrada'
                }
            )
        }
    })
})

module.exports = router;