//EJERCICIO REYES, USO DE -map-

function Actividad1 ({reyes}){
    const url='https://www.html6.es/img/rey_'
    const resultado = reyes.map(e => 
        <div key={e.nombre} className="rey">
            <span className="rojo">{e.nombre.toUpperCase()} </span> 
                ha comido {e.vacasComidas*e.reinado*365} vacas en sus {e.reinado} años de reinado
                <img src={url+e.nombre.toLowerCase()+'.png'} alt=''/> 
        </div>
        )
    return <>
    
    {resultado}
    </>;
}

 
export default Actividad1;