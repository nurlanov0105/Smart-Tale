import { BoardColumn, Heading } from "@/features/user/boardColumn";
import { BoardHeadings } from "@/entities/user/boardCard";
import styles from "./styles.module.scss";

const Board = () => {
   return (
      <div className={styles.board}>
         <div className={styles.board__inner}>
            {BoardHeadings.map((heading: Heading) => (
               <BoardColumn key={heading.id} heading={heading} />
            ))}
         </div>
      </div>
   );
};

export default Board;
