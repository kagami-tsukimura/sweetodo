import { createContext, useCallback, useEffect, useState } from 'react';
import { uuidv7 as uuid } from 'uuidv7';
import { KanbanStatus, KanbanStatuses } from '../types/Kanban';
import { TicketType } from '../types/TicketType';

export type KanbanTickets = Record<KanbanStatus, TicketType[]>;

type MoveTicketFunction = {
  (status: KanbanStatus, ticketId: string, index: number): void;
  (status: KanbanStatus, oldIndex: number, newIndex: number): void;
  (status: KanbanStatus, ticketId: string): void;
};

/**
 * カンバンの末尾に移動
 * @param tickets
 * @param status
 * @param ticketId
 * @returns
 */
function moveTicketKanbanTail(
  tickets: KanbanTickets,
  status: KanbanStatus,
  ticketId: string
): KanbanTickets {
  const newTickets = JSON.parse(JSON.stringify(tickets)) as KanbanTickets;

  for (const ks of KanbanStatuses) {
    const index = newTickets[ks].findIndex((ticket) => ticket.id === ticketId);
    if (index !== -1) {
      const [ticket] = newTickets[ks].splice(index, 1);
      newTickets[status].push(ticket);
      break;
    }
  }

  return newTickets;
}

/**
 * カンバンの指定位置にチケットを挿入
 * @param tickets
 * @param status
 * @param ticketId
 * @param insertOrder
 * @returns
 */
function moveTicketAt(
  tickets: KanbanTickets,
  status: KanbanStatus,
  ticketId: string,
  insertOrder: number
): KanbanTickets {
  const newTickets = JSON.parse(JSON.stringify(tickets)) as KanbanTickets;

  for (const ks of KanbanStatuses) {
    const index = newTickets[ks].findIndex((ticket) => ticket.id === ticketId);
    if (index !== -1) {
      const [ticket] = newTickets[ks].splice(index, 1);
      newTickets[status].splice(insertOrder, 0, ticket);
      break;
    }
  }

  return newTickets;
}

/**
 * チケットの並び替え
 * @param tickets
 * @param status
 * @param oldIndex
 * @param newIndex
 * @returns
 */
function replaceTicket(
  tickets: KanbanTickets,
  status: KanbanStatus,
  oldIndex: number,
  newIndex: number
): KanbanTickets {
  const newTickets = JSON.parse(JSON.stringify(tickets)) as KanbanTickets;

  const [ticket] = newTickets[status].splice(oldIndex, 1);
  newTickets[status].splice(newIndex, 0, ticket);

  return newTickets;
}

interface IDataContext {
  tickets: KanbanTickets;
  addTicket: (ticket: string) => void;
  moveTicket: MoveTicketFunction;
  removeTicket: (ticketId: string) => void;
  setTickets: React.Dispatch<React.SetStateAction<KanbanTickets>>;
}

export const DataContext = createContext<IDataContext>(undefined!);

interface Props {
  children: React.ReactNode;
}

const emptyTickets: KanbanTickets = {
  New: [],
  WIP: [],
  Done: [],
};

export default function DataProvider(props: Props) {
  const [tickets, setTickets] = useState<KanbanTickets>(emptyTickets);

  useEffect(() => {
    const savedTickets = localStorage.getItem('tickets');
    if (savedTickets) {
      setTickets(JSON.parse(savedTickets));
    }
  }, []);

  const addTicket = useCallback((ticket: string) => {
    const newTicket: TicketType = {
      id: uuid(),
      title: ticket,
    };

    setTickets((prev) => ({
      ...prev,
      New: [...prev['New'], newTicket],
    }));
  }, []);

  const moveTicket: MoveTicketFunction = useCallback(
    (status: KanbanStatus, arg2: string | number, arg3?: number) => {
      let newTickets: KanbanTickets | undefined = undefined;

      if (typeof arg2 === 'string') {
        if (typeof arg3 === 'number') {
          newTickets = moveTicketAt(tickets, status, arg2, arg3);
        } else {
          newTickets = moveTicketKanbanTail(tickets, status, arg2);
        }
      } else if (typeof arg2 === 'number' && typeof arg3 === 'number') {
        newTickets = replaceTicket(tickets, status, arg2, arg3);
      }

      if (newTickets) {
        setTickets(newTickets);
      }
    },
    [tickets]
  );

  const removeTicket = useCallback(
    (ticketId: string) => {
      const newTickets = JSON.parse(JSON.stringify(tickets)) as KanbanTickets;

      for (const ks of KanbanStatuses) {
        const index = newTickets[ks].findIndex(
          (ticket) => ticket.id === ticketId
        );
        if (index !== -1) {
          newTickets[ks].splice(index, 1);
          break;
        }
      }

      setTickets(newTickets);
    },
    [tickets]
  );

  return (
    <DataContext.Provider
      value={{
        tickets,
        addTicket,
        moveTicket,
        removeTicket,
        setTickets,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
