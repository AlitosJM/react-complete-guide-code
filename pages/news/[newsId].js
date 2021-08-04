//our-damin.com/news/newsId
import { useRouter } from 'next/router';

function detailPage (){
    const router = useRouter();
    const newsId = router.query.newsId;
    return <h1> Detail Page {newsId}</h1>
};

export default detailPage;