import { useState, useRef, useContext } from 'react';

import BurgerButton from '@/components/BurgerButton/BurgerButton';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { StyledMenu, StyledLink } from './BurgerMenu.styled';
import { AuthContextProps, LangContext } from '@/types/types';
import LanguageContext from '@/context/langContext';
import langChecker from '@/utils/langChecker';
import { NextRouter, useRouter } from 'next/router';
import { logout } from '@/firebase/firebaseClient';
import { ROUTES } from '@/constants/routes';
import Link from 'next/link';
import { useAuth } from '@/context/AuthProvider';

const BurgerMenu: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  const { user } = useAuth() as AuthContextProps;
  const context: LangContext = useContext<LangContext>(LanguageContext);
  const Router: NextRouter = useRouter();

  const close = () => setOpen(false);
  const checkedLang = langChecker(Router, context);

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>
      <StyledMenu open={open}>
        {user ? (
          <>
            <Link style={StyledLink} href={`/main?lang=${checkedLang}`}>
              {context.getConstants().mainPageLink}
            </Link>
            <Link
              style={StyledLink}
              onClick={() => {
                close();
                logout();
              }}
              href={ROUTES.WELCOME}
            >
              {context.getConstants().signOut}
            </Link>
          </>
        ) : (
          <>
            <Link
              style={StyledLink}
              onClick={() => close()}
              href={ROUTES.SIGN_IN + `?lang=${checkedLang}`}
            >
              {context.getConstants().signIn}
            </Link>
            <Link
              style={StyledLink}
              onClick={() => close()}
              href={ROUTES.SIGN_UP + `?lang=${checkedLang}`}
            >
              {context.getConstants().signUp}
            </Link>
          </>
        )}
      </StyledMenu>
      <BurgerButton open={open} setOpen={setOpen} />
    </div>
  );
};

export default BurgerMenu;
