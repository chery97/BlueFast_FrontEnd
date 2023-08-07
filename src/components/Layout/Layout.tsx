import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import React, {Dispatch, useEffect, useState} from "react";
import PhotoList from "./Main/PhotoList";
import axios from "axios";
import {type} from "os";

export interface PostsProps {
    albumId?: number;
    id?: number;
    title?: string;
    url?: string;
    thumbnailUrl?: string;
}

const Layout = (props: { children: React.ReactNode }) => {
    return (
        <div>
            <Header />
            <main>
                <PhotoList></PhotoList>
            </main>
            <Footer />
        </div>
    )
}

export default Layout