# Plantly App 🌱

A plant watering app

## Getting Started

Follow these steps to set up and run the app locally:

### Prerequisites

- Node.js (>=18.x)

### Installation

1. **Clone the repository**

```bash
 git clone https://github.com/yourusername/plantly.git
 cd plantly

```

```bash
  npm install
  npx expo start
```

## Technologies Used

**Expo**: For fast and easy React Native development,<br>
**Expo Router**: For file-based navigation,<br>
**TypeScript**: For type-safe code,<br>
**Zustand**: For lightweight and scalable state management

## Development build

### Generate native project for one or or both platform: 
```bash
npx expo prebuild --platform ios
npx expo prebuild --platform android
```

### Build the native app with:

```bash
npx expo run:ios
# or
npx expo run:android

when rebuilding add --clean
```
