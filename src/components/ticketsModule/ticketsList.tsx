import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getTickets } from "../../server/ticketsApi";
import TicketData from "./ticketData";
import { Grid, CircularProgress, Typography, List, ListItem } from "@mui/material";
interface TicketsListProps {
    userType: string;
    searchQuery: string;
}
const TicketsList: React.FC<TicketsListProps> = ({ userType, searchQuery }) => {
    const [tickets, setTickets] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const fetchTickets = useCallback(async (page: number) => {
        setIsLoading(true);
        const { data } = await getTickets(page, userType);
        setTickets((prevTickets) => [...prevTickets, ...data.tickets]);
        setHasMore(data.hasMore);
        setIsLoading(false);
    }, [page, userType]);

    useEffect(() => {
         fetchTickets(page)
    }, [page]);

    const filteredTickets = useMemo(() =>
        tickets.filter(ticket =>
            ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) || ticket.description.toLowerCase().includes(searchQuery.toLowerCase())
        ), [tickets, searchQuery]
    );

    return (
        <InfiniteScroll
            dataLength={filteredTickets.length}
            next={() => setPage(page + 1)}
            hasMore={hasMore}
            loader={isLoading? <CircularProgress />: null}
        >
            {userType === "local" ? (
                <Grid container spacing={2}>
                    {filteredTickets.length === 0 ? (
                        <Typography >No tickets found</Typography>
                    ) : (
                        filteredTickets.map((ticket) => (
                            <TicketData key={ticket.id} ticket={ticket} userType={userType} />
                        ))
                    )}
                </Grid>
            ) : (
                <List>
                    {filteredTickets.length === 0 ? (
                        <Typography variant="h6">No tickets found</Typography>
                    ) : (
                        filteredTickets.map((ticket) => (
                            <ListItem key={ticket.id}>
                                <TicketData ticket={ticket} userType={userType} />
                            </ListItem>
                        ))
                    )}
                </List>
            )}
    </InfiniteScroll>
    );
};
export default TicketsList;