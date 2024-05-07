"use client"
import { styled } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Download from "yet-another-react-lightbox/plugins/download";
import Button from "./Button";

export default function LightBox({ data , setOpen}) {
    
    const [open, setOpenLocal] = React.useState(false);
    
    const handleOpen = () => {
        setOpenLocal(true);
        if (setOpen) {
            debugger
            setOpen(true);
        }
    };

    return (
        <LightBoxStyled>
            <div>
                <Image
                    onClick={handleOpen}
                    src={data?.main}
                    width={300}
                    height={300}
                    layout="responsive"
                    alt="sizes panel image"
                    className="mainImage"
                />
            </div>
            <Lightbox
                open={open}
                plugins={[Download]}
                close={() => setOpenLocal(false)}
                slides={data?.additional}
            />
        </LightBoxStyled>
    );
}


const LightBoxStyled = styled("div")`
    .mainImage {
        cursor: pointer;
    }
`