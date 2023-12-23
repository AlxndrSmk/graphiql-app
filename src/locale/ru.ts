import { LangConstants } from '@/types/types';
import ruHeader from '@/locale/header/ruResource';
import ruWelcome from '@/locale/welcome/ruResource';
import ruFooter from '@/locale/footer/ruResource';
import ruErrors from '@/locale/errors/ruResource';
import ruButton from '@/locale/buttons/ruResource';
import ruAuth from '@/locale/auth/ruResource';

const rusConstants: LangConstants = {
  ...ruHeader,
  ...ruWelcome,
  ...ruFooter,
  ...ruErrors,
  ...ruButton,
  ...ruAuth,
};

export default rusConstants;
