import React, { useState, useEffect } from 'react';

const Myconpteur = () => {

    const [compteur, setCompteur] = useState(0) ;
    const [text, setText] = useState('Heteme') ;
    
    /* cycle de vie de composant */
    useEffect(() => {window.alert('Bienvenue')},[]) ;
    useEffect(() => {window.alert('Update')}, [compteur, text]) ;
    useEffect(() => {return () => window.alert('Vous êtes sorti')},[]) ;
    /* fin cycle de vie */
     
    return (
        <div>
        <button onClick={() =>setCompteur(compteur + 1)}>click</button>
        <input type="number"  value={compteur}/>
        <button onClick={() => setText('MAKOSSO')}>Changez</button>
        <p>{text}</p>
        
        </div>
    )
}

export default Myconpteur