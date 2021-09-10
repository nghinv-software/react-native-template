# Library

## Splash Screen

[react-native-lottie-splash-screen](https://github.com/HwangTaehyun/react-native-lottie-splash-screen)

- Use

```js
SplashScreen.hide();

SplashScreen.show();
```

## Theme

[@nghinv/react-native-design](https://github.com/nghinv-software/react-native-design)

- Use

```js
import { useTheme, ThemeMode } from '@nghinv/react-native-design';

function App() {
  const { theme, themeMode, setThemeMode } = useTheme();
  ...
}
```

## Components

[@nghinv/react-native-design](https://github.com/nghinv-software/react-native-design)

- Use

```js
import {
  Divider,
  Space,
  SizeBox,
  Container,
  NavBar,
  Row,
  Card,
  Text,
  Switch,
  EnvironmentBanner,
  SwipeRow,
  Badge,
  Avatar,
  Button,
  SearchBar,
  ServiceProviderWithTheme,
} from '@nghinv/react-native-design';
```

## Security

[react-native-config](https://github.com/luggit/react-native-config)

- Add variable in file .env in the root project

```js
import Config from "react-native-config";

Config.API_URL; // 'https://myapi.com'
Config.GOOGLE_MAPS_API_KEY; // 'abcdefgh'
```

## Store

[react-native-mmkv](https://github.com/mrousavy/react-native-mmkv)

## Stores

- [mobx](https://mobx.js.org/README.html)
- [mobx-react](https://mobx.js.org/README.html)
- [mobx-react-lite](https://github.com/mobxjs/mobx-react-lite)
- [mobx-state-tree](https://mobx-state-tree.js.org/intro/welcome)

1. Add new store file to src/stores folder

2. Import new store to src/stores/index.ts file

### Follow to add a action

1. Export a action type in redux/types.ts

2. Create a file action in redux/actions folder

3. Create a reducer in redux/reducers folder and import it to redux/reducers/index.ts file

4. Create a file saga in redux/sagas folder (if use saga) and import it to redux/sagas/index.ts

5. Use `useSelect` hook to get data to View

## Languages

Use [react-native-i18n](https://github.com/AlexanderZaytsev/react-native-i18n) library



## GraphQL

- Install graphql server

run `yarn server:install`

- Run server

run `yarn server:start`

- Change GraphQL server uri in .env file

- Write logic query in src/graphql folder

- Connect to screen use `useQuery`

## Navigation

Use [react-navigation](https://reactnavigation.org) version 6

1. Add a Screen name in utils/routes.ts

2. Create a Screens in src/screens

3. Import screens to src/navigator/index.tsx

## Clean Code

Use `eslint` extension

## Git commit

Use hooky to check git commit

Check rule commit in [here](/docs/CONTRIBUTING.md)
