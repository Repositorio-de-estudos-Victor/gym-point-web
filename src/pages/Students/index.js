import React from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';

import { Container } from './styles';

export default function Students() {
  return (
    <Container>
      <strong>Gerenciador de Alunos</strong>
      <div>
        <button type="button">
          <div>
            <MdAdd size={16} color="#FFF" />
          </div>
          CADASTRAR
        </button>
        <div>
          <span>
            <MdSearch size={16} color="rgba(0, 0, 0, 0.2)" />
          </span>
          <input placeholder="Buscar aluno" />
        </div>
      </div>
    </Container>
  );
}
