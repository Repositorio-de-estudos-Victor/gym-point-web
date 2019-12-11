import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

import { Container, Content, Profile } from './styles';

export default function Header() {
  // const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GymPoint" />
          <NavLink to="/students" activeStyle={{ color: '#000' }}>
            ALUNOS
          </NavLink>
          <NavLink to="/plans" activeStyle={{ color: '#000' }}>
            PLANOS
          </NavLink>
          <NavLink to="/registrations" activeStyle={{ color: '#000' }}>
            MATRICULAS
          </NavLink>
          <NavLink to="/help-orders" activeStyle={{ color: '#000' }}>
            PEDIDOS DE AUXÍLIO
          </NavLink>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Victor Novais</strong>
              <Link onClick={handleSignOut} to="/">
                sair do sistema
              </Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
