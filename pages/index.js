import Layout from '../components/layout/Layout';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image:'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
        address: 'Calle Falsa 123, Col. Sal si puedes',
        desciption: 'This is a dummuy content for the first meetup'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image:'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
        address: 'Calle Falsa 456, Col. Sal si puedes',
        desciption: 'This is a dummuy content for the second meetup'
    }
];

function HomePage (){
    return (<MeetupList meetups={DUMMY_MEETUPS}></MeetupList> );
};

export default HomePage;