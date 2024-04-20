export const onDragEnd = (result: any, columns: any, setColumns: any) => {
   const { destination, source, draggableId } = result;

   if (!destination) {
      return;
   }

   if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
   }

   const start = columns[source.droppableId];
   const finish = columns[destination.droppableId];

   if (start === finish) {
      const newTaskIds = Array.from(start.items);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
         ...start,
         items: newTaskIds,
      };

      setColumns({
         ...columns,
         [newColumn.id]: newColumn,
      });

      return;
   }

   // Moving from one list to another
   const startTaskIds = Array.from(start.items);
   startTaskIds.splice(source.index, 1);
   const newStart = {
      ...start,
      items: startTaskIds,
   };

   const finishTaskIds = Array.from(finish.items);
   finishTaskIds.splice(destination.index, 0, draggableId);
   const newFinish = {
      ...finish,
      items: finishTaskIds,
   };

   setColumns({
      ...columns,
      [newStart.id]: newStart,
      [newFinish.id]: newFinish,
   });
};
