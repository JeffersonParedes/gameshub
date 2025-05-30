<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { JuegosDataService } from '/Users/jeffersonparedespretel/PC02/gameshub/src/app/services/juegos-data.service';
import { Juego } from '/Users/jeffersonparedespretel/PC02/gameshub/src/app/interfaces/juego.interface';
@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html'
=======

  /*
RESPUESTAS PARTE 4.1:
1. ¿En qué archivo se define la interfaz Juego?
   Respuesta: La interfaz Juego se define en el archivo src/app/models/juego.model.ts. 

2. ¿Qué archivo maneja el estado global de los filtros?
   Respuesta: El estado global de los filtros se maneja en el archivo src/app/services/filtro.service.ts.

3. ¿Dónde se configura el HttpClient para la aplicación?
   Respuesta: El HttpClient se configura en el archivo src/app/app.module.ts, donde se importa el módulo HttpClientModule para habilitar 
   las solicitudes HTTP en la aplicación.
*/
/*
RESPUESTAS PARTE 4.2:
1. ¿Por qué este proyecto NO tiene app.module.ts?
   Respuesta:  Este proyecto sí tiene un archivo app.module.ts. Se encuentra en la ruta src/app/app.module.ts. En este archivo se configuran
    los módulos principales de la aplicación, incluyendo la importación de HttpClientModule y la declaración de componentes.

2. ¿Qué ventaja tiene usar BehaviorSubject en el servicio de juegos?
   Respuesta:Usar BehaviorSubject en el servicio de juegos permite mantener y emitir el estado actual de la lista de juegos a todos los componentes suscritos. 
   A diferencia de un Subject regular, un BehaviorSubject siempre emite el último valor almacenado a nuevos suscriptores, lo que garantiza que los componentes 
   reciban la información más reciente al suscribirse. Esto es especialmente útil para reflejar cambios en tiempo real en la interfaz de usuario. 
*/

import { Component, OnInit } from '@angular/core';
import { JuegosDataService } from 'services/juegos-data.service';
import { Juego } from 'models/juego.model';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
>>>>>>> 3d27232baa2fcb5401bf332492f61e562f606e8b
})
export class EstadisticasComponent implements OnInit {
  totalJuegos = 0;
  gratuitos = 0;
  dePago = 0;
  mejorJuego?: Juego;
  promedioPrecios = 0;

  constructor(private juegosService: JuegosDataService) {}

  ngOnInit(): void {
    this.juegosService.obtenerJuegos().subscribe((juegos) => {
      this.totalJuegos = juegos.length;
      this.gratuitos = juegos.filter(j => j.precio === 0).length;
      this.dePago = juegos.filter(j => j.precio > 0).length;

<<<<<<< HEAD
      this.mejorJuego = juegos.reduce((mejor, actual) =>
        actual.rating > mejor.rating ? actual : mejor, juegos[0]);
=======
      this.mejorJuego = juegos.reduce((max, j) =>
        j.rating > max.rating ? j : max, juegos[0]);
>>>>>>> 3d27232baa2fcb5401bf332492f61e562f606e8b

      const juegosDePago = juegos.filter(j => j.precio > 0);
      const suma = juegosDePago.reduce((acc, j) => acc + j.precio, 0);
      this.promedioPrecios = juegosDePago.length ? suma / juegosDePago.length : 0;
    });
  }
<<<<<<< HEAD
}

  /*
RESPUESTAS PARTE 4.1:
1. ¿En qué archivo se define la interfaz Juego?
   Respuesta: La interfaz Juego está definida en el archivo:src/app/models/juego.model.ts.

2. ¿Qué archivo maneja el estado global de los filtros?
   Respuesta: El estado global de los filtros se maneja en el archivo src/app/services/filtro.service.ts.

3. ¿Dónde se configura el HttpClient para la aplicación?
   Respuesta: El HttpClient se configura en el archivo src/app/app.module.ts, donde se importa el módulo HttpClientModule para habilitar 
   las solicitudes HTTP en la aplicación.
*/
/*
RESPUESTAS PARTE 4.2:
1. ¿Por qué este proyecto NO tiene app.module.ts?
   Respuesta:  Este proyecto sí tiene un archivo app.module.ts. Se encuentra en la ruta src/app/app.module.ts. En este archivo se configuran
    los módulos principales de la aplicación, incluyendo la importación de HttpClientModule y la declaración de componentes.

2. ¿Qué ventaja tiene usar BehaviorSubject en el servicio de juegos?
   Respuesta:Usar un BehaviorSubject tiene una ventaja muy importante: siempre mantiene el último valor emitido. Esto quiere decir que cuando un componente se suscribe, no tiene que esperar a que haya un cambio para recibir datos; inmediatamente obtiene el valor actual.
Esto es súper útil para que la interfaz siempre tenga la información más reciente, sin importar cuándo se haya suscrito.

*/

=======
}
>>>>>>> 3d27232baa2fcb5401bf332492f61e562f606e8b
