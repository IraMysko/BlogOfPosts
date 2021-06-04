import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux';

import { rootReducer } from '../store/store';

export const useTypedSelector: TypedUseSelectorHook<ReturnType<typeof rootReducer>> =
  useReduxSelector;
