# Auto Archivador

Para una versión en Python, ver [auto-archiver](https://github.com/bellingcat/auto-archiver) de Bellingcat sobre el cual se basa este proyecto.

## Crear Service account en Google

Conectarse o registrarse con la misma cuenta que tiene capacidad de editar o invitar nuevos miembros a un archivo de Google Sheets en:

**[Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts)**

1. **Create Project** para un proyecto nuevo o usar uno que ya tengan creado.

![Paso 1](./docs/Paso_01.png)

2. Nombrar el proyecto con el nombre que quieran.

![Paso 2](./docs/Paso_02.png)

3. Con el proyecto creado, clic en **"+ CREATE SERVICE ACCOUNT"**.

![Paso 3](./docs/Paso_03.png)

4. Darle un nombre al _service account_ y el resto de opciones se pueden dejar con las predeterminadas.

![Paso 4](./docs/Paso_04.png)

5. Copiar el email del service account que es como un usuario en si mismo.

![Paso 5](./docs/Paso_05.png)

6. En el Google Sheets que queremos usar junto a esta aplicación, picar en "Share" y agregar el email del service account a la lista de usuarios con capacidad de editar la tabla. (De la misma forma que invitamos a cualquier usuario a la tabla).

![Paso 6](./docs/Paso_06.png)

7. Volver al service account (desde donde copias el email en el punto 5) y picar en los 3 puntos a la derecha para crear un nuevo Key desde **"Manage keys"**.

![Paso 7](./docs/Paso_07.png)

8. En la nueva ventana picar en **Add Key -> Create new key** y luego seleccionar la opción de JSON. Por último picar en **"Create"** y se va a descargar un archivo `xxxxx.json` en su computador.

![Paso 8](./docs/Paso_08.png)

![Paso 9](./docs/Paso_09.png)

9. Copiar ese archivo a la carpeta `./secretos/`

```sh
./secretos/xxxxx.json
```

10. Cambiar el nombre del archivo `.env.ejemplo` por `.env` y poner el nombre de nuestro archivo `.json`

```sh
SECRETOS="xxxxx.json"
```

### :exclamation: **NO COMPARTIR O SUBIR A GIT ESTE ARCHIVO `xxxxx.json`** :exclamation:
