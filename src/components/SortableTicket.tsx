import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { SxProps, Theme } from '@mui/material';
import { useMemo } from 'react';
import { TicketType as TicketProps } from '../types/TicketType';
import Ticket from './Ticket';

export default function SortableTicket(props: TicketProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: props.id,
    });

  const style: SxProps<Theme> | undefined = useMemo(() => {
    return {
      transform: CSS.Transform.toString(transform),
      transition,
    };
  }, [transform, transition]);

  return (
    <Ticket
      ref={setNodeRef}
      variant='outlined'
      sx={style}
      {...attributes}
      {...listeners}
      {...props}
    />
  );
}
