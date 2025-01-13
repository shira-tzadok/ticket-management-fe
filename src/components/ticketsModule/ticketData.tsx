import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import touristPicture from "../../assets/images/tourist.jpg";

interface TicketDataProps {
    ticket: any;
    userType: string;
}

const TicketData: React.FC<TicketDataProps> = ({ ticket, userType }) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: 300, width: 300 }} >
                {userType === "tourist" ? (
                    <>
                        <CardMedia
                            component="img"
                            height="140"
                            image={touristPicture}
                            alt={ticket.title}
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {ticket.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {ticket.description}
                            </Typography>
                        </CardContent>
                    </>
                ) : (
                    <CardContent>
                        <Typography variant="h4" component="div">
                            {ticket.title}
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            {ticket.description}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {ticket.date}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {ticket.location}
                        </Typography>
                    </CardContent>
                )}
            </Card>
        </Grid>
    );
};

export default TicketData;