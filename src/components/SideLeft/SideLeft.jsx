import { NavInstr } from '../NavInstr/NavInstr';
import { NavKey } from '../NavKey/NavKey';
import { NavSuffix } from '../NavSuffix/NavSuffix';
// import { useChord } from 'context/chordContext';

export const SideLeft = () => {
  return (
    <div className="left">
      <NavInstr />
      <div className="radio-inputs">
        <NavKey />
        <NavSuffix />
      </div>
    </div>
  );
};
