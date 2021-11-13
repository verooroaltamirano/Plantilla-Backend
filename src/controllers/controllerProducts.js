export const nombreFuncion =(req,res) => {
    
    res.status(200).render('nombre_pagina_hbs')
}
export const verinicio = (req, res) => {
    res.status(200).render('inicio')
}
export const verPrecio = (req, res) => {   
    res.status(200).render('precio')
}

