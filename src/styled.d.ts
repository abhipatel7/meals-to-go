import 'styled-components';
import { Theme } from './infrastructure/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
