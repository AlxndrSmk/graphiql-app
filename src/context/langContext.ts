import { createContext } from 'react';
import langContextInit from '@/utils/langContextInit';
import { LangContext } from '@/types/types';

const LanguageContext = createContext<LangContext>(langContextInit);

export default LanguageContext;
