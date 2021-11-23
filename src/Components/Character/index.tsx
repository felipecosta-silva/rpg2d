import * as S from './styles';
import { CharacterSides } from '../../types/characterSides'

type Props = {
  x: number;
  y: number;
  side: CharacterSides;
  name: string;
}

export const Character = ({ x, y, side, name }: Props) => {

  const size = 30;
  const sides = {
    down: 0,
    left: -30,
    right: -60,
    up: -90
  }

  return (
    <S.Container
      size={size}
      left={x * size}
      top={y * size}
      sidePosition={sides[side] ?? 0}
    >
      <S.NameBox>{name}</S.NameBox>
    </S.Container>
  );
}