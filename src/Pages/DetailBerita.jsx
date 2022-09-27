import UserLayout from "../Layout/User";
import { kabarPaguyubanRef } from "../firebase/firebase";
import SkeletonLoader from "../Components/Admin/SkeletonLoader/SkeletonLoader";

import { useParams } from "react-router";
import { getDocs } from "firebase/firestore";
import React from "react";

export default function DetailBerita() {
    const { id } = useParams();
    const [news, setNews] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        getDatas();
    }, [])

    const getDatas = () => {
        setIsLoading(true);
        getDocs(kabarPaguyubanRef)
            .then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    setNews(prevState => [...prevState, { ...doc.data(), id: doc.id }])
                })
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            })
    }

    return (
        <UserLayout>
            <div className="min-h-screen py-40 w-full">
                {
                    isLoading ? <SkeletonLoader preset='news' /> :
                    news.map((item, index) => {
                        if (id === item.id)
                            return (
                                <div key={index}>
                                    <h1 className="text-2xl font-bold mb-10">{item.title}</h1>
                                    {/* <p>{item.link}</p> */}
                                    <p dangerouslySetInnerHTML={{__html: item.description}}></p>
                                </div>
                            );
                    })
                }
            </div>
        </UserLayout>
    );
}