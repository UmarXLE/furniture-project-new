"use client"
import { styled } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Download from "yet-another-react-lightbox/plugins/download";

export default function ProductCard({ data , setOpen}) {
    
    const [open, setOpenLocal] = React.useState(false);
    
    const handleOpen = () => {
        setOpenLocal(true);
        if (setOpen) {
            setOpen(true);
        }
    };

    return (
        <LightBoxStyled>
            <div className="wrapper-images">
                <Image
                    onClick={handleOpen}
                    src={data?.img}
                    width={300}
                    height={300}
                    layout="responsive"
                    alt="sizes panel image"
                    className="mainImage"
                />
            </div>
            {
                data?.title && <div className="title-product">{data?.title}</div>
            }
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
    border: 1px solid var(--border);
    border-radius: 10px;
    cursor: pointer;

    /* .mainImage {
        cursor: pointer;
        border-bottom: 1px solid var(--border);
        border-radius: 0 0 10px 10px;
    } */

    .title-product {
        padding: 20px 15px;
    }

    .wrapper-images {
        overflow: hidden;
        position: relative;
        border-radius: 10px;
    }

    .wrapper-images img {
        cursor: pointer;
        border-radius: 0 0 10px 10px;
        transition: transform 0.3s ease;
        /* height: 300px !important; */
        width:100%;
        object-fit: contain;
    }

    .wrapper-images img:hover {
        transform: scale(1.1);
    }
`
