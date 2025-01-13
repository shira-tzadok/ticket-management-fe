import React, {ReactNode, useState} from "react";
import UserTypeSelector from "./userTypeSelector";
import TicketsList from "./ticketsList";
import { Container, Typography, SelectChangeEvent} from "@mui/material";
import SearchBar from "../searchModule/searchComponent";

const TicketsPage: React.FC = () => {
    const [userType, setUserType] = useState<string>("local");
    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleUserTypeChange = (event: SelectChangeEvent<string>, child: ReactNode) => {
        setUserType(event.target.value);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        console.log(searchQuery)
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Tickets
            </Typography>
            <SearchBar onSearchChange={handleSearchChange}  value={searchQuery} />
            <UserTypeSelector userType={userType} onUserTypeChange={handleUserTypeChange} />
            <TicketsList userType={userType} searchQuery={searchQuery} />
        </Container>
    );
};

export default TicketsPage;