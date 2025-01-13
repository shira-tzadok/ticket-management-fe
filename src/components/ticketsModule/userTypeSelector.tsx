import React, { ReactNode } from "react";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

interface UserTypeSelectorProps {
    userType: string;
    onUserTypeChange:(event: SelectChangeEvent<string>, child: ReactNode) => void
}

const UserTypeSelector: React.FC<UserTypeSelectorProps> = ({ userType, onUserTypeChange }) => {
    return (
        <div>
            <label htmlFor="userType">Select User Type: </label>
            <Select
                labelId="userType-label"
                id="userType"
                value={userType}
                onChange={onUserTypeChange}
                label="Select User Type"
            >
                <MenuItem value="local">Local</MenuItem>
                <MenuItem value="tourist">Tourist</MenuItem>
            </Select>
        </div>
    );
};

export default UserTypeSelector;

// import React from "react";
// import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
//
// interface UserTypeSelectorProps {
//     userType: string;
//     onUserTypeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
// }

// const UserTypeSelector: React.FC<UserTypeSelectorProps> = ({ userType, onUserTypeChange }) => {
//     return (
//         <FormControl fullWidth variant="outlined" style={{ marginBottom: "20px" }}>
//             <InputLabel id="userType-label">Select User Type</InputLabel>
//             <Select
//                 labelId="userType-label"
//                 id="userType"
//                 value={userType}
//                 onChange={onUserTypeChange}
//                 label="Select User Type"
//             >
//                 <MenuItem value="tourist">Tourist</MenuItem>
//                 <MenuItem value="local">Local</MenuItem>
//             </Select>
//         </FormControl>
//     );
// };
//
// export default UserTypeSelector;