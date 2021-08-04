//our-damin.com/news
import { Fragment } from "react";
import Link from 'next/link';

function NewsPage (){
    return (
    <Fragment>
          <h1> Hi there!</h1>
          <ul>
              <li>
                  <Link href="/news/this-is-a-link">This is great!!</Link>
                </li>
              <li>anything!!</li>
          </ul>
    </Fragment>
    );
  
};

export default NewsPage;