import { Paper, PaperProps, Typography } from '@mui/material';
import { forwardRef } from 'react';
import { TicketType as TicketProps } from '../types/TicketType';

type Props = PaperProps & TicketProps;

const Ticket = forwardRef<HTMLDivElement, Props>(
  ({ id, title, sx = {}, ...props }, ref) => {
    return (
      <Paper
        ref={ref}
        variant='outlined'
        sx={{ mb: 1, p: 1, touchAction: 'none', ...sx }}
        {...props}
      >
        <Typography variant='body2'>{title}</Typography>
      </Paper>
    );
  }
);

export default Ticket;
