import React from "react";
import SearchInput from "./searchinput"; // Assuming SearchInput is a component
import { MdLocationPin } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { MdAddShoppingCart } from "react-icons/md";
import LocationInput from "./location";
import { IoSearch } from "react-icons/io5";
import SearchIcon from '@mui/icons-material/Search';
import { alpha } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { InputBase } from '@mui/material'; // Changed to InputBase from StyledInputBase
import { FaMicrophone } from "react-icons/fa";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: "5px",
    backgroundColor: alpha(theme.palette.common.white, 1),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '30%',
    },
    height: '35px'
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: "0 2px 0 2px",
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

const Header = () => {
    return (
        <div className="bg-[#429da6]">
            <header className="p-2 grid  grid-2 justify-between items-center">
                {/* Location Pin */}
                <div className="mr-4 flex items-center"> {/* Added items-center to vertically center */}
                    <MdLocationPin size={20} className="me-2 fill-white" />
                    <LocationInput />


                    <div className="relative">
                        <IoMdNotifications size={20} className="me-2 fill-white" />
                        <span
                            className="absolute -top-2 right-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none bg-red-500 text-white rounded-full"
                        >
                            0
                        </span>
                    </div>
                    <div className="relative">
                        <MdAddShoppingCart size={20} className="me-2 fill-white" />
                        <span
                            className="absolute -top-2 right-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none bg-red-500 text-white rounded-full"
                        >
                            0
                        </span>
                    </div>

                </div>
                <div className=" items-center text-center flex ml-4 w-80 mb-1 mt-4">
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <InputBase className="text-sm py-1"
                            placeholder="Search for Products..."
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <FaMicrophone className="fill-white" />
                </div>
            </header>

        </div>
    );
};

export default Header;
