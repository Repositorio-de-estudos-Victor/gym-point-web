import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1000px;
  margin: 50px auto;

  header {
    display: flex;
    justify-content: space-between;
    align-self: center;
    align-items: center;

    strong {
      font-size: 20px;
    }

    > div {
      display: flex;
      justify-content: center;
      align-items: center;

      button {
        display: flex;
        align-items: center;

        margin: 0 15px 0;
        height: 30px;
        background: #ee4d64;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 12px;
        transition: background 0.2s;
        padding: 5px;

        &:hover {
          background: ${darken(0.04, '#ee4d64')};
        }

        div {
          margin-right: 5px;
        }
      }

      > div {
        span {
          position: absolute;
          margin: 6px 6px 0;
        }

        input {
          border: 1;
          border-color: rgba(0, 0, 0, 0.1);
          border-radius: 4px;
          height: 30px;
          padding: 0 25px;
          color: #000;

          &::placeholder {
            color: rgba(0, 0, 0, 0.2);
          }
        }
      }
    }
  }
`;

export const Table = styled.table`
  background-color: white;
  margin: 20px auto;

  thead {
    font-size: 13px;
    text-align: left;
    padding: 8px;
  }

  tbody {
    align-self: center;
    align-items: center;

    td {
      padding: 0 10px 0;
      text-align: left;
    }

    div {
      padding: 0 10px 0;

      span {
        margin-right: 10px;
      }
    }
  }
`;
