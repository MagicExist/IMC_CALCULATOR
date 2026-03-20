# BMI Calculator

![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=flat&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![MVP Architecture](https://img.shields.io/badge/Architecture-MVP-blueviolet?style=flat)

Application built with Expo and React Native to calculate Body Mass Index (BMI) from the user's weight and height.

Version en espanol: [README.md](./README.md)

## Overview

The app allows users to:

- enter weight in kilograms
- enter height in meters
- calculate BMI with the formula `weight / height^2`
- display the matching BMI category
- validate invalid input before calculation

## Validation rules

The application handles these cases:

- fields cannot be empty
- only valid numeric values are accepted
- negative values are not allowed
- weight and height must be greater than zero
- height must be entered in meters

Example:

- if the user enters `172` as height, the app shows a message explaining that `1.72` should be used instead

## Project structure

The project follows an MVP architecture:

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

## Layer responsibilities

- `models`: domain entities and validation/calculation logic
- `presenters`: view state and user interaction orchestration
- `views`: UI rendering and event delegation
- `App.tsx`: application composition layer connecting presenter and view

## Technologies

- Expo
- React Native
- TypeScript

## Installation

```bash
npm install
```

## Running the app

```bash
npm run start
```

To run on web:

```bash
npx expo start --web
```

## Available scripts

- `npm run start`
- `npm run android`
- `npm run ios`
- `npm run web`

## Type check

```bash
npx tsc --noEmit
```
