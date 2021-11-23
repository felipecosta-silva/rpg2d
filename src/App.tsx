import { useEffect } from 'react';
import * as S from './App.styles';
import { Character } from './Components/Character';
import { useCharacter } from './hooks/userCharacter'

const App = () => {

  const char = useCharacter('Felipe Costa');

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'KeyA':
      case 'ArrowLeft':
        char.moveLeft();
        break;
      case 'KeyW':
      case 'ArrowUp':
        char.moveUp();
        break;
      case 'KeyD':
      case 'ArrowRight':
        char.moveRight();
        break;
      case 'KeyS':
      case 'ArrowDown':
        char.moveDown();
        break;
    }
  }

  return (
    <S.Container>
      <S.Map>
        <Character
          x={char.x}
          y={char.y}
          side={char.side}
          name={char.name}
        />
      </S.Map>
    </S.Container>
  );
}

export default App;