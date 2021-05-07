//Funciones---------------------------------------------------------------
const guerreros = []; // arreglo

const eliminarGuerrero = async function(){
    let res = await Swal.fire({
        title : "Desea elimiar este guerrero" + " " + guerreros[this.nro].nombre + " ?",
        showCancelButton : true,
        confirmButtonText : "Si , Eliminar!"
    });
    if(res.isConfirmed){
        guerreros.splice(this.nro , 1)
        cargarTabla();
        Swal.fire("GUERRERO CAÍDO :(");

    }else{
        Swal.fire("GUERRERO RESUCITO :)");
    }
    
};


const cargarTabla = ()=>{
     //1. Seleccionar el tbody para usarlo.
    const tbody = document.querySelector("#table-tbody");
    tbody.innerHTML = ""

    //2. Recorrer el arreglo de waifus
    for(let i = 0 ; i < guerreros.length ; ++i){
        let g = guerreros[i];

        //3. Por cada waifu generar una fila de la tabla (tr)
        let tr = document.createElement("tr");

        //4. Por cada atributo del guerrero generar una celda (td)
        let tdNom   = document.createElement("td");
        tdNom.innerText = g.nombre;
        let tdTipo  = document.createElement("td");
        tdTipo.innerText = g.tipo;
        let tdRango = document.createElement("td");
        tdRango.innerText = g.rango
        let tdVinculo = document.createElement("td");
        
        let boton = document.createElement("button");  // crear elemento
        boton.classList.add("btn" , "btn-danger"); // cambiar elemento
        boton.innerText = "Asesinado por la aparición";
        boton.nro = i ; // agregar propiedad
        
        boton.addEventListener("click" , eliminarGuerrero);

        tdVinculo.appendChild(boton);

        //5. agregar cada celda a la fila nueva
        tr.appendChild(tdNom);
        tr.appendChild(tdTipo);
        tr.appendChild(tdRango);
        tr.appendChild(tdVinculo);
         //6. Agregar la fila al cuerpo de la tabla
         tbody.appendChild(tr);

    }

};


// Programa Principal ----------------------------------------------------
 
document.querySelector("#registrar-btn").addEventListener("click" , ()=>{
   //obtener valor(value) y seleccionar el elmento (querySelector)
    let nombre = document.querySelector("#nombre-txt").value;
    let tipo   = document.querySelector("#tipo-select").value;
    let rango  = document.querySelector("#rango-select").value;
    
     // crear objeto , permite definir muchas propiedades
    let guerrero = {};   
    guerrero.nombre = nombre;   
    guerrero.tipo   = tipo;
    guerrero.rango  = rango;

    //guardar objeto en arreglo
    guerreros.push(guerrero);

    //LLAMAR A LA FUNCIÓN
    cargarTabla();

    //limpiar
    document.querySelector("#nombre-txt").value = "";
    document.querySelector("#tipo-select").value = "orco";
    document.querySelector("#rango-select").value = "guerrero";

    Swal.fire("Exito!","Guerrero Registrado","success");

});