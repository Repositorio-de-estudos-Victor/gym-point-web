import React from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';

import { Container, Table } from './styles';

export default function Students() {
  return (
    <Container>
      <header>
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
      </header>

      <Table>
        <thead>
          <tr>
            <th>NOME</th>
            <th>E-MAIL</th>
            <th>IDADE</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Victor Novais</td>
            <td>victor96novais@gmail.com</td>
            <td>23</td>
            <div>
              <span>editar</span>
              <span>apagar</span>
            </div>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
