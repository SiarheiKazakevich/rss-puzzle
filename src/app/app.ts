import { store } from './state/store';


store.subscribe(() => {
  // eslint-disable-next-line no-console
  console.log('STATE UPDATED:', store.getState());
});
// eslint-disable-next-line no-console
console.log('APP STARTED Ha-Ha');



