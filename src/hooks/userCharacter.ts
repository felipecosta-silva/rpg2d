import { useState } from 'react';
import { CharacterSides } from '../types/characterSides';
import { mapSpots } from '../data/mapSpots';

export const useCharacter = (nameChar: string) => {
  const [name, setName] = useState(nameChar);
  const [position, setPosition] = useState({ x: 3, y: 5 });
  const [side, setSide] = useState<CharacterSides>('down');


  const moveLeft = () => {
    setPosition(pos => ({
      x: canMove(pos.x - 1, pos.y) ? pos.x - 1 : pos.x,
      y: pos.y
    }));
    setSide('left');
  }
  const moveRight = () => {
    setPosition(pos => ({
      x: canMove(pos.x + 1, pos.y) ? pos.x + 1 : pos.x,
      y: pos.y
    }));
    setSide('right');
  }
  const moveDown = () => {
    setPosition(pos => ({
      x: pos.x,
      y: canMove(pos.x, pos.y + 1) ? pos.y + 1 : pos.y
    }));
    setSide('down');
  }
  const moveUp = () => {
    setPosition(pos => ({
      x: pos.x,
      y: canMove(pos.x, pos.y - 1) ? pos.y - 1 : pos.y
    }));
    setSide('up');
  }

  const canMove = (x: number, y: number) => {
    if (mapSpots[y] !== undefined && mapSpots[y][x] !== undefined) {
      return (mapSpots[y][x] === 1);
    }
    return false;
  }

  return {
    x: position.x,
    y: position.y,
    side,
    moveLeft,
    moveRight,
    moveDown,
    moveUp,
    name
  }
}