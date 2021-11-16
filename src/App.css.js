import styled from 'styled-components';

export const ToDo = styled.div`
    padding-top: 30px;
    display: flex;
    justify-content: center;
`;

export const Item = styled.input`
    background-color: transparent;
    border: 0;
    margin-left: 10px;
    font-size: 16px;

    &:hover {
        cursor: pointer;
    }
`;
