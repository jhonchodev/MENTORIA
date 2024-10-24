# Interfaz base (usuario):

* **Interfaz de usuario:** esta interfaz define un usuario básico con una propiedad `name`. Es una interfaz mínima y específica y se puede extender cuando sea necesario.

* Tanto los componentes ``ClickableUser`` como ``NonClickableUser`` implementan esta interfaz. Se aseguran de proporcionar la propiedad del nombre.

# Interfaz independiente para usuarios que permiten hacer clic:

* La interfaz ``ClickableUser`` extiende la interfaz de ``User``.

* Agrega un nuevo método llamado ``onClick(userId: number)``. Define el comportamiento esperado para manejar los clics del usuario y pasar el ID del usuario.

* Solo el componente ``ClickableUser`` implementa esta interfaz porque solo él tiene la funcionalidad de clic.

El uso de interfaces independientes para diferentes funcionalidades garantiza que cada componente solo implemente los métodos que necesita. Sigue los principios de ISP y otros principios SOLID, lo que promueve un código más modular, fácil de mantener y flexible.
Enviar comentarios
