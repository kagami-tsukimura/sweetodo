import { useDroppable } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Paper } from '@mui/material';
import { KanbanStatus } from '../types/Kanban';
import { TicketType } from '../types/TicketType';

interface Props {
  status: KanbanStatus;
  items: TicketType[];
  children: React.ReactNode;
}

export default function Kanban(props: Props) {
  const { isOver, setNodeRef } = useDroppable({ id: props.status });

  return (
    <Paper
      ref={setNodeRef}
      variant='outlined'
      sx={{
        p: 2,
        backgroundColor: isOver ? 'grey.300' : undefined,
        flexGrow: 1,
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h2 className='text-lg font-bold border-2 border-black'>
        {props.status}
      </h2>
      <SortableContext
        items={props.items}
        strategy={verticalListSortingStrategy}
      >
        {props.children}
      </SortableContext>
    </Paper>
  );
}
