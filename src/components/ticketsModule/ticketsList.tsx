import React, {useCallback, useEffect, useRef, useState} from "react";
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
    const pageRef = useRef(page);

    const fetchTickets = useCallback(async (page: number) => {
        const { data } = await getTickets(page, userType);
        setTickets((prevTickets) => [...prevTickets, ...data.tickets]);
        setHasMore(data.hasMore);
        if (page === 1) {
            setPage(2)
        }
    }, [page, userType]);

    useEffect(() => {
        console.log('************************* ',page)
         fetchTickets(page)
    }, [pageRef]);

    const filteredTickets = tickets.filter(ticket =>
        ticket.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
    );

    console.log('TicketsList rendered', searchQuery, filteredTickets)

    return (
        <InfiniteScroll
            dataLength={filteredTickets.length}
            next={() => setPage(page + 1)}
            hasMore={hasMore}
            loader={<CircularProgress />}
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