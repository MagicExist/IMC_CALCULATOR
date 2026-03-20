# Calculadora de IMC

![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=flat&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![MVP Architecture](https://img.shields.io/badge/Architecture-MVP-blueviolet?style=flat)

Aplicacion desarrollada con Expo y React Native para calcular el Indice de Masa Corporal (IMC) a partir del peso y la altura del usuario.

English version: [README.en.md](./README.en.md)

## Descripcion

La app permite:

- ingresar peso en kilogramos
- ingresar altura en metros
- calcular el IMC con la formula `peso / altura^2`
- mostrar la categoria correspondiente
- validar entradas invalidas antes del calculo

## Validaciones

La aplicacion contempla estos casos:

- los campos no pueden estar vacios
- solo se aceptan numeros validos
- no se permiten valores negativos
- el peso y la altura deben ser mayores que cero
- la altura debe ingresarse en metros

Ejemplo:

- si el usuario escribe `172` como altura, la app muestra un mensaje indicando que debe escribir `1.72`

## Estructura del proyecto

El proyecto esta organizado con patron MVP:

```text
src/
  models/
    entities/
      ImcCategory.ts
      ImcInput.ts
      ImcResult.ts
    ImcModel.ts
  presenters/
    useImcPresenter.ts
  views/
    ImcCalculatorView.tsx
App.tsx
```

## Responsabilidades por capa

- `models`: contiene las entidades del dominio y la logica de validacion/calculo
- `presenters`: coordina el estado de la vista y los eventos del usuario
- `views`: renderiza la interfaz y delega las acciones al presenter
- `App.tsx`: compone la aplicacion conectando presenter y view

## Tecnologias

- Expo
- React Native
- TypeScript

## Instalacion

```bash
npm install
```

## Ejecucion

```bash
npm run start
```

Para abrir en web:

```bash
npx expo start --web
```

## Scripts disponibles

- `npm run start`
- `npm run android`
- `npm run ios`
- `npm run web`

## Verificacion

Para revisar tipos:

```bash
npx tsc --noEmit
```
