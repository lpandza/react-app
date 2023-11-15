import { CharacterList } from './components/CharacterList.tsx';
import { Search } from '../../components/Search.tsx';

export function Characters() {
  return (
    <div>
      <Search />
      <CharacterList />
    </div>
  );
}
