import { Fragment, useEffect } from 'react';
import { useParams, Route, useRouteMatch, Link } from 'react-router-dom';

import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';
import LoadingSpinner from '../components/UI/LoadingSpinner';

// const DUMMY_QUOTES = [
//   { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
//   { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
// ];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();
  const {quoteId} = params;
  // const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

  const {sendRequest, status, data:loadedQuote, error} = useHttp(getSingleQuote, true);

  console.log(match);

  useEffect(() => {
    sendRequest(quoteId);
  
}, [sendRequest, quoteId]);


  if (status === 'pending'){
    return(
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );    
  }

  if (error){
    return <p className='centered'>{error}</p>
  }

  if (!loadedQuote.text){
    return <p>No quote found!</p>
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author}/>

      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};
// path={`/quotes/${params.quoteId}/comments`}
export default QuoteDetail;
