import type { Votes } from '../../types/votes';
import css from './VoteStats.module.css';

interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

export default function VoteStats(props: VoteStatsProps) {
  const {
    votes: { good, neutral, bad },
    totalVotes,
    positiveRate,
  } = props;

  return (
    <div className={css.container}>
      <p className={css.stat}>
        Good: <strong>{good}</strong>
      </p>
      <p className={css.stat}>
        Neutral: <strong>{neutral}</strong>
      </p>
      <p className={css.stat}>
        Bad: <strong>{bad}</strong>
      </p>
      <p className={css.stat}>
        Total: <strong>{totalVotes}</strong>
      </p>
      <p className={css.stat}>
        Positive: <strong>{positiveRate}%</strong>
      </p>
    </div>
  );
}
