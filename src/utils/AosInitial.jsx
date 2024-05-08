"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AosInitial = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <></>
    );
};

export default AosInitial;