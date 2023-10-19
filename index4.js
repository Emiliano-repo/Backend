class Evento{
            nombre
            lugar
            precio
            capacidad
            fecha
participanes[]
constructor(id,{nombre,
            lugar,
            precio,
            capacidad,
            fecha}){
            this.id = id
            this.nombre = nombre
            this.lugar = lugar
            this.precio = precio *=1.15
            this.capacidad = capacidad ??50
            this.fecha = fecha ?? Date.now()
}
}




class TicketManger{
            static idsEventos = 0
            #eventos =[]
            getEventos(){
                        return this.#eventos
            }
            agregarEvento({nombre,
                        lugar,
                        precio,
                        capacidad,
                        fecha,TicketManger.idsEventos}){
            const evento =new Evento({nombre,
                        lugar,
                        precio,
                        capacidad,
                        fecha})

            this.#eventos.push(evento)
            }

agregarUsuario(idEvento,idUsuario){
     const evento = this.#eventos.find(e=> e.id == idEvento)
     if (evento){
            evento.participanes.push(idUsuario)
     }
}
            
}

const tm = new TicketManger()
tm.agregarEvento({
            nombre: 'Mi cumple',
            lugar:'mi ',
            precio:1500
})

console.log(tm.getEventos())
