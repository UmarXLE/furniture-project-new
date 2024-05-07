import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuContent from './MenuContent';
import Image from 'next/image';

export default function MenuDrawer() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => { setOpen(newOpen); };

    return (
        <div >
            <Button onClick={toggleDrawer(true)}>
                <Image
                    src={"/assets/icons/menu.png"}
                    width={30}
                    height={30}
                    alt="menu icon"
                />
            </Button>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <MenuContent close={ toggleDrawer(false)} />
            </Drawer>
        </div>
    );
}


