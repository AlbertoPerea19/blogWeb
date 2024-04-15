# Proyecto Blog web

Este es un proyecto que consiste en una blog web desarrollada con tecnologías react y nestjs.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos en tu sistema:

- Node.js 
- Docker
- Docker Compose (opcional para ejecución con Docker Compose)

## Opciones para su instalación
- [Configuración Manual](#Manual)
- [Configuración docker-compose](#docker-compose)


## Clonar repo

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/AlbertoPerea19/blogWeb.git
   cd blogWeb
   ```

## Manual

2. Instalación manual (sin Docker Compose):

   ### Backend

   1. Navega al directorio del backend:

      ```bash
      cd backend
      ```

   2. Instala las dependencias:

      ```bash
      npm install
      ```

   3. Copia el archivo de variables de entorno:

      ```bash
      cp .env.example .env
      ```

      - Edita el archivo `.env` y configura las variables de entorno necesarias, especialmente las relacionadas con la base de datos PostgreSQL.

      ```plaintext
      # Configuración de PostgreSQL
      POSTGRES_HOST=postgres
      POSTGRES_PORT=5432
      POSTGRES_USER=usuario
      POSTGRES_PASSWORD=contraseña
      POSTGRES_DB=basededatos
      ```

   4. Si deseas utilizar otro sistema de base de datos, modifica las variables de entorno en el archivo `.env` y ajusta la configuración en el archivo `app.module.ts` para TypeORM.

      ```typescript
      // app.module.ts

      import { Module } from '@nestjs/common';
      import { TypeOrmModule } from '@nestjs/typeorm';
      import { AppController } from './app.controller';
      import { AppService } from './app.service';
      import { UserModule } from './user/user.module';

      @Module({
        imports: [
          TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: parseInt(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            autoLoadEntities: true,
            synchronize: true, // Solo para desarrollo
          }),
          UserModule,
        ],
        controllers: [AppController],
        providers: [AppService],
      })
      export class AppModule {}
      ```

   5. Inicia el servidor backend:

      ```bash
      npm run start
      ```

      El servidor estará disponible en [http://localhost:4000](http://localhost:4000).

   ### Frontend

   1. Navega al directorio del frontend:

      ```bash
      cd ../frontend
      ```

   2. Instala las dependencias:

      ```bash
      npm install
      ```

   3. Inicia la aplicación frontend:

      ```bash
      npm start
      ```

      La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## docker-compose

   1. Copia el archivo de variables de entorno para Docker Compose:

      ```bash
      cp backend/.env .env
      ```

      - Edita el archivo `docker-compose.env` y configura las variables de entorno necesarias, especialmente las relacionadas con la base de datos PostgreSQL.

   2. Ejecuta Docker Compose para construir y ejecutar los contenedores:

      ```bash
      docker-compose --env-file .env up --build
      ```

      La aplicación estará disponible en [http://localhost:3000](http://localhost:3000) para el frontend y [http://localhost:4000](http://localhost:4000) para el backend.

## Detener la aplicación

### Manual (sin Docker Compose)

Para detener la aplicación que se ejecuta manualmente:

1. En cada terminal donde se están ejecutando los servidores (backend y frontend), presiona `Ctrl + C` para detener los procesos.

### Con Docker Compose

Para detener la aplicación que se ejecuta con Docker Compose:

1. En una terminal donde se ejecutó `docker-compose up`, presiona `Ctrl + C` para detener los contenedores.

2. Para eliminar los contenedores y redes creados por Docker Compose, ejecuta:

   ```bash
   docker-compose down
   ```


## Problemas

Si encuentras algún problema o tienes alguna pregunta, por favor crea un issue en este repositorio. Estaremos encantados de ayudarte.

## Creador

Este proyecto fue creado por Rafael Perea. Puedes encontrar más información sobre el creador en su [perfil de GitHub](https://github.com/AlbertoPerea19).
