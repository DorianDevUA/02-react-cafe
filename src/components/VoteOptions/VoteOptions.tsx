import { VoteType } from '../../types/votes';
import css from './VoteOptions.module.css';

interface VoteOptionsProps {
  onVote: (type: VoteType) => void; // Функція приймає тип відгука та нічого не повертає
  onReset: () => void; // Функція без аргументів
  canReset: boolean;
}

export default function VoteOptions(props: VoteOptionsProps) {
  const { onVote, onReset, canReset } = props;

  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onVote(VoteType.Good)}>
        Good
      </button>
      <button className={css.button} onClick={() => onVote(VoteType.Neutral)}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onVote(VoteType.Bad)}>
        Bad
      </button>
      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}
