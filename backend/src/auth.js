const auth = function(req, res, next){
    if( req.session.user ){
        next();
    }
    else{
        res.status(401);
        res.send(
            {
                status : 'error',
                messafe : 'No posee los permisos necesarios para ingresar a esta sección',
            }
        )
    }
}
