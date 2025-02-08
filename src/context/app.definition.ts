import { createContext, useContext } from 'react';
import { AppDefinition } from '../types';
import { APP_DEFINITION_DEFAULTS } from '../constants';

type IAppDefinitionContext = AppDefinition;

export const AppDefinitionContext = createContext<IAppDefinitionContext>(APP_DEFINITION_DEFAULTS);

export const AppDefinitionContextProvider = AppDefinitionContext.Provider;

export const useAppDefinitionContext = () => useContext(AppDefinitionContext);
